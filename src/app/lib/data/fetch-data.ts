import { Race, CategoryData, LeaderboardResponse, RecentRaceResponse, PlayerRacesResponse, PlayerDetailResponse, UserSearchResponse } from "../interfaces";

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

async function fetchActiveRaces() {
    const response: Response = await fetch('https://racetime.gg/ff4fe/data');
    if (!response.ok) {
        console.error('Error during Active Races fetch');
        return null;
    } else {
        const result:Promise<CategoryData> = response.json();
        return (await result).current_races;
    }
}

async function fetchLastFiveRaces() {
    const response: Response = await fetch('https://racetime.gg/ff4fe/races/data');
    if (!response.ok) {
        console.error('Error during Last Five Races fetch');
        return null;
    } else {
        const result:Promise<RecentRaceResponse> = response.json();
        return (await result).races;
    }
}

async function fetchPageRaceData(page: number) {
    const response: Response = await fetch(`https://racetime.gg/ff4fe/races/data?page=${page}`);
    if (!response.ok) {
        console.error('Error during Last Five Races fetch');
        return null;
    } else {
        const result:Promise<RecentRaceResponse> = response.json();
        return (await result).races;
    }
}

async function fetchSingleRaceData(id: string) {
    const response: Response = await fetch(`https://racetime.gg/ff4fe/${id}/data`);
    if (!response.ok) {
        console.error('Error during Last Five Races fetch');
        return null;
    } else {
        const result:Promise<Race> = response.json();
        return result;
    }
}

async function fetchUserData(id: string) {
    const response: Response = await fetch(`https://racetime.gg/user/${id}/races/data`);
    if (!response.ok) {
        console.error('Error during User data request');
        return null;
    } else {
        const result:Promise<PlayerRacesResponse> = response.json();
        return result;
    }
}

async function fetchUserDetails(id: string) {
    const response: Response = await fetch(`https://racetime.gg/user/${id}/data`);
    if (!response.ok) {
        console.error('Error returning user detail: ' + id);
        return null;
    } else {
        const result:Promise<PlayerDetailResponse> = response.json();
        return result;
    }
}

async function fetchUserSearch(name: string) {
    const response: Response = await fetch(`https://racetime.gg/user/search?name=${name}`)
    if (!response.ok) {
        console.error('Error returning user search', name)
        return "";
    } else {
        const result:Promise<UserSearchResponse> = response.json();
        return result;
    }
}

export { fetchLeaderboard, fetchActiveRaces, fetchLastFiveRaces, fetchSingleRaceData, fetchUserData, fetchPageRaceData, fetchUserDetails, fetchUserSearch }