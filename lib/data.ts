export const WHATSAPP_NUMBER = '919999999999'
export const CONTACT_EMAIL = 'hello@naadbyte.com'
export const YOUTUBE_URL = 'https://www.youtube.com/@naadbyte'
export const INSTAGRAM_URL = 'https://www.instagram.com/naadbyte'
export const YT_MUSIC_URL = 'https://music.youtube.com'

export const navLinks = [
  { href: '/order', label: 'Order a song' },
  { href: '/listen', label: 'Listen' },
  { href: '/watch', label: 'Watch' },
  { href: '/releases', label: 'Releases' },
  { href: '/stories', label: 'Stories' },
  { href: '/terms', label: 'Terms' },
]

export type Tint = 'pink' | 'gold' | 'blue' | 'sunset' | 'ember' | 'rose'

export const tintClass: Record<Tint, string> = {
  pink: 'bg-linear-to-br from-[#ff3f80] via-[#ff86a6] to-[#ffc76b]',
  gold: 'bg-linear-to-br from-[#f2a91c] via-[#ffd25c] to-[#fff0c2]',
  blue: 'bg-linear-to-br from-[#1f5fc9] via-[#6fa4ec] to-[#d7e7ff]',
  sunset: 'bg-linear-to-br from-[#ff5a3c] via-[#ff9e4a] to-[#ffd76f]',
  ember: 'bg-linear-to-br from-[#5a3112] via-[#c47a2a] to-[#f4c66b]',
  rose: 'bg-linear-to-br from-[#e5245f] via-[#ff6f8e] to-[#ffb0c0]',
}

export const occasions = [
  { slug: 'birthdays', title: 'Birthdays', subtitle: 'Make their day unforgettable', image: '/images/occ-birthdays.webp' },
  { slug: 'weddings', title: 'Weddings & Sangeet', subtitle: 'Songs for your big celebrations', image: '/images/occ-weddings.webp' },
  { slug: 'anniversaries', title: 'Anniversaries', subtitle: 'Celebrate your journey together', image: '/images/occ-anniversaries.webp' },
  { slug: 'proposals', title: 'Proposals', subtitle: 'Say it with music', image: '/images/occ-proposals.webp' },
  { slug: 'devotional', title: 'Devotional', subtitle: 'Music for the soul', image: '/images/occ-devotional.webp' },
  { slug: 'puja', title: 'Puja & Festivals', subtitle: 'For your special traditions', image: '/images/occ-puja.webp' },
  { slug: 'business', title: 'Business Jingles', subtitle: 'Your brand, our composition', image: '/images/occ-business.webp' },
  { slug: 'family', title: 'Friends & Family', subtitle: 'For every special bond', image: '/images/occ-family.webp' },
  { slug: 'just-because', title: 'Just Because', subtitle: 'Turn any feeling into a song', image: '/images/occ-just-because.webp' },
]

export type Release = {
  slug: string
  title: string
  duration: string
  type: 'Single' | 'Album'
  year: number
  image: string
  tint: Tint
  mood: string
  language: string
}

export const releases: Release[] = [
  { slug: 'dil-se-acoustic', title: 'Dil Se (Acoustic)', duration: '3:45', type: 'Single', year: 2025, image: '/images/romance.webp', tint: 'pink', mood: 'Romantic', language: 'Hindi' },
  { slug: 'raahon-mein', title: 'Raahon Mein', duration: '4:12', type: 'Single', year: 2025, image: '/images/dance.webp', tint: 'gold', mood: 'Chill', language: 'Hindi' },
  { slug: 'safar', title: 'Safar', duration: '5:08', type: 'Album', year: 2025, image: '/images/headphones.webp', tint: 'blue', mood: 'Cinematic', language: 'Instrumental' },
  { slug: 'junoon-live', title: 'Junoon (Live)', duration: '6:20', type: 'Single', year: 2025, image: '/images/occ-weddings.webp', tint: 'rose', mood: 'Energetic', language: 'Fusion' },
  { slug: 'mitti-ki-khushboo', title: 'Mitti Ki Khushboo', duration: '4:03', type: 'Album', year: 2025, image: '/images/temple.webp', tint: 'gold', mood: 'Devotional', language: 'Hindi' },
  { slug: 'shehar-se-door', title: 'Shehar Se Door', duration: '3:45', type: 'Single', year: 2025, image: '/images/muse.webp', tint: 'sunset', mood: 'Chill', language: 'Hindi' },
  { slug: 'safar-naya', title: 'Safar Naya', duration: '4:55', type: 'Single', year: 2024, image: '/images/family.webp', tint: 'blue', mood: 'Instrumental', language: 'Hindi' },
  { slug: 'baarish-ki-baatein', title: 'Baarish Ki Baatein', duration: '3:58', type: 'Single', year: 2024, image: '/images/occ-anniversaries.webp', tint: 'rose', mood: 'Punjabi', language: 'Punjabi' },
]

export const videoCategories = ['All Videos', 'Official Music Videos', 'Shorts', 'Reels', 'Behind the Scenes'] as const
export type VideoCategory = Exclude<(typeof videoCategories)[number], 'All Videos'>

