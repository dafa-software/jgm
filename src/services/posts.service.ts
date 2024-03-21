import { type BlogPosts, type BlogPost } from "~/data/interfaces";
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
  const response = await fetch(
    `${env.WP_POSTS_URL}/?&_status=publish&per_page=50&include=${id}`,
  );
  const data = (await response.json()) as BlogPost;
  return data;
}
