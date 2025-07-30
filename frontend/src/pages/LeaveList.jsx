import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeaves } from '../features/leave/leaveThunks';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const LeaveList = () => {
  const dispatch = useDispatch();
  const raw = useSelector(state => state.leave.list);
  const leaves = Array.isArray(raw) ? raw : [];

  useEffect(() => {
    dispatch(fetchLeaves());
  }, [dispatch]);

  if (leaves.length === 0) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography>No leave requests found.</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Employee</TableCell>
              <TableCell>From</TableCell>
              <TableCell>To</TableCell>
              <TableCell>Reason</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaves.map(l => (
              <TableRow key={l._id} hover>
                <TableCell>{l.employee?.name || l.employee}</TableCell>
                <TableCell>{l.from?.slice(0, 10)}</TableCell>
                <TableCell>{l.to?.slice(0, 10)}</TableCell>
                <TableCell>{l.reason}</TableCell>
                <TableCell>{l.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default LeaveList;
