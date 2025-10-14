'use client'

import { fetchTLH2H } from '@/app/lib/data/fetch-tellah-data';
import { TLHead2HeadRace } from '@/app/lib/interfaces';
import { useState, useEffect} from 'react';
import ParseMatchupData from './parse-matchup';
import Link from 'next/link';
import { secsToTime } from '@/app/lib/helpers';

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
                        <p>{secsToTime(parsedMatchup.mov1)}</p>
                    </div>
                    <div className="flex flex-col">
                        <p>Wins</p>
                        <p>Average Margin of Victory</p>
                    </div>
                    <div className="flex flex-col">
                        <p>{parsedMatchup.wins2}</p>
                        <p>{secsToTime(parsedMatchup.mov2)}</p>
                    </div>
                </div>
                <div className="flex flex-col m-5 items-center">
                    {results.map(result => {
                        return (
                            <Link className="text-blue-400 hover:bg-slate-800" key={result.raceId} href={`/race/${result.roomName}`}>{result.roomName}</Link>
                            // <p key={result.raceId}>{result.roomName}</p>
                        );
                    })}
                </div>
            </div>
        );
    }
}