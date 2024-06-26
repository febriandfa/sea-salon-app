export default function Title({ title, color = "white" }) {
    return (
        <h1
            className={`font-playfair italic lg:text-8xl text-5xl text-center text-${color}`}
        >
            {title}
        </h1>
    );
}
