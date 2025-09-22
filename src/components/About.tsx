import { Button } from '@/components/ui/button';
import { Users, Calendar, Award, MapPin, Phone, Mail } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Calendar, label: 'Years Experience', value: '15+' },
    { icon: Users, label: 'Happy Customers', value: '5,800+' },
    { icon: Award, label: 'Certifications', value: '25+' },
    { icon: MapPin, label: 'Service Areas', value: '50+' },
  ];

  const certifications = [
    'Licensed Electrical Contractor',
    'HVAC Certified Technicians',
    'EPA Certified',
    'OSHA Safety Trained',
    'Master Plumber Licensed',
    'Industrial Automation Certified',
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                About ProTech Services
              </h2>
              <div className="w-20 h-1 bg-primary rounded mb-8"></div>
            </div>

            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-muted-foreground">
                For over <strong className="text-foreground">15 years</strong>, ProTech Services has been the trusted 
                partner for electrical and mechanical solutions across residential, commercial, and industrial sectors. 
                We combine traditional craftsmanship with cutting-edge technology to deliver exceptional results.
              </p>

              <p className="text-muted-foreground">
                Our team of <strong className="text-foreground">licensed professionals</strong> is committed to safety, 
                quality, and customer satisfaction. From simple repairs to complex installations, we handle every 
                project with the same level of dedication and expertise.
              </p>

              <p className="text-muted-foreground">
                We believe in building lasting relationships with our clients by providing reliable service, 
                transparent pricing, and solutions that stand the test of time.
              </p>
            </div>

            {/* Mission & Values */}
            <div className="space-y-6">
              <div className="card-professional p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide safe, reliable, and innovative electrical and mechanical solutions that exceed 
                  our customers' expectations while building long-term partnerships based on trust and quality.
                </p>
              </div>

              <div className="card-professional p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Our Values</h3>
                <ul className="grid grid-cols-2 gap-2 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Safety First
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Quality Work
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Fair Pricing
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Customer Focus
                  </li>
                </ul>
              </div>
            </div>

            <Button variant="hero" size="lg">
              Learn More About Us
            </Button>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="card-professional p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Certifications */}
            <div className="card-professional p-8">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <Award className="w-6 h-6 text-success mr-3" />
                Certifications & Licenses
              </h3>
              <div className="grid gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-success rounded-full mr-4 flex-shrink-0"></div>
                    {cert}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="card-professional p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">(555) 123-4567</div>
                    <div className="text-sm text-muted-foreground">24/7 Emergency Line</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">info@protech-services.com</div>
                    <div className="text-sm text-muted-foreground">We respond within 2 hours</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">123 Service Street</div>
                    <div className="text-sm text-muted-foreground">Your City, State 12345</div>
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

export default About;