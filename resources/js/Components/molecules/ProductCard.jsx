import { Link } from "@inertiajs/react";
import Separator from "../atoms/Separator";

export default function ProductCard({ id, name, price, img }) {
    return (
        <div
            key={id}
            className="bg-white p-3 shadow-lg border border-gold-700 rounded-lg space-y-4"
        >
            <img
                src={`/storage/product/${img}`}
                alt="product image"
                className="rounded-md w-full h-40 object-cover"
            />
            <p className="font-playfair italic text-2xl text-center">{name}</p>
            <Separator />
            <p className="flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 text-gold-700"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12M12 5.25a.75.75 0 0 1 .75.75v.317c1.63.292 3 1.517 3 3.183a.75.75 0 0 1-1.5 0c0-.678-.564-1.397-1.5-1.653v3.47c1.63.292 3 1.517 3 3.183s-1.37 2.891-3 3.183V18a.75.75 0 0 1-1.5 0v-.317c-1.63-.292-3-1.517-3-3.183a.75.75 0 0 1 1.5 0c0 .678.564 1.397 1.5 1.652v-3.469c-1.63-.292-3-1.517-3-3.183s1.37-2.891 3-3.183V6a.75.75 0 0 1 .75-.75m-.75 2.597c-.936.256-1.5.975-1.5 1.653s.564 1.397 1.5 1.652zm1.5 5v3.306c.936-.256 1.5-.974 1.5-1.653c0-.678-.564-1.397-1.5-1.652"
                        clip-rule="evenodd"
                    />
                </svg>
                Rp {price}
            </p>
            <Link
                as="button"
                href={route("product.show", id)}
                className="border-b border-gold-700 text-gold-700 w-fit mx-auto flex items-center gap-1"
            >
                Read More
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06"
                        clip-rule="evenodd"
                    />
                </svg>
            </Link>
        </div>
    );
}
