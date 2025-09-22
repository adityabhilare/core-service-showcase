import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: '24/7 Emergency Line',
      primary: '(555) 123-4567',
      secondary: 'Call anytime for urgent repairs',
    },
    {
      icon: Mail,
      title: 'Email Us',
      primary: 'info@protech-services.com',
      secondary: 'We respond within 2 hours',
    },
    {
      icon: MapPin,
      title: 'Visit Our Office',
      primary: '123 Service Street',
      secondary: 'Your City, State 12345',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      primary: 'Mon-Fri: 8AM-6PM',
      secondary: 'Sat: 9AM-3PM, Sun: Emergency Only',
    },
  ];

  const services = [
    'Electrical Services',
    'HVAC Systems',
    'Plumbing Services',
    'Mechanical Fabrication',
    'Industrial Automation',
    'Maintenance & Repair',
    'Emergency Service',
    'Other',
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your project? Contact us for a free consultation and quote. 
            Our experts are here to help with all your electrical and mechanical needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="card-professional p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Request a Free Quote
            </h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Thank You!
                </h4>
                <p className="text-muted-foreground">
                  We've received your message and will contact you within 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full p-3 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your project or service needs..."
                    required
                    rows={4}
                    className="w-full"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and 
                  consent to be contacted about your project.
                </p>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="card-professional p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h4>
                        <div className="text-lg font-medium text-foreground mb-1">
                          {info.primary}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {info.secondary}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Emergency Banner */}
            <div className="card-professional p-6 bg-gradient-to-r from-coral/10 to-coral/5 border-l-4 border-coral">
              <h4 className="text-lg font-bold text-foreground mb-2 flex items-center">
                <Phone className="w-5 h-5 text-coral mr-2" />
                Emergency Service Available
              </h4>
              <p className="text-muted-foreground mb-4">
                Electrical and mechanical emergencies don't wait for business hours. 
                Call us anytime for urgent repairs and emergency service.
              </p>
              <Button variant="coral" size="sm">
                Call Emergency Line
              </Button>
            </div>

            {/* Map Placeholder */}
            <div className="card-professional p-6">
              <h4 className="text-lg font-bold text-foreground mb-4">
                Service Areas
              </h4>
              <div className="bg-muted/50 rounded-lg h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">
                    Serving 50+ cities in the metro area
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Call to confirm service in your area
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;