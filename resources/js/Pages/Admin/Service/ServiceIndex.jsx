import Subtitle from "@/Components/atoms/Subtitle";
import DashboardLayout from "@/Layouts/DashboardLayout";

export default function ServiceIndex({ auth }) {
    return (
        <DashboardLayout userLogin={auth.user}>
            <Subtitle>Services</Subtitle>
            <div className="my-6"></div>
        </DashboardLayout>
    );
}
