import { usePage } from "@inertiajs/react";
import Separator from "../atoms/Separator";
import SidebarLink from "../atoms/SidebarLink";

export default function SidebarMenu({ userLogin }) {
    const { url } = usePage();

    const sideAdminDatas = [
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M13.5 9V4H20v5zM4 12V4h6.5v8zm9.5 8v-8H20v8zM4 20v-5h6.5v5zm1-9h4.5V5H5zm9.5 8H19v-6h-4.5zm0-11H19V5h-4.5zM5 19h4.5v-3H5zm4.5-3"
                    />
                </svg>
            ),
            link: route("dashboard-admin.index"),
            menu: "Dashboard",
            active: url.startsWith("/admin/dashboard-admin"),
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M13.5 9V4H20v5zM4 12V4h6.5v8zm9.5 8v-8H20v8zM4 20v-5h6.5v5zm1-9h4.5V5H5zm9.5 8H19v-6h-4.5zm0-11H19V5h-4.5zM5 19h4.5v-3H5zm4.5-3"
                    />
                </svg>
            ),
            link: route("service-admin.index"),
            menu: "Service",
            active: url.startsWith("/admin/service-admin"),
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M13.5 9V4H20v5zM4 12V4h6.5v8zm9.5 8v-8H20v8zM4 20v-5h6.5v5zm1-9h4.5V5H5zm9.5 8H19v-6h-4.5zm0-11H19V5h-4.5zM5 19h4.5v-3H5zm4.5-3"
                    />
                </svg>
            ),
            link: route("branch-admin.index"),
            menu: "Branch",
            active: url.startsWith("/admin/branch-admin"),
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6"
                    viewBox="0 0 21 21"
                >
                    <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.5 15.5v-10a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2m-7-8h5m-8 0h1m2 3h5m-8 0h1m2 3h5m-8 0h1"
                    />
                </svg>
            ),
            link: route("reservation-admin.index"),
            menu: "Reservation",
            active: "",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M5 7.808v10.577q0 .269.173.442t.443.173h12.769q.269 0 .442-.173t.173-.442V7.808h-4v6.788l-3-1.5l-3 1.5V7.808zM5.616 20q-.672 0-1.144-.472T4 18.385V7.486q0-.292.093-.55t.28-.475l1.558-1.87q.217-.293.543-.442T7.173 4h9.616q.372 0 .708.149t.553.441l1.577 1.91q.187.217.28.485q.093.267.093.56v10.84q0 .67-.472 1.143q-.472.472-1.143.472zM5.38 6.808H18.6L17.27 5.21q-.097-.096-.222-.153T16.788 5H7.192q-.134 0-.26.058t-.22.154zm4.619 1v5.153l2-1l2 1V7.809zm-5 0h14z"
                    />
                </svg>
            ),
            link: "",
            menu: "Product",
            active: "",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="m12 12.167l1.67 1.016q.216.136.434-.022q.217-.159.162-.426l-.443-1.887l1.47-1.263q.21-.187.13-.432t-.354-.27l-1.936-.175l-.76-1.781q-.106-.243-.373-.243t-.373.243l-.76 1.78l-1.936.176q-.273.025-.354.27t.13.432l1.47 1.263l-.442 1.886q-.056.268.161.427t.435.022zM6.077 17l-1.704 1.704q-.379.379-.876.174T3 18.133V4.616q0-.691.463-1.153T4.616 3h14.769q.69 0 1.153.463T21 4.616v10.769q0 .69-.462 1.153T19.385 17zm-.427-1h13.735q.23 0 .423-.192t.192-.423V4.615q0-.23-.192-.423T19.385 4H4.615q-.23 0-.423.192T4 4.615v13.03zM4 16V4z"
                    />
                </svg>
            ),
            link: route("review-admin.index"),
            menu: "Review",
            active: "",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6"
                    viewBox="0 0 256 256"
                >
                    <path
                        fill="currentColor"
                        d="m221.59 160.3l-47.24-21.17a14 14 0 0 0-13.28 1.22a5 5 0 0 0-.56.42l-24.69 21a1.88 1.88 0 0 1-1.68.06c-15.87-7.66-32.31-24-40-39.65a1.91 1.91 0 0 1 0-1.68l21.07-25a6 6 0 0 0 .42-.58a14 14 0 0 0 1.12-13.27L95.73 34.49a14 14 0 0 0-14.56-8.38A54.24 54.24 0 0 0 34 80c0 78.3 63.7 142 142 142a54.25 54.25 0 0 0 53.89-47.17a14 14 0 0 0-8.3-14.53M176 210c-71.68 0-130-58.32-130-130a42.23 42.23 0 0 1 36.67-42h.23a2 2 0 0 1 1.84 1.31l21.1 47.11a2 2 0 0 1 0 1.67l-21.11 25.06a5 5 0 0 0-.43.57a14 14 0 0 0-.91 13.73c8.87 18.16 27.17 36.32 45.53 45.19a14 14 0 0 0 13.77-1c.19-.13.38-.27.56-.42l24.68-21a1.92 1.92 0 0 1 1.6-.1l47.25 21.17a2 2 0 0 1 1.21 2A42.24 42.24 0 0 1 176 210"
                    />
                </svg>
            ),
            link: route("contact-admin.index"),
            menu: "Contact",
            active: "",
        },
    ];

    const sideCustomerDatas = [
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M13.5 9V4H20v5zM4 12V4h6.5v8zm9.5 8v-8H20v8zM4 20v-5h6.5v5zm1-9h4.5V5H5zm9.5 8H19v-6h-4.5zm0-11H19V5h-4.5zM5 19h4.5v-3H5zm4.5-3"
                    />
                </svg>
            ),
            link: route("dashboard-customer.index"),
            menu: "Dashboard",
            active: url.startsWith("/customer/dashboard-customer"),
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6"
                    viewBox="0 0 21 21"
                >
                    <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.5 15.5v-10a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2m-7-8h5m-8 0h1m2 3h5m-8 0h1m2 3h5m-8 0h1"
                    />
                </svg>
            ),
            link: route("reservation-customer.index"),
            menu: "Reservation",
            active: url.startsWith("/customer/reservation-customer"),
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M12 20.212L2.596 8.923L5.308 3.5h13.384l2.712 5.423zM8.817 8.5h6.366l-2-4h-2.366zm2.683 9.56V9.5H4.392zm1 0l7.108-8.56H12.5zm3.792-9.56h3.766l-2-4h-3.766zm-12.35 0h3.766l2-4H5.942z"
                    />
                </svg>
            ),
            link: route("service-customer.index"),
            menu: "Special Service",
            active: url.startsWith("/customer/service-customer"),
        },
    ];

    const sideDatas =
        userLogin.role === "customer" ? sideCustomerDatas : sideAdminDatas;

    return (
        <>
            <Separator />
            <ul className="flex flex-col gap-5 overflow-y-auto h-72">
                {sideDatas.map((sideData) => {
                    return (
                        <SidebarLink
                            icon={sideData.icon}
                            menu={sideData.menu}
                            link={sideData.link}
                            active={sideData.active}
                        />
                    );
                })}
            </ul>
            <Separator />
        </>
    );
}
