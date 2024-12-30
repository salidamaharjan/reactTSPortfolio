import NavItem from "./NavItem.tsx";

export default function Header() {
    return <header className="flex bg-white flex-col md:flex-row shadow justify-between  items-center  p-2 px-8">
        <h1 className="text-3xl font-bold">Salida Maharjan</h1>
        <nav>
            <ul className="flex gap-4">
                <a href={"#aboutMe"}><NavItem label="About"/></a>
                <a href={"#projects"}><NavItem label="Projects"/></a>
                <a href={"#skills"}><NavItem label="Skills"/></a>
                <a href={"#contact"}><NavItem label="Contact"/></a>
            </ul>
        </nav>
    </header>
}