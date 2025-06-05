interface User {
    avatar: string;
    can_moderate: boolean;
    discriminator: string;
    flair:  string;
    full_name: string;
    id: string;
    name: string;
    pronouns: string;
    twitch_channel: string;
    twitch_display_name: string;
    twitch_name: string;
    url: string;
}

interface Ranking {
    best_time: string;
    place: number;
    place_ordinal: string;
    score: number; 
    times_raced: 6;
    user: User;
}

interface Leaderboard {
    goal: string;
    num_ranked: number;
    rankings: Ranking[];
}

interface LeaderboardResponse {
    leaderboards: Leaderboard[]
}

export type { Leaderboard, LeaderboardResponse }