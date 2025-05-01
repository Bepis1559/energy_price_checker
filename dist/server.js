import express from "express";
import cors from "cors";
import { fetchPricesForCurrentDay } from "./helpers/fetchPricesForCurrentDay.js";
import { getTimedPrices } from "./helpers/getTimedPrices.js";
import { getCurrentHourInBulgaria } from "./helpers/getCurrentHourInBulgaria.js";
import { shouldSystemActivate } from "./helpers/shouldSystemActivate.js";
const app = express();
app.use(cors());
const PORT = process.env.PORT ?? 5000;
// Define API endpoint
app.get("/shouldActivate", async (req, res) => {
    const prices = await fetchPricesForCurrentDay();
    const timedPrices = getTimedPrices(prices);
    const currentHour = getCurrentHourInBulgaria();
    const shouldActivate = shouldSystemActivate(timedPrices, currentHour);
    console.log(shouldActivate);
    res.status(200).json({ shouldActivate });
});
app.listen(PORT, () => {
    console.log(`⚡ Server is running on port ${PORT}`);
});
