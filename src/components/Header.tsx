import NavItem from "./NavItem.tsx";
export default function Header() {
    return <header className="flex flex-col md:flex-row shadow justify-between  items-center  p-2">
        <h1 className="text-3xl font-bold">Salida Maharjan</h1>
        <nav>
            <ul className="flex gap-4">
                <NavItem label="About"/>
                <NavItem label="Projects"/>
                <NavItem label="Skills"/>
                <NavItem label="Contact"/>
            </ul>
        </nav>
    </header>
}