import { Link } from "@remix-run/react"
import { ArrowUpRight } from "lucide-react"

export default function Header(){
    return (
        <header className="flex justify-between items-center w-full mb-10">
            <Link to="/">
                <div className="flex items-center gap-3">
                    <img src="/logo.png" alt="Sincap Wiki" className="w-[100px]" />
                    <h1 className="text-4xl font-logo">SincapWiki</h1>
                </div>
            </Link>

            <nav className="flex items-center gap-5 *:font-semibold">
                <Link to="/">HOME</Link>
                <Link to="/sincaps">SQUIRRELS</Link>
                <Link to="https://github.com/tutkuofnight/sincapwiki" className="flex items-center gap-1">CONTRIBUTE <ArrowUpRight className="w-4 h-4" /></Link>
            </nav>
        </header>
    )
}