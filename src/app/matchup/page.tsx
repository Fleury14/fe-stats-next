'use client';

import { useState } from "react";
import PlayerSelector from "../ui/player-selector/player-selector";

export default function Page() {

    const [player1, setPlayer1] = useState("")

    return (
        <div>
            <h1 className="text-center">Matchup Stats</h1>
            <PlayerSelector
                selectPlayer={(player) => setPlayer1(player)}
            />
        </div>
    );
}