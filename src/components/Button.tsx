interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled: boolean;

}
export const Button = ({ label, onClick, disabled }: ButtonProps) => {
    return (
        <div>
            <button onClick={ onClick } disabled={ disabled }>{ label }</button>
        </div>
    )
};
