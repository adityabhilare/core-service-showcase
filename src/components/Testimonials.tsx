import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Homeowner',
      location: 'Residential Customer',
      rating: 5,
      text: 'ProTech Services completely rewired our century-old home. The team was professional, clean, and completed the work ahead of schedule. Their attention to safety and quality is outstanding.',
      avatar: 'SJ',
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Facility Manager',
      location: 'Corporate Office',
      rating: 5,
      text: 'We needed emergency HVAC repair during a heatwave. ProTech responded within 2 hours and had our system running by evening. Exceptional service and fair pricing.',
      avatar: 'MC',
    },
    {
      id: 3,
      name: 'Lisa Rodriguez',
      position: 'Restaurant Owner',
      location: 'Commercial Client',
      rating: 5,
      text: 'From kitchen equipment installation to electrical upgrades, ProTech handled our restaurant renovation perfectly. They understand commercial needs and code requirements.',
      avatar: 'LR',
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'Plant Manager',
      location: 'Manufacturing Facility',
      rating: 5,
      text: 'ProTech Services has been our go-to for industrial automation projects. Their expertise in control systems and PLC programming is top-notch. Highly recommended.',
      avatar: 'DT',
    },
    {
      id: 5,
      name: 'Jennifer Adams',
      position: 'Property Manager',
      location: 'Apartment Complex',
      rating: 5,
      text: 'Managing a 200-unit complex requires reliable contractors. ProTech consistently delivers quality work on time and within budget. They\'re our trusted partner.',
      avatar: 'JA',
    },
    {
      id: 6,
      name: 'Robert Miller',
      position: 'Homeowner',
      location: 'Residential Customer',
      rating: 5,
      text: 'Solar panel installation was seamless. The team explained everything clearly, handled permits, and the system performs exactly as promised. Excellent experience.',
      avatar: 'RM',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers have to say 
            about our electrical and mechanical services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="card-professional p-8 relative group hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity">
                <Quote className="w-8 h-8 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.position}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-4 gap-8 pt-12 border-t border-border">
          <div className="text-center">
            <div className="text-3xl font-bold text-success mb-2">4.9/5</div>
            <div className="text-muted-foreground">Average Rating</div>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">426</div>
            <div className="text-muted-foreground">Total Reviews</div>
            <div className="text-sm text-success mt-1">+23 this month</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-coral mb-2">98%</div>
            <div className="text-muted-foreground">Would Recommend</div>
            <div className="text-sm text-success mt-1">Based on surveys</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">5.8k+</div>
            <div className="text-muted-foreground">Happy Customers</div>
            <div className="text-sm text-success mt-1">Since 2009</div>
          </div>
        </div>

        {/* Review Platforms */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Read More Reviews On
          </h3>
          <div className="flex justify-center items-center space-x-8 opacity-60 hover:opacity-100 transition-opacity">
            <div className="text-muted-foreground font-medium">Google Reviews</div>
            <div className="w-px h-6 bg-border"></div>
            <div className="text-muted-foreground font-medium">Yelp</div>
            <div className="w-px h-6 bg-border"></div>
            <div className="text-muted-foreground font-medium">Better Business Bureau</div>
            <div className="w-px h-6 bg-border"></div>
            <div className="text-muted-foreground font-medium">Angie's List</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;