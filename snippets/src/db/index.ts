import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

db.snippet.create({
  data: {
    title: "DB Snippet",
    code: `export default function MyComponent() {
        return <div>My Component</div>
    }`,
  },
});
