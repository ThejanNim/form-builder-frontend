export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  onMouseDown: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onTouchStart: (event: React.TouchEvent<HTMLButtonElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  handleProps?: any;
  listeners?: any;
}

export const Action = (props: Props) => {
  const { children } = props;

  return (
    <button
      className="flex w-3 p-4 items-center justify-center touch-none border-none rounded outline-none appearance-none bg-transparent cursor-grab"
      tabIndex={0}
      onMouseDown={props.onMouseDown}
      onTouchStart={props.onTouchStart}
      onKeyDown={props.onKeyDown}
    >
      {children}
    </button>
  );
};
