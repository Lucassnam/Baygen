import { useEffect, useState } from 'react';
import { Sparkles, Upload, Award, Calendar, Users, Target } from 'lucide-react';
import HandDrawnCard from '../components/HandDrawnCard';
import Button from '../components/Button';
import { supabase, Artwork, Judge } from '../lib/supabase';

export default function Home() {
  const [featuredArtworks, setFeaturedArtworks] = useState<Artwork[]>([]);
  const [featuredJudges, setFeaturedJudges] = useState<Judge[]>([]);

  useEffect(() => {
    fetchFeaturedContent();
  }, []);

  const fetchFeaturedContent = async () => {
    const { data: artworks } = await supabase
      .from('artworks')
      .select('*')
      .in('status', ['approved', 'finalist', 'winner'])
      .order('created_at', { ascending: false })
      .limit(6);

    const { data: judges } = await supabase
      .from('judges')
      .select('*')
      .order('display_order', { ascending: true })
      .limit(4);

    if (artworks) setFeaturedArtworks(artworks);
    if (judges) setFeaturedJudges(judges);
  };

  return (
    <div className="space-y-24 pb-24">
      <section className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            BAY GEN AI
          </h1>
          <div className="relative inline-block">
            <h2 className="text-2xl md:text-3xl text-gray-700 font-light">
              A Bay Area AI Art Competition for Students
            </h2>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="8"
              viewBox="0 0 300 8"
              preserveAspectRatio="none"
            >
              <path
                d="M2,5 Q150,2 298,5"
                fill="none"
                stroke="#a3e635"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Exploring the intersection of creativity, technology, and human expression through AI-generated art.
            Where algorithms meet imagination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button variant="primary" to="/submit">
              Submit Your Work
            </Button>
            <Button variant="secondary" to="/gallery">
              View Gallery
            </Button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <HandDrawnCard className="text-center">
            <Users className="mx-auto mb-4 text-lime-500" size={32} />
            <h3 className="font-bold mb-2">Eligibility</h3>
            <p className="text-sm text-gray-600">Middle & High School Students</p>
          </HandDrawnCard>

          <HandDrawnCard className="text-center">
            <Calendar className="mx-auto mb-4 text-lime-500" size={32} />
            <h3 className="font-bold mb-2">Deadline</h3>
            <p className="text-sm text-gray-600">March 15, 2024</p>
          </HandDrawnCard>

          <HandDrawnCard className="text-center">
            <Target className="mx-auto mb-4 text-lime-500" size={32} />
            <h3 className="font-bold mb-2">Theme</h3>
            <p className="text-sm text-gray-600">Reality Reimagined</p>
          </HandDrawnCard>

          <HandDrawnCard className="text-center">
            <Award className="mx-auto mb-4 text-lime-500" size={32} />
            <h3 className="font-bold mb-2">Prize</h3>
            <p className="text-sm text-gray-600">$500 + Recognition</p>
          </HandDrawnCard>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto bg-lime-400 border-2 border-gray-900 flex items-center justify-center text-2xl font-bold">
              1
            </div>
            <h3 className="text-xl font-bold">Create</h3>
            <p className="text-gray-600">
              Use AI tools to explore the theme and create original artwork that expresses your unique perspective.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto bg-lime-400 border-2 border-gray-900 flex items-center justify-center text-2xl font-bold">
              2
            </div>
            <h3 className="text-xl font-bold">Submit</h3>
            <p className="text-gray-600">
              Upload your artwork with an artist statement explaining your process and connection to the theme.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto bg-lime-400 border-2 border-gray-900 flex items-center justify-center text-2xl font-bold">
              3
            </div>
            <h3 className="text-xl font-bold">Get Juried</h3>
            <p className="text-gray-600">
              Our expert panel evaluates entries on concept, execution, creativity, and artistic vision.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <HandDrawnCard className="text-center">
          <Sparkles className="mx-auto mb-4 text-lime-500" size={40} />
          <h2 className="text-3xl font-bold mb-4">Judged On</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Entries are evaluated on concept & meaning, AI tool use, visual impact, originality, and artist statement.
          </p>
          <Button variant="secondary" to="/submit" className="inline-block">
            View Full Rubric
          </Button>
        </HandDrawnCard>
      </section>

      {featuredArtworks.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Gallery</h2>
            <p className="text-gray-600">Recent submissions from talented student artists</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArtworks.map((artwork) => (
              <HandDrawnCard key={artwork.id} hover className="group">
                <div className="aspect-square bg-gray-100 mb-4 overflow-hidden">
                  <img
                    src={artwork.image_url}
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="font-bold mb-1">{artwork.title}</h3>
                <p className="text-sm text-gray-600 capitalize">{artwork.grade_division} School</p>
              </HandDrawnCard>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="secondary" to="/gallery">
              View Full Gallery
            </Button>
          </div>
        </section>
      )}

      {featuredJudges.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet the Jury</h2>
            <p className="text-gray-600">
              Experts from art, technology, and education evaluate submissions
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredJudges.map((judge) => (
              <HandDrawnCard key={judge.id} className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 border-2 border-gray-900 rounded-full overflow-hidden">
                  {judge.photo_url ? (
                    <img src={judge.photo_url} alt={judge.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <Users size={32} />
                    </div>
                  )}
                </div>
                <h3 className="font-bold mb-1">{judge.name}</h3>
                <p className="text-sm text-lime-600 font-medium">{judge.role}</p>
              </HandDrawnCard>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="secondary" to="/jury">
              View All Jurors
            </Button>
          </div>
        </section>
      )}
    </div>
  );
}
