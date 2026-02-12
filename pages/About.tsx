import React from 'react';
import Section from '../components/Section';
import { Shield, Award, Users, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
       <div className="bg-stone-900 py-32 px-4 relative flex items-center justify-center">
         <div className="absolute inset-0 opacity-10 bg-[url('/about-header.jpg')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10 animate-slide-up">
          <span className="text-brand-400 font-bold tracking-widest text-xs uppercase mb-4 block">Our Story</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Family-Run. Owner-Operated.</h1>
        </div>
      </div>

      <Section bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-8">Meet The Team</h2>
            <div className="prose prose-stone text-lg text-stone-600 leading-relaxed">
              <p className="mb-6">
                Mazerolle Builders Ltd. is a family-run contracting company founded by father-and-son duo Roger and Shane Mazerolle, originally from New Brunswick. Together, they've built the company on the belief that quality work comes from hands-on involvement, personal accountability, and treating every project like it's their own home.
              </p>
              <p className="mb-6">
                Roger Mazerolle brings over 40 years of carpentry experience, having worked across most Canadian provinces. From framing to finish work, his extensive knowledge of construction standards ensures every project is built to last. Roger is deeply dedicated to growing a lasting legacy, passing on skills and values that ensure Mazerolle Builders stands for quality for generations to come.
              </p>
              <p className="mb-6">
                Shane Mazerolle grew up learning the trade under his father, starting as a teenage labourer. Today, he runs Ontario operations, oversees crews, and ensures every project is executed efficiently and professionally, with obsessive attention to detail. True to his roots, Shane still wears a tool belt on the jobsite, hands-on every step of the way.
              </p>
              <p>
                Natalie Mazerolle manages business operations and works closely with clients to understand their design vision. She brings organization and structure to every project, keeping timelines on track, budgets under control, and the whole team working efficiently. Her hands-on approach ensures projects run smoothly and reflect each client's unique vision.
              </p>
            </div>
          </div>
          <div className="space-y-8 animate-scale-in">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-full sm:w-44 shrink-0 rounded-sm overflow-hidden shadow-lg aspect-[3/4] max-h-56 sm:max-h-none">
                <img src="/team-roger.jpg" alt="Roger Mazerolle" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 bg-brand-50 p-6 rounded-sm border-l-4 border-brand-700 shadow-md min-w-0">
                <h3 className="font-serif font-bold text-xl text-stone-800 mb-1">Roger Mazerolle</h3>
                <p className="text-xs text-brand-700 font-bold uppercase tracking-wide">Co-Owner</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-full sm:w-44 shrink-0 rounded-sm overflow-hidden shadow-lg aspect-[3/4] max-h-56 sm:max-h-none">
                <img src="/team-shane.jpg" alt="Shane Mazerolle" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 bg-stone-100 p-6 rounded-sm border-l-4 border-stone-400 shadow-md min-w-0">
                <h3 className="font-serif font-bold text-xl text-stone-800 mb-1">Shane Mazerolle</h3>
                <p className="text-xs text-brand-700 font-bold uppercase tracking-wide">Co-Owner</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-full sm:w-44 shrink-0 rounded-sm overflow-hidden shadow-lg aspect-[3/4] max-h-56 sm:max-h-none">
                <img src="/team-natalie.jpg" alt="Natalie Mazerolle" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 bg-stone-100 p-6 rounded-sm border-l-4 border-stone-400 shadow-md min-w-0">
                <h3 className="font-serif font-bold text-xl text-stone-800 mb-1">Natalie Mazerolle</h3>
                <p className="text-xs text-brand-700 font-bold uppercase tracking-wide">Manager</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Credentials & Safety */}
      <Section bg="light">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-slide-up">
          <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">Safety & Coverage</h2>
          <p className="text-stone-600">We don't cut corners on safety or liability. Your project is protected.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { icon: Shield, color: 'text-green-700', bg: 'bg-green-100', title: 'WSIB Coverage', desc: "Full Worker's Compensation coverage for all staff." },
             { icon: Award, color: 'text-blue-700', bg: 'bg-blue-100', title: 'Liability Insurance', desc: "Comprehensive General Liability insurance policy." },
             { icon: GraduationCap, color: 'text-red-700', bg: 'bg-red-100', title: 'Certified Expertise', desc: "Building code expertise and First Aid trained staff." },
             { icon: Users, color: 'text-orange-700', bg: 'bg-orange-100', title: 'Safety Meetings', desc: "Regular safety briefings and strict COVID-19 protocols." },
           ].map((item, idx) => (
             <div key={idx} className="bg-white p-8 rounded-sm shadow-md hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col items-center text-center">
               <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-full flex items-center justify-center mb-5`}>
                 <item.icon size={28} />
               </div>
               <h3 className="font-bold text-stone-800 mb-3 text-lg">{item.title}</h3>
               <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>
      </Section>

      {/* Trusted By / Areas */}
      <Section bg="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           <div className="animate-slide-up">
             <h2 className="text-3xl font-serif font-bold text-stone-800 mb-6">Where We Operate</h2>
             <p className="text-stone-600 mb-8 leading-relaxed text-lg">
               We are proud to bring our expertise to multiple regions. While our roots are in the Maritimes, we have established a strong reputation in Ontario.
             </p>
             <ul className="space-y-4">
               {['Waterloo Region', 'Oxford County', 'Surrounding Ontario Areas', 'New Brunswick'].map((area, i) => (
                 <li key={i} className="flex items-center text-stone-700 font-medium text-lg">
                   <div className="w-2.5 h-2.5 bg-brand-700 rounded-full mr-4"></div>{area}
                 </li>
               ))}
             </ul>
           </div>
           <div className="bg-stone-50 p-12 rounded-sm border-l-4 border-brand-700 shadow-lg animate-scale-in">
              <div className="w-full h-64 bg-stone-200 border-2 border-dashed border-stone-400 rounded-sm mb-6 shadow-sm flex items-center justify-center">
                <span className="text-stone-500 text-lg font-medium">Image here</span>
              </div>
              <h3 className="font-serif font-bold text-2xl mb-6 text-stone-800">Our Promise</h3>
              <p className="italic text-stone-600 text-xl leading-relaxed">
                "We don't take on every project that comes our way. We take on projects where we know we can deliver exceptional quality and where the client values a job done right."
              </p>
              <div className="mt-10 flex items-center">
                 <div className="w-14 h-14 bg-brand-700 text-white flex items-center justify-center rounded-full font-serif font-bold text-xl mr-5 shadow-md">M</div>
                 <div>
                    <span className="font-bold text-stone-800 block text-lg">Roger & Shane Mazerolle</span>
                    <span className="text-sm text-brand-600 uppercase tracking-widest font-bold">Owners</span>
                 </div>
              </div>
           </div>
        </div>
      </Section>
    </>
  );
};

export default About;