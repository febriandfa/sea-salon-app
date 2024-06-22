import React, { useState } from "react";
import InputDate from "@/Components/atoms/InputDate";
import InputText from "@/Components/atoms/InputText";
import InputTime from "@/Components/atoms/InputTime";
import PrimaryButton from "@/Components/atoms/PrimaryButton";
import Subtitle from "@/Components/atoms/Subtitle";
import Title from "@/Components/atoms/Title";
import BranchCard from "@/Components/molecules/BranchCard";
import LandingLayout from "@/Layouts/LandingLayout";
import { router, useForm, usePage } from "@inertiajs/react";

export default function Reservation({ auth }) {
    const { contacts, service, branchServices } = usePage().props;

    const [openBranchId, setOpenBranchId] = useState(null);

    const { data, setData, post, errors } = useForm({
        name: "",
        phone_number: "",
        service_id: service.id,
        branch_id: "",
        date: "",
        time: "",
    });

    console.log(data.branch_id);

    const onSubmit = (e) => {
        e.preventDefault();
        const response = post(route("reservation.store"), {
            data,
            onSuccess: () => {
                setData({ name: "", phone_number: "", date: "", time: "" });
            },
        });
        const { pdfPath } = response.data;

        window.location.href = pdfPath;
    };

    const handleOnClick = (branchId) => {
        if (service.member_only === "Y" && !auth.user) {
            router.get(route("register"));
        } else {
            setOpenBranchId(openBranchId === branchId ? null : branchId);
            setData("branch_id", branchId);
        }
    };

    return (
        <LandingLayout userLogin={auth.user} contactDatas={contacts}>
            <article className="h-80 overflow-hidden px-12">
                <div className="w-full h-80 bg-cover bg-[url('/assets/background-4.jpg')] bg-top absolute left-0">
                    <div className="w-full h-80 bg-gold-700 absolute bg-opacity-60 flex flex-col justify-center">
                        <Title title={service.name} />
                        <p className="w-3/5 text-center italic text-white text-2xl mx-auto">
                            {service.description}
                        </p>
                    </div>
                </div>
            </article>
            <article className="min-screen mt-12">
                <Subtitle>Available at These Locations~</Subtitle>
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
            </article>
        </LandingLayout>
    );
}
