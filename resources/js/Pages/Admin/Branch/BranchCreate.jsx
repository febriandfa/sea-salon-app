import InputDropdown from "@/Components/atoms/InputDropdown";
import InputText from "@/Components/atoms/InputText";
import InputTextArea from "@/Components/atoms/InputTextArea";
import InputTime from "@/Components/atoms/InputTime";
import LabelInput from "@/Components/atoms/LabelInput";
import PrimaryButton from "@/Components/atoms/PrimaryButton";
import Subtitle from "@/Components/atoms/Subtitle";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { useForm, usePage } from "@inertiajs/react";

export default function BranchCreate({ auth }) {
    const { services } = usePage().props;

    const { data, setData, post, errors } = useForm({
        name: "",
        location: "",
        open_time: "",
        close_time: "",
        availableServices: [],
    });

    console.log(data);

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("branch-admin.store"), {
            data,
            onSuccess: () => {
                setData({
                    name: "",
                    location: "",
                    open_time: "",
                    close_time: "",
                    availableServices: [],
                });
            },
        });
    };

    const handleCheckboxChange = (serviceId) => {
        let checkedValue;
        if (data.availableServices.includes(serviceId)) {
            checkedValue = data.availableServices.filter(
                (id) => id !== serviceId
            );
        } else {
            checkedValue = [...data.availableServices, serviceId];
        }
        setData("availableServices", checkedValue);
    };

    return (
        <DashboardLayout userLogin={auth.user}>
            <Subtitle>Add Branch</Subtitle>
            <form onSubmit={onSubmit} className="my-6 space-y-3 w-4/5 mx-auto">
                <div className="w-full">
                    <LabelInput text="Branch Name" />
                    <InputText
                        name="name"
                        placeholder="Name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                </div>
                <div className="w-full flex gap-3">
                    <div className="w-full">
                        <LabelInput text="Branch Open Time" />
                        <InputTime
                            name="open_time"
                            placeholder="Open Time"
                            value={data.open_time}
                            onChange={(e) =>
                                setData("open_time", e.target.value)
                            }
                        />
                    </div>
                    <div className="w-full">
                        <LabelInput text="Branch Close Time" />
                        <InputTime
                            name="close_time"
                            placeholder="Close Time"
                            value={data.close_time}
                            onChange={(e) =>
                                setData("close_time", e.target.value)
                            }
                        />
                    </div>
                </div>
                <div className="w-full">
                    <LabelInput text="Branch Location" />
                    <InputTextArea
                        name="location"
                        placeholder="Location"
                        value={data.location}
                        onChange={(e) => setData("location", e.target.value)}
                    />
                </div>
                <div className="w-full">
                    <LabelInput text="Branch Services" />
                    <div className="grid grid-cols-3 gap-4 border-2 border-gray-400 rounded-xl p-3">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="flex items-center gap-2"
                            >
                                <input
                                    type="checkbox"
                                    id={`service-${service.id}`}
                                    checked={data.availableServices
                                        .toString()
                                        .includes(service.id)}
                                    onChange={() =>
                                        handleCheckboxChange(service.id)
                                    }
                                    className="form-checkbox h-5 w-5 text-gold-700 checked:bg-gold-700"
                                />
                                <label htmlFor={`service-${service.id}`}>
                                    {service.name}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-fit mx-auto">
                    <PrimaryButton type="submit" text="Save" />
                </div>
            </form>
        </DashboardLayout>
    );
}
