import AppLogo from "../atoms/AppLogo";
import SidebarMenu from "../molecules/SidebarMenu";

export default function Sidebar({ menuDatas }) {
    return (
        <aside className="w-72 h-screen fixed left-0 bg-white shadow-2xl p-8 flex-col justify-between z-10 lg:flex hidden">
            <AppLogo />
            <SidebarMenu menuDatas={menuDatas} />
            <p className="text-gold-700 font-playfair italic font-semibold text-2xl">
                “Beauty and Elegance Redefined”
            </p>
        </aside>
    );
}
