import { useState } from "react";
import { useDispatch } from "react-redux";
import Container from "@mui/material/Container";
import { applyLeave } from '../features/leave/leaveThunks';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
const ApplyLeave = () => {
  const [form, setForm] = useState({
    employee: "",
    from: "",
    to: "",
    reason: "",
  });
  const dispatch = useDispatch();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(applyLeave(form)).unwrap();
      setSnackbar({
        open: true,
        message: "Leave request submitted!",
        severity: "success",
      });
      setForm({ employee: '', from: '', to: '', reason: '' });
    } catch (err) {
      setSnackbar({
        open: true,
        message: err.message || "Registration failed.",
        severity: "error",
      });
    }
  };

  return (
    <Container maxWidth="xs">
      <Card elevation={0} sx={{ backgroundColor: "#1f1f1f", borderRadius: 2 }}>
        <CardHeader
          title="Leave request"
          sx={{ color: "#ffffff", textAlign: "center" }}
        />
        <CardContent>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              label="Employee name"
              name="employee"
              value={form.employee}
              onChange={handleChange}
              required
              variant="outlined"
              fullWidth
            />
            <TextField
              label="From"
              name="from"
              type="date"
              value={form.from}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              required
              variant="outlined"
              fullWidth
            />
            <TextField
              label="To"
              name="to"
              type="date"
              value={form.to}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              required
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Reason"
              name="reason"
              multiline
              rows={3}
              value={form.reason}
              onChange={handleChange}
              required
              variant="outlined"
              fullWidth
            />
            <Button
              className="primary-button"
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </CardContent>
      </Card>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          severity={snackbar.severity}
          onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ApplyLeave;
