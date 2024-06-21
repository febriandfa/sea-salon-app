import InputText from "@/Components/atoms/InputText";
import InputTextArea from "@/Components/atoms/InputTextArea";
import PrimaryButton from "@/Components/atoms/PrimaryButton";
import Separator from "@/Components/atoms/Separator";
import StarRating from "@/Components/atoms/StarRating";
import StarRatingInput from "@/Components/atoms/StarRatingInput";
import LandingLayout from "@/Layouts/LandingLayout";
import { formatDate } from "@/Utils/formatDate";
import { Link, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Review({ auth }) {
    const { reviews } = usePage().props;

    const [rating, setRating] = useState(0);

    const { data, setData, post, errors } = useForm({
        rating: "",
        comment: "",
    });

    console.log(data);

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("review.store"), {
            data,
            onSuccess: () => {
                setData({ rating: 0, comment: "" });
            },
        });
    };

    console.log(reviews);

    return (
        <LandingLayout userLogin={auth.user}>
            <article className="min-h-screen">
                <h1 className="font-playfair italic text-5xl">
                    Review From~
                    <br />
                    Our Customer
                </h1>
                <div className="flex items-center justify-between gap-8 mt-12">
                    <Link
                        as="button"
                        href={reviews.prev_page_url}
                        className="text-gold-700 hover:scale-110"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-12"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="m15 5l-6 7l6 7"
                            />
                        </svg>
                    </Link>
                    <div className="grid grid-cols-3 gap-6 mx-auto">
                        {reviews.data.map((review) => (
                            <div
                                key={review.id}
                                className="bg-white p-3 shadow-lg border border-gold-700 rounded-lg space-y-4"
                            >
                                <div className="flex items-center justify-between">
                                    <p className="font-playfair italic text-xl w-36 line-clamp-1">
                                        {review.users.name}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {formatDate(review.created_at)}
                                    </p>
                                </div>
                                <Separator />
                                <div className="flex flex-col justify-between h-48">
                                    <p className="line-clamp-6">
                                        {review.comment}
                                    </p>
                                    <StarRating rating={review.rating} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <Link
                        as="button"
                        href={reviews.next_page_url}
                        className="text-gold-700 hover:scale-110"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-12"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                fill-rule="evenodd"
                                d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </Link>
                </div>
            </article>
            <article className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="font-playfair italic text-5xl text-center">
                    Leave A Review
                    <br />
                    For Us~
                </h1>
                <div className="mt-12 w-3/5">
                    <form onSubmit={onSubmit} className="space-y-4">
                        <div className="w-fit mx-auto">
                            <p className="font-playfair italic text-xl">
                                How Would You Rate Us?
                            </p>
                            <StarRatingInput
                                rating={data.rating}
                                setRating={(value) => setData("rating", value)}
                            />
                        </div>
                        <div className="w-full">
                            <p className="font-playfair italic text-xl text-center">
                                Leave Us a Coment
                            </p>
                            <InputTextArea
                                name="comment"
                                placeholder="Comment"
                                value={data.comment}
                                onChange={(e) =>
                                    setData("comment", e.target.value)
                                }
                            />
                        </div>
                        <div className="w-fit mx-auto">
                            <PrimaryButton type="submit" text="Send" />
                        </div>
                    </form>
                </div>
            </article>
        </LandingLayout>
    );
}
