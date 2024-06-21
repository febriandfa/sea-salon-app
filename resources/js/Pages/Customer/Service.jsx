import NavAuthLink from "@/Components/atoms/NavAuthLink";
import Separator from "@/Components/atoms/Separator";
import Title from "@/Components/atoms/Title";
import ServiceCard from "@/Components/molecules/ServiceCard";
import LandingLayout from "@/Layouts/LandingLayout";
import { Link, usePage } from "@inertiajs/react";

export default function Service({ auth }) {
    const { services, contacts } = usePage().props;

    return (
        <LandingLayout userLogin={auth.user} contactDatas={contacts}>
            <article className="h-80 overflow-hidden">
                <div className="w-full h-80 bg-cover bg-[url('/assets/background-2.jpg')] bg-center absolute left-0">
                    <div className="w-full h-80 bg-gold-700 absolute bg-opacity-60 flex flex-col justify-center">
                        <Title title="Our Services~" />
                        <p className="w-3/5 text-center italic text-white text-2xl mx-auto">
                            "At SEA Salon, we believe that beauty and self-care
                            are essential parts of a balanced life. Our mission
                            is to provide you with exceptional service and a
                            rejuvenating experience that leaves you looking and
                            feeling your best"
                        </p>
                    </div>
                </div>
            </article>
            <article className="h-full mt-12">
                <div className="grid grid-cols-3 w-4/5 mx-auto gap-8">
                    {services.map((service) => {
                        return (
                            <ServiceCard
                                id={service.id}
                                name={service.name}
                                duration={service.duration}
                                price={service.price}
                                description={service.description}
                            />
                        );
                    })}
                </div>
            </article>
            <article className="min-h-screen mt-12 flex flex-col items-center justify-center space-y-6">
                <div className="border border-gold-700 p-6 w-3/5">
                    <div className="border border-gold-700 p-6">
                        <h1 className="font-playfair italic text-5xl text-center">
                            Become A Member
                            <br />
                            For Our Special Services~
                        </h1>
                        <div className="w-fit mx-auto my-16">
                            <Link
                                as="button"
                                href={route("register")}
                                className="text-3xl bg-gold-700 py-1.5 px-9 rounded-full text-white hover:scale-110 block shadow-lg"
                            >
                                Join Now!
                            </Link>
                        </div>
                        <h1 className="font-playfair italic text-5xl text-center">
                            Don't Miss This Chance~
                        </h1>
                    </div>
                </div>
            </article>
        </LandingLayout>
    );
}
