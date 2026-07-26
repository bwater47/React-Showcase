// Import images for projectsData array.
import PokeDexImage from "../../assets/PokeDex.png";
import ActivePeakImage from "../../assets/ActivePeak.png";
import PWAImage from "../../assets/PWA.png";
import SocialAPIImage from "../../assets/SocialAPI.png";
import TweetCodeImage from "../../assets/TweetCodeImage.png";
import HRTrackSuiteImage from "../../assets/HRTrackSuite.png";

const projectsData = [
  {
    title: "PokeDex",
    image: PokeDexImage,
    linkType: "live",
    liveLink: "https://pokedex-amber-nu.vercel.app/",
  },
  {
    title: "Active Peak",
    image: ActivePeakImage,
    linkType: "live",
    liveLink: "https://active-peak.vercel.app/",
  },
  {
    title: "Tweet Code",
    image: TweetCodeImage,
    linkType: "live",
    liveLink: "https://tweet-code.vercel.app/",
  },
  {
    title: "Social API",
    image: SocialAPIImage,
    linkType: "video",
    videoEmbed: "https://app.screencastify.com/watch/TaC1BmPkAoaBaK81Oxj6/embed",
  },
  {
    title: "Installable Note Pad",
    image: PWAImage,
    linkType: "live",
    liveLink: "https://pwa-note-editor.vercel.app/",
  },
  {
    title: "HR Track Suite",
    image: HRTrackSuiteImage,
    linkType: "video",
    videoEmbed: "https://app.screencastify.com/watch/rZYp48rticydc6Biar7d/embed",
  },
];

export default projectsData;
