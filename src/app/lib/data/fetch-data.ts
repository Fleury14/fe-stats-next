import { LeaderboardResponse } from "../interfaces";
import { NextApiResponse } from 'next';

async function fetchLeaderboard() {
    const response: Response = await fetch(`https://racetime.gg/ff4fe/leaderboards/data`);
    if (!response.ok) {
        console.error('Error during leaderboards fetch');
        return null;
    } else {
        const result:Promise<LeaderboardResponse> = response.json();
        return result;
    }
}

export { fetchLeaderboard }