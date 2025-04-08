import { Box, Container, Typography } from '@mui/material';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Podcasts - Voice of Truth',
  description: 'Listen to our podcasts and audio content',
};

export default function PodcastsPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Podcasts
        </Typography>
        <Typography variant="body1" paragraph>
          Listen to our collection of podcasts and audio content.
        </Typography>
      </Box>
    </Container>
  );
}
