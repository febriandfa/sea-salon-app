import InputDropdown from "@/Components/atoms/InputDropdown";
import InputText from "@/Components/atoms/InputText";
import InputTextArea from "@/Components/atoms/InputTextArea";
import LabelInput from "@/Components/atoms/LabelInput";
import PrimaryButton from "@/Components/atoms/PrimaryButton";
import Subtitle from "@/Components/atoms/Subtitle";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { useForm, usePage } from "@inertiajs/react";

export default function ServiceShow({ auth }) {
    const { service } = usePage().props;

    const memberOnlyDatas = [
        { label: "Yes", value: "Y" },
        { label: "No", value: "N" },
    ];

    const { data, setData, post, errors } = useForm({
        name: service.name,
        duration: service.duration,
        price: service.price,
        description: service.description,
        member_only: service.member_only,
    });

    return (
        <DashboardLayout userLogin={auth.user}>
            <Subtitle>Service Detail</Subtitle>
            <div className="my-6 space-y-3 lg:w-4/5 w-11/12 mx-auto">
                <div className="w-full">
                    <LabelInput text="Service Name" />
                    <InputText
                        name="name"
                        placeholder="Name"
                        value={data.name}
                        disabled
                    />
                </div>
                <div className="w-full">
                    <LabelInput text="Service Duration" />
                    <InputText
                        name="duration"
                        placeholder="Duration"
                        value={data.duration}
                        disabled
                    />
                </div>
                <div className="w-full">
                    <LabelInput text="Service Price" />
                    <InputText
                        name="price"
                        placeholder="Price"
                        value={data.price}
                        disabled
                    />
                </div>
                <div className="w-full">
                    <LabelInput text="Member Only" />
                    <div className="flex justify-evenly gap-4 border-2 border-gray-400 rounded-xl p-3">
                        {memberOnlyDatas.map((member, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2"
                            >
                                <input
                                    type="checkbox"
                                    id={`member-${index}`}
                                    checked={data.member_only === member.value}
                                    disabled
                                    className="form-checkbox h-5 w-5 text-gold-700 checked:bg-gold-700"
                                />
                                <label htmlFor={`member-${index}`}>
                                    {member.label}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full">
                    <LabelInput text="Service Description" />
                    <InputTextArea
                        name="description"
                        placeholder="Description"
                        value={data.description}
                        disabled
                    />
                </div>
            </div>
        </DashboardLayout>
    );
}
