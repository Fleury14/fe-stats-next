import { PlayerDetailResponse, Race } from "@/app/lib/interfaces";

export default function PlayerDetail({ races, details }: { races: Race[], details: PlayerDetailResponse }) {
    return (
        <h1>Races {races.length}</h1>
    );

}