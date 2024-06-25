import Subtitle from "@/Components/atoms/Subtitle";
import DashboardLayout from "@/Layouts/DashboardLayout";

export default function BranchIndex({ auth }) {
    return (
        <DashboardLayout userLogin={auth.user}>
            <Subtitle>Branches</Subtitle>
            <div className="my-6"></div>
        </DashboardLayout>
    );
}
