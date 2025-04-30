import { getCurrentSlot } from "./getCurrentSlot";
export async function getPrice() {
    const response = await fetch("https://ibex.bg/Ext/IDM_Homepage/fetch.php?lang=bg");
    const data = await response.json();
    const intradayArray = data[3];
    const targetDateTime = getCurrentSlot();
    const foundData = intradayArray.find(({ date }) => date === targetDateTime);
    const price = foundData ? foundData.price : null;
    return price;
}
