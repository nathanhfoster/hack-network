import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Media - Voice of Truth',
  description:
    'Media content including galleries, videos, streams, and podcasts',
};

export default function MediaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8">
        <h1 className="text-4xl font-bold mb-4">Media</h1>
        <p className="text-lg mb-4">
          Explore our diverse collection of media content including photo
          galleries, videos, live streams, and podcasts.
        </p>
      </div>
    </div>
  );
}
