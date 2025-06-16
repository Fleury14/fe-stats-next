import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex flex-col bg-blue-900 p-3">
            <div>
                <h1 className="font-bold text-3xl">FE-STATS</h1>
            </div>
            <div className="flex">
                <Link href="/"><p className="ml-3 mr-3 mt-3">Main</p></Link>
                <Link href="/races" className="ml-3 mr-3 mt-3">Races</Link>
                <Link href="/players" className="ml-3 mr-3 mt-3">Players</Link>
                <Link href="/afc"><p className="ml-3 mr-3 mt-3">AFC</p></Link>
            </div>
        </div>
    );
}