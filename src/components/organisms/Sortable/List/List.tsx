export interface Props {
    children: React.ReactNode;
}

export const List = (props: Props) => {
    return (
        <ul
            className="grid auto-rows-max box-border min-w-[350px] gap-[10px] px-5 pt-5 m-[10px] rounded-md min-h-[200px] transition-colors grid-cols-1"
        >
            {props.children}
        </ul>
    );
};
