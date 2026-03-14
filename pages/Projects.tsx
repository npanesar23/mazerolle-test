import React from 'react';
import Section from '../components/Section';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

const Projects: React.FC = () => {
  usePageMeta(
    'Our Work | Project Gallery & Before & After',
    'See Mazerolle Builders projects: new builds, renovations, conversions, outdoor structures. Boat storage, church to fourplex, townhome framing, basements, porches, log playgrounds. Before & after transformations in Cambridge, Puslinch, Pioneer Tower.'
  );
  const projects = [
    {
      id: 4,
      title: 'Boat Storage Shop',
      category: 'New Build',
      image: '/project-4.jpg',
      desc: 'Purpose-built storage structure for boats and equipment. Durable, functional design.'
    },
    {
      id: 5,
      title: 'Church to Fourplex Conversion',
      category: 'Renovation',
      image: '/project-5.jpg',
      desc: 'A kitchen in one of four new apartment units renovated from a church. Modern finishes in a unique space.'
    },
    {
      id: 6,
      title: 'Residential Townhome Framing',
      category: 'New Build',
      image: '/project-6.jpg',
      desc: 'Framing and structural work for residential townhome development.'
    },
    {
      id: 1,
      title: 'Basement Entrance Duplex',
      category: 'Renovation',
      image: '/project-1.jpg',
      desc: 'Basement entrance and access work for a duplex conversion. Functional design for multi-unit living.'
    },
    {
      id: 2,
      title: 'Non Slip Front Porch',
      category: 'Outdoor',
      image: '/project-2.jpg',
      desc: 'Safe, non-slip front porch installation. Durable outdoor entrance upgrade for Woodstock property.'
    },
    {
      id: 3,
      title: 'Handmade Log Playground',
      category: 'Outdoor',
      image: '/project-3.jpg',
      desc: 'Custom log playground structure in New Brunswick. Natural materials for lasting outdoor fun.'
    }
  ];

  return (
    <>
      <div className="bg-stone-900 py-32 px-4 relative flex items-center justify-center">
         <div className="absolute inset-0 z-0 opacity-20">
           <img src="/projects-header.jpg" alt="" className="w-full h-full object-cover object-center" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Our Work</h1>
          <p className="text-stone-300 text-xl max-w-2xl mx-auto">
            A showcase of quality craftsmanship, detail, and pride.
          </p>
        </div>
      </div>

      <Section bg="white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div 
              key={project.id} 
              className="group cursor-pointer hover:-translate-y-2 transition-transform duration-500"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-sm aspect-[4/3] mb-5 shadow-md">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-stone-900 text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded-sm shadow-sm">
                  {project.category}
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-stone-800 mb-3 group-hover:text-brand-700 transition-colors">
                {project.title}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {project.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="light">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4">Before & After</h2>
          <p className="text-stone-600 text-lg">Drag the slider to see the transformation.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div className="animate-scale-in">
            <div className="shadow-2xl rounded-lg overflow-hidden border-4 border-white">
              <BeforeAfterSlider 
                beforeImage="/projects-before-after-2-before.jpg"
                afterImage="/projects-before-after-2-after.jpg"
                alt="Puslinch Structural Repair"
                beforeImagePosition="50% 5%"
              />
            </div>
            <div className="mt-8 text-center">
              <h3 className="font-bold text-xl text-stone-800 mb-2">Puslinch Structural Repair</h3>
              <p className="text-stone-600">Structural repair and reinforcement for lasting stability.</p>
            </div>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="shadow-2xl rounded-lg overflow-hidden border-4 border-white">
              <BeforeAfterSlider 
                beforeImage="/projects-before-after-1-before.jpg"
                afterImage="/projects-before-after-1-after.jpg"
                alt="Cambridge Bathroom"
              />
            </div>
            <div className="mt-8 text-center">
              <h3 className="font-bold text-xl text-stone-800 mb-2">Cambridge Bathroom</h3>
              <p className="text-stone-600">Complete bathroom transformation with modern finishes.</p>
            </div>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="shadow-2xl rounded-lg overflow-hidden border-4 border-white">
              <BeforeAfterSlider 
                beforeImage="/projects-before-after-3-before.jpg"
                afterImage="/projects-before-after-3-after.jpg"
                alt="Cambridge Closets"
              />
            </div>
            <div className="mt-8 text-center">
              <h3 className="font-bold text-xl text-stone-800 mb-2">Cambridge Closets</h3>
              <p className="text-stone-600">Custom closet renovation for improved storage and organization.</p>
            </div>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="shadow-2xl rounded-lg overflow-hidden border-4 border-white">
              <BeforeAfterSlider 
                beforeImage="/projects-before-after-4-before.jpg"
                afterImage="/projects-before-after-4-after.jpg"
                alt="Pioneer Tower Living Room"
              />
            </div>
            <div className="mt-8 text-center">
              <h3 className="font-bold text-xl text-stone-800 mb-2">Pioneer Tower Living Room</h3>
              <p className="text-stone-600">Living room transformation with modern open-concept design.</p>
            </div>
          </div>
        </div>
      </Section>
      
      <Section bg="brand" className="text-center">
        <div className="animate-slide-up">
          <h2 className="text-3xl font-serif font-bold text-white mb-6">Like What You See?</h2>
          <Link to="/contact" className="inline-block bg-white text-brand-800 px-10 py-4 rounded-sm font-bold hover:bg-stone-100 transition-all shadow-lg hover:-translate-y-1">
            Let's Discuss Your Project
          </Link>
        </div>
      </Section>
    </>
  );
};

export default Projects;