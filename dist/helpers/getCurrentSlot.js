import { getLocalDateTimeParts } from "./getLocalDateTimeParts.js";
export function getCurrentSlot() {
    const { date, time } = getLocalDateTimeParts();
    const [hourStr, minuteStr] = time.split(":");
    const hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10);
    let slotMinute = 0;
    if (minute < 15)
        slotMinute = 0;
    else if (minute < 30)
        slotMinute = 15;
    else if (minute < 45)
        slotMinute = 30;
    else
        slotMinute = 45;
    const formattedHour = String(hour).padStart(2, "0");
    const formattedMinute = String(slotMinute).padStart(2, "0");
    const slotTime = `${formattedHour}:${formattedMinute}:00`;
    return `${date} ${slotTime}`;
}
