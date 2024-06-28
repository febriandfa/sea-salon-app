import Title from "@/Components/atoms/Title";
import ProductCard from "@/Components/molecules/ProductCard";
import LandingLayout from "@/Layouts/LandingLayout";
import { Link, usePage } from "@inertiajs/react";

export default function Product({ auth }) {
    const { contacts, products } = usePage().props;

    return (
        <LandingLayout userLogin={auth.user} contactDatas={contacts}>
            <article className="h-80 overflow-hidden">
                <div className="w-full h-80 bg-cover bg-[url('/assets/background-3.jpg')] bg-center absolute left-0">
                    <div className="w-full h-80 bg-gold-700 absolute bg-opacity-60 flex flex-col justify-center">
                        <Title title="Our Products~" />
                        <p className="lg:w-3/5 w-11/12 text-center italic text-white lg:text-2xl text-lg mx-auto">
                            "At SEA Salon, we believe that beauty and self-care
                            are essential parts of a balanced life. Our mission
                            is to provide you with exceptional service and a
                            rejuvenating experience that leaves you looking and
                            feeling your best"
                        </p>
                    </div>
                </div>
            </article>
            <article className="min-h-screen">
                <div className="flex items-center justify-between gap-8 mt-12">
                    <Link
                        as="button"
                        href={products.prev_page_url}
                        className="text-gold-700 hover:scale-110"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="lg:w-12 w-8"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="m15 5l-6 7l6 7"
                            />
                        </svg>
                    </Link>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mx-auto">
                        {products.data.map((product) => (
                            <ProductCard
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                img={product.img}
                            />
                        ))}
                    </div>
                    <Link
                        as="button"
                        href={products.next_page_url}
                        className="text-gold-700 hover:scale-110"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="lg:w-12 w-8"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                fill-rule="evenodd"
                                d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </Link>
                </div>
            </article>
        </LandingLayout>
    );
}
