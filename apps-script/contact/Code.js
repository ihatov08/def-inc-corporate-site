const FORM_ID_PROPERTY = 'CONTACT_FORM_ID';
const CONTACT_SHEET_ID_PROPERTY = 'CONTACT_SHEET_ID';
const CONTACT_NOTIFICATION_EMAIL_PROPERTY = 'CONTACT_NOTIFICATION_EMAIL';

/**
 * Create the contact form once, then reuse it on subsequent runs.
 * Run this function with `clasp run setupContactForm` after authentication.
 */
function setupContactForm() {
  const properties = PropertiesService.getScriptProperties();
  const existingId = properties.getProperty(FORM_ID_PROPERTY);
  const form = existingId ? FormApp.openById(existingId) : createContactForm();

  removeItemByTitle(form, 'ご相談の種類');
  removeItemByTitle(form, '希望する連絡方法');
  removeItemByTitle(form, '個人情報の取り扱い');
  removeItemByTitle(form, 'ご相談の希望時期');
  removeItemByTitle(form, 'ご相談内容');
  ensureTextItem(form, '会社名', true);
  ensureTextItem(form, '電話番号', true);
  moveItemBelow(form, '電話番号', 'メールアドレス');
  properties.setProperty(FORM_ID_PROPERTY, form.getId());
  logFormUrls(form);
  return form.getId();
}

/**
 * Prepare the spreadsheet used by the custom AI employee contact form.
 * Run this once from the Apps Script editor after deploying the web app.
 */
function setupContactEndpoint() {
  const properties = PropertiesService.getScriptProperties();
  let sheetId = properties.getProperty(CONTACT_SHEET_ID_PROPERTY);

  if (!sheetId) {
    const spreadsheet = SpreadsheetApp.create('def合同会社 AI社員お問い合わせ');
    const sheet = spreadsheet.getSheets()[0];
    sheet.setName('お問い合わせ');
    sheet.appendRow(['受信日時', '会社名', 'お名前', 'メールアドレス', '電話番号', 'ページ', '流入元']);
    sheetId = spreadsheet.getId();
    properties.setProperty(CONTACT_SHEET_ID_PROPERTY, sheetId);
  }

  const email = Session.getEffectiveUser().getEmail();
  if (email) properties.setProperty(CONTACT_NOTIFICATION_EMAIL_PROPERTY, email);

  Logger.log(`Spreadsheet URL: https://docs.google.com/spreadsheets/d/${sheetId}/edit`);
  Logger.log(`Notification email: ${properties.getProperty(CONTACT_NOTIFICATION_EMAIL_PROPERTY) || '未設定'}`);
  return sheetId;
}

function doGet() {
  return jsonResponse({ ok: true, service: 'ai-employee-contact' });
}

function doPost(e) {
  const params = (e && e.parameter) || {};
  if (params.website) return jsonResponse({ ok: true });

  const required = ['companyName', 'name', 'email', 'phone'];
  if (required.some((field) => !String(params[field] || '').trim())) {
    return jsonResponse({ ok: false, error: 'required_fields' });
  }

  const properties = PropertiesService.getScriptProperties();
  const sheetId = properties.getProperty(CONTACT_SHEET_ID_PROPERTY) || setupContactEndpoint();
  const sheet = SpreadsheetApp.openById(sheetId).getSheets()[0];
  const values = [
    new Date(),
    String(params.companyName).trim(),
    String(params.name).trim(),
    String(params.email).trim(),
    String(params.phone).trim(),
    String(params.page || '/ai-employee'),
    String(params.utm_source || ''),
  ];
  sheet.appendRow(values);

  const notificationEmail = properties.getProperty(CONTACT_NOTIFICATION_EMAIL_PROPERTY);
  if (notificationEmail) {
    MailApp.sendEmail({
      to: notificationEmail,
      subject: `AI社員のお問い合わせ：${values[1]}`,
      body: [
        'AI社員ページからお問い合わせがありました。',
        '',
        `会社名：${values[1]}`,
        `お名前：${values[2]}`,
        `メールアドレス：${values[3]}`,
        `電話番号：${values[4]}`,
      ].join('\n'),
    });
  }

  return jsonResponse({ ok: true });
}

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}

function createContactForm() {
  const form = FormApp.create('def合同会社 お問い合わせ');
  form.setDescription(
    '開発・AI活用・保守運用などのご相談を承っています。\n' +
      '内容を確認のうえ、担当者よりご連絡いたします。'
  );
  form.setConfirmationMessage('お問い合わせありがとうございます。内容を確認のうえ、担当者よりご連絡いたします。');

  form.addTextItem().setTitle('会社名').setRequired(true);
  form.addTextItem().setTitle('お名前').setRequired(true);
  form.addTextItem().setTitle('メールアドレス').setRequired(true);
  form.addTextItem().setTitle('電話番号').setRequired(true);
  return form;
}

function removeItemByTitle(form, title) {
  form
    .getItems()
    .filter((item) => item.getTitle() === title)
    .forEach((item) => form.deleteItem(item));
}

function ensureTextItem(form, title, required) {
  const existing = form.getItems().find((item) => item.getTitle() === title);
  if (!existing) {
    form.addTextItem().setTitle(title).setRequired(required);
  } else if (existing.getType() === FormApp.ItemType.TEXT) {
    existing.asTextItem().setRequired(required);
  }
}

function moveItemBelow(form, itemTitle, targetTitle) {
  const items = form.getItems();
  const item = items.find((candidate) => candidate.getTitle() === itemTitle);
  const target = items.find((candidate) => candidate.getTitle() === targetTitle);
  if (!item || !target) return;

  const targetIndex = items.indexOf(target);
  form.moveItem(item, targetIndex + 1);
}

function logFormUrls(form) {
  Logger.log(`Form ID: ${form.getId()}`);
  Logger.log(`Edit URL: ${form.getEditUrl()}`);
  Logger.log(`Embed URL: ${form.getPublishedUrl()}?embedded=true`);
}

