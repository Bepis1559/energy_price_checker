import { getPrice } from "./getPrice";
export async function handleFetching() {
    try {
        return await getPrice();
    }
    catch (error) {
        console.error("First fetch failed, retrying in 30 seconds...", error);
        await new Promise((resolve) => setTimeout(resolve, 30000));
        try {
            return await getPrice();
        }
        catch (secondError) {
            console.error("Second fetch also failed:", secondError);
            return null;
        }
    }
}
