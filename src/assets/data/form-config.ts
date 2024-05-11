import { FormConfig } from './formTypes';

const formConfig: FormConfig = {
    formId: 'form-1',
    formName: 'Form 1',
    blocks: [
        {
            blockId: 'block-1',
            type: 'TextInput',
            isRequired: true,
            placeholder: 'Enter your name',
        },
        {
            blockId: 'block-1',
            type: 'Checkbox',
            isRequired: true,
            placeholder: 'Enter your name',
        },
    ]
};

export default formConfig;
