import NavAuthLink from "../atoms/NavAuthLink";

export default function NavAuthMenu() {
    const authMenus = [
        { link: route("register"), menu: "Register" },
        { link: route("login"), menu: "Login" },
    ];

    return (
        <ul className="flex items-center gap-6">
            {authMenus.map((authMenu) => {
                return (
                    <NavAuthLink link={authMenu.link} menu={authMenu.menu} />
                );
            })}
        </ul>
    );
}
