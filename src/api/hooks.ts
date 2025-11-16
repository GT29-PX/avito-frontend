import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAds, getAd, approveAd, rejectAd, reworkAd } from "./ads";
import { getStats } from "./stats";

// LIST PAGE
export function useAdsQuery(filters: any) {
  return useQuery({
    queryKey: ["ads", filters],
    queryFn: () => getAds(filters),
  });
}

// ITEM PAGE
export function useAdQuery(id: string) {
  return useQuery({
    queryKey: ["ad", id],
    queryFn: () => getAd(id),
  });
}

// STATS
export function useStatsQuery() {
  return useQuery({
    queryKey: ["stats"],
    queryFn: getStats,
  });
}

// APPROVE / REJECT / REWORK MUTATIONS
export function useApproveMutation(id: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: () => approveAd(id),
    onSuccess: () => {
      qc.invalidateQueries(["ads"]);
      qc.invalidateQueries(["ad", id]);
    }
  });
}

export function useRejectMutation(id: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (reason: string) => rejectAd(id, reason),
    onSuccess: () => {
      qc.invalidateQueries(["ads"]);
      qc.invalidateQueries(["ad", id]);
    }
  });
}

export function useReworkMutation(id: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (note: string) => reworkAd(id, note),
    onSuccess: () => {
      qc.invalidateQueries(["ads"]);
      qc.invalidateQueries(["ad", id]);
    }
  });
}
