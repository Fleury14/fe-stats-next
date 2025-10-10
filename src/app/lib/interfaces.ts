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

interface UserSearchResponse {
    results: User[];
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
    entrants: Entrant[];
    opened_at: string;
    start_delay: Date;
    started_at: string;
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

interface Entrant {
    finish_time: string;
    finished_at: Date;
    has_comment: boolean;
    place: number;
    place_ordinal: string;
    score: number | null;
    score_change: number;
    status: {
        value: string;
        verbose_value: string;
        help_text: string;
    }
    stream_live: boolean;
    stream_override: boolean;
    team: string | null;
    user: User;
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

interface PlayerRacesResponse {
    count: number;
    num_pages: number;
    races: Race[];
}

interface Schedule {
    Date: string;
    "Player 1": string;
    "Player 2": string;
    "Game #": string;
    Winner: string;
    "Player 1 Time": string;
    "Player 2 Time": string;
    "Player 1 Team": string;
    "Player 2 Team": string;
    Channel: string;
    Restreamer: string;
    Comms: string;
    Tracker: string;
}

interface ScheduleSheet {
    data: Schedule[];
}

interface PlayerDetailResponse {
    id: string;
    full_name: string;
    name: string;
    discriminator: string;
    avatar: string;
    pronouns: string;
    flair: string;
    twitch_name: string;
    twitch_display_name: string;
    twitch_channel: string;
    can_moderate: boolean;
    stats: {
        joined: number;
        first: number;
        second: number;
        third: number;
        forfeits: number;
    }
    teams: string[];

}

interface TLPlayerRaceResponse {
    raceId: number;
    roomName: string;
    raceType: string;
    raceHost: string;
    flagset: string;
    seedId: number;
    endedAt: string;
    entrants: TLEntrant[];
    metadata: {
        Goal: string;
        Description: string;
        EntrantsCount: string;
    }
}

interface TLEntrant {
    name: string;
    twitchName: string;
    racetimeId: string;
    finishTime: string;
    placement: number;
    entrantMetadata: {
        score: string;
        comment: string;
        scoreChange: string;
    }
}

interface TLHead2HeadRace {
    raceId: number;
    roomName: string;
    raceType: string;
    raceHost: string;
    flagset: string;
    endedAt: string;
    seedId: string;
    entrants: TLEntrant[];
    metadata: {
        Goal: string;
        Description: string;
        EntrantsCount: string;
    }
}

interface MatchupData {
    wins1: number;
    wins2: number;
    ties: number;
}

export type { Leaderboard, LeaderboardResponse, CategoryData, Race, RecentRaceResponse, Entrant, User, PlayerRacesResponse, UserSearchResponse, ScheduleSheet, Schedule, PlayerDetailResponse, TLPlayerRaceResponse, TLHead2HeadRace, MatchupData }