export default function InputTextArea({
    name = "",
    placeholder = "",
    value,
    onChange,
}) {
    return (
        <textarea
            name={name}
            id={name}
            placeholder={placeholder}
            rows={7}
            value={value}
            onChange={onChange}
            className="border-2 border-gray-400 rounded-xl focus:ring-gold-700 focus:border-gold-700 w-full"
        >
            {value}
        </textarea>
    );
}
