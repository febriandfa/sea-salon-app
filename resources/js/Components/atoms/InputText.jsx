export default function InputText({
    name = "",
    placeholder = "",
    value,
    onChange,
}) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            className="border-2 border-gray-400 rounded-xl focus:ring-gold-700 focus:border-gold-700 w-full"
        />
    );
}
