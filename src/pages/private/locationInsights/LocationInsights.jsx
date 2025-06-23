import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Divider,
} from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import RoomIcon from "@mui/icons-material/Room";

const LocationInsights = () => {
  const geoChartData = {
    options: {
      chart: {
        id: "geo-distribution",
      },
      xaxis: {
        categories: ["Delhi", "Mumbai", "Bangalore", "Kolkata", "Hyderabad"],
      },
    },
    series: [
      {
        name: "Users",
        data: [4500, 3800, 3200, 2500, 1900],
      },
    ],
  };

  return (
    <div className="container py-4">
      <Typography variant="h4" gutterBottom>
        Location Insights
      </Typography>

      <Grid container spacing={4}>
        {/* Map or Global View Card */}
        <Grid item xs={12} md={8}>
          <Card className="shadow-sm">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                User Distribution Map
              </Typography>
              <Box
                className="d-flex justify-content-center align-items-center"
                style={{ height: 280, background: "#f8f9fa", borderRadius: 6 }}
              >
                <PublicIcon color="primary" fontSize="large" />
                <Typography className="ms-2 text-muted">
                  (Map View Placeholder)
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Key Metrics */}
        <Grid item xs={12} md={4}>
          <Card className="shadow-sm mb-3">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Total Cities Tracked
              </Typography>
              <Typography variant="h4" className="fw-bold">
                157
              </Typography>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Top City
              </Typography>
              <Typography variant="body1">
                <RoomIcon className="me-2 text-danger" />
                Delhi
              </Typography>
              <Typography variant="h6" className="fw-bold mt-2">
                4,500 Users
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Divider */}
      <Box className="my-4">
        <Divider />
      </Box>
    </div>
  );
};

export default LocationInsights;
