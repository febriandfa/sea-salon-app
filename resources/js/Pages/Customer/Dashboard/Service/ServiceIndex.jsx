import Subtitle from "@/Components/atoms/Subtitle";
import ServiceCard from "@/Components/molecules/ServiceCard";
import SpecialServiceCard from "@/Components/molecules/SpecialServiceCard";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { usePage } from "@inertiajs/react";

export default function ServiceIndex({ auth }) {
    const { services } = usePage().props;
    console.log(services);

    return (
        <DashboardLayout userLogin={auth.user}>
            <Subtitle>Our Special Services</Subtitle>
            <div className="my-6">
                <div className="grid lg:grid-cols-3 grid-cols-1 w-11/12 mx-auto gap-8">
                    {services.map((service) => (
                        <SpecialServiceCard
                            key={service.id}
                            id={service.id}
                            name={service.name}
                            duration={service.duration}
                            price={service.price}
                            description={service.description}
                            member={service.member_only}
                        />
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
}
