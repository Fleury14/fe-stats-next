'use client'

import { fetchLeaderboard } from '@/app/lib/data/fetch-data';
import { Leaderboard } from '@/app/lib/interfaces';
import {useState, useEffect} from 'react';


export default function LeaderboardFront() {

    const [data, setData] = useState<Leaderboard[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const leaderData = await fetchLeaderboard();
            if (leaderData !== null) setData(leaderData.leaderboards);
        }

        fetchData();
    }, []);

    console.log('data', data);

    return (
        <div>
            { data.length === 0 ? <div /> : (
                <div className='flex flex-col'>
                    {data[0].goal}
                    {data[0].rankings.map(rank => {
                        return (
                            <div className='flex flex-between w-7xl'>
                                <p>{rank.user.name}</p>
                                <p>{rank.score}</p>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )

    
}