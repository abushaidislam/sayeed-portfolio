import { baseMeta } from '~/utils/meta';
import { getPosts } from './posts.server';
import { json } from '@remix-run/cloudflare';

export async function loader() {
  const allPosts = await getPosts();
  const featured = allPosts.filter(post => post.frontmatter.featured)[0];
  const posts = allPosts.filter(post => featured?.slug !== post.slug);

  return json({ posts, featured });
}

export function meta() {
  return baseMeta({
    title: 'Articles',
    description:
      'Technical articles and insights on modern web development, JavaScript, React, Node.js, and full-stack development best practices by Abushaid Islam Shaid.',
  });
}

export { Articles as default } from './articles';
