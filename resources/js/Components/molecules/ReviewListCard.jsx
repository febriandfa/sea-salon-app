import { formatDate } from "@/Utils/formatDate";
import Separator from "../atoms/Separator";
import StarRating from "../atoms/StarRating";
import PrimaryLink from "../atoms/PrimaryLink";

export default function ReviewListCard({ id, name, date, rating, comment }) {
    return (
        <div className="flex items-center gap-3">
            <div className="bg-white p-3 shadow-lg border border-gold-700 rounded-lg space-y-4 w-full">
                <div className="flex items-center justify-between">
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
            <div className="bg-white p-2 shadow-lg border border-gold-700 rounded-lg w-fit mx-auto flex flex-col justify-evenly gap-3">
                <PrimaryLink
                    link={route("review-admin.show", id)}
                    text="Show"
                />
                <PrimaryLink
                    link={route("review-admin.edit", id)}
                    text="Edit"
                />
                <PrimaryLink
                    method="DELETE"
                    as="button"
                    link={route("review-admin.destroy", id)}
                    text="Delete"
                />
            </div>
        </div>
    );
}
