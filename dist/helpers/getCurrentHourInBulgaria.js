export function getCurrentHourInBulgaria() {
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Europe/Sofia",
        hour: "numeric",
        hour12: false,
    });
    const parts = formatter.formatToParts(new Date());
    const hourPart = parts.find((p) => p.type === "hour");
    return hourPart ? parseInt(hourPart.value, 10) : NaN;
}
