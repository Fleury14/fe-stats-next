import PlayerSelector from "../ui/player-selector/player-selector";

export default function Page() {

    return (
        <div>
            <h1 className="text-center m-2 text-bold text-2xl text-yellow-200">Matchup Stats</h1>
            <PlayerSelector />
        </div>
    );
}