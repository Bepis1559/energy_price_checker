export function getLocalDateTimeParts() {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Sofia",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });
    const parts = formatter.formatToParts(now);
    const extract = (type) => parts.find((p) => p.type === type)?.value ?? "00";
    const date = `${extract("year")}-${extract("month")}-${extract("day")}`;
    const time = `${extract("hour")}:${extract("minute")}:00`;
    return { date, time };
}
