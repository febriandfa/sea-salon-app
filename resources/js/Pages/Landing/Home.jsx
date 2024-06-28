import PrimaryLink from "@/Components/atoms/PrimaryLink";
import Separator from "@/Components/atoms/Separator";
import Subtitle from "@/Components/atoms/Subtitle";
import Title from "@/Components/atoms/Title";
import ProductCard from "@/Components/molecules/ProductCard";
import ServiceCard from "@/Components/molecules/ServiceCard";
import LandingLayout from "@/Layouts/LandingLayout";
import { usePage } from "@inertiajs/react";

export default function Home({ auth }) {
    const { contacts, latestProducts, popularServices } = usePage().props;

    console.log("produk", latestProducts);
    console.log("servis", popularServices);

    return (
        <LandingLayout userLogin={auth.user} contactDatas={contacts}>
            <article className="h-[calc(100vh-6rem)] overflow-hidden">
                <div className="w-full h-[calc(100vh-6rem)] bg-cover bg-[url('/assets/hero.jpg')] bg-center absolute left-0">
                    <div className="w-full h-[calc(100vh-6rem)] bg-gold-700 absolute bg-opacity-60 flex flex-col justify-center">
                        <Title title="SEA Salon~" />
                        <Subtitle>
                            <p className="text-white font-playfair">
                                “Beauty and Elegance Redefined”
                            </p>
                        </Subtitle>
                    </div>
                </div>
            </article>
            <article className="h-fit">
                <Separator />
                <div className="flex lg:flex-row flex-col items-center w-4/5 mx-auto lg:gap-12 gap-8 my-8">
                    <img
                        src="/assets/about.jpg"
                        alt="about image"
                        className="rounded-md lg:w-1/3 w-11/12 lg:h-96 h-44 object-cover"
                    />
                    <div className="space-y-6">
                        <p className="italic font-playfair lg:text-6xl text-4xl">
                            Get To Know Us~
                        </p>
                        <p className="italic lg:text-left text-center leading-loose">
                            Welcome to SEA Salon, where beauty and self-care
                            meet. At SEA Salon, we believe in enhancing your
                            natural beauty with exceptional services and premium
                            products. Our mission is to offer you a rejuvenating
                            experience that leaves you looking and feeling your
                            best. At SEA Salon, we prioritize your safety and
                            satisfaction, ensuring that every product meets the
                            highest standards.
                        </p>
                    </div>
                </div>
                <Separator />
            </article>
            <article className="h-fit my-12 flex flex-col justify-center space-y-12">
                <Title color="black" title="Our Popular Service~" />
                <div className="grid lg:grid-cols-3 grid-cols-1 w-4/5 mx-auto gap-8">
                    {popularServices.map((service) => (
                        <ServiceCard
                            key={service.id}
                            id={service.id}
                            name={service.name}
                            duration={service.duration}
                            price={service.price}
                            description={service.description}
                            member={service.member_only}
                        />
                    ))}
                </div>
                <div className="w-fit mx-auto">
                    <PrimaryLink
                        link={route("service.index")}
                        text="View All Services"
                    />
                </div>
            </article>
            <Separator />
            <article className="h-fit my-12 flex flex-col justify-center space-y-12">
                <Title color="black" title="Our Latest Products~" />
                <div className="grid lg:grid-cols-3 grid-cols-1 w-4/5 mx-auto gap-8">
                    {latestProducts.map((product) => (
                        <ProductCard
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            img={product.img}
                        />
                    ))}
                </div>
                <div className="w-fit mx-auto">
                    <PrimaryLink
                        link={route("product.index")}
                        text="View All Products"
                    />
                </div>
            </article>
        </LandingLayout>
    );
}
