import { formatDate } from "@/Utils/formatDate";
import Separator from "../atoms/Separator";
import StarRating from "../atoms/StarRating";
import PrimaryLink from "../atoms/PrimaryLink";
import DeleteButton from "../atoms/DeleteButton";
import ActionButton from "./ActionButton";

export default function ReviewListCard({ id, name, date, rating, comment }) {
    return (
        <div className="flex items-center lg:gap-3 gap-1">
            <div className="bg-white p-3 shadow-lg border border-gold-700 rounded-lg space-y-4 w-full">
                <div className="flex lg:flex-row flex-col lg:items-center justify-between">
                    <p className="font-playfair italic text-xl w-36 line-clamp-1">
                        {name}
                    </p>
                    <p className="text-sm text-gray-500">{formatDate(date)}</p>
                </div>
                <Separator />
                <div className="flex flex-col justify-between h-fit">
                    <p className="line-clamp-6 italic">{comment}</p>
                </div>
                <StarRating rating={rating} />
            </div>
            <ActionButton deleteLink={route("review-admin.destroy", id)} />
        </div>
    );
}
