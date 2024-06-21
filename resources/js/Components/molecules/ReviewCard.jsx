import { formatDate } from "@/Utils/formatDate";
import Separator from "../atoms/Separator";
import StarRating from "../atoms/StarRating";

export default function ReviewCard({ key, name, date, rating, comment }) {
    return (
        <div
            key={key}
            className="bg-white p-3 shadow-lg border border-gold-700 rounded-lg space-y-4"
        >
            <div className="flex items-center justify-between">
                <p className="font-playfair italic text-xl w-36 line-clamp-1">
                    {name}
                </p>
                <p className="text-sm text-gray-500">{formatDate(date)}</p>
            </div>
            <Separator />
            <div className="flex flex-col justify-between h-48">
                <p className="line-clamp-6 italic">{comment}</p>
                <StarRating rating={rating} />
            </div>
        </div>
    );
}
