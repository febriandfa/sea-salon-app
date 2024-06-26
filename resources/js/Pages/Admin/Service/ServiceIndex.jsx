import Label from "@/Components/atoms/Label";
import PrimaryLink from "@/Components/atoms/PrimaryLink";
import Subtitle from "@/Components/atoms/Subtitle";
import ServiceListCard from "@/Components/molecules/ServiceListCard";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { usePage } from "@inertiajs/react";

export default function ServiceIndex({ auth }) {
    const { services } = usePage().props;

    return (
        <DashboardLayout userLogin={auth.user}>
            <Subtitle>Services</Subtitle>
            <div className="mt-6 flex justify-center">
                <PrimaryLink
                    link={route("service-admin.create")}
                    text="Add Service"
                />
            </div>
            <div className="my-6 space-y-3 lg:w-4/5 w-full mx-auto">
                {services.map((service) => {
                    return (
                        <ServiceListCard
                            id={service.id}
                            name={service.name}
                            duration={service.duration}
                            description={service.description}
                            price={service.price}
                            member={service.member_only}
                        />
                    );
                })}
            </div>
        </DashboardLayout>
    );
}
