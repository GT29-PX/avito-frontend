import { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useAdsQuery } from "../api/hooks";
import Filters from "./Filters";
import AdCard from "./AdCard";
import AppPagination from "./AppPagination";

export default function ListPage() {
  // Filters & pagination state
  const [filters, setFilters] = useState({
    search: "",
    status: [],
    category: "",
    minPrice: null,
    maxPrice: null,
    sort: "date_desc",
    page: 1
  });

  const { data, isLoading } = useAdsQuery(filters);

  const handleFilterChange = (newFilters: Partial<typeof filters>) => {
    setFilters({ ...filters, ...newFilters, page: 1 });
  };

  const handlePageChange = (page: number) => {
    setFilters({ ...filters, page });
  };

  return (
    <Box display="flex" gap={4}>
      {/* Filters panel */}
      <Box width={260}>
        <Filters filters={filters} onChange={handleFilterChange} />
      </Box>

      {/* Ads list */}
      <Box flexGrow={1}>
        <Typography variant="h4" mb={3}>
          Ads
        </Typography>

        {isLoading && <div>Loading…</div>}

        {!isLoading && (
          <>
            <Grid container spacing={2}>
              {data?.items?.map((ad) => (
                <Grid item xs={12} sm={6} md={4} key={ad.id}>
                  <AdCard ad={ad} />
                </Grid>
              ))}
            </Grid>

            <Box mt={3}>
              <AppPagination
                total={data?.total ?? 0}
                page={filters.page}
                onChange={handlePageChange}
              />
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}
