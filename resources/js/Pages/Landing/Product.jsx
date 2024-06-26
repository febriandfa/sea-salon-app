import Title from "@/Components/atoms/Title";
import LandingLayout from "@/Layouts/LandingLayout";
import { usePage } from "@inertiajs/react";

export default function Product({ auth }) {
    const { contacts } = usePage().props;

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
        </LandingLayout>
    );
}
