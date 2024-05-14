import { Post } from "@prisma/client";
import { db } from "@/db";
import { title } from "process";

export type PostListData = Post & {
  topic: { slug: string };
  user: { name: string | null };
  _count: { comments: number };
};

export function fetchPostsByTopicSlug(slug: string): Promise<PostListData[]> {
  return db.post.findMany({
    where: {
      topic: { slug },
    },
    include: {
      topic: {
        select: {
          slug: true,
        },
      },
      user: {
        select: {
          name: true,
        },
      },
      _count: {
        select: { comments: true },
      },
    },
  });
}

export function fetchTopPosts(): Promise<PostListData[]> {
  return db.post.findMany({
    orderBy: [
      {
        comments: {
          _count: "desc",
        },
      },
    ],
    include: {
      user: { select: { name: true, image: true } },
      topic: { select: { slug: true } },
      _count: { select: { comments: true } },
    },
    take: 5,
  });
}

export function fetchPostsBySearchTerm(term: string): Promise<PostListData[]> {
  return db.post.findMany({
    include: {
      user: { select: { name: true, image: true } },
      topic: { select: { slug: true } },
      _count: { select: { comments: true } },
    },
    where: {
      OR: [
        {
          title: { contains: term },
        },
        {
          content: { contains: term },
        },
        {
          topic: {
            slug: {
              contains: term,
            },
          },
        },
      ],
    },
  });
}
