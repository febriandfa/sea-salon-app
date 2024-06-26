import PrimaryLink from "@/Components/atoms/PrimaryLink";
import Subtitle from "@/Components/atoms/Subtitle";
import ContactListCard from "@/Components/molecules/ContactListCard";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { usePage } from "@inertiajs/react";

export default function ContactIndex({ auth }) {
    const { contacts } = usePage().props;

    return (
        <DashboardLayout userLogin={auth.user}>
            <Subtitle>Contacts</Subtitle>
            {contacts.length != 2 && (
                <div className="mt-6 flex justify-center">
                    <PrimaryLink
                        link={route("contact-admin.create")}
                        text="Add Contact"
                    />
                </div>
            )}
            <div className="my-6 space-y-3 w-4/5 mx-auto">
                {contacts.map((contact) => {
                    return (
                        <ContactListCard
                            id={contact.id}
                            name={contact.name}
                            phone={contact.phone_number}
                        />
                    );
                })}
            </div>
        </DashboardLayout>
    );
}
