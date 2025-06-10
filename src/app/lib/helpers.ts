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

export { parseRTTimeString }