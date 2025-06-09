'use client'

import { useState, useEffect } from "react";
import { useParams  } from "next/navigation";
import { PlayerRacesResponse, User } from "@/app/lib/interfaces";
import { fetchUserData } from "@/app/lib/data/fetch-data";

export default function Page() {
    const params = useParams<{id: string}>()
    const { id } = params;

    const [data, setData] = useState<PlayerRacesResponse | null>(null);

     useEffect(() => {
        const fetchData = async () => {
            const userData = await fetchUserData(id);
            if (userData !== null) setData(userData);
        }

        fetchData();
    }, [id]);

    console.log('user data', data);

    return (
        <div>
            {data === null ? (
                <p>Loading...</p>
            ) : (
                <p>{data.count}</p>
            )}
        </div>
    );
}



