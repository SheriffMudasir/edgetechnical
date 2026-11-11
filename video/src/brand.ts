import { loadFont as loadSerif } from "@remotion/google-fonts/InstrumentSerif";
import { loadFont as loadSans } from "@remotion/google-fonts/Geist";
import { loadFont as loadMono } from "@remotion/google-fonts/GeistMono";

loadSerif("italic", { weights: ["400"], subsets: ["latin"] });
export const serif = loadSerif("normal", { weights: ["400"], subsets: ["latin"] }).fontFamily;
export const sans = loadSans("normal", { weights: ["400", "500", "600"], subsets: ["latin"] }).fontFamily;
export const mono = loadMono("normal", { weights: ["400", "500"], subsets: ["latin"] }).fontFamily;

export const c = {
  ink: "#0E1116",
  ink2: "#161A21",
  ink3: "#1E232C",
  paper: "#F5F2EB",
  paper2: "#ECE7DC",
  chalk: "#FFFFFF",
  edge: "#FF5A1F",
  ivy: "#1F4D3A",
  ivySoft: "#2C6A50",
  mint: "#8FD3B0",
  slate: "#5B6472",
  mist: "#8A93A0",
  line: "rgba(14,17,22,0.12)",
  lineInv: "rgba(245,242,235,0.16)",
};

/** Details shown on the closing card. Edit these, then re-render. */
export const contact = {
  phone: "0810 230 1860",
  legal: "Edgetechnical Solutions Limited · RC 9259130 · Abuja, Nigeria",
};
