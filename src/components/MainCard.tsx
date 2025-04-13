import type { CollectionEntry } from "astro:content";
import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";

export interface Props {
  href: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function MainCard({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, modDatetime, description, ogImage } = frontmatter;
  
  // Calculate read time (rough estimate - 200 words per minute)
  const words = description?.split(" ").length || 0;
  const readTime = Math.max(1, Math.ceil(words / 200));

  return (
    <div className="group">
      <a href={href} className="block">
        {/* Thumbnail with 16:9 ratio */}
        <div className="mb-4 overflow-hidden rounded-xl">
          <div className="aspect-square sm:aspect-video w-full">  {/* Changed to aspect-video */}
            {ogImage ? (
              <img 
                src={ogImage}
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-yellow-300 to-blue-200 transition-transform duration-500 group-hover:scale-110" />
            )}
          </div>
        </div>
        
        {/* Title */}
        {secHeading ? (
          <h2 
            style={{ viewTransitionName: slugifyStr(title) }}
            className="text-xl font-medium leading-tight line-clamp-2 md:text-2xl"
          >
            {title}
          </h2>
        ) : (
          <h3 
            style={{ viewTransitionName: slugifyStr(title) }}
            className="text-xl font-medium leading-tight line-clamp-2 md:text-2xl"
          >
            {title}
          </h3>
        )}

        {/* Date and Read Time */}
        <div className="mt-2 flex items-center gap-2 text-sm text-skin-base opacity-70">  {/* Slightly larger meta text */}
          <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} />
          <span>•</span>
          <span>{readTime} min read</span>
        </div>
      </a>
    </div>
  );
} 