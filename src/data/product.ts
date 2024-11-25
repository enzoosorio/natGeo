export const products = [
  {
    id: 1,
    title: 'Miel Orgánica Premium',
    price: 12.99,
    images: [
      'https://images.unsplash.com/photo-1481900369621-54a7facacc6c?q=80&w=800',
      'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=800',
      'https://images.unsplash.com/photo-1555211652-5c6222f971bc?q=80&w=800'
    ],
    description: 'Nuestra miel orgánica premium es recolectada de colmenas situadas en áreas protegidas de los Andes, donde las abejas polinizan flores silvestres y plantas medicinales. Este proceso natural resulta en una miel excepcionalmente pura y nutritiva, rica en antioxidantes y propiedades antibacterianas. Cada gota es un testimonio de nuestro compromiso con la apicultura sostenible y la preservación del ecosistema.',
    category: 'Endulzantes',
    reviews: [
      {
        id: 1,
        user: 'María García',
        rating: 5,
        comment: 'La mejor miel que he probado. El sabor es increíblemente suave y natural.',
        avatar: '👩'
      },
      {
        id: 2,
        user: 'Juan Pérez',
        rating: 4,
        comment: 'Excelente calidad, aunque el precio es un poco elevado.',
        avatar: '👨'
      }
    ]
  },
  {
    id: 2,
    title: 'Aceite de Coco Extra Virgen',
    price: 15.99,
    images: [
      'https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=800',
      'https://images.unsplash.com/photo-1610705267928-1b9f2fa7f1c5?q=80&w=800',
      'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?q=80&w=800'
    ],
    description: 'Nuestro aceite de coco extra virgen se obtiene mediante un proceso de prensado en frío de cocos orgánicos frescos. Este método preserva todos los nutrientes esenciales, incluyendo ácidos grasos de cadena media (MCT) y vitamina E. Ideal para cocinar a altas temperaturas, cuidado personal y como suplemento nutricional. Cada lote es sometido a rigurosos controles de calidad para garantizar la máxima pureza y frescura.',
    category: 'Aceites',
    reviews: [
      {
        id: 1,
        user: 'Ana Martínez',
        rating: 5,
        comment: 'Lo uso tanto para cocinar como para el cuidado del cabello. ¡Excelente producto!',
        avatar: '👩'
      },
      {
        id: 2,
        user: 'Carlos Ruiz',
        rating: 5,
        comment: 'La calidad es notable, se nota que es prensado en frío.',
        avatar: '👨'
      }
    ]
  },
  {
    id: 3,
    title: 'Té Verde Matcha Ceremonial',
    price: 24.99,
    images: [
      'https://images.unsplash.com/photo-1582793988951-9aed5509eb97?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?q=80&w=800',
      'https://images.unsplash.com/photo-1614264125474-79e13b1f3e1c?q=80&w=800'
    ],
    description: 'Este matcha ceremonial de grado premium se cultiva en las antiguas plantaciones de té de Uji, Japón. Las hojas son cuidadosamente seleccionadas y molidas en piedras de granito tradicionales para lograr un polvo ultrafino. Rico en L-teanina y antioxidantes, nuestro matcha ofrece un sabor umami suave y un aroma cautivador. Perfecto para la ceremonia tradicional del té o para incorporar en tus bebidas diarias.',
    category: 'Bebidas',
    reviews: [
      {
        id: 1,
        user: 'Laura Sánchez',
        rating: 5,
        comment: 'El mejor matcha que he probado fuera de Japón.',
        avatar: '👩'
      },
      {
        id: 2,
        user: 'Miguel Torres',
        rating: 4,
        comment: 'Excelente calidad, aunque el precio es elevado.',
        avatar: '👨'
      }
    ]
  },
  {
    id: 4,
    title: 'Quinoa Roja Orgánica',
    price: 8.99,
    images: [
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=800',
      'https://images.unsplash.com/photo-1616634375264-2d2e17736a36?q=80&w=800'
    ],
    description: 'Nuestra quinoa roja orgánica es cultivada en las alturas de los Andes peruanos por comunidades agrícolas tradicionales. Este superalimento ancestral es naturalmente libre de gluten y contiene todos los aminoácidos esenciales, además de ser rica en fibra y minerales. Cada grano es cuidadosamente seleccionado y limpiado para garantizar la máxima calidad. Perfecta para ensaladas, guarniciones o como base para bowls nutritivos.',
    category: 'Granos',
    reviews: [
      {
        id: 1,
        user: 'Patricia López',
        rating: 5,
        comment: 'La calidad es excepcional, se nota la diferencia con otras marcas.',
        avatar: '👩'
      },
      {
        id: 2,
        user: 'Roberto Díaz',
        rating: 5,
        comment: 'Excelente producto, muy versátil en la cocina.',
        avatar: '👨'
      }
    ]
  },
  {
    id: 5,
    title: 'Almendras Crudas Premium',
    price: 13.99,
    images: [
      'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1604599886859-7aa7c804b14d?q=80&w=800',
      'https://images.unsplash.com/photo-1623428454614-abaf00244e52?q=80&w=800'
    ],
    description: 'Nuestras almendras crudas premium son cultivadas en huertos orgánicos certificados de California. Cosechadas en su punto óptimo de maduración, estas almendras conservan todos sus nutrientes naturales, incluyendo proteínas, grasas saludables y vitamina E. Sin sal añadida ni conservantes, son perfectas para snacks saludables, elaboración de leche de almendras casera o en recetas de repostería.',
    category: 'Frutos Secos',
    reviews: [
      {
        id: 1,
        user: 'Carmen Rodríguez',
        rating: 4,
        comment: 'Muy frescas y sabrosas, aunque el precio es un poco alto.',
        avatar: '👩'
      },
      {
        id: 2,
        user: 'Daniel Morales',
        rating: 5,
        comment: 'Las mejores almendras que he probado, muy frescas.',
        avatar: '👨'
      }
    ]
  },
  {
    id: 6,
    title: 'Espirulina en Polvo Orgánica',
    price: 19.99,
    images: [
      'https://images.unsplash.com/photo-1627045812152-b4839e72eed3?q=80&w=800',
      'https://images.unsplash.com/photo-1627045812097-56ac1d7f6cc3?q=80&w=800',
      'https://images.unsplash.com/photo-1627045812041-c2468176e39f?q=80&w=800'
    ],
    description: 'Nuestra espirulina orgánica es cultivada en estanques controlados de agua dulce, libre de contaminantes y metales pesados. Este superalimento es una de las fuentes más ricas en proteínas vegetales, conteniendo además vitamina B12, hierro y antioxidantes. Cada lote es analizado para garantizar su pureza y potencia nutricional. Ideal para batidos, smoothies o como suplemento diario para aumentar la energía y fortalecer el sistema inmunológico.',
    category: 'Superalimentos',
    reviews: [
      {
        id: 1,
        user: 'Elena Gómez',
        rating: 5,
        comment: 'Excelente calidad, se nota la diferencia en energía.',
        avatar: '👩'
      },
      {
        id: 2,
        user: 'Pablo Herrera',
        rating: 4,
        comment: 'Muy buena calidad, aunque el sabor requiere acostumbrarse.',
        avatar: '👨'
      }
    ]
  }
];