import Label from "@/Components/atoms/Label";
import Subtitle from "@/Components/atoms/Subtitle";
import ServiceListCard from "@/Components/molecules/ServiceListCard";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { usePage } from "@inertiajs/react";

export default function ServiceIndex({ auth }) {
    const { services } = usePage().props;

    return (
        <DashboardLayout userLogin={auth.user}>
            <Subtitle>Services</Subtitle>
            <div className="my-6 space-y-3 w-4/5 mx-auto">
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
