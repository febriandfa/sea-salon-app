import Separator from "../atoms/Separator";

export default function StatCard({ total, name, children }) {
    return (
        <div className="bg-white p-3 shadow-lg border border-gold-700 rounded-lg space-y-2">
            {children}
            <Separator />
            <div className="flex items-end justify-center">
                <p className="lg:text-7xl text-4xl italic font-playfair font-semibold">
                    {total}
                </p>
                <p className="font-playfair italic lg:text-3xl text-xl">
                    {name}
                </p>
            </div>
        </div>
    );
}
