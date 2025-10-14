function parseRTTimeString(timeString: string) {
    if (timeString === "" || timeString === null) {
        return ""
    }

    const hrIndex = timeString.indexOf("H");
    let hours = timeString.slice(hrIndex - 2, hrIndex);
    if (hours[0] === "0") {
        hours = hours.slice(1);
    }
    const mtIndex = timeString.indexOf("M");
    const minutes = timeString.slice(mtIndex - 2, mtIndex);
    const seconds = timeString.slice(mtIndex + 1, mtIndex + 3);
    return `${hours}:${minutes}:${seconds}`
}

function escapeRaceTimeId(id: string):string {
    console.log(id, id.replace("%", "%25"))
    return id.replace("%", "%25");
}


function secsToTime(secs: number) {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = Math.floor(secs % 60);
    return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

export { parseRTTimeString, escapeRaceTimeId, secsToTime }