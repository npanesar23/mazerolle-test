import React from 'react';
import { Link } from 'react-router-dom';
import { Hammer, Home, HardHat, Ruler, TreePine, Warehouse } from 'lucide-react';
import Section from '../components/Section';

const Services: React.FC = () => {
  return (
    <>
      <div className="bg-stone-900 py-32 px-4 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-30">
           <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Background construction" />
        </div>
        <div className="absolute inset-0 bg-stone-900/60"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Our Services</h1>
          <p className="text-stone-200 text-xl max-w-2xl mx-auto leading-relaxed">
            Professional residential and commercial construction services. 
            No shortcuts, no hidden costs, just superior craftsmanship.
          </p>
        </div>
      </div>

      <Section bg="white">
        <div className="space-y-24">
          
          {/* New Builds */}
          <div id="new-builds" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-10 -mt-10">
            <div className="order-2 lg:order-1 animate-slide-up">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-brand-50 rounded-sm mr-4 text-brand-700 shadow-sm">
                  <Home size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800">New Builds</h2>
              </div>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                Whether you are building your dream home or a new commercial facility, we provide end-to-end construction services. We own our own equipment and machinery, allowing for efficient, year-round work.
              </p>
              <ul className="space-y-4 mb-10">
                {['Residential Homes', 'Restaurants & Commercial Spaces', 'Workshops & Banks', 'Indoor & Outdoor Framing', 'Year-round construction'].map((item, i) => (
                  <li key={i} className="flex items-center text-stone-700">
                    <span className="w-2 h-2 bg-brand-600 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="text-brand-700 font-bold hover:underline text-lg">Request an Estimate for New Construction</Link>
            </div>
            <div className="order-1 lg:order-2 h-[500px] animate-scale-in">
              <div className="w-full h-full bg-stone-200 border-2 border-dashed border-stone-400 rounded-sm shadow-xl flex items-center justify-center">
                <span className="text-stone-500 text-lg font-medium">Image here</span>
              </div>
            </div>
          </div>

          {/* Renovations */}
          <div id="renovations" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-10 -mt-10">
             <div className="order-1 h-[500px] animate-scale-in">
              <div className="w-full h-full bg-stone-200 border-2 border-dashed border-stone-400 rounded-sm shadow-xl flex items-center justify-center">
                <span className="text-stone-500 text-lg font-medium">Image here</span>
              </div>
            </div>
            <div className="order-2 animate-slide-up">
              <div className="flex items-center mb-6">
                 <div className="p-3 bg-brand-50 rounded-sm mr-4 text-brand-700 shadow-sm">
                  <Hammer size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800">Renovations</h2>
              </div>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                We breathe new life into existing spaces. Our team respects that renovation work often happens while you live or work there, so we focus on minimizing disruption and maintaining a clean job site.
              </p>
              <ul className="space-y-4 mb-10">
                {['Whole Home Renovations', 'Kitchens & Bathrooms', 'Warehouses & Industrial Settings', 'Commercial Retrofits', 'Clean & Safe Job Sites'].map((item, i) => (
                  <li key={i} className="flex items-center text-stone-700">
                    <span className="w-2 h-2 bg-brand-600 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="text-brand-700 font-bold hover:underline text-lg">Discuss Your Renovation</Link>
            </div>
          </div>

          {/* General Contracting */}
          <div id="general-contracting" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-10 -mt-10">
            <div className="order-2 lg:order-1 animate-slide-up">
              <div className="flex items-center mb-6">
                 <div className="p-3 bg-brand-50 rounded-sm mr-4 text-brand-700 shadow-sm">
                  <HardHat size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800">General Contracting</h2>
              </div>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                "Tell us your vision and we manage it start to finish." We serve homeowners, business owners, and developers by managing all trades, sub-trades, and schedules.
              </p>
              <ul className="space-y-4 mb-10">
                {['Full Project Management', 'Sub-trade Coordination', 'Timeline & Budget Management', 'Safety Compliance & Permitting', 'Quality Control'].map((item, i) => (
                  <li key={i} className="flex items-center text-stone-700">
                    <span className="w-2 h-2 bg-brand-600 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="text-brand-700 font-bold hover:underline text-lg">Start Your Project</Link>
            </div>
            <div className="order-1 lg:order-2 h-[500px] animate-scale-in">
              <div className="w-full h-full bg-stone-200 border-2 border-dashed border-stone-400 rounded-sm shadow-xl flex items-center justify-center">
                <span className="text-stone-500 text-lg font-medium">Image here</span>
              </div>
            </div>
          </div>

           {/* Additional Services Grid */}
           <div className="pt-20 border-t border-stone-200 mt-10">
             <h2 className="text-3xl font-serif font-bold text-stone-800 mb-12 text-center animate-slide-up">Additional Specialized Services</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div id="log-structures" className="bg-stone-50 p-10 rounded-sm hover:shadow-xl transition-all hover:-translate-y-1">
                   <TreePine className="text-brand-700 mb-6" size={36} />
                   <h3 className="text-xl font-bold mb-4">Log Structures</h3>
                   <p className="text-stone-600 leading-relaxed">Specialized experience in building and restoring log structures and cabins.</p>
                </div>
                <div id="outdoor-living" className="bg-stone-50 p-10 rounded-sm hover:shadow-xl transition-all hover:-translate-y-1">
                   <Warehouse className="text-brand-700 mb-6" size={36} />
                   <h3 className="text-xl font-bold mb-4">Outdoor Living</h3>
                   <p className="text-stone-600 leading-relaxed">Decks, pergolas, and outdoor structures designed to enhance your property.</p>
                </div>
                <div id="structural-work" className="bg-stone-50 p-10 rounded-sm hover:shadow-xl transition-all hover:-translate-y-1">
                   <Ruler className="text-brand-700 mb-6" size={36} />
                   <h3 className="text-xl font-bold mb-4">Structural Work</h3>
                   <p className="text-stone-600 leading-relaxed">Framing, structural repairs, and modifications to ensure safety and stability.</p>
                </div>
             </div>
           </div>

        </div>
      </Section>
      
      <Section bg="brand" className="text-center">
        <div className="animate-slide-up">
          <h2 className="text-3xl font-serif font-bold text-white mb-6">No Hidden Fees. No Pricing Surprises.</h2>
          <p className="text-brand-100 max-w-2xl mx-auto mb-10 text-lg">
            We don't put pricing on our site because every project is unique. We provide detailed, honest estimates after understanding your specific needs.
          </p>
          <Link to="/contact" className="bg-white text-brand-800 px-10 py-4 rounded-sm font-bold hover:bg-stone-100 transition-all shadow-lg hover:-translate-y-1">
            Schedule a Consultation
          </Link>
        </div>
      </Section>
    </>
  );
};

export default Services;