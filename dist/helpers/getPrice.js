import { getCurrentIndex } from "./getCurrentIndex.js";
export async function getPrice() {
    const response = await fetch("https://ibex.bg/Ext/IDM_Homepage/fetch.php?lang=bg");
    const data = await response.json();
    const quarterHourArray = data[1];
    const index = getCurrentIndex();
    const foundData = quarterHourArray[index];
    const price = foundData ? foundData.price : null;
    return price;
}
