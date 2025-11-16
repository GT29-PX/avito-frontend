export type AdStatus = "pending" | "approved" | "rejected" | "rework";

export type AdPriority = "normal" | "urgent";

export interface Ad {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  createdAt: string;

  status: AdStatus;
  priority: AdPriority;

  images: string[];
  characteristics: Record<string, string>;

  seller: Seller;
  moderationHistory: ModerationRecord[];
}


export interface Seller {
  id: string;
  name: string;
  rating: number;        // 0–5
  adsCount: number;
  registeredAt: string;  // ISO date
}


export type ModerationAction =
  | "approved"
  | "rejected"
  | "rework";

export interface ModerationRecord {
  id: string;
  moderator: string;
  action: ModerationAction;
  date: string;          // ISO timestamp
  comment?: string;
}
