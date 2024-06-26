import Footer from "@/Components/organisms/Footer";
import NavBar from "@/Components/organisms/NavBar";

export default function LandingLayout({ children, userLogin, contactDatas }) {
    return (
        <main>
            <NavBar userLogin={userLogin} />
            <section className="lg:px-10 px-6 pt-24 space-y-12">
                {children}
            </section>
            <Footer contactDatas={contactDatas} />
        </main>
    );
}
