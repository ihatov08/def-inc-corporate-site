const FORM_ID_PROPERTY = 'CONTACT_FORM_ID';

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

