import type { CollectionEntry } from "astro:content";
import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";

export interface Props {
  href: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, modDatetime, description } = frontmatter;
  
  // Calculate read time (rough estimate - 200 words per minute)
  const words = description?.split(" ").length || 0;
  const readTime = Math.max(1, Math.ceil(words / 200));

  return (
    <li className="group">
      <a href={href} className="block">
        {/* Thumbnail with zoom effect */}
        <div className="mb-3 overflow-hidden rounded-lg">
          <div className="aspect-square w-full">
            {frontmatter.thumbnail ? (
              <img 
                src={frontmatter.thumbnail}
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
          <span>{readTime} min read</span>
        </div>
      </a>
    </li>
  );
}
