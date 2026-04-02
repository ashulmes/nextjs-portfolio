import Links from "./links"
import Logo from "./logo"

export default function Navbar() {
    return (
        <nav className="h-18 fixed z-50 w-full px-[10%]">
            <div className="flex items-center h-full justify-between">
                <Logo />
                <Links />
            </div>
        </nav>
    )
}