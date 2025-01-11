
interface Section {
  id: string;
  name: string;
  slug?: string; // Opcional, para reflejar el schema
  iconName?: string;
  order: number;
  href: string; // Esto debe ser obligatorio porque está en tu schema
  isActive: boolean;
  createdAt?: Date; // Opcional, ya que Prisma lo genera automáticamente
  updatedAt?: Date; // Opcional, ya que Prisma lo genera automáticamente
}

// CarruselSection
interface CarruselSection {
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  url: string;
  orden: number;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Testimonial {
  id: string;
  imagen: string;
  titulo: string;
  descripcion: string;
  url: string;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

// Categoria
export interface Categoria {
  id: string;
  nombre: string;
  descripcion?: string;
  isActive?: boolean; // Nueva propiedad para activar/desactivar categorías
  createdAt?: Date;
  updatedAt?: Date;
  aplicaciones?: CatalogoApp[]; // Relación con aplicaciones en el catálogo
}

// CatalogoApp
export interface CatalogoApp {
  id: string;
  imagen: string;
  nombre: string;
  descripcion: string;
  url: string;
  categoria?: Categoria; // Opcional: relación con la categoría
  categoriaId?: string; // Opcional: ID de la categoría asociada
  etiquetas?: string[]; // Opcional
  destacado?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
// Servicios
export interface Service {
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  slug: string;
  isActive?: boolean;
}

export const sectionsMenuSectionsBar: Section[] = [
  { name: "Catalogo", iconName: "FaBookOpen", href: "/catalogo", isActive: true, order: 1, id: "1", slug:"catalogo" },
  { name: "Galería", iconName: "GrGallery", href: "/galeria", isActive: true, order: 2, id: "2", slug:"galeria" },
  { name: "Servicios", iconName: "MdDesignServices", href: "/servicios", isActive: true, order: 3, id: "3", slug:"servicios" },
  { name: "Contacto", iconName: "IoLogoWhatsapp", href: "/contacto", isActive: true, order: 4, id: "4", slug: "contacto" },
  { name: "Blog", iconName: "FaBloggerB", href: "/blog", isActive: true, order: 5, id: "5", slug: "blog" }, 
];

// Video
export interface Video {
  id: string;
  url: string;
  title: string;
  description: string;
  order: number;
  createdAt?: Date;
  updatedAt?: Date;
}

// ImageGallery
export interface ImageGallery {
  id: string;
  url: string;
  title: string;
  description: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Articulo {
  id: string; // Identificador único
  slug: string; // Identificador para la ruta dinámica
  titulo: string; // Título del artículo
  descripcion: string; // Breve descripción del artículo
  imagen: string; // Imagen destacada para el carrusel
  imagenes: string[]; // Array de URLs para imágenes adicionales
  parrafos: string[]; // Contenido dividido en varios párrafos
  subtitulos: string[]; // Subtítulos para dividir secciones
  fechaPublicacion: Date; // Fecha de publicación
  autor: string; // Nombre del autor
  orden: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
  image?: string;
  emailVerified?: Date | null;
  createdAt: Date;
  updatedAt: Date;
  
  
}

interface SeedData {
  secciones: Section[];
  categorias: Categoria[];
  carouselItems: CarruselSection[];
  testimonios: Testimonial[];
  catalogoApps: CatalogoApp[];
  videos: Video[];
  imagenesGaleria : ImageGallery[];
  servicios: Service[];
  articulos: Articulo[];
  usuarios: User[];
}



export const initialData: SeedData = {
  usuarios: [
    {
      id: "user-001",
      name: "Administrador1",
      email: "admin1@gmail.com",
      password: "admin1234",  // Simulación, en producción debe ser encriptada
      role: "admin",
      image: "/imgs/admin-avatar.webp",
      emailVerified: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    
  ],
  secciones: sectionsMenuSectionsBar,
  carouselItems: [
    {
      id:"1",
      imagen: "/imgs/carrusel1.webp",
      titulo: "Desarrollo de Aplicaciones Web",
      descripcion: "Aplicaciones personalizadas para impulsar tu negocio.",
      url: "/servicios/desarrollo-web",
      orden: 1, 
      isActive: true
    },
    {
      id:"2",
      imagen: "/imgs/carrusel2.webp",
      titulo: "Ecommerce para Emprendedores",
      descripcion: "Soluciones de ecommerce listas para crecer.",
      url: "/servicios/ecommerce",
      orden: 2, 
      isActive: true
    },
    {
      id:"3",
      imagen: "/imgs/carrusel3.webp",
      titulo: "Gestión de Productos y Órdenes",
      descripcion: "Organiza y controla tu inventario y ventas de forma sencilla.",
      url: "/servicios/gestion",
      orden: 3, 
      isActive: true
    },
    {
      id:"4",
      imagen: "/imgs/carrusel4.webp",
      titulo: "Conectividad con Redes Sociales",
      descripcion: "Integra tu aplicación con redes sociales y canales de venta.",
      url: "/servicios/social-media",
      orden: 4, 
      isActive: true
    }
  ],

  categorias: [
    { id: "1", nombre: "General", descripcion: "Categoría general para todas las aplicaciones", isActive: true },
    { id: "2", nombre: "Productos", descripcion: "Aplicaciones para gestión de productos", isActive: true },
    { id: "3", nombre: "Servicios", descripcion: "Aplicaciones para prestación de servicios", isActive: true },
    { id: "4", nombre: "Restaurantes", descripcion: "Aplicaciones para restaurantes", isActive: true },
    { id: "5", nombre: "Floristerías", descripcion: "Aplicaciones para floristerías", isActive: false },
  ],
  // Datos de prueba para testimonios
  testimonios: [
    {
      id: "1",
      imagen: '/imgs/carrusel1.webp',
      titulo: 'Gran Experiencia',
      descripcion: 'Gracias a CodeX, nuestro negocio online ha crecido un 200%.',
      url: '/casos/exito1', 
      isActive:true
    },
    {
      id: "2",
      imagen: '/imgs/carrusel1.webp',
      titulo: 'Resultados Increíbles',
      descripcion: 'Automatizamos todo nuestro sistema de ventas en 1 semana.',
      url: '/casos/exito2',
      isActive:true
    },
    {
      id: "3",
      imagen: '/imgs/carrusel1.webp',
      titulo: 'Innovación Total',
      descripcion: 'La plataforma que desarrollaron superó todas nuestras expectativas.',
      url: '/casos/exito3',
      isActive:true
    },
    {
      id: "4",
      imagen: '/imgs/carrusel1.webp',
      titulo: 'Resultados Increíbles',
      descripcion: 'Automatizamos todo nuestro sistema de ventas en 1 semana.',
      url: '/casos/exito2',
      isActive:true
    },
    {
      id: "5",
      imagen: '/imgs/carrusel1.webp',
      titulo: 'Innovación Total',
      descripcion: 'La plataforma que desarrollaron superó todas nuestras expectativas.',
      url: '/casos/exito3',
      isActive:true
    }
  ],
  
  // Datos de Catálogo
catalogoApps:  [
    {
      id: "1",
      imagen: "/imgs/Detalles, Sorpresas y Regalos.jpg",
      nombre: "Detalles, Regalos y Sorpresas",
      descripcion: "Una plataforma innovadora para la venta de regalos personalizados y detalles exclusivos. Permite a los usuarios navegar por un catálogo virtual intuitivo, realizar pedidos y programar entregas, ideal para cualquier ocasión especial. Diseñada para maximizar la experiencia del cliente y aumentar las ventas online.",
      url: "https://catalogo-virtual.vercel.app/",
      categoriaId: "2",
      destacado: true,
    },
    {
      id: "2",
      imagen: "/imgs/Parrilla Internacional.jpg",
      nombre: "Restaurante Parrilla Internacional",
      descripcion: "Aplicación web diseñada para la gestión integral de un restaurante especializado en carnes a la parrilla. Incluye menús interactivos, gestión de pedidos en línea, reservas y administración de mesas. La solución ideal para mejorar la experiencia de los clientes y optimizar el flujo de trabajo en restaurantes.",
      url: "https://parrilla-internacional.vercel.app/",
      categoriaId: "4",
      destacado: true,
    },
    {
      id: "3",
      imagen: "/imgs/University Store.jpg",
      nombre: "University Store",
      descripcion: "Plataforma de comercio electrónico diseñada específicamente para estudiantes y personal universitario. Ofrece una experiencia de compra sencilla y rápida, con gestión de productos, inventarios y sistemas de pago integrados. Ideal para vender productos escolares, electrónicos y servicios dentro del campus.",
      url: "https://university-storecol.vercel.app/",
      categoriaId: "1",
      destacado: true,
    }
  ],

videos: [
    {
      id: "video-001",
      url: "/videos/video1.mp4",
      title: "Transformando Ideas en Soluciones Digitales",
      description: "Descubre cómo en CodeX llevamos las ideas de nuestros clientes al siguiente nivel, creando aplicaciones web personalizadas que impactan.",
      order: 1,
      createdAt: new Date()
    },
    {
      id: "video-002",
      url: "/videos/video2.mp4",
      title: "E-commerce para Emprendedores",
      description: "Explora cómo ayudamos a pequeños y medianos negocios a construir plataformas de comercio electrónico funcionales y escalables.",
      order: 2,
      createdAt: new Date()
    },
    {
      id: "video-003",
      url: "/videos/video3.mp4",
      title: "Gestión Simplificada para Restaurantes",
      description: "Mira cómo nuestras aplicaciones transforman la administración de restaurantes con menús interactivos, gestión de pedidos y reservas.",
      order: 3,
      createdAt: new Date()
    }   
  ],
  
imagenesGaleria: [
    {
      id: "img-001",
      url: "/imgs/galeria1.jpeg",
      title: "Diseño Web Moderno y Funcional",
      description: "Captura de pantalla de una de nuestras aplicaciones más exitosas, mostrando diseño responsivo y características personalizadas.",
      order: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "img-002",
      url: "/imgs/galeria2.jpeg",
      title: "E-commerce Personalizado",
      description: "Visualización de una tienda online creada por CodeX, diseñada para maximizar la experiencia del usuario y aumentar las ventas.",
      order: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "img-003",
      url: "/imgs/galeria3.jpeg",
      title: "Gestión de Productos Simplificada",
      description: "Vista de una interfaz de usuario para la administración de inventarios y pedidos, desarrollada para un cliente empresarial.",
      order: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "img-004",
      url: "/imgs/galeria4.jpeg",
      title: "Conectividad e Integración",
      description: "Ejemplo de una aplicación que integra redes sociales y canales de ventas, conectando negocios con sus clientes de manera efectiva.",
      order: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],

servicios: [
    {
      id: "serv-001",
      titulo: "Desarrollo de Aplicaciones Web",
      descripcion: "Creamos aplicaciones web a medida para optimizar la gestión de productos, pedidos y comunicación empresarial.",
      imagen: "/imgs/servicio1.jpeg",
      slug: "desarrollo-aplicaciones-web",
      isActive: true,
    },
    {
      id: "serv-002",
      titulo: "Soluciones E-commerce",
      descripcion: "Desarrollamos tiendas virtuales para emprendedores y negocios, listas para vender y conectar con tus clientes.",
      imagen: "/imgs/servicio2.jpeg",
      slug: "soluciones-ecommerce",
      isActive: true,
    },
    {
      id: "serv-003",
      titulo: "Conexión con Redes Sociales",
      descripcion: "Integra tus aplicaciones con redes sociales para maximizar el alcance y las ventas de tu negocio.",
      imagen: "/imgs/servicio3.jpeg",
      slug: "conexion-redes-sociales",
      isActive: true,
    },
    {
      id: "serv-004",
      titulo: "Dashboards Personalizados",
      descripcion: "Ofrecemos paneles de control interactivos para que gestiones tu negocio con facilidad y precisión.",
      imagen: "/imgs/servicio4.jpeg",
      slug: "dashboards-personalizados",
      isActive: true,
    },
    {
      id: "serv-005",
      titulo: "Sistemas de Gestión Empresarial",
      descripcion: "Implementamos soluciones tecnológicas para automatizar y optimizar los procesos de tu empresa.",
      imagen: "/imgs/servicio5.jpeg",
      slug: "sistemas-gestion-empresarial",
      isActive: true,
    },
    {
      id: "serv-006",
      titulo: "Blog y Gestión de Contenido",
      descripcion: "Desarrollamos plataformas para la creación y administración de contenido dinámico y atractivo.",
      imagen: "/imgs/servicio6.jpeg",
      slug: "blog-gestion-contenido",
      isActive: true,
    },
  ],

articulos: [
  {
    id: "1",
    titulo: "La Importancia de una Página Web en un Negocio",
    imagen: "https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_960_720.jpg",
    descripcion: "En la era digital, tener una página web ya no es un lujo, sino una necesidad para cualquier negocio que desee expandir su alcance, aumentar su credibilidad y maximizar sus oportunidades de crecimiento. Descubre cómo una página web profesional puede transformar la presencia de tu marca y llevar tu negocio al siguiente nivel.",
    slug: "importancia_paginas_web_negocios",
    imagenes: ["https://cdn.pixabay.com/photo/2016/03/27/20/12/desk-1284085_960_720.jpg","https://cdn.pixabay.com/photo/2019/10/03/12/12/javascript-4523100_960_720.jpg", "https://cdn.pixabay.com/photo/2017/09/26/15/13/computer-2788918_960_720.jpg"],
    parrafos: [
      "Una página web es la puerta de entrada para que cualquier negocio alcance un público global. En un mundo donde el 63% de las decisiones de compra comienzan con una búsqueda en línea, no tener presencia digital significa perder oportunidades de ventas y visibilidad. Un sitio web profesional permite que tus clientes potenciales te encuentren sin importar dónde se encuentren, ya sea buscando productos, servicios o información relacionada con tu industria. Además, una página bien optimizada con técnicas de SEO asegura que tu negocio aparezca entre los primeros resultados de búsqueda, aumentando significativamente el tráfico hacia tu sitio y posicionándote como líder en tu mercado.",
      "Una página web profesional no solo te hace visible, sino que también construye confianza en tu audiencia. Los consumidores modernos tienden a investigar en línea antes de realizar una compra, y un negocio sin página web puede parecer poco confiable o incluso inexistente. Contar con un sitio bien diseñado, con información clara sobre tus productos o servicios, testimonios de clientes y un diseño intuitivo, refuerza tu imagen como una empresa seria y comprometida. Además, incluir elementos como una sección de blog, preguntas frecuentes y un diseño responsivo demuestra tu preocupación por ofrecer una experiencia satisfactoria al usuario, lo que puede traducirse en más ventas y fidelidad de los clientes.",
      "Una página web actúa como un vendedor que nunca duerme, generando oportunidades de negocio incluso cuando tu tienda física está cerrada. Al integrar herramientas como carritos de compra, botones de contacto directo a WhatsApp y optimización para dispositivos móviles, puedes captar clientes en cualquier momento del día. Las estadísticas muestran que las empresas con presencia en línea tienen un 40% más de probabilidades de aumentar sus ventas que aquellas que dependen únicamente de canales tradicionales. Además, al aprovechar estrategias de marketing digital como anuncios pagados y optimización SEO, puedes dirigir tráfico altamente segmentado a tu sitio, asegurando que cada visita sea una oportunidad de conversión.",
      "Invertir en una página web profesional no solo es esencial, sino estratégico para garantizar el éxito y la sostenibilidad de tu negocio en un mercado cada vez más competitivo. Una página web bien diseñada, con contenido optimizado y funciones integradas, no solo aumenta tu alcance y credibilidad, sino que también asegura un flujo constante de oportunidades comerciales. En un mundo donde la digitalización marca la diferencia, no tener una página web significa quedarse atrás. ¡Empieza hoy y lleva tu negocio al siguiente nivel!"
    ],
    subtitulos: [
      "Una Ventana al Mundo: Expande tu Alcance",
      "Credibilidad y Confianza: Construye tu Reputación",
      "Aumento en Ventas: Tu Página Web Trabaja por Ti 24/7"
    ],
    fechaPublicacion: new Date("2024-09-01"),
    autor: "Equipo Creativo",
    orden:1
  },
  {
    id: "2",
    titulo: "El Poder del Ecommerce: Transformando Negocios en la Era Digital",
    imagen: "https://cdn.pixabay.com/photo/2018/07/11/11/14/ecommerce-3530785_960_720.jpg",
    descripcion: "El ecommerce ha revolucionado la manera en que compramos y vendemos, convirtiéndose en una herramienta esencial para empresas que buscan expandir su alcance y optimizar su crecimiento. Descubre por qué tener un negocio en línea es una de las decisiones más estratégicas en la era digital.",
    slug: "ecommerce-era-digital",
    imagenes: ["https://cdn.pixabay.com/photo/2019/09/30/15/22/shopping-cart-4516039_1280.jpg", "https://cdn.pixabay.com/photo/2020/02/14/18/05/ecommerce-4849055_1280.jpg","https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_1280.jpg"],
    parrafos: [
      "El ecommerce permite a las empresas romper las barreras geográficas, ofreciendo productos y servicios a clientes de todo el mundo. Mientras que una tienda física depende de la ubicación y horarios limitados, una tienda en línea está disponible las 24 horas del día, los 7 días de la semana. Esto no solo amplía el mercado objetivo, sino que también brinda la oportunidad de atraer a clientes internacionales que de otra forma serían inaccesibles. Además, con herramientas como SEO y campañas publicitarias digitales, los negocios pueden posicionarse frente a un público altamente segmentado, maximizando el retorno de inversión y potenciando el crecimiento exponencial de las ventas.",
      "El ecommerce no solo democratiza el acceso al mercado global, sino que también ofrece ventajas significativas en términos de costos. Mantener una tienda en línea es considerablemente más económico que operar un local físico, ya que elimina gastos como alquileres elevados, mantenimiento y servicios públicos. Además, los sistemas automatizados de ecommerce permiten gestionar inventarios, procesar pagos y enviar notificaciones a los clientes, reduciendo la necesidad de personal y optimizando la eficiencia operativa. Esto se traduce en un aumento de la rentabilidad, permitiendo que incluso los pequeños emprendedores puedan competir con grandes marcas en igualdad de condiciones..",
      "Uno de los mayores beneficios del ecommerce es la capacidad de ofrecer experiencias personalizadas a los clientes. A través del análisis de datos, los negocios pueden entender las preferencias y comportamientos de compra de sus usuarios, recomendando productos y servicios que realmente les interesan. Esto no solo mejora la satisfacción del cliente, sino que también incrementa las tasas de conversión y fidelización. Además, integrar canales como WhatsApp, redes sociales y notificaciones personalizadas permite una interacción directa y rápida, fortaleciendo la relación entre el negocio y sus clientes. En un mundo donde el cliente es el centro de todo, estas herramientas hacen que el ecommerce sea imprescindible para cualquier negocio moderno.",
      "El ecommerce no es solo una tendencia, es el futuro del comercio. Ofrece a las empresas la oportunidad de expandirse, reducir costos y brindar experiencias únicas a sus clientes, todo mientras se mantienen competitivas en un mercado cada vez más digital. Si aún no has dado el salto al ecommerce, ahora es el momento de hacerlo. Invierte en una plataforma profesional, optimiza tu presencia en línea y aprovecha el poder del ecommerce para llevar tu negocio al siguiente nivel. ¡El mundo te espera!"
    ],
    subtitulos: [
      "Un Mercado Global al Alcance de Todos.",
      "Reducción de Costos y Mayor Rentabilidad.",
      "Experiencia Personalizada para el Cliente"
    ],
    fechaPublicacion: new Date("2024-09-01"),
    autor: "María López",
    orden:2
  },
  {
    id: "3",
    titulo: "Transformando Ideas en Realidad: La Revolución de las Aplicaciones Personalizadas",
    imagen: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg",
    descripcion: "En un mundo cada vez más digitalizado, las aplicaciones personalizadas se han convertido en un recurso imprescindible para emprendedores y pequeñas empresas que buscan destacar. Aprende cómo estas soluciones pueden revolucionar tu negocio y ayudarte a crecer en la era digital.",
    slug: "aplicaciones-personalizadas",
    imagenes: ["https://cdn.pixabay.com/photo/2015/03/01/11/29/mockup-654585_960_720.jpg", "https://cdn.pixabay.com/photo/2017/01/14/15/11/christmas-wallpaper-1979674_960_720.jpg","https://cdn.pixabay.com/photo/2017/07/31/15/13/apps-2558373_1280.jpg"],
    parrafos: [
      "En un mercado saturado de aplicaciones genéricas, las soluciones personalizadas destacan por su capacidad de adaptarse a las necesidades específicas de cada negocio. Una aplicación personalizada no solo refleja la esencia de tu marca, sino que también ofrece funcionalidades específicas que mejoran la experiencia del usuario. Desde una interfaz intuitiva hasta herramientas que integran redes sociales, chat en vivo o catálogos interactivos, estas aplicaciones están diseñadas para resolver problemas específicos y conectar de manera más eficiente con los clientes. La personalización no es un lujo, es una estrategia clave para diferenciarse en un mercado competitivo.",
      "Las aplicaciones personalizadas permiten automatizar procesos clave de un negocio, como la gestión de productos, el manejo de órdenes o la comunicación con los clientes. Esto no solo reduce costos operativos, sino que también incrementa la eficiencia. Una aplicación bien diseñada trabaja por ti las 24 horas del día, permitiendo que tu equipo se concentre en tareas estratégicas mientras el sistema se encarga de los detalles. Por ejemplo, integrar un carrito de compras que envíe automáticamente órdenes a WhatsApp o gestionar un blog optimizado para SEO puede marcar la diferencia entre un negocio que simplemente sobrevive y uno que prospera.",
      "Uno de los mayores beneficios de una aplicación personalizada es su capacidad de crecer contigo. A medida que tu negocio evoluciona, la aplicación puede adaptarse para incorporar nuevas funcionalidades o atender a una mayor cantidad de usuarios. Esto asegura que tu inversión inicial sea rentable a largo plazo, ya que no necesitas recurrir a múltiples plataformas o soluciones externas. Además, las aplicaciones personalizadas están diseñadas para integrarse con herramientas existentes, creando un ecosistema digital que facilita el crecimiento sostenible.",
      "Invertir en una aplicación personalizada no solo optimiza tus procesos, sino que también potencia la relación con tus clientes y aumenta tu competitividad en el mercado. En un entorno digital que cambia rápidamente, las empresas que apuestan por soluciones tecnológicas a medida tienen una clara ventaja. No esperes más para transformar tu negocio: el futuro está en la personalización. ¡Empieza hoy y lleva tus ideas al siguiente nivel!"
    ],
    subtitulos: [
      "La Personalización: Un Elemento Clave para Conectar con el Cliente",
      "Automatización y Eficiencia: La Base del Éxito en la Era Digital",
      "Escalabilidad: Crece al Ritmo de Tu Negocio"
    ],
    fechaPublicacion: new Date("2024-09-01"),
    autor: "Carlos Mendoza",
    orden:3
  },
  {
    id: "4",
    titulo: "La Importancia de una Página Web en un Negocio",
    imagen: "https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_960_720.jpg",
    descripcion: "En la era digital, tener una página web ya no es un lujo, sino una necesidad para cualquier negocio que desee expandir su alcance, aumentar su credibilidad y maximizar sus oportunidades de crecimiento. Descubre cómo una página web profesional puede transformar la presencia de tu marca y llevar tu negocio al siguiente nivel.",
    slug: "importancia_paginas_web_negocios757",
    imagenes: ["https://cdn.pixabay.com/photo/2016/03/27/20/12/desk-1284085_960_720.jpg","https://cdn.pixabay.com/photo/2019/10/03/12/12/javascript-4523100_960_720.jpg", "https://cdn.pixabay.com/photo/2017/09/26/15/13/computer-2788918_960_720.jpg"],
    parrafos: [
      "Una página web es la puerta de entrada para que cualquier negocio alcance un público global. En un mundo donde el 63% de las decisiones de compra comienzan con una búsqueda en línea, no tener presencia digital significa perder oportunidades de ventas y visibilidad. Un sitio web profesional permite que tus clientes potenciales te encuentren sin importar dónde se encuentren, ya sea buscando productos, servicios o información relacionada con tu industria. Además, una página bien optimizada con técnicas de SEO asegura que tu negocio aparezca entre los primeros resultados de búsqueda, aumentando significativamente el tráfico hacia tu sitio y posicionándote como líder en tu mercado.",
      "Una página web profesional no solo te hace visible, sino que también construye confianza en tu audiencia. Los consumidores modernos tienden a investigar en línea antes de realizar una compra, y un negocio sin página web puede parecer poco confiable o incluso inexistente. Contar con un sitio bien diseñado, con información clara sobre tus productos o servicios, testimonios de clientes y un diseño intuitivo, refuerza tu imagen como una empresa seria y comprometida. Además, incluir elementos como una sección de blog, preguntas frecuentes y un diseño responsivo demuestra tu preocupación por ofrecer una experiencia satisfactoria al usuario, lo que puede traducirse en más ventas y fidelidad de los clientes.",
      "Una página web actúa como un vendedor que nunca duerme, generando oportunidades de negocio incluso cuando tu tienda física está cerrada. Al integrar herramientas como carritos de compra, botones de contacto directo a WhatsApp y optimización para dispositivos móviles, puedes captar clientes en cualquier momento del día. Las estadísticas muestran que las empresas con presencia en línea tienen un 40% más de probabilidades de aumentar sus ventas que aquellas que dependen únicamente de canales tradicionales. Además, al aprovechar estrategias de marketing digital como anuncios pagados y optimización SEO, puedes dirigir tráfico altamente segmentado a tu sitio, asegurando que cada visita sea una oportunidad de conversión.",
      "Invertir en una página web profesional no solo es esencial, sino estratégico para garantizar el éxito y la sostenibilidad de tu negocio en un mercado cada vez más competitivo. Una página web bien diseñada, con contenido optimizado y funciones integradas, no solo aumenta tu alcance y credibilidad, sino que también asegura un flujo constante de oportunidades comerciales. En un mundo donde la digitalización marca la diferencia, no tener una página web significa quedarse atrás. ¡Empieza hoy y lleva tu negocio al siguiente nivel!"
    ],
    subtitulos: [
      "Una Ventana al Mundo: Expande tu Alcance",
      "Credibilidad y Confianza: Construye tu Reputación",
      "Aumento en Ventas: Tu Página Web Trabaja por Ti 24/7"
    ],
    fechaPublicacion: new Date("2024-09-01"),
    autor: "Equipo Creativo",
    orden:4
  },
  {
    id: "5",
    titulo: "El Poder del Ecommerce: Transformando Negocios en la Era Digital",
    imagen: "https://cdn.pixabay.com/photo/2018/07/11/11/14/ecommerce-3530785_960_720.jpg",
    descripcion: "El ecommerce ha revolucionado la manera en que compramos y vendemos, convirtiéndose en una herramienta esencial para empresas que buscan expandir su alcance y optimizar su crecimiento. Descubre por qué tener un negocio en línea es una de las decisiones más estratégicas en la era digital.",
    slug: "ecommerce-era-digital8575",
    imagenes: ["https://cdn.pixabay.com/photo/2019/09/30/15/22/shopping-cart-4516039_1280.jpg", "https://cdn.pixabay.com/photo/2020/02/14/18/05/ecommerce-4849055_1280.jpg","https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_1280.jpg"],
    parrafos: [
      "El ecommerce permite a las empresas romper las barreras geográficas, ofreciendo productos y servicios a clientes de todo el mundo. Mientras que una tienda física depende de la ubicación y horarios limitados, una tienda en línea está disponible las 24 horas del día, los 7 días de la semana. Esto no solo amplía el mercado objetivo, sino que también brinda la oportunidad de atraer a clientes internacionales que de otra forma serían inaccesibles. Además, con herramientas como SEO y campañas publicitarias digitales, los negocios pueden posicionarse frente a un público altamente segmentado, maximizando el retorno de inversión y potenciando el crecimiento exponencial de las ventas.",
      "El ecommerce no solo democratiza el acceso al mercado global, sino que también ofrece ventajas significativas en términos de costos. Mantener una tienda en línea es considerablemente más económico que operar un local físico, ya que elimina gastos como alquileres elevados, mantenimiento y servicios públicos. Además, los sistemas automatizados de ecommerce permiten gestionar inventarios, procesar pagos y enviar notificaciones a los clientes, reduciendo la necesidad de personal y optimizando la eficiencia operativa. Esto se traduce en un aumento de la rentabilidad, permitiendo que incluso los pequeños emprendedores puedan competir con grandes marcas en igualdad de condiciones..",
      "Uno de los mayores beneficios del ecommerce es la capacidad de ofrecer experiencias personalizadas a los clientes. A través del análisis de datos, los negocios pueden entender las preferencias y comportamientos de compra de sus usuarios, recomendando productos y servicios que realmente les interesan. Esto no solo mejora la satisfacción del cliente, sino que también incrementa las tasas de conversión y fidelización. Además, integrar canales como WhatsApp, redes sociales y notificaciones personalizadas permite una interacción directa y rápida, fortaleciendo la relación entre el negocio y sus clientes. En un mundo donde el cliente es el centro de todo, estas herramientas hacen que el ecommerce sea imprescindible para cualquier negocio moderno.",
      "El ecommerce no es solo una tendencia, es el futuro del comercio. Ofrece a las empresas la oportunidad de expandirse, reducir costos y brindar experiencias únicas a sus clientes, todo mientras se mantienen competitivas en un mercado cada vez más digital. Si aún no has dado el salto al ecommerce, ahora es el momento de hacerlo. Invierte en una plataforma profesional, optimiza tu presencia en línea y aprovecha el poder del ecommerce para llevar tu negocio al siguiente nivel. ¡El mundo te espera!"
    ],
    subtitulos: [
      "Un Mercado Global al Alcance de Todos.",
      "Reducción de Costos y Mayor Rentabilidad.",
      "Experiencia Personalizada para el Cliente"
    ],
    fechaPublicacion: new Date("2024-09-01"),
    autor: "María López",
    orden:5
  },
  {
    id: "6",
    titulo: "Transformando Ideas en Realidad: La Revolución de las Aplicaciones Personalizadas",
    imagen: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg",
    descripcion: "En un mundo cada vez más digitalizado, las aplicaciones personalizadas se han convertido en un recurso imprescindible para emprendedores y pequeñas empresas que buscan destacar. Aprende cómo estas soluciones pueden revolucionar tu negocio y ayudarte a crecer en la era digital.",
    slug: "aplicaciones-personalizadas1477",
    imagenes: ["https://cdn.pixabay.com/photo/2015/03/01/11/29/mockup-654585_960_720.jpg", "https://cdn.pixabay.com/photo/2017/01/14/15/11/christmas-wallpaper-1979674_960_720.jpg","https://cdn.pixabay.com/photo/2017/07/31/15/13/apps-2558373_1280.jpg"],
    parrafos: [
      "En un mercado saturado de aplicaciones genéricas, las soluciones personalizadas destacan por su capacidad de adaptarse a las necesidades específicas de cada negocio. Una aplicación personalizada no solo refleja la esencia de tu marca, sino que también ofrece funcionalidades específicas que mejoran la experiencia del usuario. Desde una interfaz intuitiva hasta herramientas que integran redes sociales, chat en vivo o catálogos interactivos, estas aplicaciones están diseñadas para resolver problemas específicos y conectar de manera más eficiente con los clientes. La personalización no es un lujo, es una estrategia clave para diferenciarse en un mercado competitivo.",
      "Las aplicaciones personalizadas permiten automatizar procesos clave de un negocio, como la gestión de productos, el manejo de órdenes o la comunicación con los clientes. Esto no solo reduce costos operativos, sino que también incrementa la eficiencia. Una aplicación bien diseñada trabaja por ti las 24 horas del día, permitiendo que tu equipo se concentre en tareas estratégicas mientras el sistema se encarga de los detalles. Por ejemplo, integrar un carrito de compras que envíe automáticamente órdenes a WhatsApp o gestionar un blog optimizado para SEO puede marcar la diferencia entre un negocio que simplemente sobrevive y uno que prospera.",
      "Uno de los mayores beneficios de una aplicación personalizada es su capacidad de crecer contigo. A medida que tu negocio evoluciona, la aplicación puede adaptarse para incorporar nuevas funcionalidades o atender a una mayor cantidad de usuarios. Esto asegura que tu inversión inicial sea rentable a largo plazo, ya que no necesitas recurrir a múltiples plataformas o soluciones externas. Además, las aplicaciones personalizadas están diseñadas para integrarse con herramientas existentes, creando un ecosistema digital que facilita el crecimiento sostenible.",
      "Invertir en una aplicación personalizada no solo optimiza tus procesos, sino que también potencia la relación con tus clientes y aumenta tu competitividad en el mercado. En un entorno digital que cambia rápidamente, las empresas que apuestan por soluciones tecnológicas a medida tienen una clara ventaja. No esperes más para transformar tu negocio: el futuro está en la personalización. ¡Empieza hoy y lleva tus ideas al siguiente nivel!"
    ],
    subtitulos: [
      "La Personalización: Un Elemento Clave para Conectar con el Cliente",
      "Automatización y Eficiencia: La Base del Éxito en la Era Digital",
      "Escalabilidad: Crece al Ritmo de Tu Negocio"
    ],
    fechaPublicacion: new Date("2024-09-01"),
    autor: "Carlos Mendoza",
    orden:5
  },
]

};
