import { useEffect } from 'react';

interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const MetaTags: React.FC<MetaTagsProps> = ({
  title = "RESET METABÓLICO 3D - Pierde Grasa en 72h Sin Dietas",
  description = "Descubre el método revolucionario para perder grasa en 72h sin dietas, sin cardio y sin sufrimiento. Método probado para mujeres.",
  image = "https://i.ibb.co/Rpp5gh2Q/MOCKUPS-vent.png",
  url = "https://heartfelt-biscochitos-a4c38d.netlify.app",
  type = "website"
}) => {
  useEffect(() => {
    // Open Graph Meta Tags
    const metaTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:type', content: type },
      { property: 'og:site_name', content: 'Reset Metabólico 3D' },
      
      // Facebook specific
      { property: 'fb:app_id', content: 'YOUR_FACEBOOK_APP_ID' },
      
      // Twitter Cards
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
      
      // Additional SEO
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Reset Metabólico 3D' },
      { name: 'keywords', content: 'perder grasa, dieta, metabolismo, mujeres, 72 horas, reset metabólico' }
    ];

    metaTags.forEach(tag => {
      const existingTag = document.querySelector(
        `meta[${tag.property ? 'property' : 'name'}="${tag.property || tag.name}"]`
      );
      
      if (existingTag) {
        existingTag.setAttribute('content', tag.content);
      } else {
        const newTag = document.createElement('meta');
        if (tag.property) {
          newTag.setAttribute('property', tag.property);
        } else {
          newTag.setAttribute('name', tag.name);
        }
        newTag.setAttribute('content', tag.content);
        document.head.appendChild(newTag);
      }
    });
  }, [title, description, image, url, type]);

  return null;
};