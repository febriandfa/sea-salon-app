import InputDropdown from "@/Components/atoms/InputDropdown";
import InputFile from "@/Components/atoms/InputFile";
import InputText from "@/Components/atoms/InputText";
import InputTextArea from "@/Components/atoms/InputTextArea";
import LabelInput from "@/Components/atoms/LabelInput";
import PrimaryButton from "@/Components/atoms/PrimaryButton";
import Subtitle from "@/Components/atoms/Subtitle";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { useForm } from "@inertiajs/react";
import { useRef } from "react";
import Swal from "sweetalert2";

export default function ProductCreate({ auth }) {
    const { data, setData, post, errors } = useForm({
        name: "",
        price: "",
        description: "",
        img: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("product-admin.store"), {
            data,
            onSuccess: () => {
                setData({
                    name: "",
                    price: "",
                    description: "",
                    img: "",
                });
                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    showConfirmButton: false,
                    timer: 1000,
                });
            },
        });
    };

    console.log(data);

    return (
        <DashboardLayout userLogin={auth.user}>
            <Subtitle>Add Product</Subtitle>
            <form
                onSubmit={onSubmit}
                className="my-6 space-y-3 lg:w-4/5 w-11/12 mx-auto"
            >
                <div className="w-full">
                    <LabelInput text="Product Name" />
                    <InputText
                        name="name"
                        placeholder="Name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                </div>
                <div className="w-full">
                    <LabelInput text="Product Price" />
                    <InputText
                        name="price"
                        placeholder="Price"
                        value={data.price}
                        onChange={(e) => setData("price", e.target.value)}
                    />
                </div>
                <div className="w-full">
                    <LabelInput text="Product Description" />
                    <InputTextArea
                        name="description"
                        placeholder="Description"
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                    />
                </div>
                <div className="w-full">
                    <LabelInput text="Product Image" />
                    <InputFile
                        name="img"
                        placeholder="Image"
                        onChange={(e) => setData("img", e.target.files[0])}
                    />
                </div>
                <div className="w-fit mx-auto">
                    <PrimaryButton type="submit" text="Save" />
                </div>
            </form>
        </DashboardLayout>
    );
}
