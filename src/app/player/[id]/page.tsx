'use client'

import { useState, useEffect } from "react";
import { useParams  } from "next/navigation";
import { PlayerDetailResponse, TLPlayerRaceResponse } from "@/app/lib/interfaces";
import { fetchUserDetails } from "@/app/lib/data/fetch-data";
import PlayerDetail from "@/app/ui/player-detail/player-detail";
import { fetchTLUserRaces } from "@/app/lib/data/fetch-tellah-data";

export default function Page() {
    const params = useParams<{id: string}>()
    const { id } = params;

    const [details, setDetails] = useState<PlayerDetailResponse | null>(null)
    const [userRaces, setUserRaces] = useState<TLPlayerRaceResponse[] | null>(null)

     useEffect(() => {
        const fetchRaces = async (id: string) => {
            const TLRaces = await fetchTLUserRaces(id);
            if (TLRaces !== null) setUserRaces(TLRaces)
        }

        const fetchData = async () => {
            const userDetails = await fetchUserDetails(id);
            if (userDetails !== null) {
                setDetails(userDetails);
                fetchRaces(id)
            }
        }

        fetchData();
    }, [id]);

    // console.log('user data', details, userRaces);

    return (
        <div>
            {(details === null || userRaces === null) ? (
                <p>Loading...</p>
            ) : (
                <PlayerDetail 
                    details={details}
                    TLRaces={userRaces}
                />
            )}
        </div>
    );
}



