import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Live Streams - Voice of Truth',
  description: 'Watch our live streams and broadcasts',
};

export default function StreamsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8">
        <h1 className="text-4xl font-bold mb-4">Live Streams</h1>
        <p className="text-lg mb-4">Watch our live broadcasts and streams.</p>
      </div>
    </div>
  );
}
