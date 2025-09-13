'use client'

import { fetchLeaderboard } from '@/app/lib/data/fetch-data';
import { Leaderboard } from '@/app/lib/interfaces';
import {useState, useEffect} from 'react';
import Link from "next/link";


export default function LeaderboardFront() {

    const [data, setData] = useState<Leaderboard[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const leaderData = await fetchLeaderboard();
            if (leaderData !== null) setData(leaderData.leaderboards);
        }

        fetchData();
    }, []);

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

    // for when i want to change what is the highlighted leaderboard
    const FRONT_PAGE_INDEX = 1

    return (
        <div className="p-5">
            { data.length === 0 ? <div /> : (
                <div className='flex flex-col'>
                    <p className="text-center font-bold text-xl m-5">{data[FRONT_PAGE_INDEX].goal}</p>
                    {data[FRONT_PAGE_INDEX].rankings.map((rank, index) => {
                        return (
                            <Link key={`${rank.user.name}`} href={`/player/${rank.user.id}`}>
                                <div className={`flex justify-between ${getColor((index + 1) / data[FRONT_PAGE_INDEX].rankings.length)}`}>
                                    <p>{rank.user.name}</p>
                                    <p>{rank.score}</p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            )}
        </div>
    )

    
}