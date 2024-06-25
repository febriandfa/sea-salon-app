import Separator from "@/Components/atoms/Separator";
import Subtitle from "@/Components/atoms/Subtitle";
import ReservationCard from "@/Components/molecules/ReservationCard";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { formatDate } from "@/Utils/formatDate";
import { formatTime } from "@/Utils/formatTime";
import { usePage } from "@inertiajs/react";

export default function ReservationIndex({ auth }) {
    const { reservations, currentReservations } = usePage().props;
    console.log(currentReservations);
    console.log(reservations);

    return (
        <DashboardLayout userLogin={auth.user}>
            <Subtitle>Current Reservation</Subtitle>
            <div className="my-6 space-y-3">
                {currentReservations.length == 0 && (
                    <div className="bg-white p-3 shadow-lg border border-gold-700 rounded-lg space-y-4 w-4/5 mx-auto">
                        <p className="capitalize text-center font-playfair italic text-2xl text-gold-700">
                            You do not have a reservation at this time
                        </p>
                    </div>
                )}
                {currentReservations.map((current) => {
                    return (
                        <ReservationCard
                            id={current.id}
                            name={current.name}
                            phone={current.phone_number}
                            service={current.services.name}
                            branch={current.branches.name}
                            location={current.branches.location}
                            date={current.date}
                            time={current.time}
                        />
                    );
                })}
            </div>
            <Subtitle>Reservation History</Subtitle>
            <div className="my-6 space-y-3">
                {reservations.length == 0 && (
                    <div className="bg-white p-3 shadow-lg border border-gold-700 rounded-lg space-y-4 w-4/5 mx-auto">
                        <p className="capitalize text-center font-playfair italic text-2xl text-gold-700">
                            You do not have a reservation at this time
                        </p>
                    </div>
                )}
                {reservations.map((reservation) => {
                    return (
                        <ReservationCard
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
