import { getCurrentSlot } from "./getCurrentSlot";

export async function getPrice() {
  const response = await fetch(
    "https://ibex.bg/Ext/IDM_Homepage/fetch.php?lang=bg",
  );
  const data = await response.json();
  const intradayArray: intradayData[] = data[3];

  const todaysDate = new Date().toISOString().split("T")[0];
  const currentSlot = getCurrentSlot();

  const targetDateTime = `${todaysDate} ${currentSlot}`;

  const foundData = intradayArray.find(({ date }) => date === targetDateTime);
  const price = foundData ? foundData.price : null;
  return price;
}
