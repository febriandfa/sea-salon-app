import Subtitle from "@/Components/atoms/Subtitle";
import DashboardLayout from "@/Layouts/DashboardLayout";

export default function ReservationIndex({ auth }) {
    return (
        <DashboardLayout userLogin={auth.user}>
            <Subtitle>Reservations</Subtitle>
            <div className="my-6"></div>
        </DashboardLayout>
    );
}
