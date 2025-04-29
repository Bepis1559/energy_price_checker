export function getCurrentSlot() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();

  let slotHour = hour;
  let slotMinute = 0;

  if (minute >= 0 && minute < 15) {
    slotMinute = 0;
  } else if (minute >= 15 && minute < 30) {
    slotMinute = 15;
  } else if (minute >= 30 && minute < 45) {
    slotMinute = 30;
  } else if (minute >= 45) {
    slotMinute = 45;
  }

  const formattedHour = String(slotHour).padStart(2, "0");
  const formattedMinute = String(slotMinute).padStart(2, "0");

  return `${formattedHour}:${formattedMinute}:00`;
}
