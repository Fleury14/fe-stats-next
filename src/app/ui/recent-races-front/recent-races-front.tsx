'use client'

import { useState, useEffect } from "react";
import { Race } from "@/app/lib/interfaces";
import { fetchLastFiveRaces } from "@/app/lib/data/fetch-data";
import Link from 'next/link';

export default function RecentRacesFront() {
        const [data, setData] = useState<Race[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const racesData = await fetchLastFiveRaces();
            if (racesData !== null) setData(racesData);
        }

        fetchData();
    }, []);

    return (
        <div>
            <h2 className="font-bold text-xl text-center m-5">Recent Races</h2>
            <div className="flex flex-col">
                {data.map(race => {
                    return (
                        <Link key={race.name} href={`/race/${race.name.slice(6)}`}>
                            <div className='flex flex-col p-3 hover:bg-slate-800'>
                                <p className="text-xl font-bold text-yellow-200">{race.name.slice(6)}</p>
                                <div className="flex">
                                    <p className="mr-10">Entrants: {race.entrants_count}</p>
                                    <p>Opened at: {new Date(race.opened_at).toLocaleTimeString()} on {new Date(race.opened_at).toLocaleDateString()}</p>
                                </div>
                                <p>Goal: {race.goal.name}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    )

}