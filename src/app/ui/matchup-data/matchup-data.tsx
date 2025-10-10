'use client'

import { fetchTLH2H } from '@/app/lib/data/fetch-tellah-data';
import { TLHead2HeadRace } from '@/app/lib/interfaces';
import { useState, useEffect} from 'react';
import ParseMatchupData from './parse-matchup';

export default function MatchupData({ id1, id2}: {id1: string, id2: string}) {

    const [results, setResults] = useState<TLHead2HeadRace[]>([])

    useEffect(() => {
        console.log('fetch function')
        if (!id1 || !id2) return;
        console.log('fetching matchup');
        const fetchData = async () => {
            const H2HResults = await fetchTLH2H(id1, id2);
            console.log('h2h reaults', H2HResults)
            if (H2HResults !== "") {
                setResults(H2HResults)
            }
        }

        fetchData();
    }, [id1, id2]);

    if (!id1 || !id2) {
        return <div></div>
    } else {
        const parsedMatchup = ParseMatchupData({ id1, id2, matchupData: results })
        return (
            <div>
                <div className="text-center">Matchup Data</div>
                <div className="flex justify-around">
                    <div className="flex flex-col">
                        <p>{parsedMatchup.wins1}</p>
                    </div>
                    <div className="flex flex-col">
                        <p>Wins</p>
                    </div>
                    <div className="flex flex-col">
                        <p>{parsedMatchup.wins2}</p>
                    </div>
                </div>
            </div>
        );
    }
}