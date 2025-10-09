import { useState, useEffect } from 'react';
import { User } from '@/app/lib/interfaces';
import "./player-selector.css";
import { fetchUserSearch } from '@/app/lib/data/fetch-data';

export default function PlayerSelector({ selectPlayer } : { selectPlayer: (player:string) => void }) {

    const [user, setUser] = useState("");
    const [results, setResults] = useState<User[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const searchResults = await fetchUserSearch(user);
            if (searchResults !== "") {
                setResults(searchResults.results)
            }
        }

        fetchData();
    }, [user]);

    return (
        <div>
            <input className="ps-input-box" type="text" value={user} name="user" onChange={(e) => setUser(e.target.value)} />
            {results.map(result => {
                return (
                    <div key={result.id}>
                        <p>{result.full_name}</p>
                    </div>
                );
            })}
        </div>
    );

}