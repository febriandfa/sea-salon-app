import { Link, router } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function DeleteButton({ link }) {
    const handleOnClick = () => {
        Swal.fire({
            title: "Delete?",
            icon: "warning",
            showCancelButton: true,
            showConfirmButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(link);
                Swal.fire({
                    title: "Data Deleted!",
                    icon: "success",
                    timer: 1000,
                    showConfirmButton: false,
                });
            }
        });
    };

    return (
        <button
            type="button"
            onClick={handleOnClick}
            className="hover:bg-red-700 bg-white py-1 px-4 rounded-full hover:text-white text-red-700 font-semibold border-2 border-red-700"
        >
            Delete
        </button>
    );
}
