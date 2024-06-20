import { Link, useForm, usePage } from "@inertiajs/react";
import AppLogo from "../../Components/atoms/AppLogo";
import NavMenu from "../../Components/molecules/NavMenu";
import NavAuthMenu from "../../Components/molecules/NavAuthMenu";

const Home = ({ auth }) => {
    const { reviews } = usePage().props;

    const { data, setData, post, errors } = useForm({
        rating: "",
        comment: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("review.store"));
    };

    return (
        <main>
            <nav className="h-20 flex items-center justify-between px-12">
                <AppLogo />
                <NavMenu />
                <NavAuthMenu />
            </nav>
            <section>
                <article className="h-screen">
                    <form method="POST" onSubmit={onSubmit}>
                        <input
                            type="text"
                            placeholder="rating"
                            name="rating"
                            value={data.rating}
                            onChange={(e) => setData("rating", e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="comment"
                            name="comment"
                            value={data.comment}
                            onChange={(e) => setData("comment", e.target.value)}
                        />
                        <button type="submit">submit</button>
                    </form>
                </article>
            </section>
            <footer className="bg-blue-500 h-10 flex items-center justify-center">
                <p>Copyright @ SEASalon 2024</p>
            </footer>
        </main>
    );
};

export default Home;
