import './race-display.css';
import { Entrant } from '@/app/lib/interfaces';
import { parseRTTimeString } from '@/app/lib/helpers';
import { Bangers } from 'next/font/google';

export default function RaceDisplay({ id, info, status, entrants, open_time, start_time, author } : { id : string, info: string, status: { value: string, help_text: string, verbose_value: string}, entrants: Entrant[], open_time: string, start_time: string, author: string }) {
    
    const bangers = Bangers({ subsets: ['latin'], weight: ['400'] });
    const feIndex = info.indexOf("https://ff4fe.");
    const alphaIndex = info.indexOf("https://alpha.ff4fe");
    const stringIndex = feIndex >= 0 ? feIndex : (alphaIndex >= 0 ? alphaIndex : -1);
    let seed = "";
    let subInfo = "";
    let endpoint = -1;
    if (stringIndex >= 0) {
        endpoint = info.indexOf("\n", stringIndex + 1);
        endpoint = endpoint === -1 ? info.length : endpoint;
        seed = info.substring(stringIndex, endpoint);
        const after = info.slice(endpoint);
        const before = info.slice(0, stringIndex);
        subInfo = before + " " + after;
    }

    const openDate = new Date(open_time);
    const startDate = new Date(start_time);

    let color = ""
    switch (status.value) {
        case "finished":
            color = "bg-fuchsia-700";
            break;
        case "in_progress":
            color = "bg-green-700";
            break;
        case "cancelled":
            color = "bg-red-700";
            break;
        case "open":
            color = "bg-blue-700";
            break;
        default:
            break;
    }

    return (
        <div className="div mt-5">
            <h1 className="font-bold text-4xl text-yellow-200 text-center">{id}</h1>
            {stringIndex >= 0 ? (
                <div>
                    <a href={seed}>
                        <p className="text-center mt-3 text-blue-300">{seed}</p>
                    </a>
                    <p className="text-center mt-3">{subInfo}</p>
                </div>
            ) : (
                <p className="text-center mt-3 text-xl">{info}</p>    
            )}
            <div className="flex justify-center m-3">
                <p className={`w-1/4 text-center p-3 text-2xl ${color}`}>Status: {status.verbose_value}</p>
            </div>
            <div className="race-results-container mt-10">
                {entrants.map((entrant, index) => {
                    return (
                        <div key={entrant.user.name} className={`p-5 text-2xl flex justify-between items-center ${index % 2 > 0 ? "bg-slate-800" : ""}`}>
                            <div className="flex">
                                <p className={`${bangers.className} results-place`}>{entrant.place_ordinal}</p>
                                <p className="race-cell">{entrant.user.name}</p>
                            </div>
                            <div>
                                <p className={`${bangers.className} race-cell-mid`}>{parseRTTimeString(entrant.finish_time)}</p>
                            </div>
                            <div className={`${bangers.className} flex race-cell-right justify-end`}>
                                <p>{entrant.score || "unranked"}</p>
                                {entrant.score_change && <p> -&gt; <span className={entrant.score_change < 0 ? 'text-red-500' : 'text-emerald-500' }>{entrant.score_change}</span></p>}
                            </div>
                                 
                        </div>
                    )
                })}
            </div>
            <p className='mt-10 text-center'>Opened by {author} at {openDate.toLocaleTimeString()} on {openDate.toLocaleDateString()}</p>
            {!!startDate && <p className='mt-5 text-center'>Race started at {startDate.toLocaleTimeString()}</p>}
        </div>
    );     
}