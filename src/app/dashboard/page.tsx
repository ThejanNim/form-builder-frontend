'use client';

import formConfig from "@/assets/data/form-config";
import FormBlock from "@/components/atoms/FormBlock";
import { Sortable } from "@/components/organisms/Sortable/Sortable";

export default function Dashboard() {
    return (
        <>
            {formConfig.blocks.map(block => (
                <FormBlock key={block.blockId} formBlockConfig={block} />
            ))}

            {typeof window !== 'undefined' && (<Sortable handle />)}
        </>
    );
}
