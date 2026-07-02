import espressoImg from './assets/images/espresso.jpg';
import icedCoffeeImg from './assets/images/iced_coffee.jpg';
import shakesImg from './assets/images/shakes.jpg';
import hotComfortsImg from './assets/images/hot_comforts.jpg';
import refreshersImg from './assets/images/refreshers.jpg';

export interface MenuItemData {
  id: string;
  name: string;
  price: string | { commercial: string; premium: string };
  description?: string;
  isPopular?: boolean;
  calories?: number;
  caffeine?: string;
  serving?: string;
  origins?: string;
}

export interface MenuSection {
  id: string;
  title: string;
  image: string;
  items: MenuItemData[];
}

export const MENU_DATA: MenuSection[] = [
  {
    id: 'espresso',
    title: 'بار اسپرسو (Espresso Bar)',
    image: espressoImg,
    items: [
      { id: 'e1', name: 'اسپرسو', price: { commercial: '۸۵', premium: '۱۲۰' }, description: 'Concentrated pure coffee shot with rich golden crema.', calories: 5, caffeine: 'High (85mg)', serving: '45ml', origins: 'Brazil / Ethiopia / Colombia' },
      { id: 'e2', name: 'دوپیو', price: { commercial: '۱۱۰', premium: '۱۶۰' }, description: 'Intense double espresso shot. Double the flavor.', calories: 10, caffeine: 'High (170mg)', serving: '90ml', origins: 'Colombia / Brazil / Ethiopia' },
      { id: 'e3', name: 'آمریکانو', price: { commercial: '۱۱۰', premium: '۱۶۰' }, description: 'Double espresso with filtered hot water.', calories: 10, caffeine: 'High (170mg)', serving: '360ml', origins: 'Brazil / Colombia' },
      { id: 'e4', name: 'کورتادو', price: { commercial: '۱۷۰', premium: '۲۲۰' }, description: 'Equal parts espresso and silky textured milk.', calories: 45, caffeine: 'Medium (85mg)', serving: '135ml', origins: 'Ethiopia' },
      { id: 'e5', name: 'کاپوچینو', price: { commercial: '۱۷۰', premium: '۲۲۰' }, description: 'Classic espresso topped with airy thick microfoam.', calories: 120, caffeine: 'Medium (85mg)', serving: '280ml', origins: 'Brazil Blend' },
      { id: 'e6', name: 'لته', price: { commercial: '۱۹۰', premium: '۲۴۰' }, description: 'Smooth espresso with velvety steamed milk.', calories: 150, caffeine: 'Medium (85mg)', serving: '360ml', origins: 'Brazil / Colombia' },
      { id: 'e7', name: 'موکا', price: { commercial: '۲۲۵', premium: '۲۷۵' }, description: 'Espresso, premium dark chocolate, and smooth steamed milk.', calories: 290, caffeine: 'Medium (85mg)', serving: '360ml', origins: 'House Blend' },
      { id: 'e8', name: 'لته کارامل', price: { commercial: '۲۲۵', premium: '۲۷۵' }, description: 'Signature latte infused with rich salted caramel syrup.', calories: 250, caffeine: 'Medium (85mg)', serving: '360ml', origins: 'Brazil Blend' },
      { id: 'e9', name: 'بیسکو لته', price: { commercial: '۲۲۵', premium: '۲۸۵' }, description: 'Espresso latte blended with Biscoff cookie butter.', calories: 380, caffeine: 'Medium (85mg)', serving: '360ml', origins: 'House Blend' },
      { id: 'e10', name: 'لته پسته', price: { commercial: '۲۲۵', premium: '۲۸۵' }, isPopular: true, description: 'Premium coffee with exotic rich pure pistachio.', calories: 340, caffeine: 'Medium (85mg)', serving: '360ml', origins: 'Premium Blend' },
      { id: 'e11', name: 'لته نارگیل', price: { commercial: '۲۲۵', premium: '۲۷۵' }, description: 'Creamy coconut milk twist on the classic latte.', calories: 160, caffeine: 'Medium (85mg)', serving: '360ml', origins: 'Brazil Blend' },
      { id: 'e12', name: 'اسپانیش لته', price: { commercial: '۲۲۵', premium: '۲۷۵' }, description: 'Sweet, rich latte crafted with sweetened condensed milk.', calories: 280, caffeine: 'Medium (85mg)', serving: '360ml', origins: 'Brazil Blend' },
      { id: 'e13', name: 'راه کافی', price: { commercial: '۲۲۵', premium: '۲۷۵' }, isPopular: true, description: 'Secret botanical coffee blend. Our ultimate signature.', calories: 240, caffeine: 'Medium (95mg)', serving: '360ml', origins: 'Signature Blend' },
    ],
  },
  {
    id: 'iced-coffee',
    title: 'بار قهوه سرد (Iced Coffee)',
    image: icedCoffeeImg,
    items: [
      { id: 'cc9', name: 'کن هیلو', price: { commercial: '۱۱۰', premium: '۱۶۰' }, description: 'Minimalist espresso served over a single giant ice block.', calories: 5, caffeine: 'High (85mg)', serving: '60ml', origins: 'Brazil / Ethiopia' },
      { id: 'cc8', name: 'آفوگاتو', price: { commercial: '۲۱۵', premium: '۲۶۵' }, description: 'Premium vanilla bean gelato drowned in a hot espresso shot.', calories: 190, caffeine: 'Medium (85mg)', serving: '150ml', origins: 'Madagascar Vanilla' },
      { id: 'cc8_2', name: 'آفوگاتو راه', price: { commercial: '۲۶۵', premium: '۳۱۵' }, isPopular: true, description: 'Our signature botanical gelato drowned in premium hot espresso.', calories: 220, caffeine: 'Medium (85mg)', serving: '150ml', origins: 'Raah Specialty' },
      { id: 'cc1', name: 'آیس آمریکانو', price: { commercial: '۱۱۰', premium: '۱۶۰' }, description: 'Chilled espresso and filtered water over ice. Crisp & clean.', calories: 10, caffeine: 'High (170mg)', serving: '400ml', origins: 'Brazil / Colombia' },
      { id: 'cc2', name: 'آیس لته', price: { commercial: '۱۸۵', premium: '۲۳۵' }, description: 'Smooth espresso extraction and cold milk over ice.', calories: 120, caffeine: 'Medium (85mg)', serving: '400ml', origins: 'Brazil / Colombia' },
      { id: 'cc3', name: 'آیس موکا', price: { commercial: '۲۳۵', premium: '۲۷۵' }, description: 'Cold chocolate indulgence with fresh espresso and cold milk.', calories: 280, caffeine: 'Medium (85mg)', serving: '400ml', origins: 'House Blend' },
      { id: 'cc4', name: 'آیس کارامل', price: { commercial: '۲۲۵', premium: '۲۷۵' }, description: 'Velvety cold latte with house-made premium caramel.', calories: 240, caffeine: 'Medium (85mg)', serving: '400ml', origins: 'Brazil Blend' },
      { id: 'cc5', name: 'آیس اسپانیش', price: { commercial: '۲۲۵', premium: '۲۷۵' }, description: 'Sweet iced latte with sweetened condensed milk.', calories: 260, caffeine: 'Medium (85mg)', serving: '400ml', origins: 'Brazil Blend' },
      { id: 'cc6', name: 'آیس راه', price: { commercial: '۲۲۵', premium: '۲۷۵' }, isPopular: true, description: "Our signature botanical brew over crystal ice blocks.", calories: 220, caffeine: 'Medium (95mg)', serving: '400ml', origins: 'Signature Blend' },
      { id: 'cc7', name: 'آیس کوکو لته', price: { commercial: '۲۲۵', premium: '۲۷۵' }, description: 'Cold espresso, milk, and tropical coconut milk cream.', calories: 160, caffeine: 'Medium (85mg)', serving: '400ml', origins: 'Brazil Blend' },
    ],
  },
  {
    id: 'shakes',
    title: 'انواع شیک (Shakes)',
    image: shakesImg,
    items: [
      { id: 'sh1', name: 'فراست بری', price: '۲۳۰', description: 'Zesty premium wild forest berry shake. Ice-cold.', calories: 180, caffeine: 'None', serving: '450ml', origins: 'Wild Berries' },
      { id: 'sh2', name: 'شیک لوتوس', price: '۲۵۰', description: 'Lotus Biscoff cookie butter gourmet thick shake.', calories: 510, caffeine: 'None', serving: '450ml', origins: 'Lotus Biscoff' },
      { id: 'sh3', name: 'شیک بادام زمینی', price: '۲۴۰', description: 'Rich, smooth premium ground peanut butter shake.', calories: 495, caffeine: 'None', serving: '450ml', origins: 'Peanut Paste' },
      { id: 'sh4', name: 'شیک شکلات', price: '۲۴۰', description: 'Classic gourmet chocolate gelato rich shake.', calories: 430, caffeine: 'Low (5mg)', serving: '450ml', origins: 'Belgian Cocoa' },
      { id: 'sh5', name: 'شیک وانیل', price: '۲۲۰', description: 'Premium Madagascar vanilla bean gelato thick shake.', calories: 390, caffeine: 'None', serving: '450ml', origins: 'Madagascar Vanilla' },
      { id: 'sh6', name: 'شیک موز شکلات', price: '۲۸۰', description: 'Fresh sweet bananas blended with rich dark chocolate fudge.', calories: 430, caffeine: 'Low (5mg)', serving: '450ml', origins: 'Fresh Bananas' },
      { id: 'sh7', name: 'شیک کارامل نمکی', price: '۲۴۰', description: 'Sweet and savory signature house-salted caramel shake.', calories: 460, caffeine: 'None', serving: '450ml', origins: 'House Caramel' },
      { id: 'sh8', name: 'شیک نوتلا', price: '۲۷۰', description: 'Decadent imported hazelnut cocoa Nutella cream delight.', calories: 520, caffeine: 'Low (5mg)', serving: '450ml', origins: 'Hazelnut Cocoa' },
      { id: 'sh9', name: 'شیک اورئو', price: '۲۵۰', description: 'Creamy high-grade Oreo cookie crumble rich shake.', calories: 490, caffeine: 'Low (5mg)', serving: '450ml', origins: 'Oreo Cookie' },
      { id: 'sh10', name: 'شیک پسته', price: '۲۸۰', isPopular: true, description: 'Creamy pure pistachios blended with premium gelato.', calories: 480, caffeine: 'None', serving: '450ml', origins: 'Kerman Pistachio' },
      { id: 'sh11', name: 'پروتئین شیک', price: '۳۵۰', description: 'Clean whey protein, raw almond butter, and daily nutrients.', calories: 330, caffeine: 'None', serving: '450ml', origins: 'Whey Protein' },
      { id: 'sh12', name: 'ماچاچیلو', price: '۲۶۰', description: 'Authentic ceremonial matcha shake blended with sweet vanilla gelato.', calories: 450, caffeine: 'Medium (60mg)', serving: '450ml', origins: 'Uji, Japan' },
    ],
  },
  {
    id: 'hot-comforts',
    title: 'سایر نوشیدنیهای گرم (Hot Comforts)',
    image: hotComfortsImg,
    items: [
      { id: 'hc1', name: 'هات چاکلت', price: { commercial: '۱۶۰', premium: '۱۷۵' }, description: 'Luxurious classic rich melted Belgian chocolate.', calories: 280, caffeine: 'Low (10mg)', serving: '320ml / 400ml', origins: 'Belgian Cocoa' },
      { id: 'hc2', name: 'وایت چاکلت', price: { commercial: '۱۴۰', premium: '۱۵۵' }, description: 'Creamy and sweet premium white hot chocolate.', calories: 310, caffeine: 'None', serving: '320ml / 400ml', origins: 'Swiss White Chocolate' },
      { id: 'hc3', name: 'پینک چاکلت', price: { commercial: '۱۶۵', premium: '۱۸۰' }, description: 'Aesthetically pleasing pink chocolate latte.', calories: 300, caffeine: 'None', serving: '320ml / 400ml', origins: 'Ruby Cocoa' },
      { id: 'hc4', name: 'هات چاکلت فندق', price: { commercial: '۱۶۵', premium: '۱۸۰' }, description: 'Rich nutty hazelnut infused hot chocolate.', calories: 340, caffeine: 'Low (10mg)', serving: '320ml / 400ml', origins: 'Belgian Hazelnut' },
      { id: 'hc5', name: 'ماسالا', price: { commercial: '۱۶۰', premium: '۱۷۵' }, description: 'Authentic Indian spiced black tea with steamed milk.', calories: 140, caffeine: 'Low (25mg)', serving: '320ml / 400ml', origins: 'Assam, India' },
      { id: 'hc6', name: 'پینات ماسالا', price: { commercial: '۱۷۵', premium: '۱۹۰' }, description: 'Masala spiced tea enriched with creamy peanut butter.', calories: 190, caffeine: 'Low (25mg)', serving: '320ml / 400ml', origins: 'Assam / Peanut' },
      { id: 'hc7', name: 'ماسالا اسپایسی', price: { commercial: '۱۶۰', premium: '۱۷۵' }, description: 'Extra bold, warm, and highly spiced masala blend.', calories: 140, caffeine: 'Low (25mg)', serving: '320ml / 400ml', origins: 'Assam, India' },
      { id: 'hc8', name: 'چای کرک', price: { commercial: '۱۶۰', premium: '۱۷۵' }, description: 'Strong, traditional spiced karak tea with cardamoms.', calories: 160, caffeine: 'Low (30mg)', serving: '250ml / 320ml', origins: 'East Spiced' },
      { id: 'hc9', name: 'شیر کاکائو', price: { commercial: '۱۶۰', premium: '۱۷۵' }, description: 'Comforting warm premium chocolate whole milk.', calories: 200, caffeine: 'Low (5mg)', serving: '320ml / 400ml', origins: 'Belgian Cocoa' },
      { id: 'hc10', name: 'شیر نسکافه', price: { commercial: '۱۶۰', premium: '۱۷۵' }, description: 'Warm steamed milk infused with our classic instant coffee blend.', calories: 170, caffeine: 'Medium (50mg)', serving: '320ml / 400ml', origins: 'House Roast' },
      { id: 'hc11', name: 'شیرعسل دارچین', price: { commercial: '۱۵۰', premium: '۱۶۵' }, description: 'Steamed milk naturally seasoned with honey and cinnamon spice.', calories: 155, caffeine: 'None', serving: '320ml / 400ml', origins: 'Persian Sourced' },
      { id: 'hc12', name: 'هات بیسکو', price: { commercial: '۱۷۰', premium: '۱۹۰' }, description: 'Warm Biscoff cookie butter dissolved in silky steamed milk.', calories: 370, caffeine: 'None', serving: '320ml / 400ml', origins: 'Speculoos' },
      { id: 'hc13', name: 'هات پسته زعفرانی', price: { commercial: '۱۶۰', premium: '۱۷۵' }, isPopular: true, description: 'Saffron and premium sweet pistachio cream in hot steamed milk.', calories: 360, caffeine: 'None', serving: '320ml / 400ml', origins: 'Mashhad Saffron' },
      { id: 'hc14', name: 'ماچا لته', price: { commercial: '۲۰۰', premium: '۲۲۰' }, description: 'Warm whisked ceremonial matcha with velvety steamed milk.', calories: 120, caffeine: 'Medium (60mg)', serving: '320ml / 400ml', origins: 'Uji, Japan' },
      { id: 'hc15', name: 'ماچا پسته', price: { commercial: '۲۴۰', premium: '۲۶۰' }, description: 'Rich premium green matcha with nutty pistachio cream and hot milk.', calories: 230, caffeine: 'Medium (60mg)', serving: '320ml / 400ml', origins: 'Uji / Kerman' },
      { id: 'hc16', name: 'کوکو ماچا لته', price: { commercial: '۲۴۰', premium: '۲۶۰' }, description: 'Earthy premium Japanese matcha combined with steamed coconut milk.', calories: 130, caffeine: 'Medium (60mg)', serving: '320ml / 400ml', origins: 'Uji, Japan' },
      { id: 'hc17', name: 'چای انگلیسی', price: { commercial: '۱۷۰', premium: '۱۹۰' }, description: 'Classic comforting premium English breakfast tea.', calories: 5, caffeine: 'Medium (40mg)', serving: '250ml / 320ml', origins: 'Sri Lanka' },
    ],
  },
  {
    id: 'refreshers',
    title: 'اسموتی، سردنوش، چای و دمنوش (Refreshers & Tea)',
    image: refreshersImg,
    items: [
      { id: 'r1_sea', name: 'اسموتی فصل', price: '! Ask (از صندوق بپرسید)', description: 'Fresh seasonal fruits blended to perfection. Ask cashier for details.', calories: 160, caffeine: 'None', serving: '450ml', origins: 'Fresh Seasonal' },
      { id: 'r1', name: 'لیموناد', price: '۱۸۰', description: 'Freshly squeezed lemon juice, light syrup, and cold sparkling club soda.', calories: 130, caffeine: 'None', serving: '400ml', origins: 'Fresh Citrus' },
      { id: 'r2', name: 'موهیتو', price: '۱۹۰', description: 'Fresh garden mint leaves, lime slices, and sparkling soda over ice.', calories: 110, caffeine: 'None', serving: '400ml', origins: 'Garden Mint' },
      { id: 'r3', name: 'رد موهیتو', price: '۲۴۰', description: 'Pomegranate twist to classic mojito with mint and lime.', calories: 110, caffeine: 'None', serving: '400ml', origins: 'Persian Garden' },
      { id: 'r4', name: 'هانی لایم', price: '۲۲۰', description: 'Squeezed fresh lime juice sweetened naturally with wild raw honey.', calories: 90, caffeine: 'None', serving: '400ml', origins: 'Organic Honey' },
      { id: 'r5', name: 'کوکومینت', price: '۲۱۰', description: 'Coconut water shaken with crisp cucumber and garden mint leaves.', calories: 45, caffeine: 'None', serving: '400ml', origins: 'Fresh Botanic' },
      { id: 'r6', name: 'سالتی پانچ', price: '۲۵۰', description: 'Grapefruit punch infused with ocean botanical sea salt.', calories: 95, caffeine: 'None', serving: '400ml', origins: 'Mediterranean' },
      { id: 'r7', name: 'پیناکولادا', price: '۲۵۰', description: 'Rich tropical pineapple juice blended with creamy coconut milk.', calories: 310, caffeine: 'None', serving: '400ml', origins: 'Tropical Fruits' },
      { id: 'r8', name: 'بلو هاوایی', price: '۲۵۰', description: 'Tropical blue citrus with sweet pineapple and coconut water.', calories: 120, caffeine: 'None', serving: '400ml', origins: 'Pacific Blend' },
      { id: 'r9', name: 'میدنایت بری', price: '۲۶۰', isPopular: true, description: 'Dark wild forest berries with deep sweet custom botanical infusions.', calories: 110, caffeine: 'None', serving: '400ml', origins: 'Wild Berries' },
      { id: 'r10', name: 'آیس ماچا لته', price: '۲۲۰', description: 'Whisked ceremonial Japanese matcha poured over iced fresh milk.', calories: 130, caffeine: 'Medium (60mg)', serving: '400ml', origins: 'Uji, Japan' },
      { id: 'r11', name: 'آیس ماچا بری لته', price: '۲۶۰', description: 'Strawberry compote layered under ice-cold milk and green matcha.', calories: 280, caffeine: 'Medium (60mg)', serving: '400ml', origins: 'Uji, Japan' },
      { id: 'r12', name: 'آیس کوکو ماچا', price: '۲۶۰', description: 'Ceremonial matcha with tropical sweet cold coconut milk over ice.', calories: 150, caffeine: 'Medium (60mg)', serving: '400ml', origins: 'Uji, Japan' },
      { id: 'r13', name: 'آیس منگو ماچا', price: '۲۷۰', description: 'Tropical mango purée meets Japanese green matcha over ice.', calories: 260, caffeine: 'Medium (60mg)', serving: '400ml', origins: 'Uji, Japan' },
      
      { id: 't1_black', name: 'چای سیاه', price: '۷۰', description: 'Premium loose-leaf Lahijan black tea brewed traditionally.', calories: 2, caffeine: 'Medium (40mg)', serving: '250ml', origins: 'Lahijan, Iran' },
      { id: 't2_bahar', name: 'بهار', price: '۹۵', description: 'Orange blossom flower, rose petals, and citrus peel infusion.', calories: 5, caffeine: 'None', serving: '350ml', origins: 'Shiraz Orange Blossom' },
      { id: 't3_sour', name: 'ترش کام', price: '۹۰', description: 'Tart hibiscus petals paired with dry forest berries.', calories: 15, caffeine: 'None', serving: '350ml', origins: 'Hibiscus Petals' },
      { id: 't4_peace', name: 'آرامش', price: '۹۰', description: 'Extremely soothing chamomile herbal tea for perfect peace.', calories: 2, caffeine: 'None', serving: '350ml', origins: 'Roman Chamomile' },
      { id: 't5_cold', name: 'سرماسوز', price: '۱۳۰', description: 'Warm eucalyptus, wild peppermint, and echinacea remedy.', calories: 5, caffeine: 'None', serving: '350ml', origins: 'Herbal Remedy' },
      { id: 't6_cozy', name: 'گرم نوش', price: '۸۵', description: 'Cozy spiced herbal and botanical warming mixture.', calories: 5, caffeine: 'None', serving: '350ml', origins: 'Cozy Herbs' },
      { id: 't7_gold', name: 'گلدن میلک', price: '۱۴۰', description: 'Steamed milk infused with turmeric roots, ginger, and black pepper.', calories: 140, caffeine: 'None', serving: '320ml', origins: 'Turmeric Blend' },
    ],
  },
];
