import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-surface-1 pt-16 pb-8 mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group cursor-pointer inline-flex">
              <span className="font-semibold text-xl tracking-tight text-text-primary">HummingAgent.ai</span>
            </Link>
            <p className="text-text-secondary mb-6 max-w-sm">
              Custom AI solutions for enterprise automation and optimization.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li><Link href="#" className="hover:text-text-primary transition-colors">Customer Support Automation</Link></li>
              <li><Link href="#" className="hover:text-text-primary transition-colors">Business Process Automation</Link></li>
              <li><Link href="#" className="hover:text-text-primary transition-colors">Enterprise AI Solutions</Link></li>
              <li><Link href="#" className="hover:text-text-primary transition-colors">Private ChatGPT</Link></li>
              <li><Link href="#" className="hover:text-text-primary transition-colors">Sales Engineering</Link></li>
              <li><Link href="#" className="hover:text-text-primary transition-colors">AI Applications</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li><Link href="#" className="hover:text-text-primary transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-text-primary transition-colors">Industries</Link></li>
              <li><Link href="#" className="hover:text-text-primary transition-colors">Case Studies</Link></li>
              <li><Link href="#" className="hover:text-text-primary transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-text-primary transition-colors">Partners</Link></li>
              <li><Link href="#" className="hover:text-text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary mb-4">Legal & Social</h4>
            <ul className="space-y-3 text-sm text-text-secondary mb-8">
              <li><Link href="#" className="hover:text-text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-text-primary transition-colors">NDA</Link></li>
            </ul>
            <div className="flex items-center gap-4 text-text-secondary">
              <a href="#" className="hover:text-text-primary transition-colors">LI</a>
              <a href="#" className="hover:text-text-primary transition-colors">DC</a>
              <a href="#" className="hover:text-text-primary transition-colors">IG</a>
              <a href="#" className="hover:text-text-primary transition-colors">X</a>
              <a href="#" className="hover:text-text-primary transition-colors">FB</a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between text-sm text-text-secondary">
          <p>© {new Date().getFullYear()} HummingAgent.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
