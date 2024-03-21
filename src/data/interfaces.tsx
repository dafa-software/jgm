export type BlogPosts = BlogPost[];
export interface BlogPost {
  id: number;
  image?: string;
  date: string;
  date_gmt: string;
  guid: Guid;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: Title;
  content: Content;
  excerpt: Excerpt;
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: Meta;
  categories: number[];
  tags: string[];
  jetpack_sharing_enabled: boolean;
  jetpack_featured_media_url: string;
  _links: _links;
}
export interface Guid {
  rendered: string;
}
export interface Title {
  rendered: string;
}
export interface Content {
  rendered: string;
  protected: boolean;
}
export interface Excerpt {
  rendered: string;
  protected: boolean;
}
export interface Meta {
  neve_meta_sidebar: string;
  neve_meta_container: string;
  neve_meta_enable_content_width: string;
  neve_meta_content_width: number;
  neve_meta_title_alignment: string;
  neve_meta_author_avatar: string;
  neve_post_elements_order: string;
  neve_meta_disable_header: string;
  neve_meta_disable_footer: string;
  neve_meta_disable_title: string;
  _ti_tpc_template_sync: boolean;
  _ti_tpc_template_id: string;
  footnotes: string;
}
export interface _links {
  self: SelfItem[];
  collection: CollectionItem[];
  about: AboutItem[];
  author: AuthorItem[];
  replies: RepliesItem[];
  curies: CuriesItem[];
}
export interface SelfItem {
  href: string;
}
export interface CollectionItem {
  href: string;
}
export interface AboutItem {
  href: string;
}
export interface AuthorItem {
  embeddable: boolean;
  href: string;
}
export interface RepliesItem {
  embeddable: boolean;
  href: string;
}
export interface VersionHistoryItem {
  count: number;
  href: string;
}
export interface PredecessorVersionItem {
  id: number;
  href: string;
}
export interface WpAttachmentItem {
  href: string;
}
export interface WpTermItem {
  taxonomy: string;
  embeddable: boolean;
  href: string;
}
export interface CuriesItem {
  name: string;
  href: string;
  templated: boolean;
}
