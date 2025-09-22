import { Button } from '@/components/ui/button';
import { 
  Zap, 
  Wrench, 
  Thermometer, 
  Droplets, 
  Cog, 
  Shield,
  Clock,
  Award
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: 'Electrical Services',
      description: 'Complete electrical solutions including installations, repairs, wiring, panel upgrades, and safety inspections.',
      features: ['Panel Upgrades', 'Wiring & Rewiring', 'Safety Inspections', 'LED Lighting'],
    },
    {
      icon: Thermometer,
      title: 'HVAC Systems',
      description: 'Professional heating, ventilation, and air conditioning services for optimal comfort year-round.',
      features: ['AC Installation', 'Heating Repair', 'Duct Cleaning', 'Energy Audits'],
    },
    {
      icon: Droplets,
      title: 'Plumbing Services',
      description: 'Expert plumbing solutions from minor repairs to complete system installations and emergency services.',
      features: ['Pipe Repair', 'Drain Cleaning', 'Water Heaters', 'Emergency Service'],
    },
    {
      icon: Cog,
      title: 'Mechanical Fabrication',
      description: 'Custom mechanical fabrication and installation services for industrial and commercial applications.',
      features: ['Custom Fabrication', 'Equipment Install', 'Maintenance', 'Repairs'],
    },
    {
      icon: Shield,
      title: 'Industrial Automation',
      description: 'Advanced automation solutions to improve efficiency and reduce operational costs in industrial settings.',
      features: ['Control Systems', 'PLC Programming', 'Sensors & Motors', 'System Integration'],
    },
    {
      icon: Wrench,
      title: 'Maintenance & Repair',
      description: 'Preventive maintenance and repair services to keep your systems running efficiently and safely.',
      features: ['Preventive Plans', 'Emergency Repairs', 'System Upgrades', '24/7 Support'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Professional Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive electrical and mechanical solutions backed by years of experience, 
            licensed professionals, and a commitment to quality workmanship.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="card-professional p-8 group hover:scale-105 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary">
                  Learn More
                </Button>
              </div>
            );
          })}
        </div>

        {/* Service Features */}
        <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-border">
          <div className="text-center">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-success" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Licensed & Certified</h3>
            <p className="text-muted-foreground">
              All our technicians are fully licensed, insured, and continuously trained on the latest techniques.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">24/7 Emergency Service</h3>
            <p className="text-muted-foreground">
              Round-the-clock emergency service because electrical and mechanical issues don't wait.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-coral" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Satisfaction Guaranteed</h3>
            <p className="text-muted-foreground">
              We stand behind our work with comprehensive warranties and 100% satisfaction guarantee.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Our experts are ready to help with all your electrical and mechanical needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Request Free Quote
            </Button>
            <Button variant="coral" size="lg">
              Schedule Service
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;