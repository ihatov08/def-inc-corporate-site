import Avatar from 'boring-avatars';

interface Props {
  name: string;
  colors: string[];
}

export default function AIEmployeeAvatar({ name, colors }: Props) {
  return <Avatar name={name} variant="beam" colors={colors} size={92} square={false} />;
}
