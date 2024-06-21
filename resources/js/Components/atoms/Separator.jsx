export default function Separator() {
    return (
        <div className="flex items-center justify-center gap-3 w-4/5 mx-auto">
            <hr className="border-gold-700 w-full" />
            <div className="flex gap-1">
                <div className="w-0.5 h-3 bg-gold-700 rounded-full"></div>
                <div className="w-0.5 h-3 bg-gold-700 rounded-full"></div>
            </div>
            <hr className="border-gold-700 w-full" />
        </div>
    );
}
