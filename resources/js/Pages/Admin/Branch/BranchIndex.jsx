import Subtitle from "@/Components/atoms/Subtitle";
import BranchListCard from "@/Components/molecules/BranchListCard";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { usePage } from "@inertiajs/react";

export default function BranchIndex({ auth }) {
    const { branches } = usePage().props;

    return (
        <DashboardLayout userLogin={auth.user}>
            <Subtitle>Branches</Subtitle>
            <div className="my-6 space-y-3 w-4/5 mx-auto">
                {branches.map((branch) => {
                    return (
                        <BranchListCard
                            id={branch.id}
                            name={branch.name}
                            location={branch.location}
                            openHour={branch.open_time}
                            closeHour={branch.close_time}
                        />
                    );
                })}
            </div>
        </DashboardLayout>
    );
}
