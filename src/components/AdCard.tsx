import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  CardActionArea
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AdCard({ ad }) {
  const navigate = useNavigate();

  return (
    <Card>
      <CardActionArea onClick={() => navigate(`/item/${ad.id}`)}>
        <CardMedia
          component="img"
          height="160"
          image={ad.images?.[0] || "https://via.placeholder.com/400x250"}
        />

        <CardContent>
          <Typography variant="h6" gutterBottom>
            {ad.title}
          </Typography>

          <Typography variant="body1" color="text.secondary">
            {ad.price} $
          </Typography>

          <Chip
            label={ad.status}
            size="small"
            color={
              ad.status === "approved"
                ? "success"
                : ad.status === "rejected"
                ? "error"
                : "warning"
            }
            sx={{ mt: 1, mr: 1 }}
          />

          {ad.priority === "urgent" && (
            <Chip label="Urgent" color="warning" size="small" sx={{ mt: 1 }} />
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
