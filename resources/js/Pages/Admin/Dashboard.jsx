import DashboardLayout from "@/Layouts/DashboardLayout";

export default function Dashboard({ auth }) {
    return (
        <DashboardLayout userLogin={auth.user}>
            <h1>Dashboard</h1>
        </DashboardLayout>
    );
}
