import Subtitle from "@/Components/atoms/Subtitle";
import DashboardLayout from "@/Layouts/DashboardLayout";

export default function ContactIndex({ auth }) {
    return (
        <DashboardLayout userLogin={auth.user}>
            <Subtitle>Contacts</Subtitle>
            <div className="my-6"></div>
        </DashboardLayout>
    );
}
