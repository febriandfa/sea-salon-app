import { formatTime } from "@/Utils/formatTime";
import Label from "../atoms/Label";
import PrimaryLink from "../atoms/PrimaryLink";
import DeleteButton from "../atoms/DeleteButton";

export default function ContactListCard({ id, name, phone }) {
    return (
        <div className="flex items-center gap-3">
            <div className="bg-white p-2 shadow-lg border border-gold-700 rounded-lg w-full mx-auto">
                <p>
                    <Label text="Name" /> {name}
                </p>
                <p>
                    <Label text="phone" /> {phone}
                </p>
            </div>
            <div className="bg-white p-2 shadow-lg border border-gold-700 rounded-lg w-fit mx-auto flex flex-col justify-evenly gap-3">
                <PrimaryLink
                    link={route("contact-admin.edit", id)}
                    text="Edit"
                />
                <DeleteButton link={route("contact-admin.destroy", id)} />
            </div>
        </div>
    );
}
