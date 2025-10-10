'use client'

import { fetchTLH2H } from '@/app/lib/data/fetch-tellah-data';
import { TLHead2HeadRace } from '@/app/lib/interfaces';
import { useState, useEffect} from 'react';

export default function MatchupData({ id1, id2}: {id1: string, id2: string}) {

    const [results, setResults] = useState<TLHead2HeadRace[]>([])

    useEffect(() => {
        if (!id1 || !id2) return;
        const fetchData = async () => {
            const H2HResults = await fetchTLH2H(id1, id2);
            if (H2HResults !== "") {
                setResults(H2HResults)
            }
        }

        fetchData();
    }, []);

    if (!id1 || !id2) {
        return <div></div>
    } else {
        return (
            <div className="text-center">Matchup Data</div>
        );
    }
}