import { Heart, Sparkles, Users, MapPin, Target } from 'lucide-react';
import HandDrawnCard from '../components/HandDrawnCard';
import Button from '../components/Button';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <section className="text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold">About BAY GEN AI</h1>
        <p className="text-xl text-gray-600">
          A student-run initiative celebrating the intersection of art and artificial intelligence
        </p>
      </section>

      <HandDrawnCard>
        <div className="flex items-start gap-4 mb-6">
          <Heart className="text-lime-500 flex-shrink-0" size={32} />
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              BAY GEN AI exists to create a space where young artists can explore, experiment, and express
              themselves through AI-generated art. We believe that AI isn't replacing human creativity —
              it's expanding it, giving students new tools to translate their ideas into visual form.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As a student-run competition, we're building a community that understands both the excitement
              and the questions that come with this technology. We're not just showcasing art; we're starting
              conversations about authorship, creativity, and what it means to make something meaningful in
              the age of AI.
            </p>
          </div>
        </div>
      </HandDrawnCard>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center mb-8">What We Believe</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <HandDrawnCard>
            <Sparkles className="mb-3 text-lime-500" size={28} />
            <h3 className="font-bold text-lg mb-2">AI as Creative Partner</h3>
            <p className="text-sm text-gray-700">
              We see AI as a collaborator, not a replacement. The best AI art comes from thoughtful
              human direction, iteration, and vision. The tool doesn't make the art — you do.
            </p>
          </HandDrawnCard>

          <HandDrawnCard>
            <Users className="mb-3 text-lime-500" size={28} />
            <h3 className="font-bold text-lg mb-2">Student Voice Matters</h3>
            <p className="text-sm text-gray-700">
              Young people are growing up alongside these technologies. Your perspective on AI, creativity,
              and what art means today is invaluable and deserves a platform.
            </p>
          </HandDrawnCard>

          <HandDrawnCard>
            <Target className="mb-3 text-lime-500" size={28} />
            <h3 className="font-bold text-lg mb-2">Process Over Perfection</h3>
            <p className="text-sm text-gray-700">
              We value experimentation, risk-taking, and the story behind the work. Iteration, learning,
              and creative exploration matter just as much as the final image.
            </p>
          </HandDrawnCard>

          <HandDrawnCard>
            <MapPin className="mb-3 text-lime-500" size={28} />
            <h3 className="font-bold text-lg mb-2">Bay Area Roots</h3>
            <p className="text-sm text-gray-700">
              We're grounded in the Bay Area's culture of innovation and creativity. This region has
              always been at the forefront of technology and art — we're continuing that tradition.
            </p>
          </HandDrawnCard>
        </div>
      </section>

      <HandDrawnCard className="bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">Why This Matters</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            AI-generated art is one of the most debated topics in the creative world today. Some see it as
            democratizing creativity; others worry about authorship and originality. We think the
            conversation is more nuanced than that.
          </p>
          <p>
            By creating a space specifically for students, we're acknowledging that young artists are
            navigating this technology with fresh eyes. You're not bound by traditional definitions of
            what art "should be." You're defining it for yourselves.
          </p>
          <p>
            BAY GEN AI is more than a competition. It's a community. A platform. A chance to show that
            AI art can be thoughtful, personal, and deeply human — because it starts with a human idea,
            and ends with a human choice.
          </p>
        </div>
      </HandDrawnCard>

      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold">Student-Led, Community-Supported</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          BAY GEN AI is organized and run by Bay Area students who are passionate about art, technology,
          and creating opportunities for their peers. We're supported by mentors, educators, and
          professionals who believe in our vision.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button variant="primary" to="/submit">
            Submit Your Work
          </Button>
          <a
            href="mailto:hello@baygenai.org"
            className="px-6 py-3 font-medium transition-all border-2 border-gray-900 bg-white text-gray-900 hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-md inline-block"
            style={{
              clipPath: 'polygon(0% 3%, 3% 0%, 97% 0%, 100% 3%, 100% 97%, 97% 100%, 3% 100%, 0% 97%)',
            }}
          >
            Get Involved
          </a>
        </div>
      </section>
    </div>
  );
}
