import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/users/userThunks";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const departments = ["Developer", "Designing", "Sales & Marketing", "HR"];

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    department: "",
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
      await dispatch(registerUser(form)).unwrap();
      setSnackbar({
        open: true,
        message: "Registration successful!",
        severity: "success",
      });
      setForm({ name: "", email: "", password: "", department: "" }); // optional: reset form
    } catch (err) {
      setSnackbar({
        open: true,
        message: "Name or Email already exists",
        severity: "error",
      });
    }
  };

  return (
    <Container maxWidth="xs">
      <Card elevation={0} sx={{ backgroundColor: "#000000", borderRadius: 0 }}>
        <CardHeader
          title="Register User"
          sx={{ color: "#ffffff", textAlign: "center" }}
        />
        <CardContent>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              required
              variant="outlined"
              fullWidth
            />
            <TextField
              select
              label="Department"
              name="department"
              value={form.department}
              onChange={handleChange}
              required
              variant="outlined"
              fullWidth
            >
              {departments.map((dep) => (
                <MenuItem key={dep} value={dep}>
                  {dep}
                </MenuItem>
              ))}
            </TextField>
            <Button
              className="primary-button"
              variant="contained"
              type="submit"
            >
              Register
            </Button>
          </Box>
        </CardContent>
      </Card>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          severity={snackbar.severity}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Register;
