import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import HandDrawnCard from '../components/HandDrawnCard';
import Button from '../components/Button';

interface FAQItemProps {
  question: string;
  answer: string | JSX.Element;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HandDrawnCard className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <div className="flex justify-between items-start gap-4">
        <h3 className="font-bold text-lg">{question}</h3>
        <ChevronDown
          className={`flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          size={24}
        />
      </div>
      {isOpen && (
        <div className="mt-4 text-gray-700 leading-relaxed border-t-2 border-gray-200 pt-4">
          {answer}
        </div>
      )}
    </HandDrawnCard>
  );
}

export default function FAQ() {
  const faqs: FAQItemProps[] = [
    {
      question: 'Who can enter?',
      answer:
        'Any current middle or high school student in the Bay Area is eligible to submit. You must be enrolled in school at the time of submission.',
    },
    {
      question: 'What AI tools are allowed?',
      answer: (
        <>
          <p className="mb-2">
            You can use any AI image generation tool, including but not limited to:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Midjourney</li>
            <li>DALL-E / ChatGPT image generation</li>
            <li>Stable Diffusion (and variants like Leonardo, Playground)</li>
            <li>Adobe Firefly</li>
            <li>Any other text-to-image or image-to-image AI tool</li>
          </ul>
          <p className="mt-2">
            You may also use traditional software like Photoshop, Illustrator, or Procreate for
            post-processing and editing. Just be transparent about all tools used in your submission.
          </p>
        </>
      ),
    },
    {
      question: 'Can I submit multiple entries?',
      answer:
        'Yes! You can submit multiple artworks. Each will be judged independently. However, we recommend focusing on quality over quantity — one strong piece is better than several weak ones.',
    },
    {
      question: 'What if I used AI and Photoshop together?',
      answer:
        "That's encouraged! Many of the best AI artworks involve iteration, editing, and post-processing. Just describe your full process in your artist statement and list all tools used.",
    },
    {
      question: 'How are winners selected?',
      answer: (
        <>
          <p className="mb-2">
            Submissions are reviewed anonymously by our jury panel, which includes artists, technologists,
            and educators. They score each piece based on:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Concept & Meaning (30%)</li>
            <li>Use of AI Tools (25%)</li>
            <li>Visual Impact (20%)</li>
            <li>Originality (15%)</li>
            <li>Artist Statement (10%)</li>
          </ul>
          <p className="mt-2">
            After scoring, finalists are selected and then discussed as a group to choose winners.
          </p>
        </>
      ),
    },
    {
      question: 'Can teams submit together?',
      answer:
        'Individual submissions only for this year. However, if you collaborated with someone on prompting or editing, you should credit them in your process note.',
    },
    {
      question: 'Do I need to own the AI tool I use?',
      answer:
        "Not necessarily. Many AI tools offer free tiers (like Bing Image Creator, Leonardo free credits, or community Stable Diffusion tools). As long as you have legal access to the tool, you can use it.",
    },
    {
      question: 'What file format should I submit?',
      answer:
        "You'll submit a publicly accessible URL to your image (e.g., via Imgur, Google Drive, or similar). The image should ideally be PNG or JPG, at least 1920x1920 pixels for best quality.",
    },
    {
      question: 'What makes a good artist statement?',
      answer:
        "A strong artist statement explains your concept, how you approached the theme, what you wanted viewers to feel or think, and how you used AI as a tool. Be honest, personal, and clear. Avoid generic or overly technical descriptions.",
    },
    {
      question: 'Can I submit work I created before the competition was announced?',
      answer:
        "Yes, as long as it fits the theme and you haven't submitted it to another competition. However, we encourage creating new work specifically for this theme.",
    },
    {
      question: 'What happens after I submit?',
      answer:
        "You'll receive a confirmation email. Our jury will review submissions after the deadline. Finalists will be notified via email, and winners will be announced publicly on our website and social media.",
    },
    {
      question: 'Is there an age limit?',
      answer:
        'You must be currently enrolled in middle school (grades 6-8) or high school (grades 9-12) in the Bay Area at the time of submission.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <section className="text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold">FAQ</h1>
        <p className="text-xl text-gray-600">Everything you need to know about BAY GEN AI</p>
      </section>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      <HandDrawnCard className="text-center space-y-4 bg-gray-50">
        <h2 className="text-2xl font-bold">Still have questions?</h2>
        <p className="text-gray-700">
          {"We're here to help! Reach out to us at "}
          <a href="mailto:hello@baygenai.org" className="text-lime-600 font-semibold hover:underline">
            hello@baygenai.org
          </a>
        </p>
        <div className="pt-4">
          <Button variant="primary" to="/submit">
            Ready to Submit
          </Button>
        </div>
      </HandDrawnCard>
    </div>
  );
}
