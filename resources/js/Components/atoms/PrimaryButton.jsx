export default function PrimaryButton({
    type = "button",
    onClick,
    text = "",
    disabled = false,
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className="hover:bg-gold-700 bg-white py-1 px-4 rounded-full hover:text-white text-gold-700 font-semibold border-2 border-gold-700"
        >
            {text}
        </button>
    );
}
