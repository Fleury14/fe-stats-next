'use client';

import { useState, useEffect } from 'react';
import { User } from '@/app/lib/interfaces';
import "./player-selector.css";
import { fetchTLUserSearch } from "@/app/lib/data/fetch-tellah-data";
import MatchupData from '../matchup-data/matchup-data';

export default function PlayerSelector() {

    const [user1, setUser1] = useState("");
    const [id1, setId1] = useState("");
    const [results1, setResults1] = useState<User[]>([]);
    const [user2, setUser2] = useState("");
    const [id2, setId2] = useState("");
    const [results2, setResults2] = useState<User[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const searchResults = await fetchTLUserSearch(user1);
            if (searchResults !== "") {
                setResults1(searchResults.results)
            }
            const searchResults2 = await fetchTLUserSearch(user2);
            if (searchResults2 !== "") {
                setResults2(searchResults2.results)
            }
        }

        fetchData();
    }, [user1, user2]);

    return (
        <div>
            <div className="flex justify-around">
                <div>
                    <input
                        className={`ps-input-box ${id1 !== "" ? "bg-emerald-800" : ""}`}
                        type="text"
                        value={user1}
                        name="user1"
                        onChange={(e) => setUser1(e.target.value)} 
                        />
                    {results1.map((result, index) => {
                        if (index === 9) {
                            return <p key="elipses">...</p>
                        } else if (index < 9) {
                            return (
                                <div key={result.id} className="ps-search-result">
                                    <button onClick={() => {
                                        setId1(result.id);
                                        setUser1(result.name)
                                        setResults1([])
                                    }}>
                                        {result.full_name}
                                    </button>
                                </div>
                            );
                        }
                        
                    })}
                </div>
                <div>
                    <input
                        className={`ps-input-box ${id2 !== "" ? "bg-emerald-800" : ""}`}
                        type="text"
                        value={user2}
                        name="user2"
                        onChange={(e) => setUser2(e.target.value)} />
                    {results2.map((result, index) => {
                        if (index === 9) {
                            return <p key="elipses2">...</p>
                        } else if (index < 9) {
                            return (
                                <div key={result.id} className="ps-search-result">
                                    <button onClick={() => {
                                        setId2(result.id)
                                        setUser2(result.name)
                                        setResults2([])
                                    }}

                                    >{result.full_name}</button>
                                </div>
                            );
                        }
                        
                    })}
                </div>
            </div>{/*  end selector */}
            <MatchupData 
                id1={id1}
                id2={id2}
            />
        </div>
    );

}