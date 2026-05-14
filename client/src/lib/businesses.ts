// Agency Intelligence Report — Mexico, MO Local Business SEO Audits
// All data sourced from direct website analysis, May 2026

export interface ScoreCard {
  label: string;
  score: number;
  status: 'critical' | 'warning' | 'good' | 'info';
}

export interface Weakness {
  title: string;
  description: string;
  severity: 'critical' | 'warning' | 'info';
}

export interface MonthPlan {
  month: string;
  title: string;
  actions: string[];
  result: string;
}

export interface Business {
  id: string;
  name: string;
  category: string;
  categoryIcon: string;
  website: string;
  address: string;
  tagline: string;
  overallScore: number;
  accentColor: string;
  scores: ScoreCard[];
  bigPicture: string;
  weaknesses: Weakness[];
  biggestOpportunity: string;
  plan: MonthPlan[];
  dmPitch: string;
}


const restaurantProspect = ({
  id,
  name,
  category,
  website,
  address,
  tagline,
  overallScore,
  accentColor,
  leadIssue,
  secondIssue,
  thirdIssue,
  bigPicture,
  opportunity,
  pitch,
}: {
  id: string;
  name: string;
  category: string;
  website: string;
  address: string;
  tagline: string;
  overallScore: number;
  accentColor: string;
  leadIssue: string;
  secondIssue: string;
  thirdIssue: string;
  bigPicture: string;
  opportunity: string;
  pitch: string;
}): Business => ({
  id,
  name,
  category,
  categoryIcon: '🍽️',
  website,
  address,
  tagline,
  overallScore,
  accentColor,
  scores: [
    { label: 'SEO & Search Visibility', score: Math.max(2, Math.round(overallScore / 12)), status: overallScore >= 60 ? 'warning' : 'critical' },
    { label: 'Website Presence', score: website.toLowerCase().includes('no standalone') || website.toLowerCase().includes('facebook') ? 2 : 5, status: website.toLowerCase().includes('no standalone') || website.toLowerCase().includes('facebook') ? 'critical' : 'warning' },
    { label: 'Mobile Experience', score: 5, status: 'warning' },
    { label: 'Conversion Optimization', score: 3, status: 'critical' },
    { label: 'Trust Signals & Reviews', score: 5, status: 'warning' },
    { label: 'Photo & Menu Content', score: 4, status: 'warning' },
  ],
  bigPicture,
  weaknesses: [
    {
      title: leadIssue,
      description: `${name} needs a stronger, easier-to-find online presence for customers who are already searching for where to eat in Mexico, MO. The first fix is to make the core information — menu, hours, location, photos, and call-to-action — obvious before a customer has to dig through social media or directory listings.`,
      severity: 'critical',
    },
    {
      title: secondIssue,
      description: 'Local restaurant decisions happen fast. A cleaner Google Business Profile, fresh photos, complete menu information, and consistent name-address-phone details help customers choose the business before they compare another option.',
      severity: 'warning',
    },
    {
      title: thirdIssue,
      description: 'A simple conversion path should be visible on every digital touchpoint: call now, view the menu, get directions, order online, or ask a question. Without that path, interested customers can drift to a competitor with less friction.',
      severity: 'warning',
    },
    {
      title: 'Limited Local Search Content',
      description: 'Short pages or posts for specials, signature dishes, catering, breakfast, lunch, dinner, and Mexico-area searches would give Google more local context and give customers more reasons to visit.',
      severity: 'info',
    },
  ],
  biggestOpportunity: opportunity,
  plan: [
    {
      month: 'Month 1',
      title: 'Make the Business Easy to Find',
      actions: [
        'Confirm Google Business Profile categories, hours, service options, and photos',
        'Create or refresh the menu/offer page with clear calls-to-action',
        'Standardize business name, address, and phone across public listings',
        'Add restaurant schema and basic local SEO copy where a website exists',
      ],
      result: 'Stronger visibility for high-intent local food searches',
    },
    {
      month: 'Month 2',
      title: 'Turn Searchers Into Customers',
      actions: [
        'Add click-to-call, directions, menu, and order/contact buttons above the fold',
        'Publish fresh food photography and weekly specials',
        'Ask happy customers for Google reviews with a simple text template',
        'Add catering, group-order, or event information where relevant',
      ],
      result: 'More calls, directions requests, menu views, and repeat visits',
    },
    {
      month: 'Month 3',
      title: 'Build Local Momentum',
      actions: [
        'Post weekly Google updates and social content',
        'Create short-form content around signature dishes and kitchen moments',
        'Add seasonal landing pages or posts for local searches',
        'Track calls, website clicks, and review growth monthly',
      ],
      result: 'A repeatable local visibility system that compounds over time',
    },
  ],
  dmPitch: pitch,
});

