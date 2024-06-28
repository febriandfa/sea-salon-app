import InputDropdown from "@/Components/atoms/InputDropdown";
import InputFile from "@/Components/atoms/InputFile";
import InputText from "@/Components/atoms/InputText";
import InputTextArea from "@/Components/atoms/InputTextArea";
import LabelInput from "@/Components/atoms/LabelInput";
import PrimaryButton from "@/Components/atoms/PrimaryButton";
import Subtitle from "@/Components/atoms/Subtitle";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { useForm, usePage } from "@inertiajs/react";
import { useRef } from "react";
import Swal from "sweetalert2";

export default function ProductDetail({ auth }) {
    const { product } = usePage().props;

    const { data, setData, post, errors } = useForm({
        name: product.name,
        price: product.price,
        description: product.description,
        img: product.img,
    });

    return (
        <DashboardLayout userLogin={auth.user}>
            <Subtitle>Product Detail</Subtitle>
            <div className="my-6 space-y-3 lg:w-4/5 w-11/12 mx-auto">
                <div className="w-full">
                    <LabelInput text="Product Name" />
                    <InputText
                        name="name"
                        placeholder="Name"
                        value={data.name}
                        disabled
                    />
                </div>
                <div className="w-full">
                    <LabelInput text="Product Price" />
                    <InputText
                        name="price"
                        placeholder="Price"
                        value={data.price}
                        disabled
                    />
                </div>
                <div className="w-full">
                    <LabelInput text="Product Description" />
                    <InputTextArea
                        name="description"
                        placeholder="Description"
                        value={data.description}
                        disabled
                    />
                </div>
                <div className="w-full">
                    <LabelInput text="Product Image" />
                    <InputText
                        name="img"
                        placeholder="Image"
                        value={data.img}
                        disabled
                    />
                    <img
                        src={`/storage/product/${data.img}`}
                        alt="product image"
                        className="rounded-md w-3/5 mx-auto mt-4"
                    />
                </div>
            </div>
        </DashboardLayout>
    );
}
