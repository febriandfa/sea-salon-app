import { useState } from "react";
import NavLink from "../atoms/NavLink";
import NavProfileButton from "../atoms/NavProfileButton";

export default function DashboardNavBar({ menuDatas }) {
    const [open, setOpen] = useState(false);

    const handleOpenMenu = () => {
        setOpen(!open);
    };

    return (
        <nav className="h-20 bg-white w-full fixed top-0">
            <div className="flex lg:justify-end justify-between items-center w-full px-12 h-full my-auto">
                <button onClick={handleOpenMenu} className="lg:hidden block">
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
                <NavProfileButton isDashboard />
            </div>
            {open && (
                <div className="py-4 shadow-lg bg-white px-12">
                    <ul className="flex flex-col gap-4 w-fit mx-auto">
                        {menuDatas.map((menu) => {
                            return (
                                <NavLink
                                    link={menu.link}
                                    menu={menu.menu}
                                    active={menu.active}
                                />
                            );
                        })}
                    </ul>
                </div>
            )}
        </nav>
    );
}
