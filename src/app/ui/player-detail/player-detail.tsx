import { PlayerDetailResponse, TLPlayerRaceResponse } from "@/app/lib/interfaces";
import Link from 'next/link';

export default function PlayerDetail({ details, TLRaces }: { details: PlayerDetailResponse, TLRaces: TLPlayerRaceResponse[] }) {
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
            <div className="player-detail-bottom grid grid-cols-3 gap-4">
                <div>
                    <h2 className="text-center text-xl m-5">Score Changes</h2>
                    <div className="flex flex-col">
                        {TLRaces.map(race => {
                            const me = race.entrants.find(entrant => entrant.name === details.name);
                            if (!me) return null;
                            const gain = me.entrantMetadata.scoreChange.charAt(0) !== "-";
                            const unranked = isNaN(parseInt(me.entrantMetadata.score))
                            console.log('tl races', race)
                            return (
                                <div key={race.roomName}>
                                    <div className="flex justify-between">
                                        <div>
                                            <p className="text-orange-200">{race.roomName}</p>
                                        </div>
                                        <div>
                                            <p>{unranked ? 1500 : me.entrantMetadata.score} =&gt; <span className={gain ? "text-emerald-200" : "text-red-200"}>{gain && "+"}{me?.entrantMetadata.scoreChange}</span> =&gt; <span className="text-cyan-200">{(unranked ? 1500 : parseInt(me.entrantMetadata.score)) + parseInt(me.entrantMetadata.scoreChange) }</span></p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="col-span-2">
                    <h2 className="text-center m-5 text-xl">Recent Races</h2>
                    <div className="flex flex-col">
                        {TLRaces.map(race => {
                            return (
                                <Link key={race.roomName} href={`/race/${race.roomName}`}>
                                    <div key={race.roomName} className="flex flex-col m-3 p-3 hover:bg-slate-800">
                                        <p className="text-xl font-bold text-yellow-200">{race.roomName}</p> 
                                        <p>{race.metadata.Description}</p>
                                        <div className="flex justify-between">
                                            <p>Entrants: {race.metadata.EntrantsCount}</p>
                                            <p>Goal: {race.metadata.Goal}</p>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                    
                </div>
            </div>
        </div>
    );

}