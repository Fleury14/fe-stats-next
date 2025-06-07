'use client'

import { fetchActiveRaces } from '@/app/lib/data/fetch-data';
import {useState, useEffect} from 'react';
import { Race } from '@/app/lib/interfaces';

export default function ActiveRacesFront() {

    const [data, setData] = useState<Race[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const racesData = await fetchActiveRaces();
            if (racesData !== null) setData(racesData);
        }

        fetchData();
    }, []);

    console.log('data', data);

    return (
        <div>
            <h2 className="font-bold text-xl text-center m-5">Active Races</h2>
            <div className="flex flex-col">
                {data.map(race => {
                    return (
                        <div key={race.name} className='flex flex-col'>
                            <p className="text-xl font-bold text-yellow-200">{race.name.slice(6)}</p>
                            <div className="flex">
                                <p className="mr-10">Entrants: {race.entrants_count}</p>
                                <p>Opened at: {new Date(race.opened_at).toLocaleTimeString()}</p>
                            </div>
                            <p>Status: {race.status.verbose_value}</p>
                        </div>
                        
                    );
                })}
            </div>
        </div>
    )
}