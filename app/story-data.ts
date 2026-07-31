export type Chapter = {
  id: string;
  number: string;
  year: string;
  nav: string;
  eyebrow: string;
  title: string;
  accent: string;
  paragraphs: string[];
  image: string;
  alt: string;
  caption: string;
  quote?: string;
  quoteAttribution?: string;
  treatment: "portrait" | "film" | "paper" | "orbit" | "branches" | "impact";
};

export type LegacyAction = {
  tag: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  quote?: string;
  citation?: string;
};

export const chapters: Chapter[] = [
  {
    id: "spark",
    number: "01",
    year: "Before 2015",
    nav: "A life of success",
    eyebrow: "A life of success",
    title: "Who was",
    accent: "Ali Banat?",
    paragraphs: [
      "Ali Banat (1982–2018) was the founder of Muslims Around The World Project.",
      "Before his diagnosis, Ali was a successful businessman living in Sydney, Australia. He had worked hard to build a comfortable life and enjoyed many of the things commonly associated with achievement — businesses, luxury vehicles, designer clothing and material security.",
      "From the outside, it looked like success.",
      "But in 2015, Ali received news that would change the direction of his life: a diagnosis of an aggressive form of cancer, and the possibility that his time was limited. The value of everything around him changed. The question was no longer how much he could accumulate.",
      "Ali understood that wealth was an Amanah. Time was an Amanah. Health was an Amanah. Whatever remained of his life was an opportunity to seek the pleasure of Allah. He began giving away possessions that had once been important to him. He stepped away from the life he had known and focused his attention on people who had far less. He did not know how much time he had left — but he knew how he wanted to use it.",
    ],
    image: "/assets/hero-ali-portrait-clean.jpg",
    alt: "Portrait of Ali Banat, founder of MATW Project",
    caption: "Before the diagnosis — a life that looked complete.",
    quote: "What can I send ahead for my Akhirah?",
    quoteAttribution: "Ali Banat",
    treatment: "portrait",
  },
  {
    id: "awakening",
    number: "02",
    year: "2015",
    nav: "The turning point",
    eyebrow: "The turning point",
    title: "He called it",
    accent: "a gift.",
    paragraphs: [
      "For many people, such a diagnosis would represent only fear, pain and uncertainty. For Ali, it became an awakening. He described his diagnosis as being “gifted with cancer” — not because the illness was easy, but because it awakened him before it was too late.",
      "His message was not that illness should be desired. It was that Allah can place an awakening inside even the most difficult test. Cancer forced him to confront a truth that applies to every one of us: this life is temporary, our possessions will remain behind — but the good we do for the sake of Allah can continue long after we leave this world.",
    ],
    image: "/assets/matw-ali-message.jpg",
    alt: "Ali Banat reflecting on his diagnosis",
    caption: "An awakening before it was too late.",
    quote: "His illness did not take away his purpose. By the mercy of Allah, it revealed it.",
    quoteAttribution: "Story reflection",
    treatment: "film",
  },
  {
    id: "togo",
    number: "03",
    year: "2015–16",
    nav: "From reflection to action",
    eyebrow: "From reflection to action",
    title: "He travelled to Togo — and",
    accent: "could not look away.",
    paragraphs: [
      "Ali’s transformation was not limited to words. He wanted to act. He travelled to Togo in West Africa, where he witnessed communities living without many of the things most of us take for granted: families facing poverty, children without education or proper care, communities struggling to access clean water, and Muslims without a safe, dignified place to pray.",
      "The experience moved him deeply. It showed him that even one person, with sincere intention and determined action, could help transform the future of an entire community.",
    ],
    image: "/assets/ali-banat-child.jpg",
    alt: "Ali Banat with a child during humanitarian work",
    caption: "Togo, West Africa — compassion becomes action.",
    treatment: "paper",
  },
  {
    id: "birth",
    number: "04",
    year: "2016",
    nav: "The birth of MATW",
    eyebrow: "One mission becomes a movement",
    title: "A mission for Muslims",
    accent: "around the world.",
    paragraphs: [
      "Ali founded Muslims Around The World Project with a clear purpose: to serve vulnerable people, strengthen communities and give others the opportunity to invest in their Hereafter.",
      "MATW was not created to be a monument to one man. It was created to help people — to turn compassion into action, and to bring together Muslims from around the world behind projects that create immediate relief and lasting change.",
      "Ali knew he could not complete this mission alone. So he invited the Ummah to join him. People watched his story and saw a man facing the end of his life not with bitterness, but with urgency, gratitude and concern for others. They donated. They shared his message. And what started as one man’s deeply personal mission became a movement.",
    ],
    image: "/assets/hero-ali-children.jpg",
    alt: "Ali Banat with children supported by the mission",
    caption: "Muslims Around The World — a mission without borders.",
    treatment: "orbit",
  },
  {
    id: "faith",
    number: "05",
    year: "2017–18",
    nav: "His final wish",
    eyebrow: "His final wish",
    title: "A reminder for those of us",
    accent: "who remain.",
    paragraphs: [
      "As Ali’s health declined, his concern remained focused on the mission. He wanted the work to continue. He encouraged people to have a goal, develop a plan, and support a project that could benefit others — and reminded those unable to carry out a project themselves that they could still help make one possible.",
      "His final message was not centred on what he had lost. It was centred on what the rest of us could still do.",
    ],
    image: "/assets/hero-ali-portrait-clean.png",
    alt: "Ali Banat during his final message",
    caption: "A final message — have a goal and leave something behind.",
    treatment: "film",
  },
  {
    id: "hope",
    number: "06",
    year: "May 2018",
    nav: "The legacy lives on",
    eyebrow: "The legacy lives on",
    title: "Ali returned to Allah.",
    accent: "His mission did not stop.",
    paragraphs: [
      "Ali Banat passed away in May 2018. But the projects he began continued. The wells continued to provide water. The masjids continued to welcome worshippers. The children continued to receive care. And the people inspired by his story continued to give.",
      "This is the beauty of Sadaqah Jariyah. A person may leave this world, but the reward of their good deeds may continue to reach them — every prayer offered in a masjid they helped build, every sip taken from a well they helped provide, every child educated or cared for because of their generosity, every person inspired to do good because of their example.",
    ],
    image: "/assets/matw-community-2.jpg",
    alt: "Children supported through MATW humanitarian work",
    caption: "The work continues in every life reached.",
    quote: "A legacy is not measured by how long we live. It is measured by what we leave behind.",
    quoteAttribution: "Legacy reflection",
    treatment: "branches",
  },
  {
    id: "impact",
    number: "07",
    year: "2018–today",
    nav: "Ten years of impact",
    eyebrow: "Ten years of impact",
    title: "From one mission to",
    accent: "a decade of service.",
    paragraphs: [
      "What began with an orphan, a water well and a masjid in Togo has grown into an international humanitarian organisation — responding wherever poverty, conflict, disaster and displacement leave families in urgent need.",
      "The scale has grown. The purpose has not: to serve for the sake of Allah, honour the Amanah of every donor, and help people with dignity.",
    ],
    image: "/assets/hero-matw-food-service.png",
    alt: "MATW volunteers providing food relief",
    caption: "One thread becomes thousands of acts of service.",
    treatment: "impact",
  },
  {
    id: "legacy",
    number: "08",
    year: "Tomorrow",
    nav: "Continue the legacy",
    eyebrow: "Continue the legacy",
    title: "What will you",
    accent: "leave behind?",
    paragraphs: [
      "Ali’s story was never intended to end with Ali. It was intended to awaken something in the rest of us. You do not need to be wealthy to make a difference. You do not need to fund an entire project alone. You do not need to wait until you feel ready.",
      "Your act may feel small to you. But when it is sincere and accepted by Allah, its reward can be greater than you imagine.",
    ],
    image: "/assets/hero-ali-children.jpg",
    alt: "Ali Banat with children during his humanitarian work",
    caption: "The next chapter belongs to all of us.",
    quote: "A life may end. A legacy continues.",
    quoteAttribution: "Epilogue",
    treatment: "paper",
  },
];

