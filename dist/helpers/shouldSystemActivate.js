export function shouldSystemActivate(timedPrices, currentHour) {
    const priceForCurrentHour = timedPrices.find((timedPrice) => timedPrice.hour == currentHour);
    return priceForCurrentHour && priceForCurrentHour.price > 0;
}
