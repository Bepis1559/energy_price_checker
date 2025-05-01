export async function fetchPricesForCurrentDay() {
    const url = "https://ibex.bg/Ext/IDM_Homepage/fetch.php?lang=bg";
    const res = await fetch(url);
    const data = (await res.json());
    const prices = Array.from(data[0]).map(({ price }) => price);
    return prices;
}
