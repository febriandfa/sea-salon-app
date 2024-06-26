import DeleteButton from "../atoms/DeleteButton";
import Label from "../atoms/Label";
import PrimaryLink from "../atoms/PrimaryLink";

export default function ServiceListCard({
    id,
    name,
    duration,
    description,
    price,
    member,
}) {
    return (
        <div className="flex items-center gap-3">
            <div className="bg-white p-2 shadow-lg border border-gold-700 rounded-lg w-full mx-auto">
                <p>
                    <Label text="Name" /> {name}
                </p>
                <p>
                    <Label text="Duration" /> {duration} Minute/Session
                </p>
                <p>
                    <Label text="Price" /> Rp {price}
                </p>
                <p>
                    <Label text="Member Only" />
                    {member == "Y" ? "Yes" : "No"}
                </p>
                <p>
                    <Label text="Description" />{" "}
                    <span className="line-clamp-1">{description}</span>
                </p>
            </div>
            <div className="bg-white p-2 shadow-lg border border-gold-700 rounded-lg w-fit mx-auto flex flex-col justify-evenly gap-3">
                <PrimaryLink
                    link={route("service-admin.show", id)}
                    text="Show"
                />
                <PrimaryLink
                    link={route("service-admin.edit", id)}
                    text="Edit"
                />
                <DeleteButton link={route("service-admin.destroy", id)} />
            </div>
        </div>
    );
}
