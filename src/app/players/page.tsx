'use client'

import { useEffect, useState } from "react";
import { Leaderboard } from "../lib/interfaces";
import { fetchLeaderboard } from "../lib/data/fetch-data";
import PlayersFull from "../ui/players-full/players-full";

export default function Page() {

    const [data, setData] = useState<Leaderboard[]>([])
    const [goal, setGoal] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const racesData = await fetchLeaderboard();
            if (racesData !== null) setData(racesData.leaderboards);
        }

        fetchData();
    }, []);

    // console.log('players data', data);

    return (
        <div>
            {data.length && <PlayersFull
                goal={goal}
                leaderboards={data}
                setGoal={(goal) => setGoal(goal)}
            />}
        </div>
    );
}