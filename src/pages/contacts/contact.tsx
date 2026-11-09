import { useState } from 'react';
import { CheckCircle2, Mail, MapPin, Send } from 'lucide-react';
import Footer from '../../components/footer';
import emailjs from '@emailjs/browser';
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from '../../const/lists';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

emailjs.init({
    publicKey: EMAILJS_PUBLIC_KEY,
    limitRate: {
    id: 'waitjs',
    throttle: 60000
    },
    blockList: {
      watchVariable: 'from_email'
    }
});

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' }); 
  const [isWait, setWait] = useState<boolean>(false); 

  const handleContactSubmit = async (
  e: React.FormEvent<HTMLFormElement>
  ) => {
    if(isWait) return;
    setWait(true)
    e.preventDefault();

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      console.log("Email envoyé :", result.text);
      setWait(false)
      setFormSubmitted(true);

      window.setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 60000);

    } catch (error) {
      console.error("Erreur EmailJS :", error);
      alert("Une erreur est survenue lors de l'envoi du message.");
    }
  };

  return (
  <>
    <div className="px-[2%] pt-[20%] sm:md:pt-[12%] space-y-12 animate-fadeIn max-w-4xl mx-auto">

      <div className="text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 my-10 rounded-full border border-blue-200">
          Contact
        </span>
        <h1 className="pt-5 text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Discutons de votre projet
        </h1>
        <p className="text-slate-600 text-sm max-w-md mx-auto px-[5%]">
          Remplissez le formulaire ci-dessous ou envoyez-moi un message direct.
        </p>
      </div>

      <div className="grid grid-cols-1 px-[6%] md:grid-cols-3 gap-8">

        <div className="space-y-4 md:col-span-1">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-1">
            <Mail className="w-5 h-5 text-blue-600 mb-2" />
            <div className="text-xs font-semibold text-slate-500 uppercase">Email</div>
            <div className="text-sm font-bold text-slate-900 overflow-auto">dev.safidy.rakotoarimanana@gmail.com</div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-1">
            <MapPin className="w-5 h-5 text-blue-600 mb-2" />
            <div className="text-xs font-semibold text-slate-500 uppercase">Localisation</div>
            <div className="text-sm font-bold text-slate-900">Antananarivo, Madagascar</div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
            <div className="text-xs font-semibold text-slate-500 uppercase">Réseaux Sociaux</div>
            <div className="flex items-center space-x-3 text-slate-700">
              <a href="https://github.com/safidy-andriantsoa-rakoto" target="_blank" rel="noreferrer" className="p-2 bg-slate-100 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/rakotoarimanana-safidy-andriantsoa-28845225b?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="p-2 bg-slate-100 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm md:col-span-2">
          {formSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
              <h3 className="text-xl font-bold text-slate-900">Message envoyé avec succès !</h3>
              <p className="text-sm text-slate-600">Merci pour votre message. Je vous répondrai dans les plus brefs délais.</p>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Nom complet</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Votre nom"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Adresse Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nom@exemple.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Sujet</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Sujet de votre message"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Message</label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Décrivez votre projet..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-600/20 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:blue-300"
                disabled={isWait}
              >
                <Send className="w-4 h-4" />{ isWait ? "...": "Envoyer le message" }
              </button>
            </form>
          )}
        </div>

      </div>

    </div>

    <Footer></Footer>
  </>
  );
}
