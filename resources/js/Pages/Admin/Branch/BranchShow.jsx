import InputDropdown from "@/Components/atoms/InputDropdown";
import InputText from "@/Components/atoms/InputText";
import InputTextArea from "@/Components/atoms/InputTextArea";
import InputTime from "@/Components/atoms/InputTime";
import LabelInput from "@/Components/atoms/LabelInput";
import PrimaryButton from "@/Components/atoms/PrimaryButton";
import Subtitle from "@/Components/atoms/Subtitle";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { useForm, usePage } from "@inertiajs/react";

export default function BranchEdit({ auth }) {
    const { branch, services } = usePage().props;

    const { data, setData, post, errors } = useForm({
        name: branch.name,
        location: branch.location,
        open_time: branch.open_time,
        close_time: branch.close_time,
        availableServices: branch.branch_services.map(
            (branchService) => branchService.service_id
        ),
    });

    return (
        <DashboardLayout userLogin={auth.user}>
            <Subtitle>Branch Detail</Subtitle>
            <div className="my-6 space-y-3 lg:w-4/5 w-11/12 mx-auto">
                <div className="w-full">
                    <LabelInput text="Branch Name" />
                    <InputText
                        name="name"
                        placeholder="Name"
                        value={data.name}
                        disabled
                    />
                </div>
                <div className="w-full flex gap-3">
                    <div className="w-full">
                        <LabelInput text="Branch Open Time" />
                        <InputTime
                            name="open_time"
                            placeholder="Open Time"
                            value={data.open_time}
                            disabled
                        />
                    </div>
                    <div className="w-full">
                        <LabelInput text="Branch Close Time" />
                        <InputTime
                            name="close_time"
                            placeholder="Close Time"
                            value={data.close_time}
                            disabled
                        />
                    </div>
                </div>
                <div className="w-full">
                    <LabelInput text="Branch Location" />
                    <InputTextArea
                        name="location"
                        placeholder="Location"
                        value={data.location}
                        disabled
                    />
                </div>
                <div className="w-full">
                    <LabelInput text="Branch Services" />
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 border-2 border-gray-400 rounded-xl p-3">
                        {services.map((service) => {
                            return (
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
                                        disabled
                                        className="form-checkbox h-5 w-5 text-gold-700 checked:bg-gold-700"
                                    />
                                    <label htmlFor={`service-${service.id}`}>
                                        {service.name}
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
