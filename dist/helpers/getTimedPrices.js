export function getTimedPrices(prices) {
    const timedPrices = prices.map((price, index) => {
        return { price, hour: index + 1 };
    });
    return timedPrices;
}
