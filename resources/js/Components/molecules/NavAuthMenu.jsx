import NavAuthLink from "../atoms/NavAuthLink";
import NavProfileButton from "../atoms/NavProfileButton";

export default function NavAuthMenu({ userLogin }) {
    const authMenus = [
        { link: route("register"), menu: "Register" },
        { link: route("login"), menu: "Login" },
    ];

    return (
        <ul className="flex items-center gap-6">
            {userLogin ? (
                <NavProfileButton />
            ) : (
                authMenus.map((authMenu) => {
                    return (
                        <NavAuthLink
                            link={authMenu.link}
                            menu={authMenu.menu}
                        />
                    );
                })
            )}
        </ul>
    );
}
