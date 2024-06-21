export default function Title({ title, color = "white" }) {
    return (
        <h1
            className={`font-playfair italic text-8xl text-center text-${color}`}
        >
            {title}
        </h1>
    );
}
