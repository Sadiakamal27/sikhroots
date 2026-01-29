import { Document } from "@contentful/rich-text-types";
import { Asset, EntrySkeletonType } from "contentful";

export interface BlogPostFields {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: Document;
  coverImage: Asset;
  date: string;
}

export type BlogPostEntry = EntrySkeletonType<BlogPostFields>;
