import { Link } from "@inertiajs/react";

export default function NavAuthLink({ link, menu = "" }) {
    return (
        <li>
            <Link
                as="button"
                href={link}
                className="hover:bg-gold-700 bg-white py-1 px-4 rounded-full hover:text-white text-gold-700 font-semibold border-2 border-gold-700"
            >
                {menu}
            </Link>
        </li>
    );
}
