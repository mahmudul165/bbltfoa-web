import type {
  NavItem, StatItem, NewsArticle, Event, ExecutiveMember,
  Member, Publication, GalleryItem, PolicyDocument, StatReport,
} from "@/types/bbtfoa";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About BBLTFOA",
    href: "/about",
    children: [
      { label: "About BBLTFOA", href: "/about" },
      { label: "President's Message", href: "/president-message" },
      { label: "Executive Committee", href: "/executive-committee" },
    ],
  },
  { label: "Member Directory", href: "/members" },
  { label: "Bangladesh Tea Industry", href: "/tea-industry" },
  { label: "Statistics & Reports", href: "/statistics" },
  { label: "Activities", href: "/activities" },
  { label: "News & Media", href: "/news" },
  { label: "Policy Advocacy", href: "/policy" },
  { label: "Events & Training", href: "/events" },
  { label: "Publications", href: "/publications" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

export const heroStats: StatItem[] = [
  { label: "Years of Excellence", value: "27+", icon: "📅" },
  { label: "Member Factories", value: "120+", icon: "🏭" },
  { label: "Direct Livelihoods", value: "5 Lakh+", icon: "👷" },
  { label: "Smallholder Gardens", value: "12,000+", icon: "🌿" },
];

export const quickStats: StatItem[] = [
  { label: "Member Factories", value: "120+", unit: "registered", icon: "🏭" },
  { label: "Direct Livelihoods", value: "5 Lakh+", unit: "supported", icon: "👷" },
  { label: "Indirect Jobs", value: "5 Lakh+", unit: "value chain", icon: "🔗" },
  { label: "Smallholder Gardens", value: "12,000+", unit: "served", icon: "🌿" },
  { label: "National Output", value: "30%", unit: "processed", icon: "🍃" },
  { label: "Est.", value: "1998", unit: "founded", icon: "📅" },
];

export const latestNews: NewsArticle[] = [
  {
    id: "1",
    title: "BBLTFOA Calls for Continued Support to the Bought Leaf Tea Sector",
    excerpt:
      "The Association reaffirmed its commitment to growers and member factories, urging coordinated support to sustain the growth of Bangladesh's bought leaf tea industry.",
    date: "2026-05-20",
    category: "Association News",
    slug: "bbltfoa-support-bought-leaf-sector",
    author: "BBLTFOA Secretariat",
    content: [
      "The Bangladesh Bought Leaf Tea Factory Owners Association (BBLTFOA) has reaffirmed its commitment to the thousands of small tea growers and member factories that form the backbone of the country's bought leaf tea sector.",
      "Speaking on behalf of the Association, the Secretariat highlighted the sector's growing contribution to national tea production, rural employment, and improved livelihoods — particularly across the northern tea-growing districts of Panchagarh, Thakurgaon, and surrounding areas.",
      "BBLTFOA continues to engage with government agencies, regulatory authorities, and development partners to address shared challenges, including input costs, fair leaf pricing, and access to modern processing technology.",
      "The Association invites all member factories to participate actively in its working committees and training programmes, reinforcing a collective approach to quality, sustainability, and the long-term prosperity of Bangladesh's tea sector.",
    ],
  },
  {
    id: "2",
    title: "BBLTFOA Executive Committee for 2026–2028 Term Takes Office",
    excerpt:
      "The newly elected Executive Committee, led by President Md. Niaz Ali Chisty, has assumed responsibility for the 2026–2028 bi-ennial term.",
    date: "2026-05-10",
    category: "Association News",
    slug: "executive-committee-2026-2028",
    author: "BBLTFOA Secretariat",
    content: [
      "The Bangladesh Bought Leaf Tea Factory Owners Association (BBLTFOA) has formally inducted its Executive Committee for the 2026–2028 term.",
      "Md. Niaz Ali Chisty of Morgen Tea Industries Limited continues to serve as President, leading a committee drawn from member factories across the northern tea-growing region.",
      "In his message to members, the President emphasised priorities for the new term: promoting quality tea production, advancing sustainable agricultural practices, supporting technological adoption, and protecting the welfare of all stakeholders connected with the bought leaf tea industry.",
      "The committee has pledged to strengthen engagement with government and industry bodies to create new opportunities for sustainable growth across the sector.",
    ],
  },
  {
    id: "3",
    title: "Northern Districts Drive Steady Growth in Bought Leaf Production",
    excerpt:
      "Panchagarh and neighbouring districts continue to expand smallholder tea cultivation, reinforcing the bought leaf sector's role in national output.",
    date: "2026-04-28",
    category: "Industry News",
    slug: "northern-districts-production-growth",
    author: "Research Desk",
    content: [
      "Bangladesh's northern tea-growing belt — led by Panchagarh — continues to record steady growth in green leaf production, underlining the increasing importance of the bought leaf model to the national tea industry.",
      "Thousands of small tea growers across the region supply fresh green leaf to BBLTFOA member factories, where it is processed into made tea. This collaborative model has expanded cultivation onto flat land that was historically outside the traditional tea districts.",
      "The Association notes that the bought leaf sector now accounts for a significant share of national tea output, while creating substantial rural employment and income for smallholder families.",
      "BBLTFOA continues to support growers through training, best-practice guidance, and advocacy for fair and transparent green leaf pricing.",
    ],
  },
  {
    id: "4",
    title: "Fair Green Leaf Pricing Remains a Priority for Growers and Factories",
    excerpt:
      "BBLTFOA continues to advocate for a transparent and equitable green leaf pricing framework that protects both smallholder growers and member factories.",
    date: "2026-04-15",
    category: "Policy",
    slug: "fair-green-leaf-pricing",
    author: "Policy Desk",
    content: [
      "A transparent and fair green leaf pricing framework remains central to the long-term sustainability of Bangladesh's bought leaf tea sector, BBLTFOA has reiterated.",
      "Because the model depends on a strong partnership between thousands of small growers and the factories that process their leaf, balanced pricing is essential to ensure that both sides remain viable through changing market conditions.",
      "The Association continues to engage with regulatory authorities and stakeholders to support pricing mechanisms that reflect leaf quality, production costs, and prevailing market realities.",
      "BBLTFOA encourages members to maintain quality-based procurement practices that reward growers for delivering well-plucked, high-quality green leaf.",
    ],
  },
  {
    id: "5",
    title: "BBLTFOA Promotes Good Agricultural Practices Among Growers",
    excerpt:
      "Training initiatives focused on quality plucking, soil health, and climate-resilient cultivation are helping growers raise both yield and leaf quality.",
    date: "2026-04-02",
    category: "Events",
    slug: "good-agricultural-practices-training",
    author: "Training Department",
    content: [
      "BBLTFOA has continued its programme of grower training, focusing on Good Agricultural Practices (GAP) that improve both the yield and quality of green leaf supplied to member factories.",
      "Sessions cover proper plucking standards, soil health management, responsible use of inputs, and climate-resilient cultivation techniques suited to the northern tea-growing region.",
      "By raising the standard of green leaf at the garden level, these initiatives help factories produce higher-quality made tea and strengthen the competitiveness of Bangladeshi tea.",
      "The Association plans to expand its training calendar in partnership with research institutions and industry experts in the coming season.",
    ],
  },
  {
    id: "6",
    title: "Sustainability and Worker Welfare at the Heart of Industry Growth",
    excerpt:
      "BBLTFOA underlines its commitment to environmental responsibility and the welfare of workers and growers across the bought leaf tea value chain.",
    date: "2026-03-25",
    category: "Industry News",
    slug: "sustainability-worker-welfare",
    author: "BBLTFOA Secretariat",
    content: [
      "As the bought leaf tea sector grows, BBLTFOA has placed sustainability and stakeholder welfare at the centre of its agenda.",
      "The Association promotes environmentally responsible cultivation and processing practices among member factories, encouraging efficient resource use and responsible management of inputs.",
      "Equally important is the welfare of the thousands of workers and small growers whose livelihoods depend on the industry. BBLTFOA supports initiatives that improve working conditions, fair returns, and rural prosperity.",
      "The Association believes that a sustainable, people-centred approach is essential to securing the future of Bangladesh's tea sector and the communities it supports.",
    ],
  },
];

export const upcomingEvents: Event[] = [
  {
    id: "1",
    title: "Tea Garden Managers' Annual Conference 2026",
    date: "2026-06-15",
    time: "09:00 AM",
    venue: "Sylhet International Convention Center, Sylhet",
    type: "conference",
    description:
      "Annual gathering of tea garden managers to discuss operational challenges, best practices, and the year ahead.",
    registrationOpen: true,
  },
  {
    id: "2",
    title: "Training on Good Agricultural Practices (GAP)",
    date: "2026-06-22",
    time: "10:00 AM",
    venue: "Bangladesh Tea Research Institute, Srimangal",
    type: "training",
    description:
      "Hands-on training for field supervisors and agronomists on GAP certification requirements.",
    registrationOpen: true,
  },
  {
    id: "3",
    title: "Emergency Meeting: Tea Workers Welfare Fund",
    date: "2026-07-05",
    time: "11:00 AM",
    venue: "BBLTFOA Head Office, Banani, Dhaka",
    type: "meeting",
    description:
      "Discussion on the proposed amendments to the Tea Workers Welfare Fund Act.",
    registrationOpen: false,
  },
  {
    id: "4",
    title: "International Tea Summit — Bangladesh Chapter",
    date: "2026-07-20",
    time: "09:00 AM",
    venue: "InterContinental Dhaka",
    type: "seminar",
    description:
      "Regional summit bringing together tea producers, buyers, and policymakers from South Asia.",
    registrationOpen: true,
  },
];

// ── Real Executive Committee (BBLTFOA Bi-ennial Election 2026–2028) ──
export const executiveCommittee: ExecutiveMember[] = [
  {
    id: "1",
    name: "Md. Niaz Ali Chishty",
    designation: "President",
    company: "Morgen Tea Industries Limited",
    order: 1,
  },
  {
    id: "2",
    name: "Md. Alamgir Hossain",
    designation: "Vice-President",
    company: "Popular Tea Factory",
    order: 2,
  },
  {
    id: "3",
    name: "Md. Shah Alam",
    designation: "Vice-President",
    company: "Bangla Tea Industries",
    imageUrl: "/members/md-shah-alam.jpg",
    order: 3,
  },
  {
    id: "4",
    name: "Md. Faizul Islam",
    designation: "General Secretary",
    company: "Green Field Tea Industries Limited",
    imageUrl: "/members/md-faizul-islam.jpg",
    order: 4,
  },
  {
    id: "5",
    name: "Md. Asaduzzaman",
    designation: "Joint General Secretary",
    company: "Sajeda Rafique Tea Factory",
    imageUrl: "/members/md-asaduzzaman.jpg",
    order: 5,
  },
  {
    id: "6",
    name: "Md. Sayed Ul Hasan Prodhan",
    designation: "Joint General Secretary",
    company: "Far East Tea Industries Limited",
    imageUrl: "/members/md-sayed-ul-hasan-prodhan.jpg",
    order: 6,
  },
  {
    id: "7",
    name: "Md. Anwar Hossain",
    designation: "Treasurer",
    company: "Supreme Tea Limited",
    imageUrl: "/members/md-anwar-hossain.jpg",
    order: 7,
  },
  {
    id: "8",
    name: "Md. Mokhlesur Rahman",
    designation: "Executive Member",
    company: "Molli Tea Factory",
    imageUrl: "/members/md-mokhlesur-rahman.jpg",
    order: 8,
  },
  {
    id: "9",
    name: "Md. Warez Zaman",
    designation: "Executive Member",
    company: "Zaman Tea Agro Factory",
    imageUrl: "/members/md-warez-zaman.jpg",
    order: 9,
  },
  {
    id: "10",
    name: "Md. Sheikh Farid",
    designation: "Executive Member",
    company: "Surma & Purnima Tea Company Ltd.",
    order: 10,
  },
  {
    id: "11",
    name: "Md. Johirul Islam Bablu",
    designation: "Executive Member",
    company: "Mega Tea Industries",
    imageUrl: "/members/md-johirul-islam-bablu.jpg",
    order: 11,
  },
  {
    id: "12",
    name: "Md. Selim Mahmud",
    designation: "Executive Member",
    company: "Elite Global Tea Limited",
    order: 12,
  },
];

// ── BBLTFOA Member Factories ──

export const members: Member[] = [
  {
    id: "1",
    factoryName: "Morgen Tea Industries Limited",
    contactPerson: "Md. Niaz Ali Chishty",
    address: "Boyalimari, Jagdal, Panchagarh",
    district: "Panchagarh",
    phone: "01911 531886",
    membershipId: "BBLTFOA-02",
    category: "ordinary",
  },
  {
    id: "2",
    factoryName: "Popular Tea Factory",
    contactPerson: "Md. Alamgir Hossain",
    address: "Sarkarpara, Debiganj, Panchagarh",
    district: "Panchagarh",
    phone: "01910 989603",
    membershipId: "BBLTFOA-09",
    category: "ordinary",
  },
  {
    id: "3",
    factoryName: "Bangla Tea Industries",
    contactPerson: "Md. Shah Alam",
    address: "Sardarpara, Tetulia, Panchagarh",
    district: "Panchagarh",
    phone: "01913 280873",
    membershipId: "BBLTFOA-06",
    category: "ordinary",
  },
  {
    id: "4",
    factoryName: "Green Field Tea Industries Limited",
    contactPerson: "Md. Faizul Islam",
    address: "Lahirihat, Baliadangi, Thakurgaon",
    district: "Thakurgaon",
    phone: "01911 532951",
    membershipId: "BBLTFOA-04",
    category: "ordinary",
  },
  {
    id: "5",
    factoryName: "Sajeda Rafique Tea Factory",
    contactPerson: "Md. Asaduzzaman",
    address: "Moulvipara, Jagdal, Panchagarh",
    district: "Panchagarh",
    phone: "01919 685740",
    membershipId: "BBLTFOA-07",
    category: "ordinary",
  },
  {
    id: "6",
    factoryName: "Far East Tea Industries Limited",
    contactPerson: "Md. Sayed Ul Hasan Prodhan",
    address: "Dudumari, Panchagarh Sadar, Panchagarh",
    district: "Panchagarh",
    phone: "01912 000487",
    membershipId: "BBLTFOA-16",
    category: "ordinary",
  },
  {
    id: "7",
    factoryName: "Supreme Tea Limited",
    contactPerson: "Md. Anwar Hossain",
    address: "Chokravita, Jagdal, Panchagarh",
    district: "Panchagarh",
    phone: "01322 846550",
    membershipId: "BBLTFOA-08",
    category: "ordinary",
  },
  {
    id: "8",
    factoryName: "Molli Tea Factory",
    contactPerson: "Md. Mokhlesur Rahman",
    address: "Thutapakhuri, Jagdal, Panchagarh",
    district: "Panchagarh",
    phone: "01912 978566",
    membershipId: "BBLTFOA-30",
    category: "ordinary",
  },
  {
    id: "9",
    factoryName: "Zaman Tea Agro Factory",
    contactPerson: "Md. Warez Zaman",
    address: "Krishnanagar, Mirzapur, Atwari, Panchagarh",
    district: "Panchagarh",
    phone: "01716 200995",
    membershipId: "BBLTFOA-10",
    category: "ordinary",
  },
  {
    id: "10",
    factoryName: "Surma & Purnima Tea Company Ltd.",
    contactPerson: "Md. Sheikh Farid",
    address: "Majhipara, Tetulia, Panchagarh",
    district: "Panchagarh",
    phone: "01521 986007",
    membershipId: "BBLTFOA-11",
    category: "ordinary",
  },
  {
    id: "11",
    factoryName: "Mega Tea Industries",
    contactPerson: "Md. Johirul Islam Bablu",
    address: "Shingpara, Futkibari, Panchagarh",
    district: "Panchagarh",
    phone: "01910 062898",
    membershipId: "BBLTFOA-17",
    category: "ordinary",
  },
  {
    id: "12",
    factoryName: "Elite Global Tea Limited",
    contactPerson: "Md. Selim Mahmud",
    address: "Thilamani, Moyandighi, Boda, Panchagarh",
    district: "Panchagarh",
    phone: "01912 086505",
    membershipId: "BBLTFOA-18",
    category: "ordinary",
  },
  {
    id: "13",
    contactPerson: "Faisal Rabbani Chowdhury",
    designation: "Member",
    category: "ordinary",
  },
  {
    id: "14",
    factoryName: "Maitree Tea Factory",
    contactPerson: "Md. Abul Mansur",
    designation: "Advisor",
    category: "ordinary",
  },
];

export const memberCategories = ["all", "ordinary", "associate", "honorary", "life"] as const;
export const districts = [
  "All Districts", "Panchagarh", "Thakurgaon", "Dinajpur", "Nilphamari",
];

export const publications: Publication[] = [
  {
    id: "1",
    title: "BBLTFOA Annual Report 2025",
    type: "report",
    year: 2025,
    description:
      "A complete overview of the Association's activities — membership growth, grower engagement, advocacy milestones, and the state of the bought leaf tea sector.",
    fileSize: "4.2 MB",
  },
  {
    id: "2",
    title: "Bought Leaf Tea Sector Review 2025",
    type: "report",
    year: 2025,
    description:
      "An analytical review of green leaf supply, factory production, and the sector's contribution to national tea output and rural employment.",
    fileSize: "3.1 MB",
  },
  {
    id: "3",
    title: "BBLTFOA Bulletin — Q1 2026",
    type: "bulletin",
    year: 2026,
    month: "March",
    description:
      "Quarterly bulletin covering Association news, member factory updates, green leaf pricing trends, and upcoming events.",
    fileSize: "1.8 MB",
  },
  {
    id: "4",
    title: "BBLTFOA Bulletin — Q4 2025",
    type: "bulletin",
    year: 2025,
    month: "December",
    description:
      "Year-end bulletin with sector statistics, an events recap, and the outlook for the bought leaf tea industry in 2026.",
    fileSize: "2.0 MB",
  },
  {
    id: "5",
    title: "Good Agricultural Practices for Tea Growers",
    type: "handbook",
    year: 2025,
    description:
      "A practical field guide for small tea growers on quality plucking, soil health, responsible input use, and climate-resilient cultivation.",
    fileSize: "5.4 MB",
  },
  {
    id: "6",
    title: "Green Leaf Quality & Grading Handbook",
    type: "handbook",
    year: 2024,
    description:
      "Reference handbook on green leaf quality standards, grading criteria, and procurement best practices for member factories.",
    fileSize: "3.8 MB",
  },
  {
    id: "7",
    title: "Worker Welfare & Compliance Guidelines",
    type: "handbook",
    year: 2024,
    description:
      "Guidelines on worker welfare, fair wages, safe working conditions, and regulatory compliance across the bought leaf value chain.",
    fileSize: "2.1 MB",
  },
  {
    id: "8",
    title: "Membership Information & Application Guide",
    type: "newsletter",
    year: 2026,
    description:
      "Everything a prospective member factory needs to know — benefits, eligibility, the application process, and Association services.",
    fileSize: "1.2 MB",
  },
];

export const galleryCategories = [
  "All", "Tea Gardens", "Training", "Cultural",
];

export const galleryItems: GalleryItem[] = [
  { id: "1",  title: "Panchagarh Tea Fields",     imageUrl: "/gallery/g1.jpg",  category: "Tea Gardens", date: "2026-04-12", caption: "Flat-land tea cultivation in the northern districts" },
  { id: "2",  title: "Tea Pluckers at Work",      imageUrl: "/gallery/g2.jpg",  category: "Tea Gardens", date: "2026-03-28", caption: "Hand-plucking the finest two leaves and a bud" },
  { id: "3",  title: "Lush Tea Plantation",       imageUrl: "/gallery/g3.jpg",  category: "Tea Gardens", date: "2026-03-10", caption: "Rolling green tea estate at sunrise" },
  { id: "4",  title: "Fresh Green Leaf",          imageUrl: "/gallery/g4.jpg",  category: "Tea Gardens", date: "2026-02-22", caption: "Freshly harvested green leaf ready for the factory" },
  { id: "5",  title: "Harvest Season",            imageUrl: "/gallery/g5.jpg",  category: "Cultural",    date: "2026-02-05", caption: "Growers during peak plucking season" },
  { id: "6",  title: "Smallholder Garden",        imageUrl: "/gallery/g6.jpg",  category: "Tea Gardens", date: "2026-01-18", caption: "A smallholder tea garden in the BBLTFOA network" },
  { id: "7",  title: "Tea Estate Landscape",      imageUrl: "/gallery/g7.jpg",  category: "Tea Gardens", date: "2025-12-20", caption: "Terraced tea gardens across the hills" },
  { id: "8",  title: "Plucking in the Field",     imageUrl: "/gallery/g8.jpg",  category: "Cultural",    date: "2025-12-02", caption: "Workers collecting green leaf by hand" },
  { id: "9",  title: "Green Leaf Collection",     imageUrl: "/gallery/g9.jpg",  category: "Training",    date: "2025-11-15", caption: "Good Agricultural Practices in action" },
  { id: "10", title: "Tea Garden Pathway",        imageUrl: "/gallery/g10.jpg", category: "Tea Gardens", date: "2025-10-28", caption: "Morning walk through the plantation" },
  { id: "11", title: "Quality Green Leaf",        imageUrl: "/gallery/g11.jpg", category: "Training",    date: "2025-10-10", caption: "Leaf quality assessment and grading" },
  { id: "12", title: "Tea Country Vista",         imageUrl: "/gallery/g12.jpg", category: "Cultural",    date: "2025-09-22", caption: "The scenic tea heartland of Bangladesh" },
];

export const policyDocuments: PolicyDocument[] = [
  {
    id: "1",
    title: "Tea Industry Development Policy 2025",
    description: "BBLTFOA's comprehensive policy framework advocating for industry-wide development, investment incentives, and export promotion.",
    status: "adopted",
    date: "2025-09-15",
    category: "Development",
  },
  {
    id: "2",
    title: "Minimum Wage Revision Proposal 2026",
    description: "Formal proposal submitted to the Ministry of Labour on revising tea worker minimum wage structure.",
    status: "proposed",
    date: "2026-01-20",
    category: "Labour",
  },
  {
    id: "3",
    title: "Tea Export Incentive Framework",
    description: "Policy advocacy document calling for enhanced export incentives, duty drawback schemes, and trade facilitation.",
    status: "under-review",
    date: "2026-03-10",
    category: "Trade",
  },
  {
    id: "4",
    title: "Environmental Compliance Guidelines for Tea Gardens",
    description: "Industry-developed environmental standards for sustainable water use, chemical management, and land conservation.",
    status: "adopted",
    date: "2024-06-01",
    category: "Environment",
  },
  {
    id: "5",
    title: "Small Garden Support Scheme",
    description: "Proposed subsidy and technical support program targeting tea gardens with under 50 hectares in cultivation.",
    status: "proposed",
    date: "2026-04-05",
    category: "Development",
  },
];

export const productionData: StatReport[] = [
  {
    id: "1",
    title: "Annual Tea Production",
    period: "2024",
    type: "production",
    value: 95.4,
    unit: "Million kg",
    change: 3.2,
    chartData: [
      { label: "2020", value: 86.4 },
      { label: "2021", value: 88.1 },
      { label: "2022", value: 90.6 },
      { label: "2023", value: 92.4 },
      { label: "2024", value: 95.4 },
    ],
  },
  {
    id: "2",
    title: "Tea Export Volume",
    period: "2024",
    type: "export",
    value: 28.6,
    unit: "Million USD",
    change: 18.2,
    chartData: [
      { label: "2020", value: 19.2 },
      { label: "2021", value: 21.5 },
      { label: "2022", value: 23.8 },
      { label: "2023", value: 24.2 },
      { label: "2024", value: 28.6 },
    ],
  },
  {
    id: "3",
    title: "Average Auction Price",
    period: "2024",
    type: "price",
    value: 220,
    unit: "BDT/kg",
    change: 5.7,
    chartData: [
      { label: "2020", value: 178 },
      { label: "2021", value: 191 },
      { label: "2022", value: 205 },
      { label: "2023", value: 208 },
      { label: "2024", value: 220 },
    ],
  },
  {
    id: "4",
    title: "Tea Cultivation Area",
    period: "2024",
    type: "area",
    value: 59860,
    unit: "Hectares",
    change: 1.1,
    chartData: [
      { label: "2020", value: 57200 },
      { label: "2021", value: 57900 },
      { label: "2022", value: 58400 },
      { label: "2023", value: 59210 },
      { label: "2024", value: 59860 },
    ],
  },
];
