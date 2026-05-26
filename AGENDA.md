# VisaDirect - Proyecto Astro

## 1. Resumen del Proyecto

**Nombre del Proyecto**: VisaDirect - Página de Trámites y Visas  
**Tipo**: Sitio web estático construido con Astro + Tailwind CSS  
**Propósito**: Landing page para servicios de asesoría migratoria y trámites de visas (EE.UU. y Colombia)  
**URL**: https://visadirect.com

## 2. Stack Tecnológico

| Tecnología | Versión | Rol |
|------------|---------|-----|
| Astro | ^4.0.0 | Framework principal |
| Tailwind CSS | ^3.4.0 | Framework de estilos |
| @astrojs/tailwind | ^5.0.0 | Integración Astro + Tailwind |

## 3. Estructura del Proyecto

```
pagina tramites/
├── src/
│   ├── components/
│   │   ├── Navbar.astro           # Navegación fija en la parte superior
│   │   ├── Hero.astro             # Sección hero principal
│   │   ├── Services.astro         #Grid de categorías de servicios (EE.UU. / Colombia)
│   │   ├── ServicesUSA.astro      # Servicios de trámites en EE.UU.
│   │   ├── ServicesColombia.astro  # Servicios de asesoría legal en Colombia
│   │   ├── WhyUs.astro            # Sección "¿Por qué elegirnos?"
│   │   ├── Stats.astro            # Estadísticas (2500+ clientes, 1500+ residencias, 10+ años)
│   │   ├── Testimonials.astro     # Testimonios de clientes
│   │   ├── CTA.astro              # Llamada a la acción final
│   │   ├── Contact.astro         # Formulario de contacto
│   │   ├── Footer.astro           # Pie de página con datos de empresa
│   │   └── ScrollToTop.astro      # Botón flotante para volver arriba
│   ├── layouts/
│   │   └── Layout.astro           # Layout base con head y estructura HTML
│   └── pages/
│       └── index.astro            # Página principal que importa todos los componentes
├── public/                        # Assets estáticos
├── astro.config.mjs              # Configuración de Astro
├── tailwind.config.mjs           # Configuración de Tailwind (colores, tipografía, spacing)
├── tsconfig.json                  # Configuración de TypeScript
└── package.json                   # Dependencias y scripts npm
```

## 4. Datos de la Empresa

| Campo | Valor |
|-------|-------|
| **Nombre** | VisaDirect Immigration Services |
| **Dirección** | 333 SE 2ND AVE SUITE 2000 MIAMI FL 33131 (Wells Fargo Center) |
| **Teléfono** | +1 (650) 679-1659 |
| **Email** | Tramitesm365@gmail.com |
| **WhatsApp** | +1 (650) 679-1659 |
| **Link Agendamiento** | https://buy.stripe.com/5kQbJ0dLS5IN1DhenSgMw02 |
| **Redes Sociales** | Facebook, Instagram, TikTok |

## 5. Servicios

### 5.1 Trámites Estados Unidos

| Servicio | Descripción | Formularios |
|----------|-------------|-------------|
| **Petición Familiar** | El primer paso para unir a tu familia. Gestionamos las solicitudes de ciudadanos o residentes permanentes que desean patrocinar legalmente a sus cónyuges, hijos, padres o hermanos. | Form I-130 |
| **Ajuste de Estatus** | Obtén tu Residencia Permanente (Green Card) sin necesidad de salir del país. Ideal tras ingresar con visa de prometido o al casarte dentro de EE.UU. | Form I-485 |
| **Remoción de Condiciones** | Si tu residencia es condicional por matrimonio, te acompañamos en la radicación de la solicitud para eliminar las restricciones temporales. | Form I-751 |
| **Naturalización y Ciudadanía** | El paso final de tu camino migratorio. Guiamos a los residentes permanentes en el cumplimiento de requisitos y preparación para la entrevista. | N-400 |
| **Visa de Prometido** | Diseñada para parejas de ciudadanos estadounidenses que desean contraer matrimonio en EE.UU. Manejamos la petición ante USCIS y fase consular. | I-129F |
| **Autorización de Empleo** | Documento oficial emitido por USCIS que otorga la facultad legal para trabajar lícitamente en EE.UU. mientras tu proceso principal se tramita. | Form I-765 |
| **Constitución de Empresas (LLC / C-Corp)** | Para emprendedores internacionales que desean globalizar sus ingresos, proteger sus activos y operar en el mercado estadounidense. Incluye: estructuración legal, registro estatal en Florida, EIN, Operating Agreement, apertura de cuentas corporativas y cumplimiento anual. |

### 5.2 Asesoría Legal Migratoria para Colombia

