import { useState } from "react";
import NavLink from "./NavLink";
import { Link, router } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function NavProfileButton({ isDashboard = false, userLogin }) {
    const [open, isOpen] = useState(false);

    const handleOpenMenu = () => {
        isOpen(!open);
    };

    const handleOnClick = () => {
        Swal.fire({
            title: "Logout?",
            icon: "warning",
            showCancelButton: true,
            showConfirmButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                router.post(route("logout"));
                Swal.fire({
                    title: "Logged Out!",
                    icon: "success",
                    timer: 1000,
                    showConfirmButton: false,
                });
            }
        });
    };

    return (
        <div className="relative">
            <button
                type="button"
                onClick={handleOpenMenu}
                className="flex items-center hover:text-gold-700"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8"
                    viewBox="0 0 256 256"
                >
                    <path
                        fill="currentColor"
                        d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28M68.87 198.42a68 68 0 0 1 118.26 0a91.8 91.8 0 0 1-118.26 0m124.3-5.55a75.6 75.6 0 0 0-44.51-34a44 44 0 1 0-41.32 0a75.6 75.6 0 0 0-44.51 34a92 92 0 1 1 130.34 0M128 156a36 36 0 1 1 36-36a36 36 0 0 1-36 36"
                    />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m7 10l5 5l5-5"
                    />
                </svg>
            </button>
            {open && (
                <div className="bg-white shadow-lg p-6 absolute -left-12">
                    <ul className="space-y-4">
                        {!isDashboard && (
                            <NavLink
                                link={
                                    userLogin.role === "customer"
                                        ? route("dashboard-customer.index")
                                        : route("dashboard-admin.index")
                                }
                                menu="Dashboard"
                            />
                        )}
                        {isDashboard && (
                            <NavLink link={route("home")} menu="Homepage" />
                        )}
                        <button
                            // as="button"
                            // method="POST"
                            // href={route("logout")}
                            onClick={handleOnClick}
                            className="hover:text-gold-700 hover:font-semibold hover:border-b-2 border-b-gold-700"
                        >
                            Logout
                        </button>
                    </ul>
                </div>
            )}
        </div>
    );
}
