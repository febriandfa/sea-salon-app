import { useState } from "react";

export default function InputPassword({
    name = "",
    placeholder = "",
    value,
    onChange,
}) {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="relative w-full">
            <input
                type={showPassword ? "text" : "password"}
                id={name}
                name={name}
                value={value}
                className={`border-2 border-gray-400 rounded-xl focus:ring-gold-700 focus:border-gold-700 w-full pe-10`}
                placeholder={placeholder}
                onChange={onChange}
            />
            <button
                type="button"
                onClick={handleShowPassword}
                className="absolute inset-y-0 end-0 flex items-center pe-3.5 text-gray-500"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M11.9999 16.33C9.60992 16.33 7.66992 14.39 7.66992 12C7.66992 9.61001 9.60992 7.67001 11.9999 7.67001C14.3899 7.67001 16.3299 9.61001 16.3299 12C16.3299 14.39 14.3899 16.33 11.9999 16.33ZM11.9999 9.17001C10.4399 9.17001 9.16992 10.44 9.16992 12C9.16992 13.56 10.4399 14.83 11.9999 14.83C13.5599 14.83 14.8299 13.56 14.8299 12C14.8299 10.44 13.5599 9.17001 11.9999 9.17001Z"
                        fill="currentColor"
                    />
                    <path
                        d="M12.0001 21.02C8.24008 21.02 4.69008 18.82 2.25008 15C1.19008 13.35 1.19008 10.66 2.25008 9.00001C4.70008 5.18001 8.25008 2.98001 12.0001 2.98001C15.7501 2.98001 19.3001 5.18001 21.7401 9.00001C22.8001 10.65 22.8001 13.34 21.7401 15C19.3001 18.82 15.7501 21.02 12.0001 21.02ZM12.0001 4.48001C8.77008 4.48001 5.68008 6.42001 3.52008 9.81001C2.77008 10.98 2.77008 13.02 3.52008 14.19C5.68008 17.58 8.77008 19.52 12.0001 19.52C15.2301 19.52 18.3201 17.58 20.4801 14.19C21.2301 13.02 21.2301 10.98 20.4801 9.81001C18.3201 6.42001 15.2301 4.48001 12.0001 4.48001Z"
                        fill="currentColor"
                    />
                </svg>
            </button>
        </div>
    );
}
