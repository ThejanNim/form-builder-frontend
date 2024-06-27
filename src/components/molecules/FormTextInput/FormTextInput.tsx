import { FormControl, FormControlProps } from "@/components/atoms/FormControl";
import { TextInput, TextInputProps } from "@/components/atoms/TextInput";

interface FormTextInputProps extends TextInputProps, FormControlProps {}

export function FormTextInput(props: FormTextInputProps) {
  return (
    <FormControl
      label={props.label}
      forId={props.id}
      errorMessage={props.errorMessage}
    >
      <TextInput id={props.id} />
    </FormControl>
  );
}
