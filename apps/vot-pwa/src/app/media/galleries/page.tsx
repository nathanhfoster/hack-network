import { Box, Container, Typography } from '@mui/material';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galleries - Voice of Truth',
  description: 'Browse our photo galleries and collections',
};

export default function GalleriesPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Galleries
        </Typography>
        <Typography variant="body1" paragraph>
          Explore our collection of photo galleries and visual content.
        </Typography>
      </Box>
    </Container>
  );
}
