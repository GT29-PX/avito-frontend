import { Pagination } from "@mui/material";

export default function AppPagination({ total, page, onChange }) {
  const pages = Math.max(1, Math.ceil(total / 10));

  return (
    <Pagination
      count={pages}
      page={page}
      onChange={(_, p) => onChange(p)}
      color="primary"
    />
  );
}