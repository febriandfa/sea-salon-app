import Subtitle from "@/Components/atoms/Subtitle";
import DashboardLayout from "@/Layouts/DashboardLayout";

export default function ReviewIndex({ auth }) {
    return (
        <DashboardLayout userLogin={auth.user}>
            <Subtitle>Reviews</Subtitle>
            <div className="my-6"></div>
        </DashboardLayout>
    );
}
