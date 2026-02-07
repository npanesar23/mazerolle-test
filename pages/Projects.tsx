import React from 'react';
import Section from '../components/Section';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Custom Modern Farmhouse',
      category: 'New Build',
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2000&auto=format&fit=crop',
      desc: 'Complete build from foundation to finishing. Open concept living with custom timber details.'
    },
    {
      id: 2,
      title: 'Commercial Restaurant Fit-out',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop',
      desc: 'High-end interior finishing and structural modifications for a local dining establishment.'
    },
    {
      id: 3,
      title: 'Heritage Home Restoration',
      category: 'Renovation',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2000&auto=format&fit=crop',
      desc: 'Preserving historical charm while updating electrical, structural integrity, and insulation.'
    },
    {
      id: 4,
      title: 'Industrial Warehouse Expansion',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2000&auto=format&fit=crop',
      desc: 'Steel framing and large-scale concrete work for industrial storage.'
    },
    {
      id: 5,
      title: 'Backyard Oasis',
      category: 'Outdoor',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000&auto=format&fit=crop',
      desc: 'Custom multi-level deck, pergola, and outdoor kitchen framing.'
    },
    {
      id: 6,
      title: 'Basement Conversion',
      category: 'Renovation',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2000&auto=format&fit=crop',
      desc: 'Transforming an unfinished basement into a luxury rental suite.'
    }
  ];

  return (
    <>
      <div className="bg-stone-900 py-32 px-4 relative flex items-center justify-center">
         <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
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
              <div className="relative overflow-hidden rounded-sm aspect-[4/3] mb-5 bg-stone-200 border-2 border-dashed border-stone-400 shadow-md flex items-center justify-center">
                <span className="text-stone-500 text-lg font-medium">Image here</span>
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
                beforeImage="placeholder"
                afterImage="placeholder"
                alt="Kitchen Renovation"
              />
            </div>
            <div className="mt-8 text-center">
              <h3 className="font-bold text-xl text-stone-800 mb-2">Kitchen Modernization</h3>
              <p className="text-stone-600">From dated oak to modern minimalist.</p>
            </div>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="shadow-2xl rounded-lg overflow-hidden border-4 border-white">
              <BeforeAfterSlider 
                beforeImage="placeholder"
                afterImage="placeholder"
                alt="Living Room"
              />
            </div>
             <div className="mt-8 text-center">
              <h3 className="font-bold text-xl text-stone-800 mb-2">Living Room Open Concept</h3>
              <p className="text-stone-600">Removing load-bearing walls for flow.</p>
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