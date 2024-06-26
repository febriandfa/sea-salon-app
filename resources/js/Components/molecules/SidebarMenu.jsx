import { usePage } from "@inertiajs/react";
import Separator from "../atoms/Separator";
import SidebarLink from "../atoms/SidebarLink";

export default function SidebarMenu({ menuDatas }) {
    return (
        <>
            <Separator />
            <ul className="flex flex-col gap-5 overflow-y-auto h-72">
                {menuDatas.map((sideData) => {
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
