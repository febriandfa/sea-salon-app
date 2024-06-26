import { useState } from "react";
import AppLogo from "../atoms/AppLogo";
import NavAuthMenu from "../molecules/NavAuthMenu";
import NavMenu from "../molecules/NavMenu";
import { usePage } from "@inertiajs/react";
import NavLink from "../atoms/NavLink";
import PrimaryLink from "../atoms/PrimaryLink";

export default function NavBar({ userLogin }) {
    const { url } = usePage();
    const [open, setOpen] = useState(false);

    const navMenus = [
        {
            link: route("home"),
            menu: "Home",
            active: url === "/",
        },
        {
            link: route("service.index"),
            menu: "Our Service",
            active: url.startsWith("/service"),
        },
        {
            link: route("product"),
            menu: "Our Product",
            active: url.startsWith("/product"),
        },
        {
            link: route("review.index"),
            menu: "Review",
            active: url.startsWith("/review"),
        },
    ];

    const handleOpenMenu = () => {
        setOpen(!open);
    };

    return (
        <>
            <nav className="h-20 lg:flex items-center justify-between px-12 fixed top-0 w-screen bg-white z-[9999] hidden">
                <AppLogo />
                <NavMenu menus={navMenus} />
                <NavAuthMenu userLogin={userLogin} />
            </nav>
            <div className="min-h-20 bg-white z-[9999] fixed top-0 w-screen lg:hidden">
                <div className="px-6 py-4 flex items-center justify-between w-full">
                    <AppLogo />
                    <button onClick={handleOpenMenu}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 text-gold-700"
                            viewBox="0 0 48 48"
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="4"
                                d="M7.95 11.95h32m-32 12h32m-32 12h32"
                            />
                        </svg>
                    </button>
                </div>
                {open && (
                    <div className="px-6 py-4 shadow-lg">
                        <ul className="flex flex-col gap-4 w-fit mx-auto">
                            {navMenus.map((menu) => {
                                return (
                                    <NavLink
                                        link={menu.link}
                                        menu={menu.menu}
                                        active={menu.active}
                                    />
                                );
                            })}
                        </ul>
                        <div className="flex items-center justify-center gap-4 mt-6">
                            {userLogin ? (
                                <PrimaryLink
                                    link={
                                        userLogin.role === "customer"
                                            ? route("dashboard-customer.index")
                                            : route("dashboard-admin.index")
                                    }
                                    text="Dashboard"
                                />
                            ) : (
                                <>
                                    <PrimaryLink
                                        link={route("register")}
                                        text="Register"
                                    />
                                    <PrimaryLink
                                        link={route("login")}
                                        text="Login"
                                    />
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
