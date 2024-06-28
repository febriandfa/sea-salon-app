import Separator from "@/Components/atoms/Separator";
import Subtitle from "@/Components/atoms/Subtitle";
import StatCard from "@/Components/molecules/StatCard";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { usePage } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    const { services, branches, products, reservations } = usePage().props;

    return (
        <DashboardLayout userLogin={auth.user}>
            <Subtitle>Dashboard</Subtitle>
            <div className="grid lg:grid-cols-2 grid-cols-1 w-4/5 mx-auto lg:gap-8 gap-4 my-6">
                <StatCard total={services.length} name="Service">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-16 text-gold-700 mx-auto"
                        viewBox="0 0 256 256"
                    >
                        <path
                            fill="currentColor"
                            d="M229.12 142.65a22.43 22.43 0 0 0-19.55-3.88l-4.32 1C227 119.55 238 99.51 238 80c0-25.36-20.39-46-45.46-46A45.51 45.51 0 0 0 156 52a45.51 45.51 0 0 0-36.54-18C94.39 34 74 54.64 74 80c0 11.38 3.63 22.49 11.29 34.36a29.73 29.73 0 0 0-16.56 8.43L45.52 146H16a14 14 0 0 0-14 14v40a14 14 0 0 0 14 14h104a6 6 0 0 0 1.46-.18l64-16a7 7 0 0 0 .89-.3L225.17 181l.33-.15a22.6 22.6 0 0 0 3.62-38.18ZM119.46 46a33.16 33.16 0 0 1 31 20.28a6 6 0 0 0 11.1 0a33.16 33.16 0 0 1 31-20.28C210.68 46 226 61.57 226 80c0 20.24-16.18 43-46.8 65.75l-14.87 3.42A26 26 0 0 0 140 114H99.67C90.36 101.67 86 90.81 86 80c0-18.43 15.32-34 33.46-34M14 200v-40a2 2 0 0 1 2-2h26v44H16a2 2 0 0 1-2-2m206.28-30l-38.2 16.27L119.26 202H54v-47.51l23.21-23.22A17.88 17.88 0 0 1 89.94 126H140a14 14 0 0 1 0 28h-28a6 6 0 0 0 0 12h32a6 6 0 0 0 1.34-.15l67-15.41l.24-.06a10.6 10.6 0 0 1 7.7 19.62"
                        />
                    </svg>
                </StatCard>
                <StatCard total={products.length} name="Product">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-16 text-gold-700 mx-auto"
                        viewBox="0 0 2048 2048"
                    >
                        <path
                            fill="currentColor"
                            d="m960 120l832 416v1040l-832 415l-832-415V536zm625 456L960 264L719 384l621 314zM960 888l238-118l-622-314l-241 120zM256 680v816l640 320v-816zm768 1136l640-320V680l-640 320z"
                        />
                    </svg>
                </StatCard>
                <StatCard total={branches.length} name="Branch">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-16 text-gold-700 mx-auto"
                        viewBox="0 0 48 48"
                    >
                        <path
                            fill="currentColor"
                            d="M12.25 6.5a1.75 1.75 0 0 0-1.75 1.75V41.5H14v-5.25A2.25 2.25 0 0 1 16.25 34h15.5A2.25 2.25 0 0 1 34 36.25v5.25h3.5V23.25a1.75 1.75 0 0 0-1.75-1.75h-5c-.69 0-1.25-.56-1.25-1.25v-12a1.75 1.75 0 0 0-1.75-1.75zm-3 37.5C8.56 44 8 43.44 8 42.75V8.25A4.25 4.25 0 0 1 12.25 4h15.5A4.25 4.25 0 0 1 32 8.25V19h3.75A4.25 4.25 0 0 1 40 23.25v19.5c0 .69-.56 1.25-1.25 1.25zm7.25-2.5h6.25v-5H16.5zm8.75 0h6.25v-5h-6.25zM18 14a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m6-12a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4m10-2a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
                        />
                    </svg>
                </StatCard>
                <StatCard total={reservations.length} name="Reservation">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-16 text-gold-700 mx-auto"
                        viewBox="0 0 256 256"
                    >
                        <path
                            fill="currentColor"
                            d="M232 104a8 8 0 0 0 8-8V64a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v32a8 8 0 0 0 8 8a24 24 0 0 1 0 48a8 8 0 0 0-8 8v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a8 8 0 0 0-8-8a24 24 0 0 1 0-48M32 167.2a40 40 0 0 0 0-78.4V64h56v128H32Zm192 0V192H104V64h120v24.8a40 40 0 0 0 0 78.4"
                        />
                    </svg>
                </StatCard>
            </div>
        </DashboardLayout>
    );
}
