import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";

const Settings = () => {
  return (
    <div className="container py-4">
      <Typography variant="h4" gutterBottom>
        Admin Settings
      </Typography>

      <Grid container spacing={4}>
        {/* Profile Settings */}
        <Grid item xs={12} md={6}>
          <Card className="shadow-sm">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Profile Settings
              </Typography>
              <TextField
                fullWidth
                label="Admin Name"
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
              />
              <Button variant="contained" color="primary" className="mt-2">
                Update Profile
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Notification Settings */}
        <Grid item xs={12} md={6}>
          <Card className="shadow-sm">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Notification Settings
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Email Alerts"
                />
                <FormControlLabel
                  control={<Switch />}
                  label="Push Notifications"
                />
              </FormGroup>
              <Button variant="contained" color="primary" className="mt-2">
                Save Preferences
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Password Update */}
        <Grid item xs={12}>
          <Card className="shadow-sm">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Change Password
              </Typography>
              <TextField
                fullWidth
                label="Current Password"
                type="password"
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="New Password"
                type="password"
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Confirm New Password"
                type="password"
                variant="outlined"
                margin="normal"
              />
              <Button variant="contained" color="secondary" className="mt-2">
                Update Password
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Settings;
