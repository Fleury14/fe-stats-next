import { MatchupData, TLHead2HeadRace } from "@/app/lib/interfaces";

export default function ParseMatchupData({id1, id2, matchupData}: {id1: string, id2: string, matchupData: TLHead2HeadRace[]}):MatchupData {

    console.log('parsing matchup', matchupData)

    let wins1 = 0;
    let wins2 = 0;
    let ties = 0;

    matchupData.forEach(matchup => {
        const entrant1 = matchup.entrants.find(entrant => entrant.racetimeId === id1);
        const entrant2 = matchup.entrants.find(entrant => entrant.racetimeId === id2);
        if (!entrant1 || !entrant2) {
            console.error("error in parser, unable to find entrants in matchup race:", matchup.raceId);
        } else {
            if (entrant1.placement < entrant2.placement) wins1++;
            if (entrant1.placement > entrant2.placement) wins2++;
            if (entrant1.placement === entrant2.placement) ties++;
        }
        
    })

    return { wins1, wins2, ties }
}