import InputDropdown from "@/Components/atoms/InputDropdown";
import InputText from "@/Components/atoms/InputText";
import InputTextArea from "@/Components/atoms/InputTextArea";
import LabelInput from "@/Components/atoms/LabelInput";
import PrimaryButton from "@/Components/atoms/PrimaryButton";
import Subtitle from "@/Components/atoms/Subtitle";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { useForm, usePage } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function ContactCreate({ auth }) {
    const { contact } = usePage().props;

    const { data, setData, post, errors } = useForm({
        _method: "PATCH",
        name: contact.name,
        phone_number: contact.phone_number,
    });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("contact-admin.update", contact.id));
        Swal.fire({
            icon: "success",
            title: "Success!",
            showConfirmButton: false,
            timer: 1000,
        });
    };

    return (
        <DashboardLayout userLogin={auth.user}>
            <Subtitle>Edit Contact</Subtitle>
            <form onSubmit={onSubmit} className="my-6 space-y-3 w-4/5 mx-auto">
                <div className="w-full">
                    <LabelInput text="Name" />
                    <InputText
                        name="name"
                        placeholder="Name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                </div>
                <div className="w-full">
                    <LabelInput text="Phone Number" />
                    <InputText
                        name="phone_number"
                        placeholder="Phone Number"
                        value={data.phone_number}
                        onChange={(e) =>
                            setData("phone_number", e.target.value)
                        }
                    />
                </div>
                <div className="w-fit mx-auto">
                    <PrimaryButton type="submit" text="Save" />
                </div>
            </form>
        </DashboardLayout>
    );
}
