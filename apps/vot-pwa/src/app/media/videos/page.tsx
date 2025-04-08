import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Videos - Voice of Truth',
  description: 'Watch our collection of videos',
};

export default function VideosPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8">
        <h1 className="text-4xl font-bold mb-4">Videos</h1>
        <p className="text-lg mb-4">Browse through our collection of videos.</p>
      </div>
    </div>
  );
}