| Servicio | Descripción |
|----------|-------------|
| **Visa de Nómada Digital** | Ideal para profesionales independientes, emprendedores y trabajadores remotos que desean vivir en Colombia mientras prestan servicios a empresas en el exterior. |
| **Visas de Visitante (Tipo V)** | Para estadías de corta o mediana duración sin ánimo de establecimiento permanente. Asesoría para turismo, tránsito, tratamientos médicos, eventos, misiones y actividades académicas. |
| **Visas de Migrante (Tipo M)** | Para quienes buscan establecerse a mediano o largo plazo. Subcategorías: por matrimonio/unión libre, por inversión (bienes raíces o sociedades), por trabajo, o profesionales calificados. |
| **Visas de Negocios y Cobertura Corporativa** | Soluciones para empresarios e inversionistas. Constitución de empresas, representación legal, visados para prospección de negocios y establecimiento de operaciones comerciales. |
| **Cédula de Extranjería** | Trámite de identificación para extranjeros residents en Colombia. |

### 5.3 Otros Servicios Legales y Administrativos

| Servicio | Descripción |
|----------|-------------|
| **Apostilla de Documentos** | Tramitación y validación de documentos públicos colombianos (registros civiles, títulos universitarios, antecedentes) para tengan plena validez legal en el exterior. |
| **Servicios de Notarización** | Preparación, revisión y radicación de actas, declaraciones extrajudiciales, poderes y autenticaciones ante notarías colombianas. |
| **Eliminación de Multas de Tránsito** | Análisis de historial de comparendos, evaluación de viabilidad legal, representación y gestión de recursos ante el RUNT. |

## 6. Sección "¿Por qué elegirnos?"

### Enfoques de texto (para uso en web):

**Opción 1 - Enfoque en seguridad y respaldo integral:**
> "Guiamos tu camino hacia el éxito internacional con respaldo legal y consultoría estratégica de principio a fin. Nos encargamos de tus trámites migratorios en Estados Unidos y asesoría legal en Colombia con un enfoque claro, riguroso y continuo."

**Opción 2 - Enfoque en transformación y tranquilidad:**
> "Transformamos la complejidad legal en un proceso claro y sin contratiempos. Te ofrecemos una asesoría jurídica sólida y un acompañamiento continuo para que tú y tu familia alcancen sus metas en Estados Unidos con total tranquilidad."

### Razones principales:

1. **Enfoque Estratégico y Binacional** - Dominamos el ecosistema legal de EE.UU. y Colombia con la misma rigurosidad. Diseñamos estrategias interconectadas: constitución de empresa en EE.UU. mientras gestionamos documentación complementaria o visados en Colombia.

2. **Consultoría de Alto Nivel vs. Llenado de Formularios** - Un trámite exitoso no depende de rellenar casillas, sino de la estrategia detrás del expediente. Analizamos tu perfil de manera integral para potenciar fortalezas y mitigar riesgos antes de radicar.

3. **Acompañamiento Continuo y Personalizado** - Atención boutique donde tu caso recibe la prioridad que merece. Nos mantenemos a tu lado de principio a fin, guiándote en cada etapa.

4. **Soluciones Integrales** - Complementamos movilidad global con creación de estructuras corporativas (LLC, C-Corp, S.A.S.), trámites notariales, apostillas y defensas administrativas locales.

### Razones alternativas (para sección "Por qué elegirnos"):

1. **Rigor y Excelencia Jurídica** - El derecho migratorio y corporativo no permite improvisación. Estudiamos minuciosamente cada detalle, ley y requisito para estructurar procesos sólidos con el menor margen de riesgo posible.

2. **Acompañamiento Continuo** - Entendemos la incertidumbre de los procesos legales. Nos comprometemos a estar presentes en cada etapa con canales de comunicación claros y soporte constante.

3. **Transparencia y Claridad** - Te hablamos con honestidad desde la primera consultoría sobre viabilidad real, tiempos estimados y caminos legales más eficientes.

4. **Visión Integral y Global** - Abordamos tus necesidades con mentalidad binacional y estratégica, conectando soluciones migratorias, corporativas y administrativas en Colombia y Estados Unidos.

## 7. Estadísticas

| Métrica | Valor |
|---------|-------|
| Clientes Felices | +2500 |
| Residencias Aprobadas | +1500 |
| Años de Experiencia | +10 |

## 8. Testimonios

> "Historias de éxito respaldadas por nuestra dedicación. La confianza de quienes han alcanzado sus metas en Estados Unidos y Colombia es nuestro mayor orgullo."

## 9. CTA (Call to Action)

**Texto principal:**
> "No dejes tu futuro, tu familia o tus negocios en manos de la improvisación. Diseñemos juntos la ruta migratoria y corporativa ideal para ti en Estados Unidos o Colombia."

**Botón:** "Agenda tu Consultoría Estratégica Aquí" (color rojo)
**Link:** https://buy.stripe.com/5kQbJ0dLS5IN1DhenSgMw02

## 10. Sistema de Diseño (Tailwind Config)

