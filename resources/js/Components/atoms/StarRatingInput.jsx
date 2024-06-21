export default function StarRatingInput({ rating, setRating }) {
    const handleStarClick = (star) => {
        if (star === rating) {
            setRating(0);
        } else {
            setRating(star);
        }
    };

    return (
        <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
                <div
                    key={star}
                    onClick={() => handleStarClick(star)}
                    className="cursor-pointer"
                >
                    {star <= rating ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 text-yellow-500"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 text-yellow-500"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="m8.85 16.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zm-1.525 2.098l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102zM12 12.25"
                            />
                        </svg>
                    )}
                </div>
            ))}
        </div>
    );
}
