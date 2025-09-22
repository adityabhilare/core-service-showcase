import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';
import projectElectrical from '@/assets/project-electrical.jpg';
import projectHvac from '@/assets/project-hvac.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Commercial Electrical Upgrade',
      category: 'Electrical',
      location: 'Downtown Office Complex',
      date: '2024',
      image: projectElectrical,
      description: 'Complete electrical system upgrade for a 50,000 sq ft office complex including LED lighting retrofit, panel upgrades, and smart building integration.',
      tags: ['Commercial', 'LED Retrofit', 'Smart Systems'],
    },
    {
      id: 2,
      title: 'Industrial HVAC Installation',
      category: 'HVAC',
      location: 'Manufacturing Facility',
      date: '2024',
      image: projectHvac,
      description: 'Design and installation of complete HVAC system for new manufacturing facility with energy-efficient climate control and air filtration.',
      tags: ['Industrial', 'Energy Efficient', 'Climate Control'],
    },
    {
      id: 3,
      title: 'Residential Solar Integration',
      category: 'Electrical',
      location: 'Suburban Home',
      date: '2023',
      image: projectElectrical,
      description: 'Solar panel installation with battery backup system and smart home integration for maximum energy efficiency and independence.',
      tags: ['Residential', 'Solar', 'Smart Home'],
    },
    {
      id: 4,
      title: 'Restaurant Kitchen Systems',
      category: 'Mechanical',
      location: 'Fine Dining Restaurant',
      date: '2023',
      image: projectHvac,
      description: 'Complete kitchen ventilation and refrigeration systems installation with grease management and fire suppression integration.',
      tags: ['Commercial', 'Kitchen Systems', 'Safety'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Recent Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful electrical and mechanical projects across 
            residential, commercial, and industrial sectors.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card-professional group hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="hero" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {project.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <Button variant="outline" size="sm">
                    View Gallery
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Case Study
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16 p-8 bg-muted/50 rounded-2xl">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">150+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24hrs</div>
            <div className="text-muted-foreground">Average Response</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15yrs</div>
            <div className="text-muted-foreground">Experience</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Have a Project in Mind?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your electrical and mechanical needs. We provide free consultations 
            and detailed project estimates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Start Your Project
            </Button>
            <Button variant="outline" size="lg">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;