### 10.1 Paleta de Colores
| Color | Hex | Uso |
|-------|-----|-----|
| primary | #00346f | Principal (azul oscuro) |
| primary-container | #004a99 | Contenedor primario |
| secondary | #bb0014 | Acento (rojo) |
| secondary-container | #e51d24 | Contenedor secundario |
| background | #f8f9ff | Fondo |
| surface | #f8f9ff | Superficie |
| on-background | #0b1c30 | Texto sobre fondo |
| on-surface | #0b1c30 | Texto sobre superficie |
| on-surface-variant | #424751 | Texto secundario |
| on-primary | #ffffff | Texto sobre primario |
| on-secondary | #ffffff | Texto sobre secundario |
| outline | #737783 | Bordes |
| outline-variant | #c2c6d3 | Bordes variant |

### 10.2 Tipografía (Inter)
| Clase | Size | Line Height | Weight |
|-------|------|-------------|--------|
| display-lg | 48px | 56px | 700 |
| headline-lg | 32px | 40px | 600 |
| headline-lg-mobile | 24px | 32px | 600 |
| headline-md | 24px | 32px | 600 |
| body-lg | 18px | 28px | 400 |
| body-md | 16px | 24px | 400 |
| body-sm | 14px | 20px | 400 |
| label-md | 14px | 20px | 500 |
| label-sm | 12px | 16px | 600 |

### 10.3 Spacing
| Nombre | Valor |
|---------|-------|
| gutter | 24px |
| unit | 8px |
| margin-mobile | 16px |
| margin-desktop | 64px |
| container-max | 1200px |

## 11. Componentes

### 11.1 Layout.astro
- **Purpose**: Layout base HTML con head, meta tags, Google Fonts (Inter), y estilos globales
- **Props**: `title` (string)
- **Dependencies**: Google Fonts (Inter), Material Symbols Icons

### 11.2 Navbar.astro
- **Purpose**: Navegación fija con logo, links y CTA
- **Estado**: Dark mode support

### 11.3 Hero.astro
- **Purpose**: Sección hero principal con título, descripción, botón CTA e imagen decorativa
- **Decoración**: Badge con estadísticas

### 11.4 Services.astro
- **Purpose**: Grid de 2 categorías principales de servicios
- **Categorías**: Estados Unidos / Colombia
- **Interacción**: Tarjetas clickeables a sub-servicios

### 11.5 ServicesUSA.astro
- **Purpose**: Lista detallada de servicios en EE.UU.
- **Servicios**: Petición Familiar, Ajuste de Estatus, Remoción de Condiciones, Naturalización, Visa de Prometido, Autorización de Empleo, Constitución de Empresas

### 11.6 ServicesColombia.astro
- **Purpose**: Lista detallada de servicios en Colombia
- **Servicios**: Visa Nómada Digital, Visas Visitante, Visas Migrante, Visas de Negocios, Cédula de Extranjería

### 11.7 WhyUs.astro
- **Purpose**: Sección "Por qué elegirnos" con 4 razones principales
- **Content**: Rigor y Excelencia, Acompañamiento Continuo, Transparencia, Visión Integral

### 11.8 Stats.astro
- **Purpose**: Estadísticas de la empresa
- **Métricas**: 2500+ Clientes Felices, 1500+ Residencias Aprobadas, 10+ Años de Experiencia

### 11.9 Testimonials.astro
- **Purpose**: Testimonios de clientes con reseñas verificadas
- **Diseño**: Grid de tarjetas con quotes

### 11.10 CTA.astro
- **Purpose**: Llamada a la acción final con mensaje motivacional
- **Botón**: "Agenda tu Consultoría Estratégica Aquí" (rojo,链接 a Stripe)

### 11.11 Contact.astro
- **Purpose**: Formulario de contacto con información de la empresa
- **Campos**: Nombre, Email, Teléfono, Tipo de trámite

### 11.12 Footer.astro
- **Purpose**: Pie de página con datos de empresa, redes sociales, teléfono, email
- **Elements**: Logo, dirección Wells Fargo Center, teléfono, email, links redes sociales (FB, IG, TikTok), links legales, copyright

### 11.13 ScrollToTop.astro
- **Purpose**: Botón flotante para hacer scroll al top
- **Trigger**: Aparece después de 500px de scroll

## 12. Scripts Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Construye el sitio para producción
npm run preview  # Previsualiza el build de producción
```

## 13. Dependencias Externas

- Google Fonts: Inter
- Material Symbols Icons (Google Fonts)
- Stripe (para link de agendamiento)

## 14. Notas de Desarrollo

- Los colores usan la convención Material Design 3
- Los componentes son server-rendered por defecto (Static)
- WhatsApp: +1 (650) 679-1659
- Email: Tramitesm365@gmail.com
- Dirección: 333 SE 2ND AVE SUITE 2000 MIAMI FL 33131
