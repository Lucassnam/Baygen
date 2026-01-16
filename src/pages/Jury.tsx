import { useEffect, useState } from 'react';
import { Users, Scale, Eye, ExternalLink } from 'lucide-react';
import HandDrawnCard from '../components/HandDrawnCard';
import Button from '../components/Button';
import { supabase, Judge } from '../lib/supabase';

export default function Jury() {
  const [judges, setJudges] = useState<Judge[]>([]);

  useEffect(() => {
    fetchJudges();
  }, []);

  const fetchJudges = async () => {
    const { data } = await supabase
      .from('judges')
      .select('*')
      .order('display_order', { ascending: true });

    if (data) setJudges(data);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <section className="text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold">Jury Panel</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          BAY GEN AI is a juried competition. Our panel brings diverse perspectives from art, technology,
          education, and ethics to evaluate each submission fairly and thoughtfully.
        </p>
      </section>

      {judges.length === 0 ? (
        <div className="text-center">
          <HandDrawnCard>
            <Users className="mx-auto mb-4 text-gray-400" size={48} />
            <p className="text-gray-600">Jury panel will be announced soon.</p>
          </HandDrawnCard>
        </div>
      ) : (
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {judges.map((judge) => (
              <HandDrawnCard key={judge.id}>
                <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 border-2 border-gray-900 rounded-full overflow-hidden">
                  {judge.photo_url ? (
                    <img src={judge.photo_url} alt={judge.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <Users size={48} />
                    </div>
                  )}
                </div>
                <h3 className="font-bold text-xl mb-1 text-center">{judge.name}</h3>
                <p className="text-sm text-lime-600 font-semibold text-center mb-4">{judge.role}</p>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">{judge.bio}</p>
                <div className="flex gap-3 justify-center">
                  {judge.website_url && (
                    <a
                      href={judge.website_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900"
                      aria-label="Website"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                  {judge.linkedin_url && (
                    <a
                      href={judge.linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900"
                      aria-label="LinkedIn"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </HandDrawnCard>
            ))}
          </div>
        </section>
      )}

      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Juror Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <HandDrawnCard className="text-center">
            <Eye className="mx-auto mb-4 text-lime-500" size={36} />
            <h3 className="font-bold text-lg mb-2">Anonymous Review</h3>
            <p className="text-sm text-gray-600">
              All submissions are numbered and reviewed without artist names to ensure fair evaluation
            </p>
          </HandDrawnCard>

          <HandDrawnCard className="text-center">
            <Scale className="mx-auto mb-4 text-lime-500" size={36} />
            <h3 className="font-bold text-lg mb-2">Scoring Rubric</h3>
            <p className="text-sm text-gray-600">
              Each juror scores entries based on concept, execution, creativity, and alignment with theme
            </p>
          </HandDrawnCard>

          <HandDrawnCard className="text-center">
            <Users className="mx-auto mb-4 text-lime-500" size={36} />
            <h3 className="font-bold text-lg mb-2">Consensus Discussion</h3>
            <p className="text-sm text-gray-600">
              Finalists are selected through group discussion to balance different perspectives
            </p>
          </HandDrawnCard>
        </div>
      </section>

      <HandDrawnCard className="text-center space-y-6 py-8">
        <h2 className="text-2xl md:text-3xl font-bold">Interested in Judging?</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          We welcome artists, technologists, educators, and creative professionals to join our jury panel.
          Help shape the future of AI art in the Bay Area.
        </p>
        <Button variant="primary" to="mailto:hello@baygenai.org">
          Contact Us to Judge
        </Button>
      </HandDrawnCard>

      <HandDrawnCard>
        <h3 className="font-bold text-lg mb-4">Judging Rubric</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="font-semibold">Concept & Meaning</span>
              <span className="text-lime-600 font-bold">30%</span>
            </div>
            <p className="text-sm text-gray-600">
              How clearly and powerfully the work engages with the theme; depth of idea, message, and
              perspective
            </p>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="font-semibold">Use of AI Tools</span>
              <span className="text-lime-600 font-bold">25%</span>
            </div>
            <p className="text-sm text-gray-600">
              Prompt craft, iteration, creative tool use, and demonstration of intentional process
            </p>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="font-semibold">Visual Impact</span>
              <span className="text-lime-600 font-bold">20%</span>
            </div>
            <p className="text-sm text-gray-600">
              Composition, color, lighting, mood, and overall craftsmanship
            </p>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="font-semibold">Originality</span>
              <span className="text-lime-600 font-bold">15%</span>
            </div>
            <p className="text-sm text-gray-600">
              Uniqueness of concept, risk-taking, and avoidance of generic AI aesthetics
            </p>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="font-semibold">Artist Statement</span>
              <span className="text-lime-600 font-bold">10%</span>
            </div>
            <p className="text-sm text-gray-600">
              Clarity of intent and quality of explanation for how the work connects to the theme
            </p>
          </div>
        </div>
      </HandDrawnCard>
    </div>
  );
}
