import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Electrical Installation',
    'HVAC Systems',
    'Plumbing Services',
    'Emergency Repairs',
    'Industrial Automation',
    'Maintenance Plans',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy text-navy-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">PT</span>
              </div>
              <span className="text-xl font-bold">
                Pro<span className="text-primary">Tech</span> Services
              </span>
            </div>
            <p className="text-navy-foreground/80 mb-6 leading-relaxed">
              Your trusted partner for professional electrical and mechanical services. 
              Licensed, insured, and committed to excellence since 2009.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-navy-foreground/80 hover:text-primary transition-colors underline-animation"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-navy-foreground/80">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">(555) 123-4567</div>
                  <div className="text-sm text-navy-foreground/80">24/7 Emergency Line</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">info@protech-services.com</div>
                  <div className="text-sm text-navy-foreground/80">Fast Response Guaranteed</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">123 Service Street</div>
                  <div className="text-sm text-navy-foreground/80">Your City, State 12345</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Mon-Fri: 8AM-6PM</div>
                  <div className="text-sm text-navy-foreground/80">Sat: 9AM-3PM</div>
                </div>
              </div>
            </div>

            {/* Emergency CTA */}
            <div className="mt-6 p-4 bg-coral/10 rounded-lg border border-coral/20">
              <h4 className="font-semibold text-coral mb-2">Emergency Service</h4>
              <p className="text-sm text-navy-foreground/80 mb-3">
                Available 24/7 for urgent electrical and mechanical issues.
              </p>
              <Button variant="coral" size="sm" className="w-full">
                Call Emergency Line
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-navy-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-navy-foreground/60">
                © 2024 ProTech Services. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-navy-foreground/60 hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-navy-foreground/60 hover:text-primary transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-navy-foreground/60 hover:text-primary transition-colors">
                  Licensing
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-navy-foreground/60">
                Licensed & Insured | EST. 2009
              </span>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;