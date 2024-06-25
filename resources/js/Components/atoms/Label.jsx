export default function Label({ text = "" }) {
    return (
        <p className="font-playfair italic text-xl text-gold-700 capitalize">
            {text} :
        </p>
    );
}
