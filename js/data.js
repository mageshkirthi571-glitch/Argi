/* ============================================
   AgriBotany Hub — Data Layer (localStorage)
   ============================================ */

const STORAGE_KEY = "agribotany_data_v1";

const DEFAULT_DATA = {
  plants: [
    {
      id: "p1",
      common: "Neem",
      scientific: "Azadirachta indica",
      family: "Meliaceae",
      uses: "Pesticide (neem oil), dental care, skin treatment, soil amendment",
      category: "Tree",
      image: ""
    },
    {
      id: "p2",
      common: "Tulsi (Holy Basil)",
      scientific: "Ocimum tenuiflorum",
      family: "Lamiaceae",
      uses: "Medicinal herb for cough, cold, immunity; sacred plant",
      category: "Herb",
      image: ""
    },
    {
      id: "p3",
      common: "Turmeric",
      scientific: "Curcuma longa",
      family: "Zingiberaceae",
      uses: "Spice, anti-inflammatory, antiseptic, dye",
      category: "Herb",
      image: ""
    },
    {
      id: "p4",
      common: "Banyan",
      scientific: "Ficus benghalensis",
      family: "Moraceae",
      uses: "Shade tree, ecological keystone species, traditional medicine",
      category: "Tree",
      image: ""
    },
    {
      id: "p5",
      common: "Aloe Vera",
      scientific: "Aloe barbadensis miller",
      family: "Asphodelaceae",
      uses: "Skin healing, burns, cosmetics, gut health",
      category: "Succulent",
      image: ""
    },
    {
      id: "p6",
      common: "Rice",
      scientific: "Oryza sativa",
      family: "Poaceae",
      uses: "Staple food crop, straw used as fodder and mulch",
      category: "Crop",
      image: ""
    }
  ],

  medicinalPlants: [
    {
      id: "m1",
      common: "Ashwagandha",
      scientific: "Withania somnifera",
      family: "Solanaceae",
      traditionalUses: "Used in Ayurveda as an adaptogen for stress, fatigue, and to improve strength and vitality.",
      activeCompounds: "Withanolides, alkaloids (withanine, somniferine)",
      cultivation: "Grows in dry, sandy, well-drained soils; propagated by seed; harvested for roots after 150-180 days.",
      image: ""
    },
    {
      id: "m2",
      common: "Tulsi (Holy Basil)",
      scientific: "Ocimum tenuiflorum",
      family: "Lamiaceae",
      traditionalUses: "Used for respiratory ailments, fevers, and as an immune booster in Ayurvedic and folk medicine.",
      activeCompounds: "Eugenol, ursolic acid, rosmarinic acid",
      cultivation: "Propagated by seeds or cuttings; prefers well-drained loamy soil and full sun; multiple harvests possible.",
      image: ""
    },
    {
      id: "m3",
      common: "Neem",
      scientific: "Azadirachta indica",
      family: "Meliaceae",
      traditionalUses: "Leaves and bark used for skin disorders, antibacterial washes, and as a natural pesticide.",
      activeCompounds: "Azadirachtin, nimbin, nimbidin",
      cultivation: "Hardy tree suited to dry climates; propagated by seed; minimal maintenance once established.",
      image: ""
    }
  ],

  blogPosts: [
    {
      id: "b1",
      title: "Why Soil Health Determines Crop Yield",
      author: "AgriBotany Hub",
      date: "2026-06-01",
      category: "Agriculture",
      excerpt: "Healthy soil is the foundation of sustainable agriculture. Here's what every student and farmer should know about soil organic matter, pH, and microbial life.",
      content: "Soil health is often overlooked, yet it determines nutrient availability, water retention, and root development. Organic matter feeds soil microbes, which in turn make nutrients accessible to plants. Regular testing of pH and nutrient levels, along with practices like crop rotation, composting, and green manuring, can dramatically improve long-term productivity without heavy chemical inputs."
    },
    {
      id: "b2",
      title: "Understanding Apical Dominance in Plants",
      author: "AgriBotany Hub",
      date: "2026-05-20",
      category: "Botany",
      excerpt: "A look at the hormonal mechanism behind why the topmost bud of a plant suppresses growth of lateral buds.",
      content: "Apical dominance is controlled primarily by auxin produced in the shoot apex, which travels downward and inhibits lateral bud growth, while cytokinins produced in the roots promote it. Gardeners exploit this by pinching the apical bud to encourage bushier growth — a practical application of plant physiology in horticulture."
    },
    {
      id: "b3",
      title: "Forest Conservation and the Role of Native Species",
      author: "AgriBotany Hub",
      date: "2026-05-05",
      category: "Forestry",
      excerpt: "Native tree species play an irreplaceable role in maintaining forest ecosystem balance and wildlife habitats.",
      content: "Native species have co-evolved with local wildlife, soil microbes, and climate conditions over centuries, making them more resilient and ecologically valuable than introduced species. Conservation programs increasingly prioritize native afforestation, removal of invasive species, and corridor creation to support biodiversity and reduce human-wildlife conflict."
    }
  ],

  notes: [
    { id: "n1", title: "Plant Anatomy - Root and Stem Structure", subject: "Plant Anatomy", description: "Comprehensive notes on root types, stem anatomy, and tissue organization for B.Sc. Botany.", fileName: "plant-anatomy-notes.pdf" },
    { id: "n2", title: "Plant Physiology - Photosynthesis and Respiration", subject: "Plant Physiology", description: "Detailed coverage of light and dark reactions, C3/C4/CAM pathways, and respiration mechanisms.", fileName: "plant-physiology-notes.pdf" },
    { id: "n3", title: "Genetics - Mendelian and Molecular Basics", subject: "Genetics", description: "Notes covering Mendel's laws, linkage, gene expression, and basic molecular genetics.", fileName: "genetics-notes.pdf" },
    { id: "n4", title: "Plant Taxonomy - Classification Systems", subject: "Taxonomy", description: "Overview of Bentham & Hooker, APG classification, and key plant families.", fileName: "taxonomy-notes.pdf" },
    { id: "n5", title: "Plant Biotechnology - Tissue Culture Basics", subject: "Biotechnology", description: "Introduction to micropropagation, tissue culture media, and applications in agriculture.", fileName: "biotechnology-notes.pdf" }
  ],

  cropCalendar: [
    { crop: "Rice (Kharif)", sowing: "June - July", harvest: "October - November", season: "Kharif" },
    { crop: "Wheat", sowing: "October - November", harvest: "March - April", season: "Rabi" },
    { crop: "Maize", sowing: "June - July", harvest: "September - October", season: "Kharif" },
    { crop: "Groundnut", sowing: "June - July", harvest: "October - November", season: "Kharif" },
    { crop: "Sugarcane", sowing: "January - March / Oct - Nov", harvest: "12-18 months later", season: "Annual" },
    { crop: "Mustard", sowing: "October - November", harvest: "February - March", season: "Rabi" },
    { crop: "Cotton", sowing: "April - May", harvest: "October - January", season: "Kharif" },
    { crop: "Pulses (Green Gram)", sowing: "March - April / June - July", harvest: "60-90 days after sowing", season: "Zaid/Kharif" }
  ],

  quizzes: {
    botany: [
      { q: "Which pigment is primarily responsible for absorbing light in the photosynthesis light reaction?", options: ["Chlorophyll a", "Anthocyanin", "Carotene", "Xanthophyll"], answer: 0 },
      { q: "The basic unit of classification in taxonomy is called:", options: ["Family", "Genus", "Species", "Order"], answer: 2 },
      { q: "Apical meristem is located at the:", options: ["Root and shoot tips", "Leaf margins", "Center of the stem", "Base of the flower"], answer: 0 },
      { q: "Which organelle is known as the 'powerhouse of the cell'?", options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi body"], answer: 1 },
      { q: "Mendel's law of independent assortment applies to:", options: ["A single gene", "Two or more genes on different chromosomes", "Sex-linked genes only", "Cytoplasmic inheritance"], answer: 1 }
    ],
    agriculture: [
      { q: "Which farming method avoids the use of synthetic fertilizers and pesticides?", options: ["Organic farming", "Hydroponics", "Monocropping", "Shifting cultivation"], answer: 0 },
      { q: "The most efficient irrigation method for water conservation is:", options: ["Flood irrigation", "Drip irrigation", "Furrow irrigation", "Basin irrigation"], answer: 1 },
      { q: "Crop rotation primarily helps in:", options: ["Increasing soil erosion", "Maintaining soil fertility and reducing pests", "Reducing crop yield", "Increasing water usage"], answer: 1 },
      { q: "Which nutrient deficiency commonly causes yellowing of older leaves first?", options: ["Nitrogen", "Iron", "Calcium", "Boron"], answer: 0 },
      { q: "Integrated Pest Management (IPM) primarily emphasizes:", options: ["Only chemical pesticides", "Combination of biological, cultural, and chemical methods", "Banning all pest control", "Only mechanical traps"], answer: 1 }
    ],
    forestguard: [
      { q: "Which act governs wildlife protection in India?", options: ["Wildlife Protection Act, 1972", "Factories Act, 1948", "Land Acquisition Act, 1894", "Environment Act, 1990"], answer: 0 },
      { q: "Project Tiger was launched in the year:", options: ["1973", "1980", "1992", "2002"], answer: 0 },
      { q: "Which of these is a primary duty of a Forest Guard?", options: ["Issuing driving licenses", "Patrolling and protecting forest areas from illegal activities", "Conducting school exams", "Managing urban traffic"], answer: 1 },
      { q: "Social forestry primarily aims to:", options: ["Increase industrial logging", "Involve communities in tree planting on non-forest land", "Replace all native species", "Reduce forest cover"], answer: 1 },
      { q: "Which forest type is characterized by trees shedding leaves in a particular season?", options: ["Evergreen forest", "Deciduous forest", "Coniferous forest", "Mangrove forest"], answer: 1 }
    ]
  },

  potd: {
    common: "Hibiscus",
    scientific: "Hibiscus rosa-sinensis",
    family: "Malvaceae",
    note: "Widely grown ornamental shrub with large showy flowers; used in hair oils, herbal teas, and traditional medicine for its cooling properties.",
    image: ""
  },

  siteSettings: {
    siteTitle: "AgriBotany Hub",
    tagline: "Botany · Agriculture · Forestry · Plant Science"
  }
};

const DataStore = {
  _data: null,

  load() {
    if (this._data) return this._data;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        this._data = JSON.parse(raw);
        // Backfill any new default keys that might not exist in stored data
        for (const key of Object.keys(DEFAULT_DATA)) {
          if (!(key in this._data)) this._data[key] = DEFAULT_DATA[key];
        }
      } else {
        this._data = JSON.parse(JSON.stringify(DEFAULT_DATA));
        this.save();
      }
    } catch (e) {
      console.error("Failed to load data, using defaults", e);
      this._data = JSON.parse(JSON.stringify(DEFAULT_DATA));
    }
    return this._data;
  },

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this._data));
      return true;
    } catch (e) {
      console.error("Failed to save data", e);
      return false;
    }
  },

  get(collection) {
    return this.load()[collection];
  },

  set(collection, value) {
    this.load()[collection] = value;
    return this.save();
  },

  genId(prefix) {
    return prefix + "_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  },

  resetToDefaults() {
    this._data = JSON.parse(JSON.stringify(DEFAULT_DATA));
    this.save();
  }
};

/* ============ Admin auth (simple, client-side) ============ */
const ADMIN_KEY = "agribotany_admin_v1";
const ADMIN_PASSWORD = "agribotany2026"; // change as needed

const AdminAuth = {
  isLoggedIn() {
    return sessionStorage.getItem(ADMIN_KEY) === "true";
  },
  login(password) {
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem(ADMIN_KEY, "true");
      return true;
    }
    return false;
  },
  logout() {
    sessionStorage.removeItem(ADMIN_KEY);
  }
};

/* ============ Image upload helper ============ */
function readImageAsDataURL(fileInput, callback) {
  const file = fileInput.files && fileInput.files[0];
  if (!file) { callback(""); return; }
  const reader = new FileReader();
  reader.onload = (e) => callback(e.target.result);
  reader.onerror = () => callback("");
  reader.readAsDataURL(file);
}
