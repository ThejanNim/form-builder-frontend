import clsx from "clsx";
import { Root as CheckboxRoot, Indicator as CheckboxIndicator } from '@radix-ui/react-checkbox';
import { CheckIcon } from "@radix-ui/react-icons";

const Checkbox = () => {
    return (
        <CheckboxRoot className={clsx(
            "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        )}>
            <CheckboxIndicator className={clsx("flex items-center justify-center text-current")} >
                <CheckIcon className="h-4 w-4" />
            </CheckboxIndicator>
        </CheckboxRoot>
    );
};

export default Checkbox;
