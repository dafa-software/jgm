import { type BlogPost, type BlogPosts } from "~/types";
import { env } from "~/env.js";

export async function getAllPosts(): Promise<BlogPosts> {
  const response = await fetch(
    `${env.WP_POSTS_URL}/?&_status=publish&per_page=20`,
  );
  let data = (await response.json()) as BlogPosts;

  data = data.map((post) => {
    const imageRegex = /<img.*?src=['"](.*?)['"]/;
    const imageMatch = imageRegex.exec(post.content.rendered);
    if (imageMatch) {
      post.image = imageMatch[1];
    }
    return post;
  });

  return data;
}

export async function getSinglePost(id: number): Promise<BlogPost> {
  const response = await fetch(`${env.WP_POSTS_URL}/${id}`);

  const data = (await response.json()) as BlogPost;

  const imageRegex = /<img.*?src=['"](.*?)['"]/;
  if (data.content) {
    const imageMatch = imageRegex.exec(data.content.rendered.toString());
    if (imageMatch) {
      data.image = imageMatch[1];
    }
  }

  return data;
}
