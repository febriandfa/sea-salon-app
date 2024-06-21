import LandingLayout from "@/Layouts/LandingLayout";

export default function Product({ auth }) {
    return (
        <LandingLayout userLogin={auth.user}>
            <article className="min-h-screen"></article>
        </LandingLayout>
    );
}
