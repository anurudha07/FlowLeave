import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../features/users/userThunks';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const UsersList = () => {
  const dispatch = useDispatch();
  const raw = useSelector(state => state.user.list);
  const users = Array.isArray(raw) ? raw : [];
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchUsers({ page, limit: 5 }));
  }, [dispatch, page]);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      {users.length === 0 ? (
        <Typography>No users found.</Typography>
      ) : (
        <TableContainer component={Paper} elevation={3}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Department</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map(user => (
                <TableRow key={user._id} hover>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.department}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Button
          disabled={page === 1}
          onClick={() => setPage(p => p - 1)}
          sx={{ mr: 1 }}
        >
          Prev
        </Button>
        <Button onClick={() => setPage(p => p + 1)}>Next</Button>
      </Box>
    </Container>
  );
};

export default UsersList;