export const firstActs = [
  { number: "١", title: "Care for an orphan", body: "Children who had lost everything received food, protection and education." },
  { number: "٢", title: "Provide clean water", body: "Wells brought safe water for drinking, cooking, washing and Wudu." },
  { number: "٣", title: "Build a place of worship", body: "A masjid where a community could pray, learn and gather." },
];

export const finalReminders = [
  "Do not wait.",
  "Do not assume you have more time.",
  "Do not underestimate what Allah can place in a sincere act of charity.",
  "Leave behind something that continues to serve others after you are gone.",
];

export const impactTimeline = [
  { year: "2015", title: "The diagnosis", body: "Ali is diagnosed with an aggressive cancer — and calls it a gift. He begins giving his wealth away." },
  { year: "2015–16", title: "Togo, and the birth of MATW", body: "Ali travels to West Africa and founds Muslims Around The World Project: orphan care, water and a masjid." },
  { year: "2018", title: "Ali returns to Allah", body: "Ali passes away in May 2018. The projects he began keep serving — and his story keeps spreading." },
  { year: "2018–25", title: "A movement grows", body: "MATW expands into emergency relief, food and water aid, Zakat distribution, healthcare and education across many countries." },
  { year: "2026", title: "The legacy is still growing", body: "Donors, volunteers, field teams and communities around the world continue what one man began." },
];

