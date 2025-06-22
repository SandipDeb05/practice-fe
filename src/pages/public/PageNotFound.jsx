import React from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center text-center">
      <div>
        <Typography variant="h1" component="h1" color="primary" gutterBottom>
          404
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          Oops! Page Not Found
        </Typography>
        <Typography variant="body1" color="textSecondary" className="mb-4">
          The page you're looking for doesn't exist or has been moved.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
        >
          Go Back Home
        </Button>
      </div>
    </div>
  );
};

export default PageNotFound;
