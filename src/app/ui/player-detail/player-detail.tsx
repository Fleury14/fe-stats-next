import { PlayerDetailResponse, Race } from "@/app/lib/interfaces";

export default function PlayerDetail({ races, details }: { races: Race[], details: PlayerDetailResponse }) {
    return (
        <div>
            <h1 className="font-bold text-3xl text-center mt-5 mb-5">{details.name}</h1>
            <div className="flex justify-around items-center">
                {details.twitch_channel !== "" ? (
                    <a href={details.twitch_channel} target="_blank">
                        <button className="bg-indigo-800 p-3 hover:bg-indigo-600">{details.twitch_display_name}</button>
                    </a>
                ) : (
                    <p>No twitch channel detected.</p>
                )}
                <div className="flex flex-col items-center">
                    <p>Total Races (all games)</p>
                    <p className="font-bold text-4xl mt-2">{details.stats.joined}</p>
                </div>
                <div className="flex flex-col items-center">
                    <p>Firsts: <span className="font-bold text-amber-200">{details.stats.first}</span></p>
                    <p>Seconds: <span className="font-bold text-zinc-200">{details.stats.second}</span></p>
                    <p>Thirds: <span className="font-bold text-emerald-200">{details.stats.third}</span></p>
                    <p>Forfeits: <span className="font-bold text-red-200">{details.stats.forfeits}</span></p>
                </div>
            </div>
            <div className="player-detail-bottom"></div>
        </div>
    );

}