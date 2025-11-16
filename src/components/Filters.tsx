import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography
} from "@mui/material";

export default function Filters({ filters, onChange }) {
  return (
    <Box>
      <Typography variant="h6" mb={2}>
        Filters
      </Typography>

      {/* Search */}
      <TextField
        label="Search"
        fullWidth
        size="small"
        value={filters.search}
        onChange={(e) => onChange({ search: e.target.value })}
        sx={{ mb: 2 }}
      />

      {/* Category */}
      <FormControl fullWidth size="small" sx={{ mb: 2 }}>
        <InputLabel>Category</InputLabel>
        <Select
          value={filters.category}
          label="Category"
          onChange={(e) => onChange({ category: e.target.value })}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Electronics">Electronics</MenuItem>
          <MenuItem value="Home">Home</MenuItem>
          <MenuItem value="Fashion">Fashion</MenuItem>
          <MenuItem value="Sports">Sports</MenuItem>
        </Select>
      </FormControl>

      {/* Sorting */}
      <FormControl fullWidth size="small" sx={{ mb: 2 }}>
        <InputLabel>Sort</InputLabel>
        <Select
          value={filters.sort}
          label="Sort"
          onChange={(e) => onChange({ sort: e.target.value })}
        >
          <MenuItem value="date_desc">Newest first</MenuItem>
          <MenuItem value="date_asc">Oldest first</MenuItem>
          <MenuItem value="price_desc">Price high → low</MenuItem>
          <MenuItem value="price_asc">Price low → high</MenuItem>
          <MenuItem value="priority">Urgent first</MenuItem>
        </Select>
      </FormControl>

      {/* Reset */}
      <Button
        variant="outlined"
        fullWidth
        onClick={() =>
          onChange({
            search: "",
            status: [],
            category: "",
            minPrice: null,
            maxPrice: null,
            sort: "date_desc"
          })
        }
      >
        Reset
      </Button>
    </Box>
  );
}
