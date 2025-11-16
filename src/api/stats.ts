import { http } from "./http";
import { StatsData } from "../types/Stats";

export async function getStats(): Promise<StatsData> {
  const { data } = await http.get("/stats");
  return data;
}
