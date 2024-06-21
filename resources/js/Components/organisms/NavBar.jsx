import AppLogo from "../atoms/AppLogo";
import NavAuthMenu from "../molecules/NavAuthMenu";
import NavMenu from "../molecules/NavMenu";

export default function NavBar({ userLogin }) {
    return (
        <nav className="h-20 flex items-center justify-between px-12 fixed top-0 w-screen bg-white z-[9999]">
            <AppLogo />
            <NavMenu />
            <NavAuthMenu userLogin={userLogin} />
        </nav>
    );
}
