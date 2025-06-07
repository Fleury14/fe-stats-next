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

interface Race {
    version: number;
    name: string;
    status: {
        value: string;
        verbose_value: string;
        help_text: string;
    };
    url: string;
    data_url: string;
    websocket_url: string;
    websocket_bot_url: string;
    websocket_oauth_url: string;
    goal: {
        name: string;
        custom: boolean;
    };
    info: string;
    info_bot: string;
    info_user: string;
    entrants_count: number;
    entrants_count_finished: number;
    entrants_count_inactive: number;
    entrants: User[];
    opened_at: Date;
    start_delay: Date;
    started_at: Date;
    ended_at: Date;
    cancelled_at: Date;
    ranked: boolean;
    unlisted: boolean;
    time_limit: number;
    time_limit_auto_complete: boolean;
    require_even_teams: boolean;
    streaming_required: boolean;
    auto_start: boolean;
    opened_by: User;
    monitors: User[];
    recordable: boolean;
    recorded: boolean;
    recorded_by: User;
    disqualify_unready: boolean;
    allow_comments: boolean;
    hide_comments: boolean;
    hide_entrants: boolean;
    chat_restricted: boolean;
    allow_prerace_chat: boolean;
    allow_midrace_chat: boolean;
    allow_non_entrant_chat: boolean;
    chat_message_delay: number;
}

interface CategoryData {
    name: string;
    short_name: string;
    slug: string;
    data_url: string;
    image: string;
    info: string;
    streaming_required: boolean;
    owners: User[];
    moderators: User;
    goals: string[];
    current_races: Race[];
    emotes: string;
}

interface RecentRaceResponse {
    count: number;
    pages: number;
    races: Race[];
}

export type { Leaderboard, LeaderboardResponse, CategoryData, Race, RecentRaceResponse }