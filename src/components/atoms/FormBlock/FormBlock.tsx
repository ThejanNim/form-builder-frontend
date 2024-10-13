import type { FormBlock as FormBlockType } from "@/assets/data/formTypes";
import Checkbox from "../Checkbox";
import { TextInput } from "../TextInput";

type FormBlockProps = {
  formBlockConfig: FormBlockType;
};

export function FormBlock(props: Readonly<FormBlockProps>) {
  switch (props.formBlockConfig.type) {
    case "TextInput":
      return <TextInput />;
    case "Checkbox":
      return <Checkbox />;
    default:
      break;
  }
}
