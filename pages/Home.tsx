import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, MapPin, HardHat, Home as HomeIcon, MessageSquare, Phone, ClipboardList, CalendarDays, Key } from 'lucide-react';
import Section from '../components/Section';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[90vh] min-h-[600px] flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop" 
            alt="Mazerolle Builders custom home exterior" 
            className="w-full h-full object-cover"
          />
          {/* Enhanced gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-stone-900/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent"></div>
        </div>

        {/* Hero Content - Centered */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center flex flex-col items-center">
          <div className="animate-slide-up">
            <span className="inline-block py-2 px-5 bg-brand-700/90 backdrop-blur-sm text-white text-xs font-bold tracking-widest uppercase mb-6 rounded-sm shadow-lg border border-white/10">
              Family-Run & Owner-Operated
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight drop-shadow-lg">
              We Treat Every Project<br/> Like It’s Our Own Home.
            </h1>
            <p className="text-lg md:text-xl text-stone-100 mb-10 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Serving Waterloo Region, Oxford County, and New Brunswick with high-quality craftsmanship, hands-on accountability, and trust built over decades.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-brand-700 hover:bg-brand-600 text-white px-10 py-4 text-lg font-medium rounded-sm transition-all duration-300 shadow-xl hover:shadow-brand-900/40 hover:-translate-y-1"
              >
                Get a Free Quote
              </Link>
              <Link 
                to="/projects" 
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/40 hover:bg-white hover:text-brand-900 text-white px-10 py-4 text-lg font-medium rounded-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Section - Who We Are */}
      <Section bg="white" className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-800 mb-8 leading-tight">
              Builders You Can Trust, <br/><span className="text-brand-700 italic">Personally On Site.</span>
            </h2>
            <div className="prose prose-lg text-stone-600 mb-8">
               <p className="mb-4 leading-relaxed">
                  Mazerolle Builders Ltd. is not a corporate construction firm where you’re just a number. We are a father-and-son team, owned and operated by Roger and Shane Mazerolle.
               </p>
               <p className="leading-relaxed">
                  From new builds to complex renovations, we don't just manage the project from a distance. We are there, ensuring every beam is level and every detail meets our high standards.
               </p>
            </div>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-start p-6 bg-stone-50 rounded-sm border-l-4 border-brand-700 shadow-sm transition-transform hover:translate-x-1">
                <MapPin className="text-brand-700 mt-1 mr-4 shrink-0" size={24} />
                <div>
                   <span className="text-stone-900 font-bold block mb-1 text-lg">Our Service Areas</span>
                   <span className="text-stone-600">Waterloo Region, Oxford County, Surrounding Areas & New Brunswick</span>
                </div>
              </div>
            </div>

            <Link to="/about" className="text-brand-700 font-bold tracking-wide hover:text-brand-900 inline-flex items-center transition-all group border-b-2 border-transparent hover:border-brand-700 pb-1">
              READ OUR STORY <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={18} />
            </Link>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-100/50 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-stone-200/50 rounded-full z-0"></div>
            <div className="relative z-10 rounded-sm shadow-2xl bg-stone-200 h-[550px] w-full flex items-center justify-center border-2 border-dashed border-stone-400">
              <span className="text-stone-500 text-lg font-medium">Image here</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section bg="light">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4">Why Choose Mazerolle?</h2>
          <p className="text-stone-600 text-lg">We are not competing on price. We compete on quality, care, and the peace of mind that comes from hiring builders who truly care.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <HardHat className="text-brand-700" size={32} />,
              title: "Owner-Operated",
              desc: "Roger and Shane are personally involved. No passing the buck. We take full accountability."
            },
            {
              icon: <HomeIcon className="text-brand-700" size={32} />,
              title: "Respect for Your Home",
              desc: "We treat your property with the same care and respect as we do our own. A clean site is a safe site."
            },
            {
              icon: <CheckCircle2 className="text-brand-700" size={32} />,
              title: "Quality Over Speed",
              desc: "We don't rush. We do it right the first time using high-quality materials and proven techniques."
            },
            {
              icon: <ShieldCheck className="text-brand-700" size={32} />,
              title: "Fully Insured & Safe",
              desc: "WSIB coverage, General Liability insurance, and First Aid trained staff for your peace of mind."
            },
            {
              icon: <div className="font-serif font-bold text-2xl text-brand-700">30+</div>,
              title: "Years of Experience",
              desc: "Decades of expertise across multiple provinces, including building inspection certification."
            },
            {
              icon: <MessageSquare className="text-brand-700" size={32} />,
              title: "Clear Communication",
              desc: "We keep you informed at every stage. No ghosts, no surprises, just honest updates."
            }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-brand-700 group hover:-translate-y-1">
              <div className="mb-6 bg-stone-50 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-brand-50 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">{feature.title}</h3>
              <p className="text-stone-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Services Overview */}
      <Section bg="white">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 animate-slide-up">
          <div className="max-w-2xl">
            <span className="text-brand-700 font-bold tracking-widest text-xs uppercase mb-2 block">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800">Comprehensive Construction Services</h2>
          </div>
          <Link to="/services" className="hidden md:flex items-center text-stone-800 font-medium hover:text-brand-700 transition-colors border-b border-stone-300 pb-1 hover:border-brand-700">
            View All Services <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <Link to="/services" className="group block h-full">
            <div className="relative overflow-hidden rounded-sm mb-6 h-72 shadow-md bg-stone-200 border-2 border-dashed border-stone-400 flex items-center justify-center">
              <span className="text-stone-500 text-lg font-medium">Image here</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-stone-800 mb-3 group-hover:text-brand-700 transition-colors">New Builds</h3>
            <p className="text-stone-600 mb-4 line-clamp-3 leading-relaxed">Residential and commercial construction built to last generations. From restaurants to dream homes, we handle the entire process.</p>
            <span className="text-brand-700 font-bold text-sm flex items-center group-hover:underline uppercase tracking-wide">Learn more <ArrowRight size={14} className="ml-2" /></span>
          </Link>

          {/* Service 2 */}
          <Link to="/services" className="group block h-full">
            <div className="relative overflow-hidden rounded-sm mb-6 h-72 shadow-md bg-stone-200 border-2 border-dashed border-stone-400 flex items-center justify-center">
              <span className="text-stone-500 text-lg font-medium">Image here</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-stone-800 mb-3 group-hover:text-brand-700 transition-colors">Renovations</h3>
            <p className="text-stone-600 mb-4 line-clamp-3 leading-relaxed">Vision-driven updates for homes and businesses. We minimize disruption while maximizing value and functionality.</p>
            <span className="text-brand-700 font-bold text-sm flex items-center group-hover:underline uppercase tracking-wide">Learn more <ArrowRight size={14} className="ml-2" /></span>
          </Link>

          {/* Service 3 */}
          <Link to="/services" className="group block h-full">
            <div className="relative overflow-hidden rounded-sm mb-6 h-72 shadow-md bg-stone-200 border-2 border-dashed border-stone-400 flex items-center justify-center">
              <span className="text-stone-500 text-lg font-medium">Image here</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-stone-800 mb-3 group-hover:text-brand-700 transition-colors">General Contracting</h3>
            <p className="text-stone-600 mb-4 line-clamp-3 leading-relaxed">Complete project management. Tell us your vision, and we manage the trades, timelines, and every detail from start to finish.</p>
            <span className="text-brand-700 font-bold text-sm flex items-center group-hover:underline uppercase tracking-wide">Learn more <ArrowRight size={14} className="ml-2" /></span>
          </Link>
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <Link to="/services" className="text-brand-700 font-bold hover:text-brand-800 inline-flex items-center">
            View All Services <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </Section>

      {/* Before and After Teaser */}
      <Section bg="light" className="border-y border-stone-200">
        <div className="text-center mb-12 animate-slide-up">
           <span className="text-brand-700 font-bold tracking-widest text-xs uppercase mb-2 block">Transformations</span>
           <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800">See The Difference</h2>
        </div>
        
        <div className="max-w-4xl mx-auto shadow-2xl rounded-lg overflow-hidden animate-scale-in">
          <BeforeAfterSlider 
            beforeImage="placeholder"
            afterImage="placeholder"
            alt="Living room renovation"
          />
        </div>
         <div className="text-center mt-12">
          <Link to="/projects" className="inline-block border-2 border-stone-800 text-stone-800 px-10 py-3 font-medium hover:bg-stone-800 hover:text-white transition-all duration-300 uppercase tracking-wide text-sm hover:-translate-y-1">
            View Project Gallery
          </Link>
        </div>
      </Section>

      {/* Process Section */}
      <Section bg="white" className="relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
            <div className="absolute right-0 top-0 w-96 h-96 bg-brand-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute left-0 bottom-0 w-96 h-96 bg-stone-100 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-20 animate-slide-up relative z-10">
          <span className="text-brand-700 font-bold tracking-widest text-xs uppercase mb-3 block">How We Work</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-800 mb-6">Our Simple, Transparent Process</h2>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            We believe in eliminating uncertainty. From the first call to the final walkthrough, here is exactly what you can expect.
          </p>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brand-200 to-transparent"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {[
              { icon: Phone, title: "Contact", desc: "Reach out via phone or form to discuss your vision." },
              { icon: ClipboardList, title: "Consultation", desc: "We meet on-site to align on scope and budget." },
              { icon: CalendarDays, title: "Planning", desc: "Detailed scheduling, permits, and material selection." },
              { icon: HardHat, title: "Construction", desc: "Our team builds with precision and daily oversight." },
              { icon: Key, title: "Completion", desc: "Final walkthrough and handover of your new space." },
            ].map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center group" style={{ animationDelay: `${idx * 100}ms` }}>
                 {/* Step Number Background */}
                 <div className="absolute -top-6 text-8xl font-serif font-bold text-stone-50 select-none -z-10 group-hover:text-brand-50 transition-colors duration-300">
                    0{idx + 1}
                 </div>
                 
                 {/* Icon Circle */}
                 <div className="w-24 h-24 rounded-full bg-white border-4 border-stone-100 group-hover:border-brand-700 transition-all duration-300 flex items-center justify-center mb-6 shadow-xl relative z-10 group-hover:scale-110 group-hover:-translate-y-2">
                   <step.icon className="text-stone-400 group-hover:text-brand-700 transition-colors duration-300" size={32} />
                 </div>
                 
                 {/* Content */}
                 <div className="px-2">
                   <h3 className="text-xl font-bold text-stone-800 mb-3 group-hover:text-brand-700 transition-colors duration-300">{step.title}</h3>
                   <p className="text-sm text-stone-600 leading-relaxed font-medium">{step.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bg="brand" className="text-center relative overflow-hidden">
        {/* Decorative pattern opacity */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
        
        <div className="relative z-10 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Ready to Build Something Great?</h2>
          <p className="text-brand-100 text-xl mb-10 max-w-2xl mx-auto">
            Contact us today for a free quote. We serve homeowners and investors in Ontario and New Brunswick who value quality craftsmanship.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-brand-800 hover:bg-stone-50 px-12 py-5 rounded-sm text-lg font-bold shadow-2xl transition-all hover:-translate-y-1 hover:shadow-white/20"
          >
            Get Your Free Quote
          </Link>
        </div>
      </Section>
    </>
  );
};

export default Home;