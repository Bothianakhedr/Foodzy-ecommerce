type ErrorMsgProps = {
  msg: string | undefined;
};

export function ErrorMessage({ msg }: ErrorMsgProps) {
  return <span className="text-orange-700 font-bold text-[11px]">{msg}</span>;
}
