import LandingLayout from "@/Layouts/LandingLayout";
import { usePage } from "@inertiajs/react";

export default function Home({ auth }) {
    const { contacts } = usePage().props;

    return (
        <LandingLayout userLogin={auth.user} contactDatas={contacts}>
            <article className="min-h-screen"></article>
        </LandingLayout>
    );
}
