import { Link } from "@inertiajs/react";

export default function PrimaryLink({
    text = "",
    link,
    disabled = false,
    ...props
}) {
    return (
        <Link
            {...props}
            href={link}
            disabled={disabled}
            className="hover:bg-gold-700 bg-white py-1 px-4 rounded-full hover:text-white text-gold-700 font-semibold border-2 border-gold-700 text-center"
        >
            {text}
        </Link>
    );
}
