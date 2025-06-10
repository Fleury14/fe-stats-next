import { Schedule } from "@/app/lib/interfaces";
import './afc-schedule.css';

export default function AFCSchedule({ upcoming, completed}: { upcoming: Schedule[], completed: Schedule[]}) {
    return (
        <div>
            <h2 className="font-bold text-center text-2xl mb-5">Schedule</h2>
            <table className='table-auto afc-table'>
                <thead>
                    <tr className="font-bold text-xl text-yellow-200">
                        <th>Date/Time</th>
                        <th>Matchup</th>
                        <th>Restream Data</th>
                    </tr>
                </thead>
                <tbody>
                    {upcoming.map((match, index) => {
                        if (match.Date === "") return null;
                        return (
                        <tr key={`${match['Player 1']}-${match['Player 2']}`} className={`${index % 2 > 0 ? "bg-slate-800" : ""}`}>
                            <td>{match.Date}</td>
                            <td>{match['Player 1']} vs. {match['Player 2']}</td>
                            <td>{match.Channel && (<span>{match.Channel}</span>)}</td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
            <h2 className="font-bold text-2xl text-center mt-5 mb-5">Completed Matches</h2>
            <table className="table-auto afc-table">
                <thead>
                    <tr>
                        <th>
                            Date/Time
                        </th>
                        <th>Racer 1</th>
                        <th>Racer 2</th>
                    </tr>
                </thead>
                <tbody>
                    {completed.map((match, index) => {
                        if (match.Date === "") return null;
                        return (
                            <tr key={`${match['Player 1']}-${match['Player 2']}`} className={`${index % 2 > 0 ? "bg-slate-800" : ""}`}>
                                <td>{match.Date}</td>
                                <td className={`${match.Winner === "1" ? "bg-green-800" : ""}`}>{match["Player 1"]}: {match["Player 1 Time"]}</td>
                                <td className={`${match.Winner === "2" ? "bg-green-800" : ""}`}>{match["Player 2"]}: {match["Player 2 Time"]}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}