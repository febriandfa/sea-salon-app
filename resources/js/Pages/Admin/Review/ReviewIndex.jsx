import Subtitle from "@/Components/atoms/Subtitle";
import ReviewCard from "@/Components/molecules/ReviewCard";
import ReviewListCard from "@/Components/molecules/ReviewListCard";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { usePage } from "@inertiajs/react";

export default function ReviewIndex({ auth }) {
    const { reviews } = usePage().props;

    return (
        <DashboardLayout userLogin={auth.user}>
            <Subtitle>Reviews</Subtitle>
            <div className="my-6 space-y-3 w-4/5 mx-auto">
                {reviews.map((review) => {
                    return (
                        <ReviewListCard
                            id={review.id}
                            name={review.name}
                            comment={review.comment}
                            rating={review.rating}
                            date={review.created_at}
                        />
                    );
                })}
            </div>
        </DashboardLayout>
    );
}
