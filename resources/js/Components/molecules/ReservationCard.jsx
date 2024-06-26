import { formatDate } from "@/Utils/formatDate";
import Separator from "../atoms/Separator";
import { formatTime } from "@/Utils/formatTime";

export default function ReservationCard({
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
        <div className="bg-white p-3 shadow-lg border border-gold-700 rounded-lg w-4/5 mx-auto space-y-3">
            <div className="flex lg:flex-row flex-col lg:items-center justify-between">
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
    );
}
