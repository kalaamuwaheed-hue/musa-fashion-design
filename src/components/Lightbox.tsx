import { useEffect } from "react";
import { imageFor } from "@/data/images";
import type { GalleryItem } from "@/data/site";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon, ExpandIcon } from "./Icons";

interface LightboxProps {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onChange: (nextIndex: number) => void;
}

export default function Lightbox({ items, index, onClose, onChange }: LightboxProps) {
  const item = items[index];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % items.length);
      if (e.key === "ArrowLeft") onChange((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length, onChange, onClose]);

  if (!item) return null;

  let touchStartX = 0;
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.changedTouches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) > 60) {
      onChange(delta > 0 ? (index - 1 + items.length) % items.length : (index + 1) % items.length);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-ink/97 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} — enlarged view`}
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-4 py-4 sm:px-6">
        <span className="text-[0.68rem] font-medium uppercase tracking-[0.25em] text-gold">
          {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close image viewer"
          className="flex h-11 w-11 items-center justify-center border border-white/25 text-white transition-colors hover:border-gold hover:text-gold"
        >
          <CloseIcon className="h-5 w-5" />
        </button>
      </div>

      <div
        className="relative flex flex-1 items-center justify-center px-3 pb-4 sm:px-16"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Previous image"
          onClick={() => onChange((index - 1 + items.length) % items.length)}
          className="absolute left-2 z-10 flex h-11 w-11 items-center justify-center border border-white/25 bg-ink/60 text-white transition-colors hover:border-gold hover:text-gold sm:left-4"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>

        <img
          src={imageFor(item.image)}
          alt={`${item.title} — ${item.caption}`}
          className="max-h-full max-w-full object-contain"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        />

        <button
          type="button"
          aria-label="Next image"
          onClick={() => onChange((index + 1) % items.length)}
          className="absolute right-2 z-10 flex h-11 w-11 items-center justify-center border border-white/25 bg-ink/60 text-white transition-colors hover:border-gold hover:text-gold sm:right-4"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>

      <div
        className="border-t border-white/10 px-5 py-5 text-center sm:px-10"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="flex items-center justify-center gap-2 font-display text-lg text-white sm:text-xl">
          <ExpandIcon className="hidden h-4 w-4 text-gold sm:block" />
          {item.title}
        </p>
        <p className="mx-auto mt-2 max-w-2xl text-[0.85rem] leading-relaxed text-white/55">
          {item.caption}
        </p>
      </div>
    </div>
  );
}
