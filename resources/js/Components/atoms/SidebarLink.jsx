import { Link } from "@inertiajs/react";

export default function SidebarLink({ link, menu, icon, active = false }) {
    return (
        <li
            className={`border-2 font-semibold border-gold-700 rounded-lg hover:bg-gold-700 hover:text-white ${
                active ? "bg-gold-700 text-white" : ""
            }`}
        >
            <Link
                as="button"
                href={link}
                className="flex items-center gap-3 w-full py-1.5 px-4"
            >
                {/* System UIcons */}
                {icon}
                {menu}
            </Link>
        </li>
    );
}
