import { Link } from "@inertiajs/react";

export default function AppLogo() {
    return (
        <Link as="button" href={route("home")}>
            <p className="font-playfair italic font-semibold text-4xl leading-5 text-gold-700">
                SEA~
                <br />
                Salon
            </p>
        </Link>
    );
}
