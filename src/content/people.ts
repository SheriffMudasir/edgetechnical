/**
 * Team + testimonials. Nothing here is rendered as real until the owner fills it in.
 */

export type TeamMember = { name: string; role: string; bio: string; placeholder: boolean };

// TODO(owner): replace with real team members (name, role, short bio, photo in /public/images/team)
export const team: TeamMember[] = [
  { name: "Founder", role: "Founder & Lead Engineer", bio: "Add a short bio here.", placeholder: true },
  { name: "Team member", role: "Product Designer", bio: "Add a short bio here.", placeholder: true },
  { name: "Team member", role: "School Success Lead", bio: "Add a short bio here.", placeholder: true },
];

export type Testimonial = { quote: string; name: string; role: string; school: string };

/** Testimonials are hidden until real ones exist. Never add invented quotes. */
// TODO(owner): add real testimonials (with permission), then set showTestimonials to true
export const showTestimonials = false;
export const testimonials: Testimonial[] = [];

export const values = [
  { title: "Craft", body: "We sweat the details parents notice and the ones they don't: speed, clarity, accessibility." },
  { title: "Clarity", body: "Plain language, honest timelines and prices you can plan a term around." },
  { title: "Reliability", body: "Result day, admissions week, fee deadlines: our work holds up when it matters most." },
  { title: "Ownership", body: "We take responsibility for outcomes, and you keep ownership of your site, content and data." },
];
