import {
  BadgeCheck,
  Building2,
  ClipboardList,
  Cog,
  Factory,
  FileText,
  Fuel,
  Hammer,
  HardHat,
  Landmark,
  MessageSquare,
  Users,
  Warehouse,
  Zap,
} from "lucide-react";

export const serviceDetails = [
  {
    slug: "fabrication-erection",
    icon: Hammer,
    title: "Fabrication & Erection Works",
    summary: "High precision fabrication and erection for industrial structures.",
    description:
      "From shop-floor fabrication to on-site erection, we handle structural, plate and piping works with tight tolerances and strict safety practices, so every component fits first time.",
    features: [
      "Structural and plate fabrication to approved drawings",
      "Pipe spool fabrication and erection",
      "Site erection, alignment, bolting and welding",
      "Surface preparation and protective coating",
      "Stage-wise quality inspection and documentation",
    ],
    image: "/img/project-1.jpg",
  },
  {
    slug: "steel-structures",
    icon: Cog,
    title: "Steel Structure Works",
    summary: "Design, fabrication and erection of all types of steel structures.",
    description:
      "We deliver steel structures for factories, warehouses, sheds, platforms and multi-storey frames, planned for strength, durability and speed of construction.",
    features: [
      "Industrial sheds and warehouse buildings",
      "Multi-storey steel frames and mezzanine floors",
      "Platforms, staircases, walkways and pipe racks",
      "Trusses, columns, girders and bracing",
      "Code-compliant, load-ready workmanship",
    ],
    image: "/img/about.jpg",
  },
  {
    slug: "equipment-erection",
    icon: Building2,
    title: "Equipment Erection",
    summary: "Expertise in handling and erecting heavy industrial equipment.",
    description:
      "Our rigging and erection crews move, lift and install heavy plant equipment safely, with detailed lifting plans and experienced supervision on every job.",
    features: [
      "Erection of tanks, vessels, columns and heat exchangers",
      "Heavy lifting with cranes and rigging plans",
      "Machinery positioning, levelling and grouting",
      "Pipeline and piping erection",
      "Pre-commissioning support",
    ],
    image: "/img/project-3.jpg",
  },
  {
    slug: "manpower-supply",
    icon: Users,
    title: "Manpower Supply",
    summary: "Skilled manpower for Plumbing, Electrical & Civil Construction.",
    description:
      "Trained, site-ready people when you need them. We supply skilled and semi-skilled workers on flexible terms, supervised and managed to your project standards.",
    subServices: ["Plumbing", "Electrical", "Civil Construction"],
    features: [
      "Welders, fitters, riggers and helpers",
      "Electricians and plumbers",
      "Masons, carpenters and bar benders",
      "Supervisors and safety staff",
      "Short-term and long-term deployment",
    ],
    image: "/img/project-6.jpg",
  },
  {
    slug: "e-tender-projects",
    icon: FileText,
    title: "E-Tender Projects",
    summary: "Complete support for projects won through e-tendering.",
    description:
      "We bid for and execute industrial and commercial works through e-tendering portals, with complete documentation, compliance and transparent pricing.",
    features: [
      "Tender study and technical / commercial bid preparation",
      "Documentation and statutory compliance",
      "Competitive, transparent pricing",
      "Quick mobilisation after award",
    ],
    image: "/img/project-2.jpg",
  },
];

export const processSteps = [
  {
    icon: MessageSquare,
    title: "Enquiry & Study",
    text: "We understand your scope, drawings, site conditions and schedule.",
  },
  {
    icon: ClipboardList,
    title: "Planning & Estimate",
    text: "Clear method statements, manpower plan and a transparent quote.",
  },
  {
    icon: Hammer,
    title: "Fabrication",
    text: "Precision fabrication in our workshop with in-process checks.",
  },
  {
    icon: HardHat,
    title: "Erection",
    text: "Safe, supervised erection and alignment at your site.",
  },
  {
    icon: BadgeCheck,
    title: "Handover",
    text: "Final inspection, documentation and after-work support.",
  },
];

export const industries = [
  { icon: Zap, label: "Power & Energy" },
  { icon: Fuel, label: "Oil, Gas & Petrochemical" },
  { icon: Factory, label: "Manufacturing & Automotive" },
  { icon: Warehouse, label: "Warehousing & Logistics" },
  { icon: Landmark, label: "Infrastructure & Civil" },
  { icon: Building2, label: "Commercial Buildings" },
];
