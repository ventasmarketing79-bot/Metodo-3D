# RESET METABÓLICO 3D - Landing Page

Una landing page moderna y optimizada para conversiones del método "Reset Metabólico 3D" - un sistema revolucionario para perder grasa en 72h sin dietas.

## 🚀 Características

- **Diseño responsivo** con Tailwind CSS
- **Optimizado para conversiones** con elementos de urgencia y escasez
- **Facebook Pixel integrado** para tracking de conversiones
- **Meta tags optimizados** para redes sociales
- **Testimonios reales** con imágenes
- **Countdown timer** dinámico
- **Garantía de satisfacción** prominente

## 🛠️ Tecnologías Utilizadas

- **React 18** con TypeScript
- **Vite** como bundler
- **Tailwind CSS** para estilos
- **Lucide React** para iconos
- **Facebook Pixel** para analytics

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/reset-metabolico-3d.git

# Navegar al directorio
cd reset-metabolico-3d

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

## 🔧 Configuración

### Facebook Pixel
1. Ve a [Facebook Business Manager](https://business.facebook.com)
2. Crea tu Pixel en Events Manager
3. Reemplaza `YOUR_PIXEL_ID` en `src/components/FacebookPixel.tsx`
4. Reemplaza `YOUR_FACEBOOK_APP_ID` en `src/components/MetaTags.tsx`

### Personalización
- **Colores**: Modifica `tailwind.config.js`
- **Contenido**: Edita `src/App.tsx`
- **Meta tags**: Actualiza `src/components/MetaTags.tsx`

## 📈 Eventos de Conversión Configurados

- `PageView` - Carga de página
- `InitiateCheckout` - Clic en botón de compra
- `ScrollToOffer` - Scroll a sección de oferta

## 🚀 Despliegue

```bash
# Construir para producción
npm run build

# Vista previa local
npm run preview
```

### Netlify
El proyecto está configurado para despliegue automático en Netlify.

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── FacebookPixel.tsx    # Integración Facebook Pixel
│   └── MetaTags.tsx         # Meta tags para SEO/Social
├── App.tsx                  # Componente principal
├── main.tsx                 # Punto de entrada
└── index.css               # Estilos globales
```

## 🎯 Optimizaciones Incluidas

- **SEO**: Meta tags, sitemap, robots.txt
- **Performance**: Lazy loading, optimización de imágenes
- **Conversión**: Elementos de urgencia, testimonios, garantía
- **Analytics**: Facebook Pixel con eventos personalizados

## 📄 Licencia

Este proyecto es privado y propietario.

## 🤝 Contribuir

Este es un proyecto privado. Para cambios, contacta al propietario.

---

**Desarrollado para maximizar conversiones y resultados de marketing digital.**