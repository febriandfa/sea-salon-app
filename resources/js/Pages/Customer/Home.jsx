import LandingLayout from "@/Layouts/LandingLayout";

export default function Home({ auth }) {
    return (
        <LandingLayout userLogin={auth.user}>
            <article className="min-h-screen"></article>
        </LandingLayout>
    );
}
