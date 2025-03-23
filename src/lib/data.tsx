import type { JSX } from "solid-js"

import hero1 from "@/assets/hero1.webp";
import hero2 from "@/assets/hero2.webp";
import hero7 from "@/assets/hero7.webp";
import hero3 from "@/assets/hero3.webp";
import hero4 from "@/assets/hero4.webp";
import hero8 from "@/assets/hero8.webp";
import hero5 from "@/assets/hero5.webp";
import hero9 from "@/assets/hero9.webp";
import hero10 from "@/assets/hero10.webp";
import ocean from "@/assets/ocean.webp";

import speaker1 from "../assets/port-crp.jpg";
import speaker2 from "@/assets/Advin.webp";
import speaker3 from "@/assets/Dr_Bina_Thomas.webp";
import speaker4 from "@/assets/Sabarinath.webp";
// import speaker5 from "@/assets/Neethu_George.webp";
import speaker6 from "@/assets/Anima.webp"
import speaker7 from "@/assets/narayan.png"
import { ScrollItem } from "@/components/ScrollSection";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SpeakerSection from "@/components/SpeakerSection";
import SpeakerDetail from "@/components/SpeakerDetail";

export const HeroSectionData = {
  heroImages: ["/hero1.webp", "/hero2.webp", "/hero7.webp"],
  smallerImages: ["/hero3.webp", "/hero4.webp", "/hero8.webp"],
  tedXImages: ["/hero5.webp", "/hero9.webp", "/hero10.webp"],
  bottomTexts: ["5 Speakers", "Join us", "Different Perspectives",],
  stableImage: "/ocean.webp",
};

type Speaker = {
  id: number;
  name: string;
  position: string;
  quote: JSX.Element;
  sub: JSX.Element;
  image: string;
};

export const speakers: Speaker[] = [
  {
    id: 1,
    name: "Ith njn thanne",
    position: "Valiya ala",
    quote: <>Lorem <span class="text-yellow-600">Ipsum</span> is simply dummy text of the printing and typesetting  <span class="underline text-white-500 decoration-tedx-red decoration-dashed">industry.</span></>,
    sub: "Rising star in nthokeyo.",
    image: speaker1,
  },
];

// export const verticalItems: ScrollItem[] = speakers.map((speaker) => ({
//   id: speaker.id,
//   title: speaker.name,
//   description: speaker.position,
//   content: () => (
//     <SpeakerDetail name={speaker.name} position={speaker.position} photo={speaker.image} quote={speaker.quote} />
//   ),
// }));

export const horizontalItems: ScrollItem[] = [
  {
    id: 1,
    title: "Wildlife in Action: A Glimpse into Nature's Daily Drama",
    description:
      "Explore the untouched beauty of forests, mountains, and rivers as we uncover the hidden secrets of nature's most breathtaking landscapes.",
    content: () => <HeroSection />,
  },
  {
    id: 2,
    title: "Nature's Symphony: The Sounds That Heal the Soul",
    description:
      "Immerse yourself in the soothing sounds of chirping birds, rustling leaves, and flowing streams - nature's music for peace and tranquility.",
    content: () => <AboutSection />,
  },
  {
    id: 3,
    title: "Nature's Masterpieces: Landscapes That Take Your Breath Away",
    description:
      "Discover stunning views of majestic mountains, endless oceans, and golden sunsets that remind us of nature's artistic brilliance.",
    content: () => <SpeakerSection />,
  },
];