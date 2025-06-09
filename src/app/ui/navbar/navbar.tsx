import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex flex-col bg-blue-900 p-3">
            <div>
                <h1 className="font-bold text-3xl">FE-STATS</h1>
            </div>
            <div className="flex">
                <Link href="/"><p className="ml-3 mr-3 mt-3">Main</p></Link>
                <p className="ml-3 mr-3 mt-3">Races</p>
                <p className="ml-3 mr-3 mt-3">Players</p>
                <p className="ml-3 mr-3 mt-3">AFC</p>
            </div>
        </div>
    );
}