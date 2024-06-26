import PrimaryLink from "@/Components/atoms/PrimaryLink";
import Subtitle from "@/Components/atoms/Subtitle";
import BranchListCard from "@/Components/molecules/BranchListCard";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { usePage } from "@inertiajs/react";

export default function BranchIndex({ auth }) {
    const { branches } = usePage().props;

    return (
        <DashboardLayout userLogin={auth.user}>
            <Subtitle>Branches</Subtitle>
            <div className="mt-6 flex justify-center">
                <PrimaryLink
                    link={route("branch-admin.create")}
                    text="Add Branch"
                />
            </div>
            <div className="my-6 space-y-3 lg:w-4/5 w-full mx-auto">
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
