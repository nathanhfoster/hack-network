import { Box, Container, Typography } from '@mui/material';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Media - Voice of Truth',
  description:
    'Media content including galleries, videos, streams, and podcasts',
};

export default function MediaPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Media
        </Typography>
        <Typography variant="body1" paragraph>
          Explore our diverse collection of media content including photo
          galleries, videos, live streams, and podcasts.
        </Typography>
      </Box>
    </Container>
  );
}
