'use client'

import { useState, useEffect } from "react";
import { useParams  } from "next/navigation";
import { PlayerDetailResponse, PlayerRacesResponse } from "@/app/lib/interfaces";
import { fetchUserData, fetchUserDetails } from "@/app/lib/data/fetch-data";
import PlayerDetail from "@/app/ui/player-detail/player-detail";

export default function Page() {
    const params = useParams<{id: string}>()
    const { id } = params;

    const [data, setData] = useState<PlayerRacesResponse | null>(null);
    const [details, setDetails] = useState<PlayerDetailResponse | null>(null)

     useEffect(() => {
        const fetchData = async () => {
            const userData = await fetchUserData(id);
            if (userData !== null) setData(userData);
        }

        fetchData();
    }, [id]);

     useEffect(() => {
        const fetchData = async () => {
            const userDetails = await fetchUserDetails(id);
            if (userDetails !== null) setDetails(userDetails);
        }

        fetchData();
    }, [id]);

    console.log('user data', data, details);

    return (
        <div>
            {(data === null || details === null) ? (
                <p>Loading...</p>
            ) : (
                <PlayerDetail 
                    races={data.races}
                    details={details}
                />
            )}
        </div>
    );
}



