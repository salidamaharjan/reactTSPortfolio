import NavItem from "./NavItem.tsx";

export default function Header() {
    return <header className="flex bg-white flex-col md:flex-row shadow justify-between  items-center  p-2 px-8">
        <h1 className="text-3xl font-bold">Salida Maharjan</h1>
        <nav>
            <ul className="flex gap-4">
                <NavItem label="About"/>
                <NavItem label="My Journey"/>
                <NavItem label="Projects"/>
                <NavItem label="Contact"/>
            </ul>
        </nav>
    </header>
}