import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galleries - Voice of Truth',
  description: 'Browse our photo galleries and collections',
};

export default function GalleriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Galleries</h1>
        <p className="text-lg text-gray-600 mb-6">
          Explore our collection of photo galleries and visual content.
        </p>
      </div>
    </div>
  );
}
