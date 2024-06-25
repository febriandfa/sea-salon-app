export default function InputText({
    name = "",
    placeholder = "",
    value,
    onChange,
    disabled = false,
}) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className="border-2 border-gray-400 rounded-xl focus:ring-gold-700 focus:border-gold-700 w-full"
        />
    );
}