export type Video = {
  slug: string
  title: string
  duration: string
  category: VideoCategory
  image: string
  tint: Tint
}

export const videos: Video[] = [
  { slug: 'dil-se-official', title: 'Dil Se (Official Video)', duration: '4:02', category: 'Official Music Videos', image: '/images/romance.webp', tint: 'gold' },
  { slug: 'junoon-live-session', title: 'Junoon (Live Session)', duration: '6:20', category: 'Behind the Scenes', image: '/images/headphones.webp', tint: 'ember' },
  { slug: 'raahon-mein', title: 'Raahon Mein', duration: '4:12', category: 'Official Music Videos', image: '/images/dance.webp', tint: 'blue' },
  { slug: 'safar-instrumental', title: 'Safar (Instrumental)', duration: '5:08', category: 'Official Music Videos', image: '/images/temple.webp', tint: 'sunset' },
  { slug: 'mitti-ki-khushboo', title: 'Mitti Ki Khushboo', duration: '4:03', category: 'Reels', image: '/images/family.webp', tint: 'gold' },
  { slug: 'shehar-se-door', title: 'Shehar Se Door', duration: '3:45', category: 'Shorts', image: '/images/muse.webp', tint: 'blue' },
  { slug: 'birthday-surprise', title: 'Birthday Surprise (Short)', duration: '0:58', category: 'Shorts', image: '/images/cake.webp', tint: 'pink' },
  { slug: 'sangeet-reel', title: 'Sangeet Night Reel', duration: '0:45', category: 'Reels', image: '/images/occ-weddings.webp', tint: 'rose' },
]

export const storyCategories = ['All Stories', 'Weddings & Sangeet', 'Birthdays', 'Anniversaries', 'Business Jingles'] as const
export type StoryCategory = Exclude<(typeof storyCategories)[number], 'All Stories'>

export type Testimonial = {
  name: string
  location: string
  tag: string
  category: StoryCategory
  quote: string
  time: string
  avatarClass: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Siddharth & Priya Mehta',
    location: 'Bengaluru, Karnataka',
    tag: 'Bride Entry & Sangeet Special',
    category: 'Weddings & Sangeet',
    quote:
      'Sneha had tears in her eyes the moment the lyrics started playing for her bridal entry. Everyone kept asking who composed this masterpiece!',
    time: '1 week ago',
    avatarClass: 'bg-pink/15 text-pink',
  },
  {
    name: 'Kunal Singhal',
    location: 'Noida, Uttar Pradesh',
    tag: 'Father’s 60th Milestone Birthday',
    category: 'Birthdays',
    quote:
      'Surprised Papa on his 60th birthday with a song describing his sacrifices, his vintage scooter, and his morning jokes. When the song finished, the whole hall was wiping their eyes. Best gift ever.',
    time: '2 weeks ago',
    avatarClass: 'bg-blue-100 text-blue-700',
  },
  {
    name: 'Ananya Rao',
    location: 'Hyderabad, Telangana',
    tag: '10th Anniversary Song',
    category: 'Anniversaries',
    quote:
      'They wove in the street where we first met and the chai stall we still visit. My husband played it on loop for a week. It feels like our story finally has a soundtrack.',
    time: '3 weeks ago',
    avatarClass: 'bg-sun/30 text-navy',
  },
  {
    name: 'Rohit Bansal',
    location: 'Jaipur, Rajasthan',
    tag: 'Brand Jingle — 30 sec',
    category: 'Business Jingles',
    quote:
      'Our sweet shop jingle is now stuck in every customer’s head. Delivered in 3 days with one revision, and it sounds like a radio ad from a big agency.',
    time: '1 month ago',
    avatarClass: 'bg-emerald-100 text-emerald-700',
  },
  {
    name: 'Meera & Arjun Iyer',
    location: 'Chennai, Tamil Nadu',
    tag: 'Sangeet Couple Dance',
    category: 'Weddings & Sangeet',
    quote:
      'We wanted a song that mixed Tamil and Hindi for both families. NaadByte nailed it — our sangeet choreographer said it was the easiest track she has ever worked with.',
    time: '1 month ago',
    avatarClass: 'bg-pink/15 text-pink',
  },
  {
    name: 'Tanvi Kulkarni',
    location: 'Pune, Maharashtra',
    tag: 'Daughter’s 1st Birthday',
    category: 'Birthdays',
    quote:
      'A lullaby with her name, her giggle and her favourite toy elephant. We will play this for her every birthday. Pure magic from a very kind team.',
    time: '2 months ago',
    avatarClass: 'bg-violet-100 text-violet-700',
  },
]

export const orderOccasions = [
  { id: 'personal', title: 'Personal song', subtitle: 'Birthday, gift, friendship', price: 499 },
  { id: 'wedding', title: 'Wedding / sangeet song', subtitle: 'For the couple and families', price: 2999 },
  { id: 'anniversary', title: 'Anniversary song', subtitle: 'A song for your partner', price: 999 },
  { id: 'business', title: 'Business jingle', subtitle: '20–30 seconds for Reels and your shop', price: 1500 },
]

export const formatINR = (n: number) => `₹${n.toLocaleString('en-IN')}`
