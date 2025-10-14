import { MatchupData, TLHead2HeadRace } from "@/app/lib/interfaces";

export default function ParseMatchupData({id1, id2, matchupData}: {id1: string, id2: string, matchupData: TLHead2HeadRace[]}):MatchupData {

    console.log('parsing matchup', matchupData)

    let wins1 = 0;
    let wins2 = 0;
    let ties = 0;
    let mov1 = 0;
    let mov2 = 0;
    const mov1Time:number[] = [];
    const mov2Time:number[] = [];

    matchupData.forEach(matchup => {
        const entrant1 = matchup.entrants.find(entrant => entrant.racetimeId === id1);
        const entrant2 = matchup.entrants.find(entrant => entrant.racetimeId === id2);
        if (!entrant1 || !entrant2) {
            console.error("error in parser, unable to find entrants in matchup race:", matchup.raceId);
        } else {
            const e1Finish = entrant1.finishTime.split(":");
            const e2Finish = entrant2.finishTime.split(":");
            const e1Time = (+e1Finish[0] * 3600) + (+e1Finish[1] * 60) + Math.floor(+e1Finish[2]);
            const e2Time = (+e2Finish[0] * 3600) + (+e2Finish[1] * 60) + Math.floor(+e2Finish[2]);
            if (entrant1.placement < entrant2.placement) {
                wins1++;
                mov1Time.push(e2Time - e1Time);
            }
            if (entrant1.placement > entrant2.placement) {
                wins2++;
                mov2Time.push(e1Time - e2Time);
            }
            if (entrant1.placement === entrant2.placement) ties++;
        }
        
    })

    if (mov1Time.length) {
        const sum = mov1Time.reduce((acc, val) => acc + val, 0)
        mov1 = (sum / mov1Time.length);
    }
    if (mov2Time.length) {
        const sum = mov2Time.reduce((acc, val) => acc + val, 0)
        mov2 = (sum / mov2Time.length);
    }

    return { wins1, wins2, ties, mov1, mov2 }
}