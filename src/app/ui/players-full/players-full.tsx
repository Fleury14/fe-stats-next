import { Leaderboard } from "@/app/lib/interfaces";
import Link from 'next/link';
import "./players-full.css";

export default function PlayersFull({ goal, leaderboards, setGoal }: { goal: number, leaderboards: Leaderboard[], setGoal: (goal: number) => void }) {

    const colors = [
        "text-fuchsia-200",
        "text-indigo-200",
        "text-cyan-200",
        "text-emerald-200",
        "text-lime-200",
        "text-amber-200",
        "text-red-200"
    ]
    const tiers = [
        0.3,
        0.45,
        0.6,
        0.75,
        0.85,
        0.9
    ]
    
    function getColor(ratio:number): string {
        if (!ratio) return "";
        if ((1 - ratio) < tiers[0]) {
            return colors[0];
        } else if ((1 - ratio) < tiers[1]) {
            return colors[1];
        } else if ((1 - ratio) < tiers[2]) {
            return colors[2];
        } else if ((1 - ratio) < tiers[3]) {
            return colors[3];
        } else if ((1 - ratio) < tiers[4]) {
            return colors[4];
        } else if ((1 - ratio) < tiers[5]) {
            return colors[5];
        } else
        return colors[6];
    }

    return (
        <div>
            <h1 className="font-bold text-3xl text-center mt-5 mb-5">Players</h1>
            <div className="flex justify-between">
                {leaderboards.map((lb, index) => {
                    return (
                        <button
                            className={`bg-blue-${index === goal ? "700" : "900"} p-3 hover:bg-blue-700`}
                            onClick={() => setGoal(index)}
                            key={lb.goal}
                        >{lb.goal}</button>
                    );
                })}
            </div>
            <div className="full-leaderboard-bottom mt-5">
                {leaderboards[goal].rankings.map((rank, index) => {
                    return (
                        <Link key={`${rank.user.name}`} href={`/player/${rank.user.id}`}>
                            <div className={`flex justify-between ${getColor((index + 1) / leaderboards[goal].rankings.length)}`}>
                                <p>{rank.user.name}</p>
                                <p>{rank.score}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}