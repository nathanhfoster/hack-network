import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Podcasts - Voice of Truth',
  description: 'Listen to our podcasts and audio content',
};

export default function PodcastsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8">
        <h1 className="text-4xl font-bold mb-4">Podcasts</h1>
        <p className="text-lg mb-4">
          Listen to our collection of podcasts and audio content.
        </p>
      </div>
    </div>
  );
}
