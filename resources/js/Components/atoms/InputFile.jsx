export default function InputFile({
    name = "",
    placeholder = "",
    onChange,
    ref,
    disabled = false,
}) {
    return (
        <input
            type="file"
            placeholder={placeholder}
            name={name}
            onChange={onChange}
            disabled={disabled}
            ref={ref}
            className="border-2 border-gray-400 py-1.5 px-4 rounded-xl focus:ring-gold-700 focus:border-gold-700 w-full"
        />
    );
}
