'use client'

import { useState, useEffect } from "react";
import { useParams  } from "next/navigation";
import { PlayerDetailResponse, PlayerRacesResponse, TLPlayerRaceResponse } from "@/app/lib/interfaces";
import { fetchUserData, fetchUserDetails } from "@/app/lib/data/fetch-data";
import PlayerDetail from "@/app/ui/player-detail/player-detail";
import { fetchTLUserRaces } from "@/app/lib/data/fetch-tellah-data";

export default function Page() {
    const params = useParams<{id: string}>()
    const { id } = params;
    const nonStateTL:TLPlayerRaceResponse[] = [];

    const [data, setData] = useState<PlayerRacesResponse | null>(null);
    const [details, setDetails] = useState<PlayerDetailResponse | null>(null)
    const [userRaces, setUserRaces] = useState<TLPlayerRaceResponse[] | null>(null)

     useEffect(() => {
        const fetchData = async () => {
            const userData = await fetchUserData(id);
            if (userData !== null) setData(userData);
        }

        fetchData();
    }, [id]);

     useEffect(() => {
        const fetchRaces = async (description: string) => {
            const TLRaces = await fetchTLUserRaces(description);
            if (TLRaces !== null) setUserRaces(TLRaces)
        }

        const fetchData = async () => {
            const userDetails = await fetchUserDetails(id);
            if (userDetails !== null) {
                setDetails(userDetails);
                fetchRaces(userDetails.name)
            }
        }

        fetchData();
    }, [id]);

    console.log('user data', data, details, userRaces);

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