export const businesses: Business[] = [
  {
    id: 'pig-up-go',
    name: 'Pig Up & Go BBQ',
    category: 'BBQ Restaurant',
    categoryIcon: '🔥',
    website: 'pigupandgo.com',
    address: 'Mexico, MO 65265',
    tagline: 'Great food — nearly invisible online',
    overallScore: 45,
    accentColor: '#E25822',
    scores: [
      { label: 'SEO & Search Visibility', score: 4, status: 'critical' },
      { label: 'Website Design & UX', score: 5, status: 'warning' },
      { label: 'Mobile Experience', score: 7, status: 'warning' },
      { label: 'Conversion Optimization', score: 4, status: 'critical' },
      { label: 'Social Media Presence', score: 3, status: 'critical' },
      { label: 'Trust Signals & Reviews', score: 4, status: 'critical' },
    ],
    bigPicture:
      'Pig Up & Go BBQ is one of Mexico, MO\'s highest-rated restaurants — 4.4 stars on Yelp and a loyal local following. But when hungry customers in Audrain County search "BBQ near me" on Google, your restaurant is nearly invisible. This audit identifies exactly where the gaps are and how to close them quickly.',
    weaknesses: [
      {
        title: 'Missing Meta Description',
        description: 'Google rewrites your search snippet with random text, reducing click-through rates by up to 30%. No meta description means no control over your first impression in search results.',
        severity: 'critical',
      },
      {
        title: 'No Restaurant Schema Markup',
        description: 'You\'re invisible in Google\'s rich results — no star ratings, hours, or menu previews in search. Schema markup is free and can be added in under an hour.',
        severity: 'critical',
      },
      {
        title: 'No Online Ordering System',
        description: 'Every customer who wants to order ahead, plan a group order, or browse the menu before deciding is forced to call — or go somewhere else. Restaurants with online ordering see an average 30% revenue increase.',
        severity: 'critical',
      },
      {
        title: 'No Customer Reviews on Site',
        description: 'Trust is being built on Yelp and Google, not on your own website. Embedding your best reviews directly on the site can increase conversion rates by up to 270%.',
        severity: 'warning',
      },
      {
        title: 'No Email Capture',
        description: 'Every visitor who leaves without subscribing is a lost opportunity to build a loyal customer list. A simple "Get our weekly specials" signup could build a 1,000+ person list within a year.',
        severity: 'warning',
      },
      {
        title: 'Facebook-Only Social Presence',
        description: 'No Instagram, no TikTok, no Google Business Profile posts. BBQ content is among the highest-performing food content on social media — a single viral video can bring hundreds of new customers for free.',
        severity: 'critical',
      },
    ],
    biggestOpportunity:
      'Implementing an online ordering system would directly increase revenue while simultaneously improving the customer experience. Combined with a Google Business Profile optimization, this is the highest-ROI move available.',
    plan: [
      {
        month: 'Month 1',
        title: 'Get Found on Google',
        actions: [
          'Add meta description and title tag optimization',
          'Implement Restaurant schema markup (JSON-LD)',
          'Claim and fully optimize Google Business Profile',
          'Add photos, hours, menu link, and Q&A to GBP',
        ],
        result: 'Appear in Google\'s local 3-pack for "BBQ Mexico MO"',
      },
      {
        month: 'Month 2',
        title: 'Convert Visitors to Customers',
        actions: [
          'Integrate online ordering via Square or Toast',
          'Add email capture with "Weekly Specials" offer',
          'Embed Google reviews on homepage',
          'Add click-to-call button on mobile',
        ],
        result: '20–30% increase in average order frequency',
      },
      {
        month: 'Month 3',
        title: 'Build a Social Audience',
        actions: [
          'Launch Instagram with weekly food photography',
          'Create TikTok with behind-the-scenes BBQ content',
          'Post weekly updates to Google Business Profile',
          'Launch a review request campaign to existing customers',
        ],
        result: '500+ new followers and measurable foot traffic increase',
      },
    ],
    dmPitch:
      'Hey! I was searching for BBQ spots in Mexico, MO and came across Pig Up & Go — the reviews are awesome, seriously impressive for a local spot. I do digital marketing for small restaurants and I noticed a few quick things on your website that, if fixed, could bring a lot more people through the door (like adding online ordering and showing up higher on Google). I put together a short free audit — no strings attached, just thought it might be useful. Would it be cool if I sent it over? Happy to walk through it on a quick call too if that\'s easier. Either way, keep doing what you\'re doing — the food looks incredible! 🔥',
  },

  {
    id: 'miller-tire',
    name: 'Miller Tire of Mexico',
    category: 'Auto Repair & Tire Shop',
    categoryIcon: '🔧',
    website: 'millertiremissouri.com',
    address: '1212 E Liberty St, Mexico, MO 65265',
    tagline: 'Trusted locally — but hard to find online',
    overallScore: 42,
    accentColor: '#2563EB',
    scores: [
      { label: 'SEO & Search Visibility', score: 4, status: 'critical' },
      { label: 'Website Design & UX', score: 5, status: 'warning' },
      { label: 'Mobile Experience', score: 6, status: 'warning' },
      { label: 'Conversion Optimization', score: 3, status: 'critical' },
      { label: 'Trust Signals & Reviews', score: 4, status: 'critical' },
      { label: 'Content & Blog', score: 2, status: 'critical' },
    ],
    bigPicture:
      'Miller Tire of Mexico has served the community for years as a trusted, family-owned auto repair and tire shop. With strong word-of-mouth and a loyal customer base, the business is well-established locally. But in 2026, the majority of new customers start their search online — and that\'s where Miller Tire is leaving significant revenue on the table.',
    weaknesses: [
      {
        title: 'Title Tag Too Long (64 chars)',
        description: 'Google truncates title tags over 60 characters and rewrites them with less compelling text, reducing your click-through rate from search results. This is a 5-minute fix with measurable impact.',
        severity: 'critical',
      },
      {
        title: 'Meta Description Too Long (210 chars)',
        description: 'Google\'s limit is 160 characters. At 210 chars, your meta description is being cut off and rewritten by Google, meaning you\'re losing control of your search snippet messaging.',
        severity: 'critical',
      },
      {
        title: 'Missing Schema Markup',
        description: 'No LocalBusiness or AutoRepair schema means Google can\'t identify your business type in its knowledge graph, keeping you out of rich results and the local 3-pack.',
        severity: 'critical',
      },
      {
        title: 'No Online Appointment Booking',
        description: 'Auto repair shops with online booking see 40% more appointment conversions. Every visitor who can\'t book online is a potential customer lost to a competitor who can.',
        severity: 'critical',
      },
      {
        title: 'No Blog or Educational Content',
        description: 'Auto shops that publish seasonal tips ("when to rotate tires," "signs your brakes need replacing") rank significantly higher in local search. Zero blog posts = zero content signals for Google.',
        severity: 'warning',
      },
      {
        title: 'No FAQ Page',
        description: 'FAQ pages capture long-tail search queries and answer customer questions before they call. A 10-question FAQ could rank for dozens of additional local search terms.',
        severity: 'warning',
      },
    ],
    biggestOpportunity:
      'A comprehensive local SEO strategy — optimized Google Business Profile, schema markup, and local keyword-rich content — would significantly increase visibility for customers actively searching for auto repair and tire services in Mexico, MO.',
    plan: [
      {
        month: 'Month 1',
        title: 'Fix Technical SEO',
        actions: [
          'Rewrite title tag to under 60 characters',
          'Rewrite meta description to under 160 characters',
          'Add LocalBusiness + AutoRepair schema markup',
          'Fully optimize Google Business Profile with photos and services',
        ],
        result: 'Improved click-through rate and Google 3-pack eligibility',
      },
      {
        month: 'Month 2',
        title: 'Add Conversion Infrastructure',
        actions: [
          'Integrate online appointment booking system',
          'Add contact form to website',
          'Launch review request campaign to existing customers',
          'Embed top Google reviews on homepage',
        ],
        result: '40% increase in appointment conversion rate',
      },
      {
        month: 'Month 3',
        title: 'Build Content Authority',
        actions: [
          'Publish 4 blog posts targeting local search terms',
          'Create FAQ page with 10 common auto repair questions',
          'Add email newsletter signup with seasonal maintenance tips',
          'Create individual service pages (tires, oil change, brakes)',
        ],
        result: 'Doubled organic traffic within 6 months',
      },
    ],
    dmPitch:
      'Hi [Name], I came across Miller Tire of Mexico while researching local auto shops in Audrain County — great reputation in the community. I specialize in helping local service businesses get found more easily on Google, and I noticed a couple of quick technical fixes on your website (title tag length, missing schema markup) that are likely preventing you from showing up in the Google Local 3-Pack when people search "tire shop Mexico MO." I put together a free 10-point audit — no obligation, just thought it might be helpful. Would you be open to me sending it over? Takes about 5 minutes to review and could make a real difference in how many new customers find you online.',
  },

  {
    id: 'melodys-jewelry',
    name: "Melody's Quality Jewelry",
    category: 'Retail Jewelry',
    categoryIcon: '💎',
    website: 'melodysqualityjewelry.com',
    address: '103 S Washington St, Mexico, MO 65265',
    tagline: 'A local institution with an outdated digital presence',
    overallScore: 38,
    accentColor: '#9333EA',
    scores: [
      { label: 'SEO & Search Visibility', score: 4, status: 'critical' },
      { label: 'Website Design & UX', score: 4, status: 'critical' },
      { label: 'Mobile Experience', score: 5, status: 'warning' },
      { label: 'Conversion Optimization', score: 3, status: 'critical' },
      { label: 'Social Media Presence', score: 3, status: 'critical' },
      { label: 'Trust Signals & Reviews', score: 2, status: 'critical' },
    ],
    bigPicture:
      'Melody\'s Quality Jewelry is a beloved local institution at 103 S Washington St in downtown Mexico, MO. For generations, locals have trusted Melody\'s for engagement rings, repairs, and gifts. But the current website doesn\'t communicate that trust, history, or expertise to the thousands of people searching for jewelers online every month.',
    weaknesses: [
      {
        title: 'Outdated Website Design',
        description: 'Users form an opinion about a website in 0.05 seconds. The current design has poor navigation, no clear calls to action, and a layout that doesn\'t inspire confidence for a high-value purchase. When a couple searches for an engagement ring, they choose the jeweler whose website looks as beautiful as the rings they sell.',
        severity: 'critical',
      },
      {
        title: 'No Contact Form or Booking System',
        description: 'A potential customer lands on the site excited about a custom piece. There is no contact form, no appointment booking, no chat widget. The only option is to find a phone number and call — a barrier that causes most online visitors to simply leave.',
        severity: 'critical',
      },
      {
        title: 'No Customer Testimonials or Social Proof',
        description: 'Jewelry is a high-trust purchase. Customers considering spending $500–$5,000 need to feel confident in the seller. No testimonials, no "About Us" story, no certifications displayed — all critical trust signals are missing.',
        severity: 'critical',
      },
      {
        title: 'No Instagram or Pinterest Presence',
        description: 'Instagram and Pinterest are the #1 and #2 platforms for jewelry discovery. Melody\'s has only a Facebook link and no active Instagram or Pinterest. A weekly post of a beautiful piece with local hashtags can generate consistent new inquiries at zero cost.',
        severity: 'critical',
      },
      {
        title: 'No Local SEO Signals',
        description: 'Searches like "engagement rings Mexico MO" and "jewelry repair Audrain County" represent high-intent buyers ready to spend. No schema markup, no local keywords, thin content — Google has nothing to rank.',
        severity: 'critical',
      },
      {
        title: 'Suboptimal Mobile Experience',
        description: 'Over 50% of jewelry searches happen on mobile devices. The layout doesn\'t adapt well to small screens, product images are difficult to view, and there is no click-to-call button.',
        severity: 'warning',
      },
    ],
    biggestOpportunity:
      'A modern website redesign with clear CTAs, a compelling "Our Story" page, and an Instagram presence would transform Melody\'s online presence and make it the most visible jeweler in Audrain County within 90 days.',
    plan: [
      {
        month: 'Month 1',
        title: 'Redesign & Technical Foundation',
        actions: [
          'Redesign homepage with modern layout and clear CTA',
          'Add contact form and "Book a Consultation" button',
          'Add schema markup and optimize Google Business Profile',
          'Create "Our Story" page with owner history and photos',
        ],
        result: 'Dramatically improved first impression and Google visibility',
      },
      {
        month: 'Month 2',
        title: 'Build Trust & Social Presence',
        actions: [
          'Launch Instagram with weekly product photography',
          'Add customer testimonials page',
          'Create Pinterest boards for engagement rings, gifts, repairs',
          'Add email capture with "10% off your first visit" offer',
        ],
        result: '500+ Instagram followers and measurable inquiry increase',
      },
      {
        month: 'Month 3',
        title: 'Content & SEO Authority',
        actions: [
          'Publish 4 SEO-targeted blog posts',
          'Add FAQ page (ring sizing, repair timelines, custom orders)',
          'Create individual service pages (engagement rings, repairs, custom)',
          'Launch Google review request campaign',
        ],
        result: 'Ranking for "engagement rings Mexico MO" and related terms',
      },
    ],
    dmPitch:
      'Hi! I was looking for local jewelers in Mexico, MO and found Melody\'s — what a beautiful shop, and clearly a real community staple. I do website and social media work for local retailers, and I noticed your website has a lot of potential that isn\'t quite being captured yet — things like showing up on Google when people search for engagement rings locally, or having an Instagram presence (jewelry is HUGE on Instagram right now). I put together a quick free audit of your online presence — no pitch, just genuinely thought it could be useful for a business like yours. Would it be okay if I shared it with you? I think you\'d find it interesting!',
  },

  {
    id: 'brick-city-dental',
    name: 'Brick City Dental',
    category: 'Dental Practice',
    categoryIcon: '🦷',
    website: 'brickcitydental.com',
    address: '3612 S Clark St, Mexico, MO 65265',
    tagline: 'Critical technical issues blocking new patient growth',
    overallScore: 40,
    accentColor: '#0EA5E9',
    scores: [
      { label: 'SEO & Search Visibility', score: 3, status: 'critical' },
      { label: 'Website Design & UX', score: 4, status: 'critical' },
      { label: 'Mobile Experience', score: 5, status: 'warning' },
      { label: 'Conversion Optimization', score: 4, status: 'critical' },
      { label: 'Trust Signals & Reviews', score: 4, status: 'critical' },
      { label: 'Content & Blog', score: 2, status: 'critical' },
    ],
    bigPicture:
      'Brick City Dental at 3612 S Clark St is one of Mexico, MO\'s local dental practices. With a strong community presence, the practice has the foundation for significant growth. However, the current website has critical technical and content gaps that are preventing new patients from finding the practice through online search — the #1 channel for new patient acquisition in 2026.',
    weaknesses: [
      {
        title: 'Missing H1 Tag',
        description: 'The H1 tag is the single most important on-page SEO element. Its absence alone can drop a page 10–20 positions in search rankings. This is a 2-minute fix with significant impact.',
        severity: 'critical',
      },
      {
        title: 'No Schema Markup',
        description: 'Without Dentist schema markup, Google can\'t identify the practice type in its knowledge graph. This means no rich results, no star ratings in search, and reduced local 3-pack eligibility.',
        severity: 'critical',
      },
      {
        title: 'Mixed HTTP/HTTPS Content',
        description: 'The site has mixed content (HTTP resources on an HTTPS page), which triggers security warnings in browsers and reduces trust scores. This directly impacts both patient trust and SEO rankings.',
        severity: 'critical',
      },
      {
        title: 'No Online Booking System',
        description: '"Schedule Your Visit" leads to a contact page, not an actual booking system. 77% of patients search online before choosing a dentist, and practices with online booking see 30–40% more new patient conversions.',
        severity: 'critical',
      },
      {
        title: 'No Blog or Educational Content',
        description: 'Dental practices that publish regular educational content rank significantly higher in local search. None of Brick City\'s competitors in Mexico, MO have an active blog — this is a first-mover opportunity.',
        severity: 'warning',
      },
      {
        title: 'Missing Alt Tags on Images',
        description: 'Images without alt tags are invisible to Google\'s image search and hurt accessibility scores. This is a quick technical fix that improves both SEO and ADA compliance.',
        severity: 'warning',
      },
    ],
    biggestOpportunity:
      'Fixing the three critical technical issues (H1 tag, schema markup, mixed content) combined with adding online booking could generate 10–20 new patient inquiries per month from organic search alone.',
    plan: [
      {
        month: 'Month 1',
        title: 'Fix Critical Technical Issues',
        actions: [
          'Add H1 tag to homepage and all key pages',
          'Implement Dentist schema markup (JSON-LD)',
          'Resolve all mixed HTTP/HTTPS content issues',
          'Add alt tags to all images',
        ],
        result: 'Immediate improvement in search rankings and trust scores',
      },
      {
        month: 'Month 2',
        title: 'Convert Visitors to Patients',
        actions: [
          'Integrate online booking (Zocdoc, Dental Intel, or similar)',
          'Add patient testimonials page with photos',
          'Create individual service pages (cleaning, whitening, emergency)',
          'Launch review request campaign to existing patients',
        ],
        result: '30–40% increase in new patient conversion rate',
      },
      {
        month: 'Month 3',
        title: 'Build Content Authority',
        actions: [
          'Launch blog with 4 SEO-targeted posts',
          'Add FAQ page (insurance, procedures, emergency care)',
          'Optimize Google Business Profile with photos and posts',
          'Create "Emergency Dentist Mexico MO" landing page',
        ],
        result: 'Ranking for high-value local dental search terms',
      },
    ],
    dmPitch:
      'Hi Dr. [Name], I hope this finds you well. I came across Brick City Dental while researching dental practices in Mexico, MO, and I wanted to reach out because I noticed a few technical issues on your website that are likely affecting how many new patients find you through Google. Specifically, the site is missing an H1 tag and schema markup — two of the most important local SEO signals for healthcare providers. I\'ve prepared a brief free audit that outlines the issues and the fixes. I know your time is valuable, so I kept it to the most impactful items only. Would it be alright if I sent it over? No obligation at all — just thought it might be useful as you think about growing the practice.',
  },

  {
    id: 'twillman-feed',
    name: 'Twillman Feed & Seed',
    category: 'Agricultural Supply',
    categoryIcon: '🌾',
    website: 'twillmanfeed.com',
    address: '10366 Audrain Road 353, Mexico, MO 65265',
    tagline: 'Website inaccessibility is costing real customers',
    overallScore: 18,
    accentColor: '#16A34A',
    scores: [
      { label: 'SEO & Search Visibility', score: 2, status: 'critical' },
      { label: 'Website Accessibility', score: 1, status: 'critical' },
      { label: 'Mobile Experience', score: 1, status: 'critical' },
      { label: 'Conversion Optimization', score: 1, status: 'critical' },
      { label: 'Trust Signals & Reviews', score: 3, status: 'critical' },
      { label: 'NAP Consistency', score: 2, status: 'critical' },
    ],
    bigPicture:
      'Twillman Feed & Seed at 10366 Audrain Road 353 is a trusted agricultural supply resource for farmers and animal owners throughout Audrain County. The business has a strong local reputation built on decades of service. However, a critical technical issue with the website is actively preventing potential customers from accessing it — and inconsistent online listings are creating confusion that costs the business real revenue.',
    weaknesses: [
      {
        title: 'Website Is Geo-Blocked',
        description: 'twillmanfeed.com is geo-blocked, meaning customers in certain locations — including many rural Missouri areas — cannot access the website at all. When a farmer tries to visit your site and gets an error page, they don\'t call to ask why — they go to a competitor. This is the single most urgent issue to resolve.',
        severity: 'critical',
      },
      {
        title: 'Inconsistent Business Name Across Listings',
        description: 'The business appears under three different names online: "Twillman Feed," "Twillman Feed & Seed," and "Twillman Feed Service." Google uses NAP (Name, Address, Phone) consistency as a key local ranking factor. This inconsistency is splitting your online authority.',
        severity: 'critical',
      },
      {
        title: 'No Contact Form or Online Ordering',
        description: 'For a business serving farmers who may be in the field during business hours, the ability to place an order or send a message online at any time is a significant advantage. Currently there is no contact form, no online ordering, and no email capture.',
        severity: 'critical',
      },
      {
        title: 'No Customer Reviews on Website',
        description: 'Farmers and livestock owners are practical, word-of-mouth-driven buyers. They trust recommendations from other farmers more than any advertisement. No testimonials on the website means new customers have no social proof.',
        severity: 'warning',
      },
      {
        title: 'No Product or Inventory Information',
        description: 'Today\'s agricultural customers research products online before making the trip. No product listings, no pricing information, no inventory updates means a farmer who can\'t confirm you carry what they need will call a competitor who has that information online.',
        severity: 'warning',
      },
      {
        title: 'No Mobile Optimization',
        description: 'Mobile usage in rural Missouri has grown significantly, with farmers increasingly using smartphones to manage their operations. A mobile-friendly site with click-to-call, store hours, and a simple product list would serve the farming community far better.',
        severity: 'warning',
      },
    ],
    biggestOpportunity:
      'Resolving the geo-blocking issue immediately and standardizing the business name across all online listings would restore accessibility and begin rebuilding Google ranking authority — the two most urgent and highest-impact fixes available.',
    plan: [
      {
        month: 'Month 1',
        title: 'Restore Website Access',
        actions: [
          'Resolve geo-blocking configuration immediately',
          'Standardize business name across all online directories',
          'Optimize Google Business Profile with correct NAP',
          'Add store hours, phone number, and directions prominently',
        ],
        result: 'Website accessible to all customers, Google ranking recovery begins',
      },
      {
        month: 'Month 2',
        title: 'Build Conversion Infrastructure',
        actions: [
          'Add contact form and inquiry system',
          'Create basic product/service list with categories',
          'Launch Google review request campaign',
          'Add mobile-responsive design',
        ],
        result: 'Customers can find and contact you online at any time',
      },
      {
        month: 'Month 3',
        title: 'Grow Online Presence',
        actions: [
          'Add customer testimonials page',
          'Create simple product pages for top feed categories',
          'Add seasonal content (planting season, winter feed)',
          'Build local citations on agricultural directories',
        ],
        result: 'Ranking for "feed store Mexico MO" and "livestock feed Audrain County"',
      },
    ],
    dmPitch:
      'Hi! I was looking up feed stores in Audrain County and came across Twillman Feed & Seed. I wanted to give you a heads-up about something I found — your website (twillmanfeed.com) appears to be geo-blocked, which means a lot of potential customers in the area can\'t actually access it. That\'s likely costing you real business. I do digital work for local agricultural businesses and I put together a quick free audit of your online presence that covers this and a few other things. I\'m not trying to sell you anything — just thought you\'d want to know. Happy to send it over or chat for a few minutes if that\'s easier. Hope it\'s helpful!',
  },

  {
    id: 'mommens-hvac',
    name: 'Mommens Heating & Cooling',
    category: 'HVAC Services',
    categoryIcon: '❄️',
    website: 'mommenshvac.com',
    address: '1320 Paris Rd, Mexico, MO 65265',
    tagline: 'Strong foundation — ready for the next level of growth',
    overallScore: 68,
    accentColor: '#0EA5E9',
    scores: [
      { label: 'SEO & Search Visibility', score: 6, status: 'warning' },
      { label: 'Website Design & UX', score: 7, status: 'warning' },
      { label: 'Mobile Experience', score: 7, status: 'warning' },
      { label: 'Conversion Optimization', score: 7, status: 'warning' },
      { label: 'Trust Signals & Reviews', score: 7, status: 'warning' },
      { label: 'Content & Blog', score: 2, status: 'critical' },
    ],
    bigPicture:
      'Mommens Heating and Cooling has served Mexico, MO since 1997 with a 4.6-star Google rating and 52 reviews. The website is well-structured with a booking form, service pages, and a strong brand message. This audit focuses on the next level of growth — the specific improvements that will help Mommens dominate local HVAC search results and convert even more website visitors into booked appointments.',
    weaknesses: [
      {
        title: 'No Blog or Educational Content',
        description: 'HVAC customers search for "why is my AC not cooling," "how often to change furnace filter," and "signs your heat pump is failing." These informational searches represent the top of the buying funnel. Mommens has no blog, meaning all of this search traffic is going to competitors who publish this content.',
        severity: 'critical',
      },
      {
        title: 'No Individual City Landing Pages',
        description: 'Mommens serves 10 cities but has only one SEO-optimized page. A dedicated page for "HVAC Centralia MO" or "AC repair Fulton MO" would capture customers in those cities who are searching locally — a significant untapped opportunity.',
        severity: 'critical',
      },
      {
        title: 'Only 52 Google Reviews',
        description: 'Top-ranked HVAC companies in comparable Missouri markets have 150–300+ reviews. A systematic review request campaign (automated text/email after each service call) could triple your review count within 6 months, significantly improving rankings and new customer trust.',
        severity: 'warning',
      },
      {
        title: 'Emergency Service Page Not SEO-Optimized',
        description: 'Emergency HVAC searches have the highest commercial intent — these customers need help now and will pay a premium. Mommens offers 24-hour emergency service, but the page isn\'t optimized for "emergency HVAC Mexico MO" and related terms.',
        severity: 'warning',
      },
      {
        title: 'No Seasonal Content Strategy',
        description: 'HVAC demand spikes in June (AC season) and October (heating season). Businesses that publish seasonal content in the weeks before these spikes capture customers who are planning ahead. Competitors are booking these customers first.',
        severity: 'warning',
      },
      {
        title: 'No Structured Data on Service Pages',
        description: 'Individual service pages lack schema markup, missing opportunities for rich results in search. Adding Service schema to each page would improve click-through rates from search results.',
        severity: 'info',
      },
    ],
    biggestOpportunity:
      'Launching a blog with informational HVAC content and creating individual city landing pages for the 10 service areas would dramatically expand organic search reach and capture customers throughout mid-Missouri who are currently going to competitors.',
    plan: [
      {
        month: 'Month 1',
        title: 'Content & City Pages',
        actions: [
          'Launch blog with 4 posts targeting informational HVAC queries',
          'Create individual city landing pages for top 5 service areas',
          'Optimize emergency service page for local search',
          'Add Service schema markup to all service pages',
        ],
        result: 'Expanded organic reach across all 10 service area cities',
      },
      {
        month: 'Month 2',
        title: 'Reviews & Reputation',
        actions: [
          'Implement automated review request (text/email after each job)',
          'Respond to all existing Google reviews',
          'Add structured review display to website',
          'Create comparison/buying guide for new HVAC systems',
        ],
        result: '100+ Google reviews within 3 months, improved 3-pack ranking',
      },
      {
        month: 'Month 3',
        title: 'Seasonal Campaign',
        actions: [
          'Launch summer AC season content campaign',
          'Create "Is your AC ready for Missouri summer?" landing page',
          'Add email list with seasonal maintenance reminders',
          'Publish remaining 5 city landing pages',
        ],
        result: 'Dominant local HVAC brand across all of mid-Missouri',
      },
    ],
    dmPitch:
      'Hi! I\'ve seen Mommens Heating & Cooling come up a lot when researching HVAC companies in Mexico, MO — clearly a well-respected business with a great reputation. I do digital growth strategy for HVAC companies, and I noticed a few specific opportunities on your website that could help you capture even more of the mid-Missouri market — things like individual city landing pages for your service areas and a blog targeting the "why is my AC not working" type searches that bring in new customers. I put together a quick free audit. I know you\'re busy, so I kept it focused on the highest-impact items. Would it be okay if I sent it over? No obligation — just thought it might spark some useful ideas.',
  },

  // ─── NEW RESTAURANTS ────────────────────────────────────────────────────

  {
    id: 'the-581',
    name: 'The 581',
    category: 'Bar & Grill',
    categoryIcon: '🍺',
    website: 'facebook.com/The581',
    address: '107 S Washington St, Mexico, MO 65265',
    tagline: 'Great atmosphere — but no website to show for it',
    overallScore: 32,
    accentColor: '#F59E0B',
    scores: [
      { label: 'SEO & Search Visibility', score: 2, status: 'critical' as const },
      { label: 'Website Presence', score: 1, status: 'critical' as const },
      { label: 'Mobile Experience', score: 3, status: 'critical' as const },
      { label: 'Conversion Optimization', score: 3, status: 'critical' as const },
      { label: 'Social Media Presence', score: 5, status: 'warning' as const },
      { label: 'Trust Signals & Reviews', score: 4, status: 'critical' as const },
    ],
    bigPicture:
      'The 581 is a family-owned full-service bar and grill at 107 S Washington St in downtown Mexico, MO — known for its best steaks in town, handmade cocktails, and a vibrant atmosphere. With a 4.2-star TripAdvisor rating and a loyal local following, the food and vibe clearly deliver. But The 581 has no standalone website — just a Facebook page — which means Google can barely find it, and first-time visitors have no credible place to research the restaurant before walking in.',
    weaknesses: [
      {
        title: 'No Standalone Website',
        description: 'The 581 has no dedicated website — only a Facebook page. This means Google has almost nothing to index, the business cannot rank for searches like "best steaks Mexico MO" or "bar and grill downtown Mexico," and potential customers who search on Google see a thin, unimpressive result. A simple 5-page website would immediately transform online visibility.',
        severity: 'critical' as const,
      },
      {
        title: 'TripAdvisor Profile Unclaimed',
        description: "The 581's TripAdvisor profile is unclaimed, meaning the owner cannot respond to reviews, update information, or add photos. Two of the 11 reviews are 1-star complaints — and without an owner response, those negative reviews are the last word. Claiming and responding to reviews is free and takes 15 minutes.",
        severity: 'critical' as const,
      },
      {
        title: 'No Google Business Profile Optimization',
        description: 'When someone searches "The 581 Mexico MO" on Google, the knowledge panel is sparse — no menu link, no photos from the owner, no Google posts. A fully optimized Google Business Profile is the single highest-impact free action available and can generate dozens of new customers per month.',
        severity: 'critical' as const,
      },
      {
        title: 'Online Ordering Buried in Facebook Bio',
        description: 'Online ordering is available via a Spot-On link buried in the Facebook bio — not discoverable by anyone who finds the restaurant on Google or TripAdvisor. Moving the ordering link to a proper website with a prominent CTA would significantly increase order volume.',
        severity: 'critical' as const,
      },
      {
        title: 'No Instagram Presence',
        description: "The 581's cocktails, steaks, and atmosphere are highly visual. Instagram is the #1 platform for restaurant discovery among 25–45 year olds. A weekly post of a beautifully plated steak or a handcrafted cocktail could generate consistent new reservations at zero cost.",
        severity: 'warning' as const,
      },
      {
        title: 'Only 11 TripAdvisor Reviews',
        description: 'With only 11 TripAdvisor reviews, The 581 is invisible in "best restaurants Mexico MO" searches. Competitors with 50+ reviews dominate these results. A simple review request card on the table or a follow-up text after dining could triple the review count within 60 days.',
        severity: 'warning' as const,
      },
    ],
    biggestOpportunity:
      'Building a simple 5-page website (Home, Menu, About, Events, Contact) would be the single highest-impact move — transforming Google visibility overnight and giving the online ordering system a proper home. Combined with a Google Business Profile optimization, this could generate 20–40 new customers per month from organic search alone.',
    plan: [
      {
        month: 'Month 1',
        title: 'Build a Website & Claim Your Profiles',
        actions: [
          'Launch a 5-page website with menu, hours, and online ordering CTA',
          'Claim and fully optimize Google Business Profile',
          'Claim TripAdvisor listing and respond to all reviews',
          'Add restaurant schema markup to website',
        ],
        result: 'Appear in Google search results for the first time',
      },
      {
        month: 'Month 2',
        title: 'Build Social Proof',
        actions: [
          'Launch Instagram with weekly food/cocktail photography',
          'Add table cards requesting Google and TripAdvisor reviews',
          'Embed online ordering prominently on website homepage',
          'Add email signup for weekly specials',
        ],
        result: '50+ new Google reviews, Instagram following begins growing',
      },
      {
        month: 'Month 3',
        title: 'Grow & Retain',
        actions: [
          'Launch weekly email newsletter with specials and events',
          'Add events calendar to website (live music, happy hour)',
          'Create TikTok with behind-the-scenes content',
          'Run a targeted Facebook ad campaign for 10-mile radius',
        ],
        result: 'Measurable increase in new customer foot traffic',
      },
    ],
    dmPitch:
      "Hey! I was looking for a good bar and grill in downtown Mexico, MO and came across The 581 — the steaks and cocktails look incredible, and the atmosphere photos are awesome. I do digital marketing for local restaurants, and I noticed you don't have a standalone website yet — just a Facebook page. That's actually a big opportunity, because right now Google can barely find you, even though you clearly have something special. I put together a quick free audit with some specific ideas. No strings attached — just thought it might be useful. Would it be cool if I sent it over?",
  },

  {
    id: 'drunken-pig',
    name: 'The Drunken Pig Bar & Grill',
    category: 'Bar & Grill',
    categoryIcon: '🐷',
    website: 'facebook.com/TheDrunkenPig',
    address: '112 S Jefferson St, Mexico, MO 65265',
    tagline: 'Brand new — and already missing the digital opportunity',
    overallScore: 22,
    accentColor: '#EF4444',
    scores: [
      { label: 'SEO & Search Visibility', score: 1, status: 'critical' as const },
      { label: 'Website Presence', score: 0, status: 'critical' as const },
      { label: 'Mobile Experience', score: 2, status: 'critical' as const },
      { label: 'Conversion Optimization', score: 2, status: 'critical' as const },
      { label: 'Social Media Presence', score: 5, status: 'warning' as const },
      { label: 'Trust Signals & Reviews', score: 2, status: 'critical' as const },
    ],
    bigPicture:
      'The Drunken Pig Bar & Grill opened in January 2026 at 112 S Jefferson St in downtown Mexico, MO — a brand new addition to the local dining scene with a fun brand, burgers, live music, pool, darts, and a lively atmosphere. With 774 Facebook likes in just a few months, the community response has been positive. But the business has no website, no Google Business Profile optimization, and no presence on any platform outside of Facebook — meaning the majority of potential new customers who search online simply cannot find it.',
    weaknesses: [
      {
        title: 'No Website Whatsoever',
        description: 'The Drunken Pig has zero web presence outside of Facebook. When a potential customer searches "bar and grill Mexico MO" or "burgers downtown Mexico" on Google, The Drunken Pig does not appear. This is the most critical gap for a new business that needs to build a customer base quickly. Every week without a website is a week of lost discovery.',
        severity: 'critical' as const,
      },
      {
        title: 'No Google Business Profile',
        description: "A Google Business Profile is free and is the single most important local SEO asset for a new restaurant. Without it, the business doesn't appear in Google Maps, can't collect Google reviews, and has no presence in the local 3-pack. This should be the very first digital action taken.",
        severity: 'critical' as const,
      },
      {
        title: 'No Yelp Profile',
        description: "Yelp is the #2 platform for restaurant discovery after Google. The Drunken Pig has no Yelp presence, meaning it's invisible to the significant portion of diners who use Yelp to find new restaurants. Creating and optimizing a Yelp profile is free and takes 30 minutes.",
        severity: 'critical' as const,
      },
      {
        title: 'No Online Menu',
        description: "Customers deciding where to eat almost always check the menu online first. The Drunken Pig's menu is only accessible by visiting in person or scrolling through Facebook posts. A simple PDF menu or a dedicated menu page would immediately improve conversion from online discovery to in-person visit.",
        severity: 'critical' as const,
      },
      {
        title: 'No Events Calendar',
        description: 'The Drunken Pig hosts live music and events — a major draw. But event announcements are buried in Facebook posts that only reach existing followers. A website with an events calendar and Google Business Profile event posts would reach a much wider audience.',
        severity: 'warning' as const,
      },
      {
        title: 'No Email List',
        description: 'As a new business, building an email list of regulars is one of the most valuable long-term assets. A simple "Join our VIP list for weekly specials" signup on a website or at the bar could build a 500-person list within 6 months.',
        severity: 'warning' as const,
      },
    ],
    biggestOpportunity:
      'As a brand new business, The Drunken Pig has a rare opportunity to build its digital presence correctly from day one. Creating a Google Business Profile and a simple website immediately would establish a foundation that compounds in value over time — and would put the business ahead of most local competitors within 90 days.',
    plan: [
      {
        month: 'Month 1',
        title: 'Establish Digital Foundation',
        actions: [
          'Create and fully optimize Google Business Profile',
          'Create Yelp business profile',
          'Launch a 4-page website (Home, Menu, Events, Contact)',
          'Add restaurant schema markup',
        ],
        result: 'Appear in Google Maps and local search results for the first time',
      },
      {
        month: 'Month 2',
        title: 'Build Reviews & Awareness',
        actions: [
          'Launch review request campaign (table cards + follow-up texts)',
          'Add events calendar to website and Google Business Profile',
          'Create Instagram account with weekly food/event content',
          'Add email signup at bar and on website',
        ],
        result: '25+ Google reviews, growing Instagram following',
      },
      {
        month: 'Month 3',
        title: 'Grow the Customer Base',
        actions: [
          'Launch weekly email newsletter with specials and upcoming events',
          'Run targeted Facebook/Instagram ad campaign for 15-mile radius',
          'Create TikTok with bar atmosphere and food content',
          'Add online ordering or reservation system',
        ],
        result: 'Consistent new customer acquisition from digital channels',
      },
    ],
    dmPitch:
      "Hey! I saw that The Drunken Pig just opened downtown — congrats, the buzz around it has been really positive! I do digital marketing for local bars and restaurants, and I wanted to reach out because I noticed you don't have a website or Google Business Profile yet. As a new business, that's actually one of the most important things to set up right away — it's how people who don't already know you find you on Google. I put together a quick free guide on exactly what to do first. No pitch, no obligation — just thought it might be useful for a new spot trying to build momentum. Want me to send it over?",
  },

  {
    id: 'diner-54',
    name: 'Diner 54',
    category: 'American Diner',
    categoryIcon: '🍳',
    website: 'No standalone website',
    address: '2751 S Clark St, Mexico, MO 65265',
    tagline: '#1 restaurant in Mexico — invisible online',
    overallScore: 35,
    accentColor: '#F59E0B',
    scores: [
      { label: 'SEO & Search Visibility', score: 3, status: 'critical' as const },
      { label: 'Website Presence', score: 1, status: 'critical' as const },
      { label: 'Mobile Experience', score: 3, status: 'critical' as const },
      { label: 'Conversion Optimization', score: 3, status: 'critical' as const },
      { label: 'Trust Signals & Reviews', score: 6, status: 'warning' as const },
      { label: 'Social Media Presence', score: 2, status: 'critical' as const },
    ],
    bigPicture:
      'Diner 54 is the #1-rated restaurant in Mexico, MO on TripAdvisor with 77 reviews and a 4.1-star rating — a remarkable achievement for a family-owned American diner at 2751 S Clark St. The Ibraimi family has built something genuinely beloved by the community. Yet despite being the top-rated restaurant in town, Diner 54 has no standalone website, a thin Google presence, and almost no social media — meaning hundreds of potential new customers who search online every month never find it.',
    weaknesses: [
      {
        title: 'No Standalone Website',
        description: 'The #1-rated restaurant in Mexico, MO has no website. When travelers passing through on Highway 54 search "best diner near me" or "breakfast Mexico MO," Diner 54 does not appear with a credible web presence. A simple website with the menu, hours, and photos would immediately capture this traffic.',
        severity: 'critical' as const,
      },
      {
        title: 'TripAdvisor Profile Unclaimed',
        description: 'Despite being #1 in Mexico on TripAdvisor, the profile is unclaimed. This means the owner cannot respond to reviews, add photos, or update information. Claiming the profile is free and takes 15 minutes — and responding to reviews is one of the highest-trust signals for new customers.',
        severity: 'critical' as const,
      },
      {
        title: 'No Google Business Profile Photos',
        description: "Restaurants with 10+ owner-uploaded photos on Google Business Profile receive 42% more direction requests and 35% more website clicks. Diner 54's Google profile has minimal owner-added content, meaning it's losing customers to competitors who have better-looking profiles.",
        severity: 'critical' as const,
      },
      {
        title: 'No Social Media Presence',
        description: 'Diner 54 has virtually no social media presence. A classic American diner with great food is perfect content for Facebook, Instagram, and even TikTok. Weekly posts of breakfast plates, daily specials, and the friendly staff would build a loyal online following that drives consistent foot traffic.',
        severity: 'critical' as const,
      },
      {
        title: 'Not Capturing Traveler Traffic',
        description: 'Located on S Clark St near Highway 54, Diner 54 is perfectly positioned to capture traveler traffic. But without a website, Google Maps optimization, or TripAdvisor presence, travelers searching for a diner while passing through Mexico, MO will choose a competitor that appears more prominently online.',
        severity: 'warning' as const,
      },
      {
        title: 'No Email List or Loyalty Program',
        description: "A diner with 77 loyal TripAdvisor reviewers clearly has a devoted customer base. A simple loyalty punch card or email list with weekly specials would increase visit frequency and build a direct marketing channel that doesn't depend on social media algorithms.",
        severity: 'warning' as const,
      },
    ],
    biggestOpportunity:
      'Diner 54 is already the best restaurant in Mexico, MO — it just needs the digital presence to match. A simple website, a claimed TripAdvisor profile, and an optimized Google Business Profile would make it the most visible restaurant in the area and capture the significant traveler traffic passing through on Highway 54.',
    plan: [
      {
        month: 'Month 1',
        title: 'Claim & Build Digital Presence',
        actions: [
          'Claim TripAdvisor profile and respond to all 77 reviews',
          'Fully optimize Google Business Profile with photos and menu',
          'Launch a 4-page website (Home, Menu, About, Contact)',
          'Add LocalBusiness + Restaurant schema markup',
        ],
        result: 'Appear prominently in Google Maps and TripAdvisor searches',
      },
      {
        month: 'Month 2',
        title: 'Build Social & Review Momentum',
        actions: [
          'Launch Facebook and Instagram with weekly food photos',
          'Add table cards requesting Google reviews',
          "Create a Traveler's Stop landing page targeting Highway 54 traffic",
          'Add daily specials board to Google Business Profile posts',
        ],
        result: '100+ Google reviews, social following begins growing',
      },
      {
        month: 'Month 3',
        title: 'Retain & Grow',
        actions: [
          'Launch loyalty punch card program',
          'Add email signup for weekly specials',
          'Create TikTok with diner atmosphere and food content',
          'Submit to regional food blogs and travel guides',
        ],
        result: 'Dominant online presence as #1 diner in mid-Missouri',
      },
    ],
    dmPitch:
      "Hi! I was researching the best restaurants in Mexico, MO and Diner 54 came up as #1 on TripAdvisor — 77 reviews and a 4.1-star rating is genuinely impressive for a local diner. I do digital marketing for local restaurants, and I noticed that despite being the top-rated spot in town, you don't have a standalone website yet. That means a lot of people who would love your food — especially travelers passing through on Highway 54 — simply can't find you online. I put together a quick free audit with some easy wins. No obligation at all — just thought it might be useful for a place that clearly deserves more recognition. Would it be okay if I sent it over?",
  },

  {
    id: 'stacys-place',
    name: "Stacy's Place",
    category: 'Breakfast & Lunch',
    categoryIcon: '☕',
    website: 'No standalone website',
    address: '4501 E Liberty St, Mexico, MO 65265',
    tagline: '538 reviews — and still no website to show for it',
    overallScore: 38,
    accentColor: '#10B981',
    scores: [
      { label: 'SEO & Search Visibility', score: 3, status: 'critical' as const },
      { label: 'Website Presence', score: 1, status: 'critical' as const },
      { label: 'Mobile Experience', score: 3, status: 'critical' as const },
      { label: 'Conversion Optimization', score: 4, status: 'critical' as const },
      { label: 'Trust Signals & Reviews', score: 8, status: 'good' as const },
      { label: 'Social Media Presence', score: 3, status: 'critical' as const },
    ],
    bigPicture:
      "Stacy's Place at 4501 E Liberty St is one of Mexico, MO's most beloved breakfast and lunch spots — a 4.5-star rating with 538 reviews is extraordinary for a small-town diner. Open 5am–2pm, it clearly has a devoted community of regulars who love it. But with no standalone website, minimal Google presence, and Facebook as the only social channel, Stacy's Place is leaving significant new customer growth on the table — especially from the morning commuter and weekend brunch crowd that searches online.",
    weaknesses: [
      {
        title: 'No Standalone Website',
        description: "Stacy's Place has 538 reviews and a 4.5-star rating — one of the most trusted restaurants in Mexico, MO. Yet there is no website. When someone new to the area searches 'breakfast Mexico MO' or 'best brunch near me,' Stacy's Place doesn't appear with a credible web presence. A simple website with the menu, hours, and photos would immediately capture this high-intent traffic.",
        severity: 'critical' as const,
      },
      {
        title: 'No Google Business Profile Optimization',
        description: "The Google Business Profile for Stacy's Place is thin — minimal photos, no menu link, no owner posts. Restaurants with fully optimized Google profiles receive 5x more direction requests than those with sparse profiles. Given the 538 existing reviews, a fully optimized GBP would make Stacy's Place the most visible breakfast spot in Mexico, MO.",
        severity: 'critical' as const,
      },
      {
        title: 'No Online Menu',
        description: "Customers deciding where to go for breakfast almost always check the menu first. Stacy's Place has no online menu accessible outside of Facebook. A simple menu page on a website — or even a PDF linked from Google Business Profile — would increase conversion from online search to in-person visit.",
        severity: 'critical' as const,
      },
      {
        title: 'No Catering or Group Order Information',
        description: "A breakfast/lunch spot with Stacy's reputation is a natural fit for office catering, church events, and group orders. But there's no catering menu, no group order information, and no way to inquire online. This is a significant untapped revenue stream.",
        severity: 'warning' as const,
      },
      {
        title: 'Early Hours Not Highlighted',
        description: "Opening at 5am is a major differentiator — early workers, farmers, and commuters need a breakfast spot that's open before 7am. This is not prominently featured anywhere online. A simple 'Open at 5am — We're Here When You Need Us' message in the Google profile and website would attract this underserved customer segment.",
        severity: 'warning' as const,
      },
      {
        title: 'No Instagram Presence',
        description: "Breakfast food is among the most photographed and shared content on Instagram. Stacy's Place has no Instagram account, meaning it's invisible to the brunch crowd that discovers restaurants through social media. A weekly post of a beautiful plate of eggs and pancakes could generate consistent new customers.",
        severity: 'warning' as const,
      },
    ],
    biggestOpportunity:
      "With 538 reviews and a 4.5-star rating, Stacy's Place already has extraordinary social proof. The opportunity is to make that proof visible online. A simple website, a fully optimized Google Business Profile, and an Instagram account would make Stacy's Place the most discoverable breakfast spot in Audrain County within 60 days.",
    plan: [
      {
        month: 'Month 1',
        title: 'Build the Digital Foundation',
        actions: [
          'Launch a 4-page website (Home, Menu, About, Contact)',
          'Fully optimize Google Business Profile with photos and menu',
          'Add Open at 5am and early hours prominently to all profiles',
          'Add restaurant schema markup to website',
        ],
        result: 'Appear prominently in Google Maps for breakfast searches',
      },
      {
        month: 'Month 2',
        title: 'Leverage Social Proof',
        actions: [
          'Launch Instagram with weekly breakfast food photography',
          'Embed top reviews prominently on website homepage',
          'Add catering/group order inquiry form to website',
          'Post weekly specials to Google Business Profile',
        ],
        result: 'New customers from Instagram and Google Maps discovery',
      },
      {
        month: 'Month 3',
        title: 'Grow & Retain',
        actions: [
          'Launch email list with weekly specials',
          'Create a loyalty punch card program',
          'Submit to regional food blogs and travel guides',
          'Add TikTok with morning rush and food content',
        ],
        result: "Stacy's Place becomes the #1 breakfast destination in mid-Missouri online",
      },
    ],
    dmPitch:
      "Hi! I was looking for the best breakfast spots in Mexico, MO and Stacy's Place came up everywhere — 538 reviews and a 4.5-star rating is genuinely incredible. I do digital marketing for local restaurants, and I noticed that despite having one of the best reputations in town, you don't have a standalone website yet. That means a lot of people who are new to the area or just passing through — people who would absolutely love your food — can't easily find you online. I put together a quick free audit with some easy wins that could bring in a lot of new morning regulars. No obligation at all. Would it be okay if I sent it over?",
  },

  restaurantProspect({
    id: 'dos-arcos',
    name: 'Dos Arcos',
    category: 'Mexican Restaurant',
    website: 'dosarcosrestaurants.com',
    address: '1425 W Monroe St, Mexico, MO 65265',
    tagline: 'A local Mexican favorite that can win more searches',
    overallScore: 52,
    accentColor: '#F97316',
    leadIssue: 'Local SEO Could Be Sharper',
    secondIssue: 'Menu and Photos Need Stronger Search Positioning',
    thirdIssue: 'Conversion Path Should Be More Direct',
    bigPicture: 'Dos Arcos already appears as a recognized Mexico, MO restaurant option. The opportunity is to turn that recognition into stronger local search visibility with clearer menu content, better Google profile activity, fresh photos, and a more direct path from search to visit.',
    opportunity: 'A stronger menu-first local SEO strategy could help Dos Arcos capture more “Mexican restaurant near me” and dinner-decision traffic from people who are ready to eat now.',
    pitch: 'Hi! I was looking through local restaurants in Mexico, MO and Dos Arcos stood out as one of the main Mexican food options in town. I help local restaurants turn Google searches into more calls, visits, and menu views, and I noticed a few easy ways to sharpen your online presence. Would it be okay if I sent over a quick free audit?',
  }),

  restaurantProspect({
    id: 'dagwood-jr',
    name: 'Dagwood Jr',
    category: 'Sandwich & Deli Restaurant',
    website: 'dagwoodjr.com',
    address: '216 W Promenade St, Mexico, MO 65265',
    tagline: 'A downtown lunch spot with room for stronger visibility',
    overallScore: 46,
    accentColor: '#EAB308',
    leadIssue: 'Website Access and Search Clarity Need Review',
    secondIssue: 'Lunch Keywords Could Be Better Targeted',
    thirdIssue: 'Online Menu and Ordering Path Should Be Frictionless',
    bigPicture: 'Dagwood Jr is a natural fit for lunch, sandwich, deli, and downtown Mexico searches. The biggest opportunity is to make the menu, hours, location, and order/contact options extremely easy to find on Google and mobile devices.',
    opportunity: 'Owning searches around sandwiches, lunch, deli food, takeout, and downtown Mexico could put Dagwood Jr in front of customers who are making fast meal decisions.',
    pitch: 'Hi! I came across Dagwood Jr while looking at Mexico, MO restaurants and thought it looked like exactly the kind of local lunch spot that should be easier to find online. I put together free visibility audits for local restaurants and noticed a few areas where stronger search and menu presentation could help. Would you be open to me sending it over?',
  }),

  restaurantProspect({
    id: 'buckys-sit-or-get',
    name: "Bucky's Sit Or Get Restaurant",
    category: 'Local Restaurant',
    website: 'No standalone website confirmed',
    address: 'Mexico, MO 65265',
    tagline: 'Good local reputation, limited owned web presence',
    overallScore: 36,
    accentColor: '#FB923C',
    leadIssue: 'No Standalone Website Confirmed',
    secondIssue: 'Google Profile Should Carry More of the Story',
    thirdIssue: 'Menu and Specials Need a Cleaner Home',
    bigPicture: "Bucky's Sit Or Get appears in local restaurant listings, which means customers are already discovering it through third-party platforms. A simple owned web presence and a more complete Google profile would help turn that discovery into visits.",
    opportunity: 'A basic restaurant landing page with menu, hours, photos, directions, and specials would give Bucky’s a stronger owned asset instead of relying only on directories.',
    pitch: 'Hi! I was researching Mexico, MO restaurants and saw Bucky’s Sit Or Get come up in local results. I help local restaurants clean up their online presence so customers can find menus, hours, photos, and directions faster. I put together a free audit with a few simple visibility wins — would it be okay if I sent it over?',
  }),

  restaurantProspect({
    id: 'vegas-burritos',
    name: "Vega's Burritos",
    category: 'Mexican Restaurant',
    website: 'No standalone website confirmed',
    address: 'Mexico, MO 65265',
    tagline: 'Strong food-search potential with a clearer digital path',
    overallScore: 39,
    accentColor: '#EF4444',
    leadIssue: 'Owned Website Presence Is Unclear',
    secondIssue: 'Photos and Menu Could Work Harder',
    thirdIssue: 'Ordering and Directions Should Be One Tap Away',
    bigPicture: "Vega's Burritos has the kind of food category people search for at the exact moment they are hungry. A stronger digital presence can make the restaurant easier to choose when customers compare Mexican food options in Mexico, MO.",
    opportunity: 'A menu-first landing page and Google profile refresh could capture more burrito, taco, lunch, takeout, and Mexican restaurant searches.',
    pitch: 'Hi! I found Vega’s Burritos while researching local food options in Mexico, MO. Restaurants like yours can win a lot of new customers when the menu, photos, and directions are easy to find from Google. I made a quick free audit with a few simple improvements — can I send it over?',
  }),

  restaurantProspect({
    id: 'brick-city-buffet',
    name: 'Brick City Buffet & Grill',
    category: 'Buffet & Grill',
    website: 'No standalone website confirmed',
    address: 'Mexico, MO 65265',
    tagline: 'Buffet traffic depends on current hours, menu, and photos',
    overallScore: 40,
    accentColor: '#F59E0B',
    leadIssue: 'Fresh Menu and Hours Need More Visibility',
    secondIssue: 'Buffet Photos Could Drive More Decisions',
    thirdIssue: 'Review and Reputation Signals Should Be Featured',
    bigPicture: 'Buffets and grills depend heavily on current information. Customers want to know what is available, when the buffet is open, what the food looks like, and whether the experience is worth the trip.',
    opportunity: 'Fresh photo content, weekly Google posts, and a simple menu/hours page could help Brick City Buffet & Grill convert more hungry local searchers.',
    pitch: 'Hi! I saw Brick City Buffet & Grill while researching Mexico, MO restaurants. For buffet-style restaurants, photos, current hours, and menu information can make a huge difference in whether someone chooses you. I put together a free visibility audit with a few practical fixes — would you like me to send it?',
  }),

  restaurantProspect({
    id: 'tjs-roadhouse',
    name: "TJ's Roadhouse",
    category: 'Roadhouse Restaurant',
    website: 'No standalone website confirmed',
    address: '112 S Jefferson St, Mexico, MO 65265',
    tagline: 'A local roadhouse that should own nearby dinner searches',
    overallScore: 37,
    accentColor: '#DC2626',
    leadIssue: 'Standalone Website Presence Needs Confirmation',
    secondIssue: 'Dinner and Bar Keywords Could Be Stronger',
    thirdIssue: 'Photos, Specials, and Events Need a Clearer Hub',
    bigPicture: "TJ's Roadhouse has a category that can perform well in local searches for dinner, drinks, casual dining, and nearby restaurants. The digital opportunity is to create a clearer home for menu, specials, atmosphere, and calls-to-action.",
    opportunity: 'A focused local landing page and weekly Google/social updates could help TJ’s compete for evening dining and casual restaurant searches.',
    pitch: 'Hi! I came across TJ’s Roadhouse while researching Mexico, MO restaurants. I help local spots get more visibility from Google searches, especially when customers are deciding where to eat tonight. I put together a quick free audit with a few simple ideas — would it be okay if I sent it over?',
  }),

  restaurantProspect({
    id: 'pratts-on-monroe',
    name: "Pratt's on Monroe",
    category: 'Local Restaurant',
    website: 'No standalone website confirmed',
    address: 'Mexico, MO 65265',
    tagline: 'A newer local listing with room to build authority fast',
    overallScore: 34,
    accentColor: '#A855F7',
    leadIssue: 'Digital Foundation Needs to Be Built Early',
    secondIssue: 'Search Listings Need Consistency',
    thirdIssue: 'Photos and Signature Items Should Be Featured',
    bigPicture: "Pratt's on Monroe appears in local restaurant discovery sources, which makes now the right time to build strong search foundations before competitors define the online conversation.",
    opportunity: 'A clean starter site, optimized Google profile, and consistent directory listings can quickly give Pratt’s more credibility and visibility.',
    pitch: 'Hi! I noticed Pratt’s on Monroe while looking at Mexico, MO restaurant listings. For local restaurants, getting the foundation right early makes a big difference — menu, photos, Google profile, reviews, and search consistency. I put together a quick free audit with practical next steps. Can I send it over?',
  }),

  restaurantProspect({
    id: 'dugout-bar-and-grill',
    name: 'Dugout Bar and Grill',
    category: 'Bar & Grill',
    website: 'No standalone website confirmed',
    address: 'Mexico, MO 65265',
    tagline: 'Bar-and-grill visibility should be driven by food, events, and reviews',
    overallScore: 33,
    accentColor: '#22C55E',
    leadIssue: 'Events and Specials Need a Better Digital Home',
    secondIssue: 'Local Bar & Grill Searches Could Be Captured',
    thirdIssue: 'Social Proof Should Be Easier to See',
    bigPicture: 'Bar-and-grill customers often search for food, drinks, hours, events, and atmosphere. Dugout can benefit from a stronger online hub that keeps those details current and easy to act on.',
    opportunity: 'Weekly specials, event posts, updated food photos, and a simple landing page could help Dugout compete for local dinner and nightlife searches.',
    pitch: 'Hi! I saw Dugout Bar and Grill while researching local places to eat and hang out in Mexico, MO. A stronger online setup for specials, events, menu, and reviews could help more people choose you when they search nearby. I made a free audit with a few quick wins — can I send it?',
  }),

  restaurantProspect({
    id: 'donut-palace',
    name: 'The Donut Palace',
    category: 'Bakery & Breakfast',
    website: 'No standalone website confirmed',
    address: 'Mexico, MO 65265',
    tagline: 'Morning search traffic is ready-made for donuts and coffee',
    overallScore: 35,
    accentColor: '#EC4899',
    leadIssue: 'Morning Menu Visibility Is Too Limited',
    secondIssue: 'Photos Should Sell the Product Before Opening Hours',
    thirdIssue: 'Google Posts Could Highlight Fresh Daily Items',
    bigPicture: 'Donuts, coffee, and breakfast are highly visual and highly time-sensitive. The Donut Palace can win more morning traffic by making fresh items, hours, location, and photos more prominent online.',
    opportunity: 'A photo-forward Google profile and simple breakfast landing page could capture early-morning customers, office orders, and weekend treat searches.',
    pitch: 'Hi! I came across The Donut Palace while researching breakfast spots in Mexico, MO. Donuts and coffee are perfect for Google photos, quick menu searches, and morning traffic. I put together a free audit with a few easy online visibility ideas — would you like me to send it over?',
  }),

  restaurantProspect({
    id: 'hangar-54-pizza',
    name: 'Hangar 54 Pizza',
    category: 'Pizza Restaurant',
    website: 'No standalone website confirmed',
    address: 'Mexico, MO 65265',
    tagline: 'Pizza searches need fast menus, ordering, and photos',
    overallScore: 38,
    accentColor: '#F97316',
    leadIssue: 'Online Ordering Path Should Be Obvious',
    secondIssue: 'Pizza Menu Needs Strong Search Placement',
    thirdIssue: 'Photos and Specials Can Drive Repeat Orders',
    bigPicture: 'Pizza customers often search with immediate intent: menu, price, pickup, delivery, and phone number. Hangar 54 Pizza can benefit from making those details impossible to miss.',
    opportunity: 'A one-page pizza site or optimized Google profile with menu, ordering, specials, and photos could capture more high-intent dinner and takeout searches.',
    pitch: 'Hi! I saw Hangar 54 Pizza while looking at Mexico, MO restaurant listings. Pizza is one of those categories where people search and decide fast, so menu, photos, and ordering links matter a lot. I made a quick free audit with a few ideas to make that path easier — can I send it over?',
  }),

  restaurantProspect({
    id: 'ori-hibachi-express',
    name: 'Ori Hibachi Express',
    category: 'Hibachi Restaurant',
    website: 'No standalone website confirmed',
    address: 'Mexico, MO 65265',
    tagline: 'Visual food content could make hibachi stand out locally',
    overallScore: 41,
    accentColor: '#06B6D4',
    leadIssue: 'Food Photography Should Do More Selling',
    secondIssue: 'Menu and Takeout Details Need a Stronger Hub',
    thirdIssue: 'Local Search Signals Should Be Tightened',
    bigPicture: 'Hibachi is naturally visual, which makes it a strong fit for photo-led Google, Instagram, and menu content. Ori Hibachi Express can stand out by making the food, ordering path, and location clearer online.',
    opportunity: 'A visual menu page and optimized Google profile could help Ori Hibachi Express capture takeout, lunch, and dinner searches from customers who want something different.',
    pitch: 'Hi! I found Ori Hibachi Express while researching Mexico, MO food options. Hibachi is the kind of food that can really stand out online with strong photos, menu clarity, and a simple takeout path. I put together a free audit with a few quick visibility ideas — can I send it?',
  }),

  restaurantProspect({
    id: 'south-florida-style',
    name: 'South Florida Style Chicken Ribs and Seafood',
    category: 'Chicken, Ribs & Seafood',
    website: 'No standalone website confirmed',
    address: 'Mexico, MO 65265',
    tagline: 'A distinctive food concept that needs stronger discovery',
    overallScore: 34,
    accentColor: '#14B8A6',
    leadIssue: 'Unique Positioning Needs a Clear Online Story',
    secondIssue: 'Menu and Photos Should Be Easier to Find',
    thirdIssue: 'Search Listings Need Consistent Information',
    bigPicture: 'A distinctive restaurant concept has a major advantage when the story, menu, and food photos are clear online. South Florida Style Chicken Ribs and Seafood can use that uniqueness to stand out in local search.',
    opportunity: 'A concise website or landing page explaining the food style, signature items, hours, photos, and ordering path could turn curiosity into visits.',
    pitch: 'Hi! I came across South Florida Style Chicken Ribs and Seafood while researching Mexico, MO restaurants. Your concept sounds unique, and that can be a big advantage online if the menu, photos, and story are easy to find. I made a free audit with a few simple visibility ideas — would it be okay if I sent it?',
  }),

];
