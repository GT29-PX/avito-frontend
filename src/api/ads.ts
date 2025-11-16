import { http } from "./http";
import { Ad } from "../types/Ad";
import { AdsListResponse } from "../types/Api";

// Fetch ads with filters
export async function getAds(params?: any): Promise<AdsListResponse> {
  const { data } = await http.get("/ads", { params });
  return data;
}

// Fetch a single ad by ID
export async function getAd(id: string): Promise<Ad> {
  const { data } = await http.get(`/ads/${id}`);
  return data;
}

// Approve ad
export async function approveAd(id: string) {
  return http.patch(`/ads/${id}`, {
    status: "approved"
  });
}

// Reject ad
export async function rejectAd(id: string, reason: string) {
  return http.patch(`/ads/${id}`, {
    status: "rejected",
    moderationHistory: [
      {
        id: crypto.randomUUID(),
        moderator: "You",
        action: "rejected",
        date: new Date().toISOString(),
        comment: reason
      }
    ]
  });
}

// Send to rework
export async function reworkAd(id: string, note?: string) {
  return http.patch(`/ads/${id}`, {
    status: "rework",
    moderationHistory: [
      {
        id: crypto.randomUUID(),
        moderator: "You",
        action: "rework",
        date: new Date().toISOString(),
        comment: note
      }
    ]
  });
}
