import { formatDate } from "@/Utils/formatDate";
import Separator from "../atoms/Separator";
import { formatTime } from "@/Utils/formatTime";
import PrimaryLink from "../atoms/PrimaryLink";
import DeleteButton from "../atoms/DeleteButton";

export default function ReservationListCard({
    name,
    service,
    phone,
    id,
    date,
    time,
    branch,
    location,
}) {
    return (
        <div className="flex items-center gap-3">
            <div className="bg-white p-3 shadow-lg border border-gold-700 rounded-lg w-full mx-auto space-y-3">
                <div className="flex items-center justify-between">
                    <div>
                        <div>
                            <p className="font-playfair italic text-xl text-gold-700">
                                Reservation Id :{" "}
                            </p>
                            <p>{id}</p>
                        </div>
                        <div>
                            <p className="font-playfair italic text-xl text-gold-700">
                                Service :{" "}
                            </p>
                            <p>{service}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="font-playfair italic text-xl text-gold-700">
                                Guest Name :{" "}
                            </p>
                            <p>{name}</p>
                        </div>
                        <div>
                            <p className="font-playfair italic text-xl text-gold-700">
                                Guest Phone Number :{" "}
                            </p>
                            <p>{phone}</p>
                        </div>
                    </div>
                </div>
                <Separator />
                <p className="text-center font-playfair text-xl italic text-gold-700">
                    Reservation Detail
                </p>
                <p className="text-lg text-center">
                    {branch} on {formatDate(date)} {formatTime(time)}
                </p>
                <p className="text-center">{location}</p>
            </div>
            <div className="bg-white p-2 shadow-lg border border-gold-700 rounded-lg w-fit mx-auto flex flex-col justify-evenly gap-3">
                <DeleteButton link={route("reservation-admin.destroy", id)} />
            </div>
        </div>
    );
}
