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
        </div>
    )
}