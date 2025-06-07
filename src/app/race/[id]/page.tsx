'use client';

import { useState, useEffect } from "react";

import { useParams  } from "next/navigation";
import { Race } from "@/app/lib/interfaces";
import { fetchSingleRaceData } from "@/app/lib/data/fetch-data";

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
    
    console.log('data', data)

    return (
        <div>
            {id}
            
        </div>
    );
}