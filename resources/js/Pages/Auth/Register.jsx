import AppLogo from "@/Components/atoms/AppLogo";
import InputError from "@/Components/atoms/InputError";
import InputPassword from "@/Components/atoms/InputPassword";
import InputText from "@/Components/atoms/InputText";
import PrimaryButton from "@/Components/atoms/PrimaryButton";
import { Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, errors } = useForm({
        name: "",
        email: "",
        phone_number: "",
        password: "",
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        post(route("register"));
    };

    return (
        <main className="bg-[url('/assets/background.jpg')] w-screen h-screen bg-no-repeat bg-cover">
            <section className="w-screen h-screen bg-gray-500 absolute bg-opacity-70 flex items-center justify-center">
                <div className="bg-white rounded-xl w-2/5 p-6 space-y-6">
                    <Link
                        as="button"
                        href={route("home")}
                        className="flex items-center gap-1 hover:text-gold-700"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6"
                            viewBox="0 0 256 256"
                        >
                            <path
                                fill="currentColor"
                                d="M220 128a4 4 0 0 1-4 4H49.66l65.17 65.17a4 4 0 0 1-5.66 5.66l-72-72a4 4 0 0 1 0-5.66l72-72a4 4 0 0 1 5.66 5.66L49.66 124H216a4 4 0 0 1 4 4"
                            />
                        </svg>
                        Back
                    </Link>
                    <div className="w-fit mx-auto">
                        <AppLogo />
                    </div>
                    <p className="font-playfair italic text-2xl text-center">
                        Register
                    </p>
                    <form
                        onSubmit={handleOnSubmit}
                        className="space-y-4 flex flex-col justify-center items-center"
                    >
                        <div className="w-full">
                            <InputText
                                placeholder="Name"
                                name="name"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.name}
                                className="mt-1"
                            />
                        </div>
                        <div className="w-full">
                            <InputText
                                placeholder="Email"
                                name="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.email}
                                className="mt-1"
                            />
                        </div>
                        <div className="w-full">
                            <InputText
                                placeholder="Phone Number"
                                name="phone_number"
                                value={data.phone_number}
                                onChange={(e) =>
                                    setData("phone_number", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.phone_number}
                                className="mt-1"
                            />
                        </div>
                        <div className="w-full">
                            <InputPassword
                                placeholder="Password"
                                name="password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.password}
                                className="mt-1"
                            />
                        </div>
                        <p>
                            Already a member?{" "}
                            <Link
                                href={route("login")}
                                className="text-gold-700 underline"
                            >
                                Login
                            </Link>
                        </p>
                        <PrimaryButton type="submit" text="Register" />
                    </form>
                </div>
            </section>
        </main>
    );
}
