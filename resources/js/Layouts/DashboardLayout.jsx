import AppLogo from "@/Components/atoms/AppLogo";
import NavProfileButton from "@/Components/atoms/NavProfileButton";
import SidebarMenu from "@/Components/molecules/SidebarMenu";
import Sidebar from "@/Components/organisms/Sidebar";

export default function DashboardLayout({ children, userLogin }) {
    return (
        <main>
            <Sidebar userLogin={userLogin} />
            <nav className="h-20 flex justify-end items-center w-full px-12 fixed top-0">
                <NavProfileButton isDashboard />
            </nav>
            <div className="md:pl-72 md:pt-20">
                <section className="p-8 w-full h-full">{children}</section>
            </div>
        </main>
    );
}