export const impactImages = [
  { src: "/assets/matw-official-community.jpeg", alt: "A child receiving clean water through a MATW-supported project", label: "Clean water" },
  { src: "/assets/matw-official-food.jpeg", alt: "MATW field team distributing food boxes", label: "Food relief" },
  { src: "/assets/matw-official-support-2.jpeg", alt: "A mother holding a child during a MATW field visit", label: "Family care" },
  { src: "/assets/matw-official-orphan.jpg", alt: "A child receiving a family food parcel", label: "Orphan care" },
  { src: "/assets/matw-official-support-1.jpeg", alt: "A child sheltering beside a fire", label: "Emergency relief" },
  { src: "/assets/matw-official-support-3.jpeg", alt: "A child walking through a conflict-affected neighbourhood", label: "Crisis response" },
];

export const impactMetrics = [
  { value: 60022198, suffix: "", label: "total impact recorded in 2024" },
  { value: 16882, suffix: "", label: "orphans supported in 2024" },
  { value: 535166, suffix: "", label: "water-well impact in 2024" },
  { value: 30, suffix: "+", label: "countries reached by MATW teams" },
];

export const actions: LegacyAction[] = [
  {
    tag: "Urgent",
    title: "Gaza Emergency",
    description: "As the crisis continues, families face displacement, hunger and loss. Help deliver urgent relief where it is needed most, right now.",
    href: "https://matwproject.org/gaza-emergency",
    cta: "Support Gaza",
  },
  {
    tag: "Sadaqah Jariyah",
    title: "Build a water well",
    description: "Clean water can transform a community’s health, dignity and future — and long after your donation, the water may continue to flow.",
    href: "https://matwproject.org/sadaqah-jariyah/build-a-water-well",
    cta: "Build a water well",
    quote: "When asked which charity is best, the Prophet ﷺ replied: “Providing water.”",
    citation: "Sunan Abi Dawud",
  },
  {
    tag: "Ongoing care",
    title: "Care for an orphan",
    description: "Give a vulnerable child food, education, healthcare and a safe environment — and the reminder that they have not been forgotten by the Ummah.",
    href: "https://matwproject.org/sponsor-an-orphan",
    cta: "Support an orphan",
    quote: "“I and the one who looks after an orphan will be like this in Paradise.”",
    citation: "The Messenger of Allah ﷺ, Sahih al-Bukhari",
  },
  {
    tag: "Sadaqah Jariyah",
    title: "Build a masjid",
    description: "A masjid is more than a building — it becomes the spiritual heart of a community, where every prayer and every lesson may become ongoing reward.",
    href: "https://matwproject.org/sadaqah-jariyah/build-a-masjid",
    cta: "Help build a masjid",
    quote: "“Whoever builds a mosque for Allah, Allah will build for him a house like it in Paradise.”",
    citation: "Sahih al-Bukhari & Muslim",
  },
  {
    tag: "Obligation",
    title: "Give your Zakat",
    description: "Fulfil your obligation, purify your wealth and support eligible families facing poverty and hardship — with a 100% Zakat policy.",
    href: "https://matwproject.org/zakat",
    cta: "Give Zakat",
  },
  {
    tag: "Immediate relief",
    title: "Food & water aid",
    description: "Hot meals, food packs and clean drinking water for families surviving conflict, displacement and poverty. For a hungry child, a meal is relief.",
    href: "https://matwproject.org/food-and-water-aid",
    cta: "Provide food & water",
  },
];

