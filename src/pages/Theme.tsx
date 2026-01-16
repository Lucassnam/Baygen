import { Lightbulb, Pencil } from 'lucide-react';
import HandDrawnCard from '../components/HandDrawnCard';
import Button from '../components/Button';

export default function Theme() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <section className="text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold">2024 Theme</h1>
        <h2 className="text-3xl md:text-4xl text-gray-700 font-light italic">
          "Reality Reimagined"
        </h2>
      </section>

      <HandDrawnCard>
        <blockquote className="text-xl md:text-2xl leading-relaxed text-gray-800 italic border-l-4 border-lime-400 pl-6">
          What happens when we let algorithms dream? When machines learn to see the world not as data,
          but as possibility? Reality Reimagined asks you to explore how AI doesn't just replicate our
          world — it transforms, questions, and reinvents it.
        </blockquote>
      </HandDrawnCard>

      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-8">
          <Pencil className="text-lime-500" size={32} />
          <h2 className="text-3xl font-bold">What to Submit</h2>
        </div>
        <HandDrawnCard>
          <ul className="space-y-4 text-gray-700">
            <li className="flex gap-3">
              <span className="text-lime-500 font-bold">•</span>
              <span>
                <strong>Reinterpret the everyday</strong> — transform mundane objects, spaces, or moments
                into something unexpected through AI
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-lime-500 font-bold">•</span>
              <span>
                <strong>Challenge perception</strong> — create work that makes viewers question what's real,
                possible, or beautiful
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-lime-500 font-bold">•</span>
              <span>
                <strong>Explore AI's lens</strong> — show us how AI sees differently than humans do, and what
                that reveals about both
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-lime-500 font-bold">•</span>
              <span>
                <strong>Fuse worlds</strong> — blend past and future, nature and technology, digital and
                physical in ways only AI can achieve
              </span>
            </li>
          </ul>
        </HandDrawnCard>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-8">
          <Lightbulb className="text-lime-500" size={32} />
          <h2 className="text-3xl font-bold">Prompt Starters</h2>
        </div>
        <div className="space-y-4">
          <HandDrawnCard>
            <p className="text-gray-700 mb-2">
              <strong className="text-gray-900">Concept:</strong> Memory as Architecture
            </p>
            <p className="text-sm text-gray-600 italic">
              "A childhood memory reconstructed as a building, where each room holds a different emotion,
              architectural style blending impossible geometries"
            </p>
          </HandDrawnCard>

          <HandDrawnCard>
            <p className="text-gray-700 mb-2">
              <strong className="text-gray-900">Concept:</strong> Digital Archaeology
            </p>
            <p className="text-sm text-gray-600 italic">
              "Excavated ruins of the internet, where old web pages grow like fossils, rendered as a physical
              landscape with texture and depth"
            </p>
          </HandDrawnCard>

          <HandDrawnCard>
            <p className="text-gray-700 mb-2">
              <strong className="text-gray-900">Concept:</strong> The Algorithm's Bias
            </p>
            <p className="text-sm text-gray-600 italic">
              "Visualize how AI sees beauty differently across cultures, showing the gaps and assumptions
              in machine learning training data"
            </p>
          </HandDrawnCard>
        </div>
        <p className="text-sm text-gray-600 text-center pt-4">
          These are just starting points. Your interpretation is what matters most.
        </p>
      </section>

      <section className="text-center pt-8">
        <Button variant="primary" to="/submit">
          Ready to Submit Your Work
        </Button>
      </section>
    </div>
  );
}
