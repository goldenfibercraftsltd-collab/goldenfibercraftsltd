export interface TableData {
  title: string;
  headers: string[];
  rows: string[][];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ArticleImage {
  url: string;
  alt: string;
  title: string;
  caption: string;
}

export interface TocItem {
  id: string;
  title: string;
  level: number;
}

export interface RelatedClusterTopic {
  title: string;
  slug?: string;
  keyword: string;
  intent: string;
  description: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  h1: string;
  meta_title: string;
  meta_description: string;
  category: string;
  category_slug: string;
  featured_image: string;
  featured_image_alt: string;
  featured_image_caption: string;
  excerpt: string;
  author: string;
  published_date: string;
  updated_date: string;
  reading_time_minutes: number;
  word_count: number;
  primary_keyword: string;
  secondary_keywords: string[];
  table_of_contents: TocItem[];
  faqs: FaqItem[];
  tables: TableData[];
  related_products?: string[];
  cluster_topics?: RelatedClusterTopic[];
  content_markdown?: string;
}
