import { formatTime } from "@/Utils/formatTime";
import Label from "../atoms/Label";
import PrimaryLink from "../atoms/PrimaryLink";
import DeleteButton from "../atoms/DeleteButton";
import ActionButton from "./ActionButton";

export default function ContactListCard({ id, name, phone }) {
    return (
        <div className="flex items-center lg:gap-3 gap-1">
            <div className="bg-white p-2 shadow-lg border border-gold-700 rounded-lg w-full mx-auto">
                <p>
                    <Label text="Name" /> {name}
                </p>
                <p>
                    <Label text="phone" /> {phone}
                </p>
            </div>
            <ActionButton
                editLink={route("contact-admin.edit", id)}
                deleteLink={route("contact-admin.destroy", id)}
            />
        </div>
    );
}
