import { formatTime } from "@/Utils/formatTime";
import Label from "../atoms/Label";
import PrimaryLink from "../atoms/PrimaryLink";

export default function BranchListCard({
    id,
    name,
    location,
    openHour,
    closeHour,
}) {
    return (
        <div className="flex items-center gap-3">
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
            <div className="bg-white p-2 shadow-lg border border-gold-700 rounded-lg w-fit mx-auto flex flex-col justify-evenly gap-3">
                <PrimaryLink
                    link={route("branch-admin.show", id)}
                    text="Show"
                />
                <PrimaryLink
                    link={route("branch-admin.edit", id)}
                    text="Edit"
                />
                <PrimaryLink
                    method="DELETE"
                    as="button"
                    link={route("branch-admin.destroy", id)}
                    text="Delete"
                />
            </div>
        </div>
    );
}
