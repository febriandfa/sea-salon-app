import DeleteButton from "../atoms/DeleteButton";
import PrimaryLink from "../atoms/PrimaryLink";

export default function ActionButton({ showLink, editLink, deleteLink }) {
    return (
        <div className="bg-white p-2 shadow-lg border border-gold-700 rounded-lg w-fit lg:mx-0 mx-auto">
            <div className="hidden lg:flex flex-col gap-3">
                {showLink && <PrimaryLink link={showLink} text="Show" />}
                {editLink && <PrimaryLink link={editLink} text="Edit" />}
                {deleteLink && <DeleteButton link={deleteLink} />}
            </div>
            <div className="lg:hidden flex flex-col gap-3">
                {showLink && (
                    <PrimaryLink link={showLink}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fill="currentColor"
                                d="M3.26 11.602C3.942 8.327 6.793 6 10 6s6.057 2.327 6.74 5.602a.5.5 0 0 0 .98-.204C16.943 7.673 13.693 5 10 5s-6.943 2.673-7.72 6.398a.5.5 0 0 0 .98.204M10 8a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7m-2.5 3.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0"
                            />
                        </svg>
                    </PrimaryLink>
                )}
                {editLink && (
                    <PrimaryLink link={editLink}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fill="currentColor"
                                d="M17.181 2.927a2.975 2.975 0 0 0-4.259-.054l-9.375 9.375a2.44 2.44 0 0 0-.656 1.194l-.877 3.95a.5.5 0 0 0 .596.597l3.927-.873a2.5 2.5 0 0 0 1.234-.678l9.358-9.358a2.975 2.975 0 0 0 .052-4.153m-3.552.653a1.975 1.975 0 1 1 2.793 2.793l-.671.671l-2.793-2.792zm-1.378 1.38l2.793 2.792l-7.98 7.98a1.5 1.5 0 0 1-.744.409l-3.16.702l.708-3.183c.059-.267.193-.511.386-.704z"
                            />
                        </svg>
                    </PrimaryLink>
                )}
                {deleteLink && (
                    <DeleteButton link={deleteLink}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fill="currentColor"
                                d="M8.5 4h3a1.5 1.5 0 0 0-3 0m-1 0a2.5 2.5 0 0 1 5 0h5a.5.5 0 0 1 0 1h-1.054l-1.194 10.344A3 3 0 0 1 12.272 18H7.728a3 3 0 0 1-2.98-2.656L3.554 5H2.5a.5.5 0 0 1 0-1zM5.741 15.23A2 2 0 0 0 7.728 17h4.544a2 2 0 0 0 1.987-1.77L15.439 5H4.561zM8.5 7.5A.5.5 0 0 1 9 8v6a.5.5 0 0 1-1 0V8a.5.5 0 0 1 .5-.5M12 8a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
                            />
                        </svg>
                    </DeleteButton>
                )}
            </div>
        </div>
    );
}
