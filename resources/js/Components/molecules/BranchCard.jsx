import { formatTime } from "@/Utils/formatTime";
import PrimaryButton from "../atoms/PrimaryButton";

export default function BranchCard({
    key,
    name,
    location,
    openTime,
    closeTime,
    isOpen,
    handleOnClick,
    member,
    userLogin,
    children,
}) {
    return (
        <div
            key={key}
            className="bg-white p-4 shadow-lg border border-gold-700 rounded-lg"
        >
            <div className="flex items-center justify-between">
                <div className="space-y-4">
                    <div>
                        <p className="font-playfair italic text-3xl">{name}</p>
                        <p className="w-[30rem]">{location}</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 text-gold-700"
                            viewBox="0 0 256 256"
                        >
                            <path
                                fill="currentColor"
                                d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m64-88a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v48h48a8 8 0 0 1 8 8"
                            />
                        </svg>
                        <p className="font-playfair italic text-xl">
                            {formatTime(openTime)} - {formatTime(closeTime)}
                        </p>
                    </div>
                </div>
                <PrimaryButton
                    text={
                        member === "Y"
                            ? userLogin
                                ? "Reservation"
                                : "Member Only"
                            : "Reservation"
                    }
                    onClick={handleOnClick}
                />
            </div>
            {isOpen && <div className="mt-4 w-96 mx-auto">{children}</div>}
        </div>
    );
}
