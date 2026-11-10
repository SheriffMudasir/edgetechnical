import { whatsappLink } from "@/content/site";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

/** Subtle floating WhatsApp button — how Nigerian school owners actually make contact. */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Edgetechnical on WhatsApp"
      data-cursor="Chat"
      className="group fixed bottom-4 right-4 z-40 flex h-14 items-center gap-2 rounded-full border border-paper/10 bg-ink py-2 pl-2 pr-2 text-paper shadow-[0_10px_30px_-10px_rgba(14,17,22,0.5)] transition-[padding] duration-500 ease-[var(--ease-out-expo)] hover:pr-5 md:bottom-6 md:right-6"
    >
      <span className="flex size-10 items-center justify-center rounded-full bg-[#25D366] text-ink">
        <WhatsAppIcon className="size-5" />
      </span>
      <span className="grid grid-cols-[0fr] transition-[grid-template-columns] duration-500 ease-[var(--ease-out-expo)] group-hover:grid-cols-[1fr] group-focus-visible:grid-cols-[1fr]">
        <span className="overflow-hidden whitespace-nowrap text-sm font-medium">Chat with us</span>
      </span>
    </a>
  );
}