export const trustPrinciples = [
  "100% donation policy",
  "Field monitoring & completion updates",
  "Annual impact reporting",
  "Respect for donor intentions",
  "Dignified treatment of beneficiaries",
  "Careful, responsible project selection",
];

export const commonQuestions = [
  {
    question: "Who was Ali Banat?",
    answer: "Ali Banat was an Australian Muslim businessman and humanitarian who founded Muslims Around The World Project. After being diagnosed with an aggressive form of cancer in 2015, he reassessed his life and dedicated his time and wealth to helping people in need. His story became widely known through the “Gifted with Cancer” interview. Ali passed away in 2018, but the organisation and mission he began continue today.",
  },
  {
    question: "What did Ali Banat mean by “Gifted with Cancer”?",
    answer: "Ali described his diagnosis as a gift because it changed the way he viewed his life — helping him recognise that material possessions were temporary and that his remaining time could be used to seek the pleasure of Allah and help others. He did not mean the illness was easy; he saw the awakening it created as a mercy and an opportunity to prepare for the Hereafter.",
  },
  {
    question: "How did Ali Banat start MATW Project?",
    answer: "After his diagnosis, Ali travelled to Togo in West Africa and witnessed communities facing poverty, water scarcity and a lack of essential services. He began supporting orphan care, water wells and masjid construction — projects that became the foundation of Muslims Around The World Project.",
  },
  {
    question: "What does MATW stand for?",
    answer: "MATW stands for Muslims Around The World — a name reflecting Ali’s vision of uniting Muslims from different communities and countries behind meaningful humanitarian work.",
  },
  {
    question: "Is MATW still continuing Ali Banat’s work?",
    answer: "Yes. MATW continues the mission Ali began across multiple countries through orphan care, emergency relief, food and water aid, masjids, water projects, healthcare, education, Zakat and Sadaqah Jariyah.",
  },
  {
    question: "How can I continue Ali Banat’s legacy?",
    answer: "Support a project that creates lasting benefit: sponsor an orphan, build a water well, build a masjid, give Zakat, provide food and water, or support emergency relief.",
  },
  {
    question: "Can I donate in memory of someone?",
    answer: "Yes. Many supporters give Sadaqah Jariyah on behalf of a loved one who has passed away. Projects like wells and masjids may continue benefiting people for years, creating the possibility of continuous reward, Insha Allah.",
  },
  {
    question: "Can I contribute without funding a full project?",
    answer: "Yes — contribute any amount. Your donation is combined with the generosity of other supporters to help complete a well, build a masjid, provide food or support other initiatives. Every contribution matters.",
  },
  {
    question: "Where does MATW work?",
    answer: "MATW delivers humanitarian and development programmes across countries affected by poverty, conflict, displacement and crisis. Locations change with current needs; the official MATW site lists current campaigns and field work.",
  },
];
