import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Divider,
} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import BarChartIcon from "@mui/icons-material/BarChart";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const Analytics = () => {
  const chartOptions = {
    options: {
      chart: { id: "basic-bar" },
      xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May"] },
    },
    series: [
      {
        name: "Users",
        data: [30, 40, 35, 50, 49],
      },
    ],
  };

  return (
    <div className="container py-4">
      <Typography variant="h4" gutterBottom>
        Admin Analytics
      </Typography>

      {/* KPI Cards */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Card className="shadow-sm text-center p-3">
            <CardContent>
              <TrendingUpIcon fontSize="large" color="primary" />
              <Typography variant="h6" className="mt-2">
                Total Views
              </Typography>
              <Typography variant="h5" className="fw-bold">
                120.5K
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card className="shadow-sm text-center p-3">
            <CardContent>
              <PeopleAltIcon fontSize="large" color="success" />
              <Typography variant="h6" className="mt-2">
                Active Users
              </Typography>
              <Typography variant="h5" className="fw-bold">
                8,450
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card className="shadow-sm text-center p-3">
            <CardContent>
              <MonetizationOnIcon fontSize="large" color="warning" />
              <Typography variant="h6" className="mt-2">
                Revenue
              </Typography>
              <Typography variant="h5" className="fw-bold">
                ₹1.25M
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card className="shadow-sm text-center p-3">
            <CardContent>
              <BarChartIcon fontSize="large" color="error" />
              <Typography variant="h6" className="mt-2">
                Bounce Rate
              </Typography>
              <Typography variant="h5" className="fw-bold">
                38.7%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Divider */}
      <Box className="my-4">
        <Divider />
      </Box>

      {/* Chart Section */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card className="shadow-sm">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Top Performing Channels
              </Typography>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                  YouTube <span className="fw-bold">45.2%</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  Facebook <span className="fw-bold">30.1%</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  LinkedIn <span className="fw-bold">18.7%</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  Email <span className="fw-bold">6.0%</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Analytics;
