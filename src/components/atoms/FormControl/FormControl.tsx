export interface FormControlProps {
  label: string;
  forId?: string;
  children?: React.ReactNode;
  errorMessage?: string;
}

export function FormControl(props: Readonly<FormControlProps>) {
  return (
    <div>
      <label htmlFor={props.forId} className="block mb-2 text-sm font-bold">
        {props.label}
      </label>
      {props.children}
      {props.errorMessage && (
        <span className="mt-[5px] text-xs leading-[15px] text-[#b20110]">
          {props.errorMessage}
        </span>
      )}
    </div>
  );
}
