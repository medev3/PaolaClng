export const site = {
  businessName: "PAOLA CLEANING",
  businessShortName: "P",
  tagline: "Premium Home Cleaning · Georgia",
  taglineSecondary: "Licensed & Insured · Residential Specialists",
  phone: "(470) 643-7144",
  phoneHref: "tel:+14706437144",
  email: "info@paolacleaningco.com",
  address: "P.O. Box 724702, Atlanta, GA 31139",
  formspreeId: "meojzjde",
  social: {
    instagram: "https://www.instagram.com/pa.cleaningconstruction",
  },
  seo: {
    title: "Paola Cleaning | Premium Home Cleaning in Georgia",
    description:
      "Elite home cleaning services for luxury living. Deep cleaning, construction clean-up, windows, laundry, and special item care across the Atlanta metro.",
    ogImage: "/assets/hero_image.jpg",
  },
  hero: {
    eyebrow: "Residential Cleaning",
    title: "You deserve a",
    titleAccent: "clean home",
    subtitle:
      "Elite home cleaning services for luxury living — meticulous care for every room, every detail.",
    heroImage: "/assets/Uncompressed_Images/hero_image.jpg",
    stats: [
      { value: "300+", label: "Happy customers" },
      { value: "2,000+", label: "Sessions completed" },
    ],
  },
  services: [
    {
      id: "small-homes",
      title: "Small Homes",
      image: "/assets/small_house.jpg",
      description: "Our small home cleaning service includes:",
      prices: [
        "Deep cleaning under construction: $350",
        "Deep cleaning for occupied home: $250",
      ],
    },
    {
      id: "medium-homes",
      title: "Medium-Sized Homes",
      image: "/assets/medium_house.jpg",
      description: "Our medium-sized home cleaning service includes:",
      prices: [
        "Deep cleaning under construction: $450",
        "Deep cleaning for occupied home: $350",
      ],
    },
    {
      id: "large-homes",
      title: "Large Homes",
      image: "/assets/large_house.jpg",
      description: "Our large home cleaning service includes:",
      prices: [
        "Customized pricing based on rooms, dirt level, and occupancy. Contact us for a bespoke quote.",
      ],
    },
    {
      id: "windows",
      title: "Exterior Window Cleaning",
      image: "/assets/ventanas.jpg",
      description: "Crystal-clear exteriors, safely handled:",
      prices: [
        "6 to 10 Windows: $361",
        "11 to 15 Windows: $260",
        "High Windows (3×6 ft): $400",
        "High Windows (3×10 ft): $500",
        "16 to 20 Interior & Exterior Windows (20 ft): $580",
      ],
    },
    {
      id: "laundry",
      title: "Laundry Services",
      image: "/assets/laundry.jpg",
      description: "Fresh linens and wardrobe care:",
      prices: [
        "Washing & folding: next day $1.50/lb, same day $1.99/lb (10 lb minimum)",
        "Ironing services available",
      ],
    },
    {
      id: "special-items",
      title: "Special Items Care",
      image: "/assets/special_items.jpg",
      description: "Delicate textiles handled with care:",
      prices: [
        "Comforters: Twin $15, Queen $20, King $25",
        "Sleeping bags: $20",
        "Pillows: $6–$10",
      ],
    },
    {
      id: "construction",
      title: "Construction Cleaning",
      image: "/assets/construction.jpg",
      description:
        "Meticulous post-construction cleaning — your site spotless and ready for the next phase.",
      prices: ["Custom quotes based on scope and square footage"],
    },
  ],
  serviceOptions: [
    "Small Homes",
    "Medium-Sized Homes",
    "Large Homes",
    "Construction cleaning",
    "Exterior Window Cleaning",
    "Laundry Services",
    "Special Items Care",
  ],
  testimonials: [
    {
      name: "Maria Flores",
      location: "Marietta, GA",
      quote:
        "Paola's team transformed our home before a family event. Every surface sparkled, and they respected our schedule and privacy. True professionals.",
    },
    {
      name: "James Carter",
      location: "Atlanta, GA",
      quote:
        "We used their construction clean-up after a renovation. They removed dust from places I didn't know existed. The house was move-in ready.",
    },
    {
      name: "Patricia Miller",
      location: "Sandy Springs, GA",
      quote:
        "Consistent, thorough, and trustworthy. Our weekly deep clean keeps our home feeling like a sanctuary. I recommend them without hesitation.",
    },
    {
      name: "Ana Hernandez",
      location: "Decatur, GA",
      quote:
        "From windows to laundry, the attention to detail is exceptional. Communication is clear and the results always exceed expectations.",
    },
  ],
  nav: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
  footer: {
    copyright: `PA. Cleaning & Construction Service — ${new Date().getFullYear()}`,
  },
};

export type SiteConfig = typeof site;
