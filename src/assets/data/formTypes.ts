type FormBlockTypes = "TextInput" | "Checkbox";

interface FormBlockBase {
    blockId: string;
    type: FormBlockTypes;
    isRequired: boolean;
}

interface TextInput extends FormBlockBase {
    placeholder: string;
}

interface Checkbox extends FormBlockBase{
    checkboxLabel: string;
}

export type FormBlock = TextInput | Checkbox;

export type FormConfig = {
    formId: string;
    formName: string;
    blocks: FormBlock[];
};
