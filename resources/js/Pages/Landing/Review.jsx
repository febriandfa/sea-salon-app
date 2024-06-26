import InputText from "@/Components/atoms/InputText";
import InputTextArea from "@/Components/atoms/InputTextArea";
import LabelInput from "@/Components/atoms/LabelInput";
import PrimaryButton from "@/Components/atoms/PrimaryButton";
import Separator from "@/Components/atoms/Separator";
import StarRating from "@/Components/atoms/StarRating";
import StarRatingInput from "@/Components/atoms/StarRatingInput";
import Subtitle from "@/Components/atoms/Subtitle";
import Title from "@/Components/atoms/Title";
import ReviewCard from "@/Components/molecules/ReviewCard";
import LandingLayout from "@/Layouts/LandingLayout";
import { formatDate } from "@/Utils/formatDate";
import { Link, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Review({ auth }) {
    const { reviews, contacts } = usePage().props;

    const { data, setData, post, errors } = useForm({
        name: "",
        rating: "",
        comment: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("review.store"), {
            data,
            onSuccess: () => {
                setData({ name: "", rating: "", comment: "" });
            },
        });
        Swal.fire({
            icon: "success",
            title: "Success!",
            showConfirmButton: false,
            timer: 1000,
        });
    };

    console.log(reviews);

    return (
        <LandingLayout userLogin={auth.user} contactDatas={contacts}>
            <article className="min-h-screen">
                <Title title="Review From Our Customers~" color="black" />
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
                            <ReviewCard
                                key={review.id}
                                name={review.name}
                                comment={review.comment}
                                rating={review.rating}
                                date={review.created_at}
                            />
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
                <Subtitle>
                    Leave a Review
                    <br />
                    For Us~
                </Subtitle>
                <div className="mt-12 w-3/5">
                    <form onSubmit={onSubmit} className="space-y-4">
                        <div className="w-full">
                            <LabelInput text="Tell Us Your Name" />
                            <InputText
                                name="name"
                                placeholder="Name"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                        </div>
                        <div className="w-full">
                            <LabelInput text="Leave Us a Comment" />
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
                            <LabelInput text="How Would You Rate Us?" />
                            <StarRatingInput
                                rating={data.rating}
                                setRating={(value) => setData("rating", value)}
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
