// src/data/products.js

// استيراد الصور من مجلد الأصول (assets)
import ComboBoxer from '../assets/combo_boxer.jpg';
import KingOfHammer from '../assets/king_of_hammer.jpg';
import AirHockeyTable from '../assets/air_hockey_table.jpg';
import BasketballHoop from '../assets/basketball_hoop.jpg';
import ClawMachine from '../assets/claw_machine.jpg';
import ShootingGallery from '../assets/shooting_gallery.jpg';
import LightReaction from '../assets/light_reaction.jpg';
import CatchStick from '../assets/catch_stick.jpg';

// مصفوفة المنتجات المتاحة للبيع
export const products = [
  
    /*
  { <-

    id: 9, // رقم تعريف فريد (يجب أن يكون مختلفاً عن الأرقام السابقة)
    name: "اسم المنتج الجديد",
    image: اسم_الصورة_المستوردة, // يجب أن تكون الصورة مستوردة في أعلى الملف
    description: "وصف جذاب ومختصر للمنتج.",
    price: 1500, // سعر البيع
    power: "0.3 Amp", // استهلاك الطاقة
    category: "Skill", // تصنيف المنتج (مثل Strength, Sports, Skill)
    isNew: true, // هل هو منتج جديد؟ (true أو false)
  },<-

    */
   {
    id: 1,
    name: "Boxing Combo Machine",
    image: ComboBoxer,
    description: "Test your strength and speed with our popular boxing and kick combo machine. Features power score display.",
    price: 3500, 
    power: "0.25 Amp",
    category: "Strength",
    isNew: false,
  },
  {
    id: 2,
    name: "King of the Hammer",
    image: KingOfHammer,
    description: "A classic carnival game that brings out the competitor in everyone. Prove you're the strongest!",
    price: 4200,
    power: "0.25 Amp",
    category: "Strength",
    isNew: true,
  },
  {
    id: 3,
    name: "Professional Air Hockey Table",
    image: AirHockeyTable,
    description: "Tournament-grade air hockey table for fast-paced, competitive fun for all ages.",
    price: 2800,
    power: "0.25 Amp",
    category: "Sports",
    isNew: false,
  },
  {
    id: 4,
    name: "Hoop Dreams Basketball",
    image: BasketballHoop,
    description: "High-energy basketball shooting game with score tracking. Perfect for events or arcades.",
    price: 3100,
    power: "0.25 Amp",
    category: "Sports",
    isNew: false,
  },
  {
    id: 5,
    name: "Happy Moment Claw Machine",
    image: ClawMachine,
    description: "The classic claw machine experience. High-quality build and customizable prize settings.",
    price: 2500,
    power: "0.5 Amp",
    category: "Skill",
    isNew: true,
  },
  {
    id: 6,
    name: "Shooting Gallery Pro",
    image: ShootingGallery,
    description: "Interactive target shooting game with sound effects and light display.",
    price: 5500,
    power: "1.2 Amp",
    category: "Skill",
    isNew: false,
  },
  {
    id: 7,
    name: "Light Reaction Challenge",
    image: LightReaction,
    description: "Test your reflexes with this fast-paced light reaction game. Great for all ages.",
    price: 3800,
    power: "0.6 Amp",
    category: "Skill",
    isNew: false,
  },
  {
    id: 8,
    name: "Catch Stick Game",
    image: CatchStick,
    description: "A fun, simple game testing hand-eye coordination and reaction time.",
    price: 1900,
    power: "0.1 Amp",
    category: "Skill",
    isNew: false,
  },
];
