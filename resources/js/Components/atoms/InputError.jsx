export default function InputError({ message, className = "", ...props }) {
    return message ? (
        <p
            {...props}
            className={"text-sm text-red-600 capitalize " + className}
        >
            {message}
        </p>
    ) : null;
}
