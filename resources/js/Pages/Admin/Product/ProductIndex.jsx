import PrimaryLink from "@/Components/atoms/PrimaryLink";
import Subtitle from "@/Components/atoms/Subtitle";
import ProductListCard from "@/Components/molecules/ProductListCard";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { usePage } from "@inertiajs/react";

export default function ProductIndex({ auth }) {
    const { products } = usePage().props;

    console.log(products);

    return (
        <DashboardLayout userLogin={auth.user}>
            <Subtitle>Products</Subtitle>
            <div className="mt-6 flex justify-center">
                <PrimaryLink
                    link={route("product-admin.create")}
                    text="Add Product"
                />
            </div>
            <div className="my-6 space-y-3 lg:w-4/5 w-full mx-auto">
                {products.map((product) => {
                    return (
                        <ProductListCard
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            description={product.description}
                        />
                    );
                })}
            </div>
        </DashboardLayout>
    );
}
