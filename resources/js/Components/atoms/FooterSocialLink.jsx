import { Link } from "@inertiajs/react";

export default function FooterSocialLink({ link, children }) {
    return (
        <Link as="button" href={link} className="hover:text-gold-700">
            {children}
        </Link>
    );
}
