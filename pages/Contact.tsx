import React, { useState } from 'react';
import Section from '../components/Section';
import { Phone, Mail, MapPin, Send, Paperclip } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    files: null as FileList | null
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.type === 'file') {
      setFormData({ ...formData, files: target.files });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const form = e.currentTarget;
      const formDataToSend = new FormData(form);
      formDataToSend.append('_subject', `New inquiry from ${formData.firstName} ${formData.lastName}`);
      formDataToSend.append('_template', 'table');

      const response = await fetch('https://formsubmit.co/mazerollebuildersltd@gmail.com', {
        method: 'POST',
        body: formDataToSend,
        headers: { Accept: 'application/json' }
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '', files: null });
        window.scrollTo(0, 0);
      } else {
        const data = await response.json();
        setError(data.message || 'Something went wrong. Please try again or email us directly.');
      }
    } catch {
      setError('Unable to send message. Please try again or email us directly at mazerollebuildersltd@gmail.com');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="bg-brand-800 pt-24 pb-32 px-4 flex justify-center">
        <div className="max-w-7xl mx-auto text-center animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Start Your Project</h1>
          <p className="text-brand-100 text-lg max-w-2xl mx-auto">
            Contact us for a free estimate. We serve homeowners and businesses who value quality.
          </p>
        </div>
      </div>

      <Section bg="white" className="-mt-16 pt-0 relative z-10">
        <div className="bg-white shadow-2xl rounded-sm overflow-hidden border border-stone-100 max-w-6xl mx-auto animate-slide-up-delay">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            
            {/* Contact Info Sidebar */}
            <div className="bg-stone-900 text-white p-12 lg:col-span-2 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-serif font-bold mb-8 text-brand-400">Contact Information</h3>
                <p className="text-stone-400 mb-10 leading-relaxed text-lg">
                  Fill out the form or give us a call. We strive to return all inquiries within 24-48 business hours.
                </p>

                <div className="space-y-10">
                  <div className="group">
                    <h4 className="font-bold text-white mb-2 flex items-center uppercase tracking-wider text-xs text-brand-500">Ontario Division</h4>
                    <a href="tel:5195911034" className="flex items-center text-xl hover:text-brand-400 transition-colors">
                      <Phone size={24} className="mr-4 group-hover:scale-110 transition-transform" />
                      519-591-1034
                    </a>
                  </div>

                  <div className="group">
                    <h4 className="font-bold text-white mb-2 flex items-center uppercase tracking-wider text-xs text-brand-500">New Brunswick Division</h4>
                    <a href="tel:5068629497" className="flex items-center text-xl hover:text-brand-400 transition-colors">
                      <Phone size={24} className="mr-4 group-hover:scale-110 transition-transform" />
                      506-862-9497
                    </a>
                  </div>

                  <div className="group">
                    <h4 className="font-bold text-white mb-2 flex items-center uppercase tracking-wider text-xs text-brand-500">Email Address</h4>
                    <a href="mailto:mazerollebuildersltd@gmail.com" className="flex items-center text-xl hover:text-brand-400 transition-colors break-all">
                      <Mail size={24} className="mr-4 group-hover:scale-110 transition-transform shrink-0" />
                      mazerollebuildersltd@gmail.com
                    </a>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-2 flex items-center uppercase tracking-wider text-xs text-brand-500">Mailing Address</h4>
                    <div className="flex items-start text-stone-300">
                      <MapPin size={24} className="mr-4 mt-1 shrink-0" />
                      <div className="text-lg">
                        <p>PO Box 23032 Springbank</p>
                        <p>Woodstock, ON</p>
                        <p>N4T 1R9</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-stone-800">
                 <p className="text-stone-500 text-sm italic font-medium">
                   "We treat every project like it's our own home."
                 </p>
              </div>
            </div>

            {/* Form Area */}
            <div className="p-12 lg:col-span-3 bg-white">
              {submitted ? (
                <div className="h-full flex flex-col justify-center items-center text-center py-12 animate-fade-in">
                   <div className="w-24 h-24 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-8 shadow-inner">
                     <Send size={48} />
                   </div>
                   <h3 className="text-3xl font-serif font-bold text-stone-800 mb-4">Message Sent</h3>
                   <p className="text-stone-600 max-w-md mx-auto mb-10 text-lg">
                     Thank you for contacting Mazerolle Builders. Roger or Shane will be in touch with you shortly to discuss your project.
                   </p>
                   <button 
                     onClick={() => setSubmitted(false)}
                     className="text-brand-700 font-bold hover:underline text-lg"
                   >
                     Send another message
                   </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
                  <h3 className="text-3xl font-serif font-bold text-stone-800 mb-8">Send us a Message</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-stone-700 mb-2">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3.5 border border-stone-300 rounded-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-stone-50 focus:bg-white"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-stone-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3.5 border border-stone-300 rounded-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-stone-50 focus:bg-white"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3.5 border border-stone-300 rounded-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-stone-50 focus:bg-white"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3.5 border border-stone-300 rounded-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-stone-50 focus:bg-white"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">Project Details / Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3.5 border border-stone-300 rounded-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all resize-none bg-stone-50 focus:bg-white"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div>
                    <label htmlFor="attachments" className="block text-sm font-medium text-stone-700 mb-2 flex items-center">
                      <Paperclip size={18} className="mr-2 text-stone-500" />
                      Attach Files (Sketches, Drawings, Building Plans)
                    </label>
                    <input
                      type="file"
                      id="attachments"
                      name="attachments"
                      multiple
                      accept="image/*,.pdf,.doc,.docx"
                      className="w-full px-4 py-3.5 border border-stone-300 rounded-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:bg-stone-100 file:text-stone-700 file:cursor-pointer hover:file:bg-stone-200"
                      onChange={handleChange}
                    />
                    <p className="text-stone-500 text-sm mt-1">Images, PDFs, and documents accepted.</p>
                  </div>

                  {error && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-sm text-red-700 text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-brand-700 text-white font-bold py-4 rounded-sm hover:bg-brand-800 transition-all shadow-md text-lg hover:-translate-y-1 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>

      <Section bg="light">
         <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4">Prefer to talk directly?</h2>
            <p className="text-stone-600 mb-8">We prefer the personal touch too. Feel free to call us directly during business hours.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a href="tel:5195911034" className="flex items-center justify-center px-8 py-4 border-2 border-stone-300 rounded-sm hover:border-brand-700 hover:text-brand-700 transition-all font-bold text-stone-700 bg-white hover:-translate-y-1 shadow-sm hover:shadow-md">
                   <Phone size={20} className="mr-3" /> Call Ontario (519)
                </a>
                <a href="tel:5068629497" className="flex items-center justify-center px-8 py-4 border-2 border-stone-300 rounded-sm hover:border-brand-700 hover:text-brand-700 transition-all font-bold text-stone-700 bg-white hover:-translate-y-1 shadow-sm hover:shadow-md">
                   <Phone size={20} className="mr-3" /> Call New Brunswick (506)
                </a>
            </div>
         </div>
      </Section>
    </>
  );
};

export default Contact;