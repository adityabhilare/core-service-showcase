import { Button } from '@/components/ui/button';
import { Phone, Star, Users, CheckCircle, Clock } from 'lucide-react';
import heroTechnician from '@/assets/hero-technician.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent transform rotate-12 scale-150"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your Go-To{' '}
                <span className="text-coral relative">
                  Electrical
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-coral/50 rounded"></div>
                </span>
                <br />
                & Mechanical Services
              </h1>
              
              <p className="text-xl md:text-2xl text-navy-foreground/90 leading-relaxed">
                Reliable Electrical & Mechanical Solutions for Homes & Businesses
              </p>
              
              <p className="text-lg text-navy-foreground/80 max-w-2xl">
                Licensed and insured professionals providing 24/7 emergency service, 
                free quotes, and same-day service. Your trusted partner for all electrical 
                and mechanical needs.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                (555) 123-4567
              </Button>
              <Button variant="coral" size="xl">
                Get Free Quote
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-8">
              <div className="trust-badge px-4 py-3">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold text-foreground">Excellent</div>
                    <div className="text-muted-foreground">Based on 426 reviews</div>
                  </div>
                </div>
              </div>
              
              <div className="trust-badge px-4 py-3">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-success" />
                  <div className="text-sm">
                    <div className="font-semibold text-foreground">24/7 Service</div>
                    <div className="text-muted-foreground">Emergency available</div>
                  </div>
                </div>
              </div>
              
              <div className="trust-badge px-4 py-3">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-primary" />
                  <div className="text-sm">
                    <div className="font-semibold text-foreground">5.8k+</div>
                    <div className="text-muted-foreground">Happy clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative">
              <img
                src={heroTechnician}
                alt="Professional electrical technician"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
                loading="eager"
              />
              
              {/* Floating Cards */}
              <div className="absolute top-8 -left-4 lg:left-8 floating-card p-4 max-w-xs">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-8 h-8 text-success flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">Licensed & Insured</div>
                    <div className="text-sm text-muted-foreground">Fully certified professionals</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 -right-4 lg:right-8 floating-card p-4 max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-sm">24</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Same Day Service</div>
                    <div className="text-sm text-muted-foreground">Most repairs completed today</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;