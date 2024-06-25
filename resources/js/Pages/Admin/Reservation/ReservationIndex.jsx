import Subtitle from "@/Components/atoms/Subtitle";

import ReservationListCard from "@/Components/molecules/ReservationListCard";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { usePage } from "@inertiajs/react";

export default function ReservationIndex({ auth }) {
    const { reservations } = usePage().props;

    return (
        <DashboardLayout userLogin={auth.user}>
            <Subtitle>Reservations</Subtitle>
            <div className="my-6 space-y-3 w-11/12 mx-auto">
                {reservations.map((reservation) => {
                    return (
                        <ReservationListCard
                            id={reservation.id}
                            name={reservation.name}
                            phone={reservation.phone_number}
                            service={reservation.services.name}
                            branch={reservation.branches.name}
                            location={reservation.branches.location}
                            date={reservation.date}
                            time={reservation.time}
                        />
                    );
                })}
            </div>
        </DashboardLayout>
    );
}
