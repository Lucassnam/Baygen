import { useState } from 'react';
import { Upload, AlertCircle, CheckCircle } from 'lucide-react';
import HandDrawnCard from '../components/HandDrawnCard';
import Button from '../components/Button';
import { supabase } from '../lib/supabase';

export default function Submit() {
  const [formData, setFormData] = useState({
    title: '',
    artist_name: '',
    artist_email: '',
    grade_division: 'high' as 'middle' | 'high',
    school: '',
    artist_statement: '',
    tools_used: '',
    process_note: '',
    image_url: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const { error: submitError } = await supabase.from('artworks').insert([
      {
        ...formData,
        status: 'pending',
        theme_tag: '2024',
      },
    ]);

    if (submitError) {
      setError('Failed to submit. Please try again.');
      setSubmitting(false);
    } else {
      setSubmitted(true);
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <HandDrawnCard className="text-center space-y-6 py-12">
          <CheckCircle className="mx-auto text-lime-500" size={64} />
          <h2 className="text-3xl font-bold">Submission Received!</h2>
          <p className="text-gray-700 max-w-xl mx-auto">
            Thank you for submitting to BAY GEN AI. Our jury will review your work and contact you at{' '}
            <strong>{formData.artist_email}</strong> with results.
          </p>
          <Button variant="secondary" to="/gallery">
            View Gallery
          </Button>
        </HandDrawnCard>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold">Submit Your Work</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Share your AI-generated artwork with the BAY GEN AI community
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <HandDrawnCard className="text-center">
          <AlertCircle className="mx-auto mb-3 text-lime-500" size={28} />
          <h3 className="font-bold mb-2">Eligibility</h3>
          <p className="text-sm text-gray-600">Current middle or high school students in the Bay Area</p>
        </HandDrawnCard>

        <HandDrawnCard className="text-center">
          <AlertCircle className="mx-auto mb-3 text-lime-500" size={28} />
          <h3 className="font-bold mb-2">Deadline</h3>
          <p className="text-sm text-gray-600">March 15, 2024 at 11:59 PM PST</p>
        </HandDrawnCard>

        <HandDrawnCard className="text-center">
          <AlertCircle className="mx-auto mb-3 text-lime-500" size={28} />
          <h3 className="font-bold mb-2">Theme</h3>
          <p className="text-sm text-gray-600">Reality Reimagined</p>
        </HandDrawnCard>
      </div>

      <HandDrawnCard>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-semibold mb-2">Artwork Title *</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2 border-2 border-gray-900 focus:outline-none focus:ring-2 focus:ring-lime-400"
              placeholder="Enter your artwork title"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-2">Your Name *</label>
              <input
                type="text"
                required
                value={formData.artist_name}
                onChange={(e) => setFormData({ ...formData, artist_name: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-900 focus:outline-none focus:ring-2 focus:ring-lime-400"
                placeholder="Full name"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Email *</label>
              <input
                type="email"
                required
                value={formData.artist_email}
                onChange={(e) => setFormData({ ...formData, artist_email: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-900 focus:outline-none focus:ring-2 focus:ring-lime-400"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-2">Grade Division *</label>
              <select
                required
                value={formData.grade_division}
                onChange={(e) =>
                  setFormData({ ...formData, grade_division: e.target.value as 'middle' | 'high' })
                }
                className="w-full px-4 py-2 border-2 border-gray-900 focus:outline-none focus:ring-2 focus:ring-lime-400"
              >
                <option value="middle">Middle School</option>
                <option value="high">High School</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-2">School (Optional)</label>
              <input
                type="text"
                value={formData.school}
                onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-900 focus:outline-none focus:ring-2 focus:ring-lime-400"
                placeholder="School name"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-2">Image URL *</label>
            <input
              type="url"
              required
              value={formData.image_url}
              onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
              className="w-full px-4 py-2 border-2 border-gray-900 focus:outline-none focus:ring-2 focus:ring-lime-400"
              placeholder="https://example.com/your-artwork.jpg"
            />
            <p className="text-xs text-gray-600 mt-1">
              Upload your image to a service like Imgur or Google Drive (public link) and paste the URL here
            </p>
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Artist Statement * <span className="text-sm font-normal text-gray-600">(100-200 words)</span>
            </label>
            <textarea
              required
              value={formData.artist_statement}
              onChange={(e) => setFormData({ ...formData, artist_statement: e.target.value })}
              rows={6}
              className="w-full px-4 py-2 border-2 border-gray-900 focus:outline-none focus:ring-2 focus:ring-lime-400 resize-none"
              placeholder="Explain your concept, how it relates to the theme, and what you want viewers to experience..."
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">AI Tools Used *</label>
            <input
              type="text"
              required
              value={formData.tools_used}
              onChange={(e) => setFormData({ ...formData, tools_used: e.target.value })}
              className="w-full px-4 py-2 border-2 border-gray-900 focus:outline-none focus:ring-2 focus:ring-lime-400"
              placeholder="e.g., Midjourney, Stable Diffusion, DALL-E, Photoshop"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Process Note (Optional)</label>
            <textarea
              value={formData.process_note}
              onChange={(e) => setFormData({ ...formData, process_note: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 border-2 border-gray-900 focus:outline-none focus:ring-2 focus:ring-lime-400 resize-none"
              placeholder="Describe your creative process, iterations, or technical approach..."
            />
          </div>

          {error && (
            <div className="bg-red-50 border-2 border-red-500 p-4 text-red-700">{error}</div>
          )}

          <Button type="submit" variant="primary" className="w-full" onClick={undefined}>
            {submitting ? 'Submitting...' : 'Submit Artwork'}
          </Button>
        </form>
      </HandDrawnCard>

      <HandDrawnCard>
        <h3 className="font-bold text-lg mb-4">Ethics & Guidelines</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2">
            <span className="text-lime-500">✓</span>
            You must have the rights to submit this work
          </li>
          <li className="flex gap-2">
            <span className="text-lime-500">✓</span>
            Disclose all AI tools used in creation
          </li>
          <li className="flex gap-2">
            <span className="text-lime-500">✓</span>
            No plagiarized or stolen imagery
          </li>
          <li className="flex gap-2">
            <span className="text-lime-500">✓</span>
            Post-processing and editing with traditional software is allowed
          </li>
        </ul>
      </HandDrawnCard>

      <HandDrawnCard>
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Upload className="text-lime-500" size={24} />
          How Entries Are Judged
        </h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="font-semibold">Concept & Meaning</span>
              <span className="text-lime-600 font-bold">30%</span>
            </div>
            <p className="text-sm text-gray-600">
              How clearly and powerfully the work engages the theme
            </p>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="font-semibold">Use of AI Tools</span>
              <span className="text-lime-600 font-bold">25%</span>
            </div>
            <p className="text-sm text-gray-600">Prompt craft, iteration, and creative process</p>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="font-semibold">Visual Impact</span>
              <span className="text-lime-600 font-bold">20%</span>
            </div>
            <p className="text-sm text-gray-600">Composition, color, mood, and craftsmanship</p>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="font-semibold">Originality</span>
              <span className="text-lime-600 font-bold">15%</span>
            </div>
            <p className="text-sm text-gray-600">Uniqueness and risk-taking</p>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="font-semibold">Artist Statement</span>
              <span className="text-lime-600 font-bold">10%</span>
            </div>
            <p className="text-sm text-gray-600">Clarity of intent and explanation</p>
          </div>
        </div>
      </HandDrawnCard>
    </div>
  );
}
