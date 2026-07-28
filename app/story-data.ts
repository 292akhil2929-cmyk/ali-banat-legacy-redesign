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
  treatment: "portrait" | "film" | "paper" | "orbit" | "branches" | "impact";
};

export const chapters: Chapter[] = [
  {
    id: "spark",
    number: "01",
    year: "1982–2015",
    nav: "The spark of a dream",
    eyebrow: "A life of success",
    title: "Who was",
    accent: "Ali Banat?",
    paragraphs: [
      "Before his diagnosis, Ali Banat was a successful businessman living in Sydney, Australia. He had worked hard to build a comfortable life and enjoyed many of the things commonly associated with achievement — businesses, luxury vehicles, designer clothing and material security.",
      "From the outside, it looked like success.",
      "But in 2015, Ali received news that would change the direction of his life: a diagnosis of an aggressive form of cancer, and the possibility that his time was limited. The value of everything around him changed. The question was no longer how much he could accumulate.",
    ],
    image: "/assets/hero-ali-portrait-clean.jpg",
    alt: "Portrait of Ali Banat",
    caption: "Before the diagnosis — a life that looked complete.",
    quote: "What can I send ahead for my Akhirah?",
    treatment: "portrait",
  },
  {
    id: "awakening",
    number: "02",
    year: "2015",
    nav: "A mission takes shape",
    eyebrow: "The turning point",
    title: "He called it",
    accent: "a gift.",
    paragraphs: [
      "For many people, such a diagnosis would represent only fear, pain and uncertainty. For Ali, it became an awakening. He described his diagnosis as being “gifted with cancer”—not because the illness was easy, but because it awakened him before it was too late.",
      "His message was not that illness should be desired. It was that Allah can place an awakening inside even the most difficult test. This life is temporary, our possessions will remain behind—but the good we do for the sake of Allah can continue long after we leave this world.",
    ],
    image: "/assets/matw-ali-message.jpg",
    alt: "Ali Banat speaking during his final years",
    caption: "An awakening before it was too late.",
    quote: "His illness did not take away his purpose. By the mercy of Allah, it revealed it.",
    treatment: "film",
  },
  {
    id: "togo",
    number: "03",
    year: "2015–16",
    nav: "Answering the call",
    eyebrow: "From reflection to action",
    title: "He travelled to Togo—and",
    accent: "could not look away.",
    paragraphs: [
      "Ali’s transformation was not limited to words. He wanted to act. He travelled to Togo in West Africa, where he witnessed families facing poverty, children without education or proper care, communities struggling to access clean water and Muslims without a safe, dignified place to pray.",
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
    title: "The birth",
    accent: "of MATW.",
    paragraphs: [
      "Ali founded Muslims Around The World Project with a clear purpose: to serve vulnerable people, strengthen communities and give others the opportunity to invest in their Hereafter.",
      "MATW was not created to be a monument to one man. It was created to help people—to turn compassion into action and to bring together Muslims from around the world behind projects that create immediate relief and lasting change.",
      "Ali knew he could not complete this mission alone. He invited the Ummah to join him. What started as one man’s deeply personal mission became a movement.",
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
    nav: "Building on faith",
    eyebrow: "His final wish",
    title: "A reminder for those",
    accent: "who remain.",
    paragraphs: [
      "As Ali’s health declined, his concern remained focused on the mission. He wanted the work to continue. He encouraged people to have a goal, develop a plan and support a project that could benefit others.",
      "His final message was not centred on what he had lost. It was centred on what the rest of us could still do.",
      "Do not wait. Do not assume you have more time. Do not underestimate what Allah can place in a sincere act of charity. Leave behind something that continues to serve others after you are gone.",
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
    nav: "Expanding hope",
    eyebrow: "The legacy lives on",
    title: "Ali returned to Allah.",
    accent: "His mission did not stop.",
    paragraphs: [
      "Ali Banat passed away in May 2018. But the projects he began continued. The wells continued to provide water. The masjids continued to welcome worshippers. The children continued to receive care. And the people inspired by his story continued to give.",
      "This is the beauty of Sadaqah Jariyah. A person may leave this world, but the reward of their good deeds may continue to reach them—every prayer offered in a masjid they helped build, every sip taken from a well they helped provide, every child educated or cared for because of their generosity.",
    ],
    image: "/assets/matw-legacy-children.png",
    alt: "Children supported through MATW humanitarian work",
    caption: "The work continues in every life reached.",
    quote: "A legacy is not measured by how long we live. It is measured by what we leave behind.",
    treatment: "branches",
  },
  {
    id: "impact",
    number: "07",
    year: "2018–today",
    nav: "Lives transformed",
    eyebrow: "Ten years of impact",
    title: "From one mission to",
    accent: "a decade of service.",
    paragraphs: [
      "What began with an orphan, a water well and a masjid in Togo has grown into an international humanitarian organisation—responding wherever poverty, conflict, disaster and displacement leave families in urgent need.",
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
    nav: "A legacy for generations",
    eyebrow: "Continue the legacy",
    title: "What will you",
    accent: "leave behind?",
    paragraphs: [
      "Ali’s story was never intended to end with Ali. It was intended to awaken something in the rest of us. You do not need to be wealthy to make a difference. You do not need to fund an entire project alone. You do not need to wait until you feel ready.",
      "Your act may feel small to you. But when it is sincere and accepted by Allah, its reward can be greater than you imagine.",
    ],
    image: "/assets/matw-legacy-community.png",
    alt: "A community carrying Ali Banat's legacy forward",
    caption: "The next chapter belongs to all of us.",
    quote: "A life may end. A legacy continues.",
    treatment: "paper",
  },
];

export const impactMetrics = [
  { value: 18000, suffix: "+", label: "orphans under ongoing care" },
  { value: 2900, suffix: "+", label: "water wells built" },
  { value: 100, suffix: "+", label: "masjids constructed" },
  { value: 1, suffix: "M+", label: "meals and food items distributed" },
];

export const actions = [
  ["Sadaqah Jariyah", "Build a water well", "https://matwproject.org/sadaqah-jariyah/build-a-water-well"],
  ["Ongoing care", "Support an orphan", "https://matwproject.org/sponsor-an-orphan"],
  ["Faith", "Help build a masjid", "https://matwproject.org/sadaqah-jariyah/build-a-masjid"],
  ["Amanah", "Give your Zakat", "https://matwproject.org/zakat"],
];
