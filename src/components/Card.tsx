import type { CollectionEntry } from "astro:content";
import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";

export interface Props {
  href: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, modDatetime, ogImage, readingTime } = frontmatter;
  
  return (
    <li className="group">
      <a href={href} className="flex gap-4 sm:block">
        {/* Thumbnail */}
        <div className="relative aspect-square w-24 shrink-0 overflow-hidden rounded-lg sm:mb-3 sm:w-full">
          {ogImage ? (
            <img 
              src={typeof ogImage === 'string' ? ogImage : ogImage.src}
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-yellow-300 to-blue-200 transition-transform duration-500 group-hover:scale-110" />
          )}
        </div>
        
        {/* Content */}
        <div className="flex-grow">
          {secHeading ? (
            <h2 
              style={{ viewTransitionName: slugifyStr(title) }}
              className="text-base font-medium leading-tight line-clamp-2"
            >
              {title}
            </h2>
          ) : (
            <h3 
              style={{ viewTransitionName: slugifyStr(title) }}
              className="text-base font-medium leading-tight line-clamp-2"
            >
              {title}
            </h3>
          )}

          {/* Date and Read Time */}
          <div className="mt-1 flex items-center gap-2 text-xs text-skin-base opacity-70">
            <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} />
            <span>•</span>
            <span>{readingTime || "1 min read"}</span>
          </div>
        </div>
      </a>
    </li>
  );
}
