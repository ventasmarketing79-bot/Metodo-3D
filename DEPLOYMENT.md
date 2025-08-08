# Guía de Despliegue - Reset Metabólico 3D

## 🚀 Opciones de Despliegue

### 1. Netlify (Recomendado)
```bash
# Construir el proyecto
npm run build

# La carpeta 'dist' contiene los archivos estáticos
```

**Configuración en Netlify:**
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `18.x`

### 2. Vercel
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel --prod
```

### 3. GitHub Pages
```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Agregar script en package.json
"deploy": "gh-pages -d dist"

# Desplegar
npm run build
npm run deploy
```

## 🔧 Variables de Entorno

Crea un archivo `.env` con:

```env
VITE_FACEBOOK_PIXEL_ID=tu_pixel_id_aqui
VITE_FACEBOOK_APP_ID=tu_app_id_aqui
VITE_HOTMART_LINK=https://pay.hotmart.com/Y100436434I
```

## 📊 Configuración de Analytics

### Facebook Pixel
1. Ve a Facebook Business Manager
2. Events Manager → Crear Pixel
3. Copia el Pixel ID
4. Reemplaza en `src/components/FacebookPixel.tsx`

### Google Analytics (Opcional)
```bash
npm install gtag

# Agregar en main.tsx
```

## 🌐 Dominio Personalizado

### Netlify
1. Ve a Site settings → Domain management
2. Add custom domain
3. Configura DNS records

### Cloudflare (Recomendado para CDN)
1. Agrega tu dominio a Cloudflare
2. Configura DNS
3. Habilita SSL/TLS

## 🔒 Configuración SSL

Todos los proveedores mencionados incluyen SSL gratuito.

## 📈 Monitoreo Post-Despliegue

### Métricas Importantes
- **Conversión**: Clicks en botón de compra
- **Engagement**: Tiempo en página
- **Tráfico**: Fuentes de visitantes
- **Performance**: Core Web Vitals

### Herramientas Recomendadas
- Google Analytics 4
- Facebook Pixel
- Hotjar (heatmaps)
- Google Search Console

## 🚨 Checklist Pre-Despliegue

- [ ] Facebook Pixel ID configurado
- [ ] Enlaces de pago funcionando
- [ ] Meta tags actualizados
- [ ] Imágenes optimizadas
- [ ] Sitemap.xml actualizado
- [ ] Robots.txt configurado
- [ ] SSL habilitado
- [ ] Dominio personalizado (opcional)

## 🔄 Actualizaciones Futuras

```bash
# Para actualizar el sitio
git add .
git commit -m "Update: descripción del cambio"
git push origin main

# El despliegue será automático
```

---

**Nota**: Recuerda probar todos los enlaces y funcionalidades después del despliegue.