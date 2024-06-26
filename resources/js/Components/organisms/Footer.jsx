import { Link } from "@inertiajs/react";
import Separator from "../atoms/Separator";
import FooterHeadline from "../atoms/FooterHeadline";
import FooterSocialLink from "../atoms/FooterSocialLink";
import FooterSocialMenu from "../molecules/FooterSocialMenu";

export default function Footer({ contactDatas }) {
    return (
        <footer className="mt-12 py-4">
            <Separator />
            <div className="px-12 py-8 flex items-center">
                <div className="space-y-4 w-1/3">
                    <FooterHeadline>
                        SEA~ <br /> Salon
                    </FooterHeadline>
                </div>
                <div className="h-44 border-x border-gold-700"></div>
                <div className="space-y-4 w-full">
                    <div className="space-y-2 w-fit mx-auto">
                        <p className="font-playfair italic text-3xl text-center">
                            Contact Us
                        </p>
                        <div className="space-y-2">
                            {contactDatas.map((contact) => {
                                return (
                                    <div className="flex gap-3 justify-center">
                                        <p className="font-medium">
                                            {contact.name} :{" "}
                                        </p>
                                        <p>{contact.phone_number}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <Separator />
                    <div className="space-y-2 w-fit mx-auto">
                        <p className="font-playfair italic text-3xl text-center">
                            Follow Us
                        </p>
                        <FooterSocialMenu />
                    </div>
                </div>
                <div className="h-44 border-x border-gold-700"></div>
                <div className="space-y-4 w-1/3">
                    <FooterHeadline>
                        “Beauty and Elegance Redefined”
                    </FooterHeadline>
                </div>
            </div>
            <Separator />
        </footer>
    );
}
