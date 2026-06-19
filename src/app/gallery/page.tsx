"use client";

import { useState } from "react";
import Image from "next/image";
import { PageHeader } from "@/components/layout/page-header";
import { galleryItems, galleryCategories } from "@/data/mock-data";
import { X, ZoomIn, Calendar } from "lucide-react";
import type { GalleryItem } from "@/types/bbtfoa";

function LightboxModal({ item, onClose }: { item: GalleryItem; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-72 sm:h-[28rem] bg-tea-darkest">
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
          {item.caption && <p className="text-sm text-muted-foreground mt-1">{item.caption}</p>}
          <div className="flex items-center gap-3 mt-3">
            <span className="badge-green">{item.category}</span>
            {item.date && (
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar size={11} /> {item.date}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((g) => g.category === activeCategory);

  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="A visual journey through Bangladesh's bought leaf tea gardens, harvests, and BBLTFOA activities."
        breadcrumbs={[{ label: "Gallery" }]}
      />

      <section className="section-py bg-muted">
        <div className="section-container">
          {/* Filter */}
          <div className="flex gap-2 flex-wrap mb-10">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm px-4 py-1.5 rounded-full font-medium transition-colors border ${
                  activeCategory === cat
                    ? "bg-tea-green text-white border-tea-green"
                    : "bg-white text-muted-foreground border-border hover:border-tea-green hover:text-tea-green"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item, i) => {
              const featured = i % 7 === 0;
              return (
                <button
                  key={item.id}
                  onClick={() => setLightboxItem(item)}
                  className={`group relative rounded-2xl overflow-hidden text-left shadow-sm hover:shadow-lg transition-all duration-300 ${
                    featured ? "col-span-2 row-span-2" : ""
                  }`}
                >
                  <div className={`relative w-full ${featured ? "h-64 sm:h-[33rem]" : "h-36 sm:h-44"}`}>
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      sizes={featured ? "(max-width: 640px) 100vw, 50vw" : "(max-width: 640px) 50vw, 25vw"}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
                      <ZoomIn size={18} className="text-white" />
                    </span>
                  </div>
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-white text-xs sm:text-sm font-semibold leading-snug drop-shadow">{item.title}</p>
                    <p className="text-white/75 text-[10px] sm:text-xs">{item.category}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <ZoomIn size={32} className="mx-auto mb-3 opacity-40" />
              <p className="font-semibold text-foreground">No photos in this category yet.</p>
            </div>
          )}

          <p className="text-xs text-muted-foreground text-center mt-10">
            Photographs are representative of Bangladesh&rsquo;s bought leaf tea sector.
          </p>
        </div>
      </section>

      {lightboxItem && (
        <LightboxModal item={lightboxItem} onClose={() => setLightboxItem(null)} />
      )}
    </>
  );
}
