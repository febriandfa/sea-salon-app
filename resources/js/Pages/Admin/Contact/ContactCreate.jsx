import Subtitle from "@/Components/atoms/Subtitle";
import DashboardLayout from "@/Layouts/DashboardLayout";

export default function ContactCreate({ auth }) {
    return (
        <DashboardLayout userLogin={auth.user}>
            <Subtitle>Add Contact</Subtitle>
            <div className="my-6 space-y-3 w-4/5 mx-auto"></div>
        </DashboardLayout>
    );
}
