import InputDate from "@/Components/atoms/InputDate";
import InputText from "@/Components/atoms/InputText";
import InputTime from "@/Components/atoms/InputTime";
import PrimaryButton from "@/Components/atoms/PrimaryButton";
import Subtitle from "@/Components/atoms/Subtitle";
import BranchCard from "@/Components/molecules/BranchCard";
import ServiceCard from "@/Components/molecules/ServiceCard";
import SpecialServiceCard from "@/Components/molecules/SpecialServiceCard";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import Swal from "sweetalert2";

export default function ServiceShow({ auth }) {
    const { service, branchServices } = usePage().props;

    const [openBranchId, setOpenBranchId] = useState(null);

    const { data, setData, post, errors } = useForm({
        name: auth.user.name,
        phone_number: auth.user.phone_number,
        service_id: service.id,
        branch_id: "",
        date: "",
        time: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("reservation.store"), {
            data,
            onSuccess: () => {
                window.location.href = route("reservation.download", [
                    data.name,
                    data.phone_number,
                    data.service_id,
                    data.branch_id,
                    data.date,
                    data.time,
                ]);
                setData({ date: "", time: "" });
            },
        });
        Swal.fire({
            icon: "success",
            title: "Success!",
            showConfirmButton: false,
            timer: 1000,
        });
    };

    const handleOnClick = (branchId) => {
        setOpenBranchId(openBranchId === branchId ? null : branchId);
        setData("branch_id", branchId);
    };

    return (
        <DashboardLayout userLogin={auth.user}>
            <Subtitle>
                Make Reservation <br />
                {service.name}
            </Subtitle>
            <div className="my-6">
                <div className="my-16 w-4/5 mx-auto space-y-6">
                    {branchServices.map((branchService) => (
                        <BranchCard
                            key={branchService.id}
                            name={branchService.branches.name}
                            location={branchService.branches.location}
                            openTime={branchService.branches.open_time}
                            closeTime={branchService.branches.close_time}
                            member={branchService.services.member_only}
                            userLogin={auth.user}
                            isOpen={openBranchId === branchService.branches.id}
                            handleOnClick={() =>
                                handleOnClick(branchService.branch_id)
                            }
                        >
                            <form onSubmit={onSubmit} className="space-y-4">
                                <div className="w-full">
                                    <p className="font-playfair italic text-xl text-center">
                                        What Is Your Name?
                                    </p>
                                    <InputText
                                        name="name"
                                        placeholder="Name"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                    />
                                </div>
                                <div className="w-full">
                                    <p className="font-playfair italic text-xl text-center">
                                        What Is Your Phone Number?
                                    </p>
                                    <InputText
                                        name="phone_number"
                                        placeholder="Phone Number"
                                        value={data.phone_number}
                                        onChange={(e) =>
                                            setData(
                                                "phone_number",
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                                <div className="w-full">
                                    <p className="font-playfair italic text-xl text-center">
                                        When Will You Come?
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <InputDate
                                            name="date"
                                            placeholder="Date"
                                            value={data.date}
                                            onChange={(e) =>
                                                setData("date", e.target.value)
                                            }
                                        />
                                        <InputTime
                                            name="time"
                                            placeholder="Time"
                                            min={
                                                branchService.branches.open_time
                                            }
                                            max={
                                                branchService.branches
                                                    .close_time
                                            }
                                            value={data.time}
                                            onChange={(e) =>
                                                setData("time", e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="w-fit mx-auto">
                                    <PrimaryButton type="submit" text="Send" />
                                </div>
                            </form>
                        </BranchCard>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
}
