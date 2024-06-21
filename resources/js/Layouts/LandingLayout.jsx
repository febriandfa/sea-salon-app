import NavBar from "@/Components/organisms/NavBar";

export default function LandingLayout({ children, userLogin }) {
    return (
        <main>
            <NavBar userLogin={userLogin} />
            <section className="px-10 pt-24 space-y-12">{children}</section>
            <footer className="bg-blue-500 h-10 flex items-center justify-center mt-12">
                <p>Copyright @ SEASalon 2024</p>
            </footer>
        </main>
    );
}
