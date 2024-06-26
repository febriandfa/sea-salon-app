import { usePage } from "@inertiajs/react";
import NavLink from "../atoms/NavLink";

export default function NavMenu({ menus }) {
    return (
        <ul className="flex items-center gap-12">
            {menus.map((navMenu) => {
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
