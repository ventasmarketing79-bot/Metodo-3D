import React, { useState, useEffect } from 'react';
import { FacebookPixel, useFacebookPixel } from './components/FacebookPixel';
import { MetaTags } from './components/MetaTags';
import { 
  CheckCircle, 
  X, 
  Star, 
  Clock, 
  Zap, 
  Heart,
  Shield,
  Gift,
  ArrowRight,
  Target,
  BookOpen,
  Users
} from 'lucide-react';

function App() {
  const { trackEvent, trackCustomEvent } = useFacebookPixel();
  
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToOffer = () => {
    document.getElementById('offer-section')?.scrollIntoView({ behavior: 'smooth' });
    // Track scroll to offer
    trackCustomEvent('ScrollToOffer');
  };

  const handlePurchaseClick = () => {
    // Track purchase intent
    trackEvent('InitiateCheckout', {
      content_name: 'Reset Metabólico 3D',
      content_category: 'Digital Product',
      value: 9,
      currency: 'USD'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <FacebookPixel pixelId="YOUR_PIXEL_ID" />
      <MetaTags />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Pierde grasa en <span className="text-emerald-400">72h</span> sin dietas,<br />
                sin cardio y <span className="text-emerald-400">sin sufrimiento</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
                Descubre el método que está revolucionando la forma en que las mujeres 
                queman grasa desde casa… sin fuerza de voluntad.
              </p>
            </div>
            
            {/* Real Product Mockup */}
            <div className="flex justify-center py-8">
              <img 
                src="https://i.ibb.co/Rpp5gh2Q/MOCKUPS-vent.png" 
                alt="RESET METABÓLICO 3D - Método revolucionario para perder grasa"
                className="max-w-md w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Emotional Hook Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl font-bold text-gray-900">¿Te sientes estancada?</h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              Has probado de todo: dietas, cardio, pastillas… pero cada mañana te despiertas 
              más cansada, hinchada y frustrada.
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No es tu culpa.</h3>
              <p className="text-xl">
                Tu cuerpo no está roto. Está <span className="font-bold text-red-600">desregulado</span>.
              </p>
              <p className="mt-4">
                Y ningún plan ha trabajado con tu cuerpo, tu mente y tus hormonas al mismo tiempo… hasta ahora.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Reset Metabolico 3D */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              ¿Qué es RESET METABÓLICO 3D?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Un sistema rápido, preciso y diseñado para mujeres que quieren perder grasa sin castigo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl text-center">
              <Zap className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Activa tu quema natural desde el desayuno
              </h3>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center">
              <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Quema grasa mientras duermes
              </h3>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl text-center">
              <Target className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Reprograma tu cerebro para dejar de sabotearte
              </h3>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-emerald-500 to-blue-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-2">3 dimensiones → 1 resultado</h3>
            <p className="text-xl">Transformación real sin rebote</p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Comparativa Directa
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Método</th>
                  <th className="px-6 py-4 text-center font-bold">Resultados Reales</th>
                  <th className="px-6 py-4 text-center font-bold">Sostenible</th>
                  <th className="px-6 py-4 text-center font-bold">Hormonas</th>
                  <th className="px-6 py-4 text-center font-bold">Mente</th>
                  <th className="px-6 py-4 text-center font-bold">Tiempo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold">Dietas extremas</td>
                  <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center text-red-500">🐌 Semanas</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold">Cardio o ayuno</td>
                  <td className="px-6 py-4 text-center text-yellow-500">⚠️ Frágiles</td>
                  <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center text-yellow-500">⏱️ 7-14 días</td>
                </tr>
                <tr className="bg-gradient-to-r from-emerald-50 to-blue-50 border-2 border-emerald-400">
                  <td className="px-6 py-4 font-bold text-emerald-700">RESET METABÓLICO 3D</td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-emerald-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-emerald-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-emerald-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-emerald-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center text-emerald-600 font-bold">⚡ 3 días</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            ¿Qué incluye el método?
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl flex items-center gap-4">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="text-xl font-bold text-gray-900">Ebook RESET METABÓLICO 3D</h3>
                <p className="text-gray-700">El método completo paso a paso</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <Gift className="w-8 h-8 text-emerald-600" />
                <h3 className="text-xl font-bold text-gray-900">BONOS EXCLUSIVOS (valorados en +$103)</h3>
              </div>
              <ul className="space-y-3 ml-12">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span>"Desayuno Anti-Grasa" <span className="font-bold">($27)</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span>"Plan Express 3D en 72h" <span className="font-bold">($47)</span></span>
                </li>
                
                {/* Bonus Images */}
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="flex justify-center">
                    <img 
                      src="https://i.ibb.co/SFLGBnD/Pierde-grasa-en-72h-sin-dietas-sin-cardio-y-sin-sufrimiento-4.png" 
                      alt="Plan Express 3D - Método RESET METABÓLICO"
                      className="max-w-full h-auto object-contain rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    />
                  </div>
                  <div className="flex justify-center">
                    <img 
                      src="https://i.ibb.co/fd7sj97F/Pierde-grasa-en-72h-sin-dietas-sin-cardio-y-sin-sufrimiento-3.png" 
                      alt="Bonus RESET METABÓLICO 3D - Transformación rápida"
                      className="max-w-full h-auto object-contain rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    />
                  </div>
                </div>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-100 p-6 rounded-2xl border-2 border-orange-300">
              <div className="flex items-center gap-4">
                <Shield className="w-8 h-8 text-orange-600" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">🚨 BONUS: Garantía de Transformación en 7 Días</h3>
                  <p className="text-gray-700">Valor <span className="font-bold">$29</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Testimonios Reales
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" 
                  alt="Sofía, 30 años - Testimonio RESET METABÓLICO 3D"
                  className="w-16 h-16 rounded-full object-cover border-2 border-emerald-200"
                />
                <div>
                  <div className="font-bold text-gray-900 text-lg">Sofía, 30 años</div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 mb-4 italic">
                "No es una dieta. Es lo primero que me enseñó a dejar de odiar mi cuerpo."
              </blockquote>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" 
                  alt="Laura, 42 años - Testimonio RESET METABÓLICO 3D"
                  className="w-16 h-16 rounded-full object-cover border-2 border-emerald-200"
                />
                <div>
                  <div className="font-bold text-gray-900 text-lg">Laura, 42 años</div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 mb-4 italic">
                "En 72h mi hinchazón desapareció. Y sin matarme de hambre."
              </blockquote>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" 
                  alt="María, 38 años - Testimonio RESET METABÓLICO 3D"
                  className="w-16 h-16 rounded-full object-cover border-2 border-emerald-200"
                />
                <div>
                  <div className="font-bold text-gray-900 text-lg">María, 38 años</div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 mb-4 italic">
                "Por fin tengo control. Como con libertad y estoy perdiendo grasa cada semana."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Irresistible Offer */}
      <section id="offer-section" className="py-20 bg-gradient-to-br from-red-600 via-orange-600 to-yellow-500 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Oferta Irresistible</h2>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-8">
            <div className="flex justify-center items-center gap-4 mb-6">
              <span className="text-2xl line-through text-white/70">$197 USD</span>
              <span className="text-6xl font-black text-yellow-300">$9</span>
              <span className="text-2xl">USD</span>
            </div>
            
            <div className="bg-red-600 text-white px-6 py-3 rounded-full inline-block mb-6">
              <Clock className="w-5 h-5 inline mr-2" />
              Oferta válida por tiempo limitado
            </div>

            <div className="flex justify-center gap-4 text-3xl font-bold mb-8">
              <div className="bg-black/30 px-4 py-2 rounded-lg">
                {String(timeLeft.hours).padStart(2, '0')}
                <div className="text-sm font-normal">HORAS</div>
              </div>
              <div className="bg-black/30 px-4 py-2 rounded-lg">
                {String(timeLeft.minutes).padStart(2, '0')}
                <div className="text-sm font-normal">MIN</div>
              </div>
              <div className="bg-black/30 px-4 py-2 rounded-lg">
                {String(timeLeft.seconds).padStart(2, '0')}
                <div className="text-sm font-normal">SEG</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Shield className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-8">Garantía de Transformación</h2>
          
          <div className="bg-gray-800 p-8 rounded-2xl border border-emerald-400">
            <p className="text-2xl mb-6">
              🎯 <em>Hazlo 7 días. Hazlo bien. Si no ves un solo resultado, te devuelvo tu dinero.</em>
            </p>
            
            <div className="space-y-4 text-lg">
              <p>Esto no es un PDF más.</p>
              <p className="text-emerald-400 font-bold text-xl">
                Es el plan que tu cuerpo lleva años pidiendo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Closing */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <h2 className="text-4xl font-bold">
            Tu cuerpo no necesita castigo.<br />
            <span className="text-yellow-300">Necesita instrucciones.</span>
          </h2>
          
          <p className="text-2xl">Y ya las tienes.</p>
          
          <div className="space-y-4">
            <p className="text-xl">Empieza hoy el Método RESET METABÓLICO 3D.</p>
            <p className="text-2xl font-bold text-emerald-400">Esta vez… no hay marcha atrás.</p>
          </div>

          <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-12 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center gap-3">
            <a 
              href="https://pay.hotmart.com/Y100436434I" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3"
              onClick={handlePurchaseClick}
            >
              Empieza tu Reset Ahora <ArrowRight className="w-6 h-6" />
            </a>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p>&copy; 2025 Reset Metabólico 3D. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;