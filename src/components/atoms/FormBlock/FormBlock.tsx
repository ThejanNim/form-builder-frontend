import type { FormBlock as FormBlockType } from "@/assets/data/formTypes";
import TextInput from "../TextInput";
import Checkbox from "../Checkbox";

type FormBlockProps = {
    formBlockConfig: FormBlockType;
}

const FormBlock = (props: FormBlockProps) => {
    switch (props.formBlockConfig.type) {
        case "TextInput":
            return <TextInput />;
        case "Checkbox":
            return <Checkbox />;
        default:
            break;
    }
}

export default FormBlock;
