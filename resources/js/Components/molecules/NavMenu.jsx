import { usePage } from "@inertiajs/react";
import NavLink from "../atoms/NavLink";

export default function NavMenu() {
    const { url } = usePage();

    const navMenus = [
        {
            link: route("home"),
            menu: "Home",
            active: url === "/",
        },
        {
            link: route("service"),
            menu: "Our Service",
            active: url.startsWith("/service"),
        },
        {
            link: route("product"),
            menu: "Our Product",
            active: url.startsWith("/product"),
        },
        {
            link: route("review"),
            menu: "Review",
            active: url.startsWith("/review"),
        },
    ];

    return (
        <ul className="flex items-center gap-6">
            {navMenus.map((navMenu) => {
                return (
                    <NavLink
                        link={navMenu.link}
                        menu={navMenu.menu}
                        active={navMenu.active}
                    />
                );
            })}
        </ul>
    );
}
