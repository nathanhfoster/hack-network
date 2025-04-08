import { Box, Container, Typography } from '@mui/material';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Videos - Voice of Truth',
  description: 'Watch our collection of videos',
};

export default function VideosPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Videos
        </Typography>
        <Typography variant="body1" paragraph>
          Browse through our collection of videos.
        </Typography>
      </Box>
    </Container>
  );
}
