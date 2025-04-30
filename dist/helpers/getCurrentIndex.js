import { getLocalDateTimeParts } from "./getLocalDateTimeParts.js";
export function getCurrentIndex() {
    const { hour, minute } = (() => {
        const { time } = getLocalDateTimeParts();
        const [h, m] = time.split(":").map(Number);
        return { hour: h, minute: m };
    })();
    const quarter = Math.floor(minute / 15);
    const index = hour * 4 + quarter;
    return index;
}
