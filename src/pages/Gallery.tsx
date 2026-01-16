import { useEffect, useState } from 'react';
import { X, Award, GraduationCap } from 'lucide-react';
import HandDrawnCard from '../components/HandDrawnCard';
import { supabase, Artwork } from '../lib/supabase';

type FilterType = 'all' | 'middle' | 'high' | 'finalist' | 'winner';

export default function Gallery() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [filteredArtworks, setFilteredArtworks] = useState<Artwork[]>([]);
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArtworks();
  }, []);

  useEffect(() => {
    filterArtworks();
  }, [activeFilter, artworks]);

  const fetchArtworks = async () => {
    const { data } = await supabase
      .from('artworks')
      .select('*')
      .in('status', ['approved', 'finalist', 'winner'])
      .order('created_at', { ascending: false });

    if (data) {
      setArtworks(data);
      setFilteredArtworks(data);
    }
    setLoading(false);
  };

  const filterArtworks = () => {
    let filtered = artworks;

    switch (activeFilter) {
      case 'middle':
        filtered = artworks.filter((a) => a.grade_division === 'middle');
        break;
      case 'high':
        filtered = artworks.filter((a) => a.grade_division === 'high');
        break;
      case 'finalist':
        filtered = artworks.filter((a) => a.status === 'finalist');
        break;
      case 'winner':
        filtered = artworks.filter((a) => a.status === 'winner');
        break;
      default:
        filtered = artworks;
    }

    setFilteredArtworks(filtered);
  };

  const filters: { id: FilterType; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'middle', label: 'Middle School' },
    { id: 'high', label: 'High School' },
    { id: 'finalist', label: 'Finalists' },
    { id: 'winner', label: 'Winners' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <section className="text-center space-y-6 mb-12">
        <h1 className="text-5xl md:text-6xl font-bold">Gallery</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore AI-generated artworks from talented Bay Area students
        </p>
      </section>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`
              px-5 py-2 border-2 border-gray-900 font-medium transition-all
              ${
                activeFilter === filter.id
                  ? 'bg-lime-400 text-gray-900'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }
            `}
            style={{
              clipPath: 'polygon(0% 3%, 3% 0%, 97% 0%, 100% 3%, 100% 97%, 97% 100%, 3% 100%, 0% 97%)',
            }}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center py-20">
          <p className="text-gray-600">Loading artworks...</p>
        </div>
      ) : filteredArtworks.length === 0 ? (
        <div className="text-center py-20">
          <HandDrawnCard>
            <p className="text-gray-600">No artworks found for this filter.</p>
          </HandDrawnCard>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtworks.map((artwork) => (
            <HandDrawnCard
              key={artwork.id}
              hover
              className="group cursor-pointer"
              onClick={() => setSelectedArtwork(artwork)}
            >
              <div className="aspect-square bg-gray-100 mb-4 overflow-hidden relative">
                <img
                  src={artwork.image_url}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                {artwork.status === 'winner' && (
                  <div className="absolute top-2 right-2 bg-lime-400 border-2 border-gray-900 p-2">
                    <Award size={20} />
                  </div>
                )}
              </div>
              <h3 className="font-bold mb-2">{artwork.title}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <GraduationCap size={16} />
                <span className="capitalize">{artwork.grade_division} School</span>
              </div>
              {artwork.status !== 'approved' && (
                <span className="inline-block mt-2 px-3 py-1 bg-lime-400 border border-gray-900 text-xs font-bold uppercase">
                  {artwork.status}
                </span>
              )}
            </HandDrawnCard>
          ))}
        </div>
      )}

      {selectedArtwork && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedArtwork(null)}
        >
          <div
            className="bg-neutral-50 border-4 border-gray-900 max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArtwork(null)}
              className="absolute top-4 right-4 bg-white border-2 border-gray-900 p-2 hover:bg-gray-100 z-10"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              <div className="aspect-square bg-gray-100 border-2 border-gray-900">
                <img
                  src={selectedArtwork.image_url}
                  alt={selectedArtwork.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedArtwork.title}</h2>
                  <p className="text-gray-600">by {selectedArtwork.artist_name}</p>
                  <div className="flex gap-2 mt-3">
                    <span className="px-3 py-1 bg-white border-2 border-gray-900 text-xs font-semibold uppercase">
                      {selectedArtwork.grade_division} School
                    </span>
                    {selectedArtwork.status !== 'approved' && (
                      <span className="px-3 py-1 bg-lime-400 border-2 border-gray-900 text-xs font-bold uppercase">
                        {selectedArtwork.status}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Artist Statement</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedArtwork.artist_statement}</p>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Tools Used</h3>
                  <p className="text-gray-700">{selectedArtwork.tools_used}</p>
                </div>

                {selectedArtwork.prompt_excerpt && (
                  <div>
                    <h3 className="font-bold mb-2">Prompt Excerpt</h3>
                    <p className="text-sm text-gray-600 italic border-l-2 border-lime-400 pl-4">
                      {selectedArtwork.prompt_excerpt}
                    </p>
                  </div>
                )}

                {selectedArtwork.process_note && (
                  <div>
                    <h3 className="font-bold mb-2">Process Note</h3>
                    <p className="text-sm text-gray-700">{selectedArtwork.process_note}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
