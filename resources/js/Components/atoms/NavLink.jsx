import { Link } from "@inertiajs/react";

export default function NavLink({ link, menu = "", active = false }) {
    return (
        <Link
            as="button"
            href={link}
            className={`hover:text-gold-700 hover:font-semibold hover:border-b-2 border-b-gold-700 ${
                active ? "text-gold-700 font-semibold border-b-2" : ""
            }`}
        >
            {menu}
        </Link>
    );
}
