'use client'

import { fetchTLH2H } from '@/app/lib/data/fetch-tellah-data';
import { TLHead2HeadRace } from '@/app/lib/interfaces';
import { useState, useEffect} from 'react';
import ParseMatchupData from './parse-matchup';
import Link from 'next/link';
import { secsToTime } from '@/app/lib/helpers';
import { Bangers } from 'next/font/google';
import './matchup-data.css';

const bangers = Bangers({ weight: ['400']});

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
            <div className="flex flex-col items-center">
                <div className="text-center m-2 text-bold text-2xl text-yellow-200">Matchup Data</div>
                <div className="flex justify-around border-5 w-5/6 rounded-md flex-col">
                    <div className="flex justify-around p-5 bg-slate-700 items-center matchup-row">
                        <p className={`${bangers.className} text-5xl w-1/3 text-center`}>{parsedMatchup.wins1}</p>
                        <p className="text-xl w-1/3 text-center">Wins</p>
                        <p className={`${bangers.className} text-5xl w-1/3 text-center`}>{parsedMatchup.wins2}</p>
                    </div>
                    <div className="flex justify-around p-5 bg-slate-700 items-center matchup-row">
                        <p className={`${bangers.className} text-5xl w-1/3 text-center`}>{secsToTime(parsedMatchup.mov1)}</p>
                        <p className="text-xl w-1/3 text-center">Average Margin of Victory</p>
                        <p className={`${bangers.className} text-5xl w-1/3 text-center`}>{secsToTime(parsedMatchup.mov2)}</p>
                    </div>
                    <div className="flex justify-around p-5 bg-slate-700 items-center matchup-row">
                        <p className={`${bangers.className} text-5xl w-1/3 text-center`}>{parsedMatchup.snipe1}</p>
                        <p className="text-xl w-1/3 text-center">Snipes</p>
                        <p className={`${bangers.className} text-5xl w-1/3 text-center`}>{parsedMatchup.snipe2}</p>
                    </div>
                    <div className="flex justify-around p-5 bg-slate-700 items-center matchup-row">
                        <p className={`${bangers.className} text-5xl w-1/3 text-center`}>{parsedMatchup.sub51}</p>
                        <p className="text-xl w-1/3 text-center">Sub 5m difference</p>
                        <p className={`${bangers.className} text-5xl w-1/3 text-center`}>{parsedMatchup.sub52}</p>
                    </div>
                    <div className="flex justify-around p-5 bg-slate-700 items-center">
                        <p className={`${bangers.className} text-5xl w-1/3 text-center`}>{parsedMatchup.fifteenplus1}</p>
                        <p className="text-xl w-1/3 text-center">&gt;15m difference</p>
                        <p className={`${bangers.className} text-5xl w-1/3 text-center`}>{parsedMatchup.fifteenplus2}</p>
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