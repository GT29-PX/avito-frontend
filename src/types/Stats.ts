export interface StatsSummary {
  totalCheckedToday: number;
  totalCheckedWeek: number;
  totalCheckedMonth: number;

  approvedPercent: number;
  rejectedPercent: number;
  reworkPercent: number;

  avgReviewTimeSec: number;
}

export interface DailyActivity {
  date: string;      // "2025-02-14"
  count: number;
}

export interface CategoryStats {
  category: string;
  count: number;
}

export interface StatsData {
  summary: StatsSummary;
  activity: DailyActivity[];
  decisions: {
    approved: number;
    rejected: number;
    rework: number;
  };
  categories: CategoryStats[];
}
