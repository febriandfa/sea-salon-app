import { useState, useEffect } from "react";

export default function InputDropdown({
    datas,
    placeholder = "",
    onChange,
    selectedValue,
    disabled = false,
}) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("");

    useEffect(() => {
        if (selectedValue) {
            const selectedItem = datas.find(
                (data) => data.value === selectedValue
            );
            if (selectedItem) {
                setSelected(selectedItem.label);
            }
        }
    }, [selectedValue, datas]);

    const handleDropdownClick = () => {
        setOpen(!open);
    };

    const handleOptionSelect = (value, label) => {
        onChange(value);
        setSelected(label);
        setOpen(!open);
    };

    return (
        <div className="relative w-full">
            <div
                className="border-2 border-gray-400 rounded-xl focus:ring-gold-700 focus:border-gold-700 w-full flex items-center justify-between py-2 px-3"
                onClick={handleDropdownClick}
            >
                <p
                    className={`capitalize ${
                        selected ? "text-black" : "text-gray-500 line-clamp-1"
                    }`}
                >
                    {selected ? selected : placeholder}
                </p>
                <div className="w-fit">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m7 10l5 5l5-5"
                        />
                    </svg>
                </div>
            </div>
            {open && (
                <ul className="bg-white w-full mt-1 rounded-xl border-2 border-gray-400 absolute z-10 max-h-60 overflow-y-auto">
                    {datas.map((data, index) => {
                        return (
                            <li
                                key={index}
                                value={data.value}
                                onClick={() =>
                                    handleOptionSelect(data.value, data.label)
                                }
                                className="cursor-pointer px-4 rounded-lg py-1.5 hover:bg-gray-200"
                            >
                                {data.label}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}
