import Title from "@/Components/atoms/Title";
import LandingLayout from "@/Layouts/LandingLayout";
import { usePage } from "@inertiajs/react";

export default function ProductDetail({ auth }) {
    const { contacts, product } = usePage().props;

    return (
        <LandingLayout userLogin={auth.user} contactDatas={contacts}>
            <article className="h-80 overflow-hidden px-12">
                <div className="w-full h-80 bg-cover bg-[url('/assets/background-4.jpg')] bg-top absolute left-0">
                    <div className="w-full h-80 bg-gold-700 absolute bg-opacity-60 flex flex-col justify-center">
                        <Title title={product.name} />
                    </div>
                </div>
            </article>
            <article className="lg:min-h-screen h-fit space-y-6">
                <img
                    src={`/storage/product/${product.img}`}
                    alt="product image"
                    className="rounded-md lg:w-3/5 w-11/12 lg:h-96 h-44 object-cover mx-auto"
                />
                <h1 className="italic lg:text-6xl text-4xl text-center font-playfair text-gold-700">
                    {product.name}
                </h1>
                <p className="italic font-playfair text-2xl flex items-center justify-center gap-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="lg:w-7 w-6 text-gold-700"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12M12 5.25a.75.75 0 0 1 .75.75v.317c1.63.292 3 1.517 3 3.183a.75.75 0 0 1-1.5 0c0-.678-.564-1.397-1.5-1.653v3.47c1.63.292 3 1.517 3 3.183s-1.37 2.891-3 3.183V18a.75.75 0 0 1-1.5 0v-.317c-1.63-.292-3-1.517-3-3.183a.75.75 0 0 1 1.5 0c0 .678.564 1.397 1.5 1.652v-3.469c-1.63-.292-3-1.517-3-3.183s1.37-2.891 3-3.183V6a.75.75 0 0 1 .75-.75m-.75 2.597c-.936.256-1.5.975-1.5 1.653s.564 1.397 1.5 1.652zm1.5 5v3.306c.936-.256 1.5-.974 1.5-1.653c0-.678-.564-1.397-1.5-1.652"
                            clip-rule="evenodd"
                        />
                    </svg>
                    Rp {product.price}
                </p>
                <p className="lg:w-3/5 w-11/12 text-center italic lg:text-2xl text-lg mx-auto">
                    {product.description}
                </p>
            </article>
        </LandingLayout>
    );
}
