import { Box, Container, Typography } from '@mui/material';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Live Streams - Voice of Truth',
  description: 'Watch our live streams and broadcasts',
};

export default function StreamsPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Live Streams
        </Typography>
        <Typography variant="body1" paragraph>
          Watch our live broadcasts and streams.
        </Typography>
      </Box>
    </Container>
  );
}
