export default function InputTime({
    name = "",
    placeholder = "",
    value,
    min,
    max,
    onChange,
    disabled = false,
}) {
    return (
        <input
            type="time"
            placeholder={placeholder}
            name={name}
            value={value}
            min={min}
            max={max}
            onChange={onChange}
            disabled={disabled}
            className="border-2 border-gray-400 rounded-xl focus:ring-gold-700 focus:border-gold-700 w-full"
        />
    );
}
