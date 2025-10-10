'use client';

import { useState, useEffect } from "react";
import { useParams  } from "next/navigation";
import { Race } from "@/app/lib/interfaces";
import { fetchSingleRaceData } from "@/app/lib/data/fetch-data";
import RaceDisplay from "./race.display";

export default function Page() {
    
    const params = useParams<{id: string}>();
    const { id } = params;
    
    const [data, setData] = useState<Race | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const racesData = await fetchSingleRaceData(id);
            if (racesData !== null) setData(racesData);
        }

        fetchData();
    }, [id]);

    // console.log('huh', data)
    
    return (
        <div>
            {data === null ? (
                <div className="text-center mt-10">No Race was found.</div>
            ) : (
                <RaceDisplay 
                    id={id}
                    info={data.info}
                    status={data.status}
                    entrants={data.entrants}
                    open_time={data.opened_at}
                    start_time={data.started_at}
                    author={data.opened_by ? data.opened_by.name : "Tellah's Library"}
                />
            )}
            
            
        </div>
    );
}