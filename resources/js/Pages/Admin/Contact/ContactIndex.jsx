import Subtitle from "@/Components/atoms/Subtitle";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { usePage } from "@inertiajs/react";

export default function ContactIndex({ auth }) {
    const { contacts } = usePage().props;

    return (
        <DashboardLayout userLogin={auth.user}>
            <Subtitle>Contacts</Subtitle>
            <div className="my-6 space-y-3 w-4/5 mx-auto">
                {contacts.map((contact) => {
                    return <h1>Contact</h1>;
                })}
            </div>
        </DashboardLayout>
    );
}
