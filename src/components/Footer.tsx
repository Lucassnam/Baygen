import { Instagram, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t-2 border-gray-900 bg-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">BAY GEN AI</h3>
            <p className="text-sm text-gray-600">
              A student-run AI art competition celebrating creativity and technology in the Bay Area.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <a
              href="mailto:hello@baygenai.org"
              className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-2"
            >
              <Mail size={16} />
              hello@baygenai.org
            </a>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/baygenai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com/baygenai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>BAY GEN AI is a student-run initiative. © 2024 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
