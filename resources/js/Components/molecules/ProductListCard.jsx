import { formatTime } from "@/Utils/formatTime";
import Label from "../atoms/Label";
import ActionButton from "./ActionButton";

export default function ProductListCard({ id, name, price, description }) {
    return (
        <div className="flex items-center lg:gap-3 gap-1">
            <div className="bg-white p-2 shadow-lg border border-gold-700 rounded-lg w-full mx-auto">
                <p>
                    <Label text="Name" /> {name}
                </p>
                <p>
                    <Label text="Price" /> {price}
                </p>
                <p>
                    <Label text="Description" />
                    <p className="line-clamp-1">{description}</p>
                </p>
            </div>
            <ActionButton
                showLink={route("product-admin.show", id)}
                editLink={route("product-admin.edit", id)}
                deleteLink={route("product-admin.destroy", id)}
            />
        </div>
    );
}
