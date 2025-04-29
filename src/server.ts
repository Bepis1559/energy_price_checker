import express from "express";
import { handleFetching } from "./helpers/handleFetching";
import cors from "cors";
const app = express();
app.use(cors());

const PORT = process.env.PORT ?? 5000;

let latestPrice: string | null = null;

// Update the price immediately and every 5 minutes
async function updatePrice() {
  latestPrice = await handleFetching();
}
await updatePrice();
setInterval(updatePrice, 300000);

// Define API endpoint
app.get("/price", (req, res) => {
  if (latestPrice !== null) {
    res.json({ price: latestPrice });
  } else {
    res.status(503).json({ error: "Price not ready yet" });
  }
});

app.listen(PORT, () => {
  console.log(`⚡ Server is running on port ${PORT}`);
});
