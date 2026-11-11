/**
 * Voiceover script for the Edgetechnical marketing video.
 * One entry per scene. Edit the text here, then run `node scripts/gen-voice.mjs`.
 */
// The voice is the owner's cloned voice; its ID lives in .env as GEMINI_VOICE_ID (never commit it).
// Daily limit: 100 TTS requests per model, shared with other projects on the same key.
export const voice = {
  model: "gemini-3.8-flash-tts",
  style: "confident, warm brand-film narrator; calm and measured, clear diction",
};

export const scenes = [
  {
    id: "hook",
    text: "Every organisation runs on work. And too much of that work still runs on paper, spreadsheets, and endless WhatsApp messages.",
  },
  {
    id: "intro",
    text: "We're Edgetechnical. We build software and AI that does the heavy lifting.",
  },
  {
    id: "build",
    text: "Web and mobile apps, built around how your business actually works. AI assistants that answer your customers at any hour. And automations that move work from one step to the next, without anyone chasing it.",
  },
  {
    id: "education",
    text: "Our deepest expertise is education. School websites, online admissions, results, and management systems that run the whole school.",
  },
  {
    id: "almuminun",
    text: "For Al-Mu'minun International Academy, we built a bilingual website, online admissions, and portals for staff and parents. One connected system.",
  },
  {
    id: "studywise",
    text: "And StudyWise AI is our own product: an exam-prep platform that helps students get ready for WAEC, NECO and JAMB.",
  },
  {
    id: "values",
    text: "Designed with care. Built for Nigerian realities. Supported long after launch.",
  },
  {
    id: "cta",
    text: "Edgetechnical. Software and AI that move your work forward. Let's build yours.",
  },
];
