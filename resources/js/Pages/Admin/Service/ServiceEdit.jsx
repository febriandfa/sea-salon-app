import InputDropdown from "@/Components/atoms/InputDropdown";
import InputText from "@/Components/atoms/InputText";
import InputTextArea from "@/Components/atoms/InputTextArea";
import LabelInput from "@/Components/atoms/LabelInput";
import PrimaryButton from "@/Components/atoms/PrimaryButton";
import Subtitle from "@/Components/atoms/Subtitle";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { useForm, usePage } from "@inertiajs/react";

export default function ServiceEdit({ auth }) {
    const { service } = usePage().props;

    const memberOnlyDatas = [
        { label: "Yes", value: "Y" },
        { label: "No", value: "N" },
    ];

    const { data, setData, post, errors } = useForm({
        _method: "PATCH",
        name: service.name,
        duration: service.duration,
        price: service.price,
        description: service.description,
        member_only: service.member_only,
    });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("service-admin.update", service.id));
    };

    console.log(data);

    const handleDropdownChange = (name) => (value) => {
        setData(name, value);
    };

    return (
        <DashboardLayout userLogin={auth.user}>
            <Subtitle>Add Service</Subtitle>
            <form onSubmit={onSubmit} className="my-6 space-y-3 w-4/5 mx-auto">
                <div className="w-full">
                    <LabelInput text="Service Name" />
                    <InputText
                        name="name"
                        placeholder="Name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                </div>
                <div className="w-full">
                    <LabelInput text="Service Duration" />
                    <InputText
                        name="duration"
                        placeholder="Duration"
                        value={data.duration}
                        onChange={(e) => setData("duration", e.target.value)}
                    />
                </div>
                <div className="w-full">
                    <LabelInput text="Service Price" />
                    <InputText
                        name="price"
                        placeholder="Price"
                        value={data.price}
                        onChange={(e) => setData("price", e.target.value)}
                    />
                </div>
                <div className="w-full">
                    <LabelInput text="Member Only" />
                    {/* <InputDropdown
                        datas={memberOnlyDatas}
                        onChange={handleDropdownChange("member_only")}
                        placeholder="Select Option"
                    /> */}
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
                                    onChange={() =>
                                        setData("member_only", member.value)
                                    }
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
                        onChange={(e) => setData("description", e.target.value)}
                    />
                </div>
                <div className="w-fit mx-auto">
                    <PrimaryButton type="submit" text="Save" />
                </div>
            </form>
        </DashboardLayout>
    );
}
