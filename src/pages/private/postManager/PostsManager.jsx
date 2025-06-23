import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Search as SearchIcon,
  MoreVert as MoreVertIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";

const dummyPosts = [
  {
    id: 1,
    title: "Improving Engagement with Interactive Charts",
    author: "Admin",
    date: "2025-06-20",
    status: "Published",
  },
  {
    id: 2,
    title: "Weekly Newsletter #42",
    author: "John Doe",
    date: "2025-06-18",
    status: "Draft",
  },
  {
    id: 3,
    title: "New Feature: Location Analytics",
    author: "Jane Smith",
    date: "2025-06-15",
    status: "Published",
  },
];

const PostsManager = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handleMenuOpen = (event, postId) => {
    setAnchorEl(event.currentTarget);
    setSelectedPostId(postId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedPostId(null);
  };

  const filteredPosts = dummyPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container py-4">
      <Typography variant="h4" gutterBottom>
        Posts Manager
      </Typography>

      {/* Filter and Create */}
      <Grid container spacing={2} alignItems="center" className="mb-3">
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          className="text-md-end text-start mt-2 mt-md-0"
        >
          <Button variant="contained" color="primary">
            + New Post
          </Button>
        </Grid>
      </Grid>

      {/* Posts Table */}
      <Card className="shadow-sm">
        <CardContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Author</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <TableRow key={post.id}>
                    <TableCell>{post.title}</TableCell>
                    <TableCell>{post.author}</TableCell>
                    <TableCell>{post.date}</TableCell>
                    <TableCell>
                      <span
                        className={`badge ${
                          post.status === "Published"
                            ? "bg-success"
                            : "bg-secondary"
                        }`}
                      >
                        {post.status}
                      </span>
                    </TableCell>
                    <TableCell align="right">
                      <IconButton onClick={(e) => handleMenuOpen(e, post.id)}>
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        anchorEl={anchorEl}
                        open={selectedPostId === post.id}
                        onClose={handleMenuClose}
                      >
                        <MenuItem onClick={handleMenuClose}>
                          <EditIcon fontSize="small" className="me-2" />
                          Edit
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                          <DeleteIcon
                            fontSize="small"
                            className="me-2 text-danger"
                          />
                          Delete
                        </MenuItem>
                      </Menu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-muted">
                    No posts found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostsManager;
