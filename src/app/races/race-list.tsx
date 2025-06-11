import { Race } from "../lib/interfaces";
import Link from 'next/link';

export default function RaceList({ races }: { races: Race[]}) {
    return (
        <div>
            <div className="flex flex-col">
                {races.length === 0 && (
                    <p className="text-center font-bold">No race data at this time...</p>
                )}
                {races.map(race => {
                    return (
                        <Link key={race.name} href={`/race/${race.name.slice(6)}`}>
                            <div className='flex flex-col hover:bg-slate-800 mt-2 mb-2'>
                                <p className="text-xl font-bold text-yellow-200">{race.name.slice(6)}</p>
                                <div className="flex">
                                    <p className="mr-10">Entrants: {race.entrants_count}</p>
                                    <p>Opened at: {new Date(race.opened_at).toLocaleTimeString()} on {new Date(race.opened_at).toLocaleDateString()}</p>
                                </div>
                                <p>Status: {race.status.verbose_value}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}