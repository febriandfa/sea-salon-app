import { formatTime } from "@/Utils/formatTime";
import Label from "../atoms/Label";
import PrimaryLink from "../atoms/PrimaryLink";
import DeleteButton from "../atoms/DeleteButton";
import ActionButton from "./ActionButton";

export default function BranchListCard({
    id,
    name,
    location,
    openHour,
    closeHour,
}) {
    return (
        <div className="flex items-center lg:gap-3 gap-1">
            <div className="bg-white p-2 shadow-lg border border-gold-700 rounded-lg w-full mx-auto">
                <p>
                    <Label text="Name" /> {name}
                </p>
                <p>
                    <Label text="Open Hour" /> {formatTime(openHour)}
                </p>
                <p>
                    <Label text="Close Hour" />
                    {formatTime(closeHour)}
                </p>
                <p>
                    <Label text="location" /> {location}
                </p>
            </div>
            <ActionButton
                showLink={route("branch-admin.show", id)}
                editLink={route("branch-admin.edit", id)}
                deleteLink={route("branch-admin.destroy", id)}
            />
        </div>
    );
}
