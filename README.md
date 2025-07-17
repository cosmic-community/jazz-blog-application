# Jazz Blog Application

![App Preview](https://imgix.cosmicjs.com/e7269270-62db-11f0-a051-23c10f41277a-photo-1508700115892-45ecd05ae2ad-1752735705765.jpg?w=1200&h=300&fit=crop&auto=format,compress)

## Features
- Dynamic blog posts about jazz, featuring content-rich articles with markdown support.
- Author profiles display detailed bios and social links.
- Categories to organize and filter blog posts based on users' interests.
- Responsive UI with elegant design tailored for jazz aficionados.
- Utilizes Cosmic CMS as the backend for content management.

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=68789f4a2920a13bc482d26b&clone_repository=687967eb40d3c347c9bea2ea)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a blog about Jazz music with posts, authors, and categories."

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket. set apiEnvironment: staging in cosmic config.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used
- [Next.js](https://nextjs.org/) - A React framework for server-side rendering and static site generation.
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Cosmic](https://www.cosmicjs.com) - Headless CMS for managing content.
- [Tailwind CSS](https://tailwindcss.com) - A utility-first CSS framework for custom styling.
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript.

## Getting Started

### Prerequisites
- Node.js and Bun installed to manage dependencies and run the application.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/jazz-blog.git
   cd jazz-blog
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Create a `.env.local` file in the root directory and add your Cosmic credentials:
   ```env
   COSMIC_BUCKET_SLUG='your-bucket-slug'
   COSMIC_READ_KEY='your-read-key'
   COSMIC_WRITE_KEY='your-write-key'
   ```

4. Start the development server:
   ```bash
   bun run dev
   ```

## Cosmic SDK Examples

The application uses the Cosmic SDK to fetch data from your Cosmic bucket. Here are some example functions used in the project:

```typescript
import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG,
  readKey: process.env.COSMIC_READ_KEY,
  writeKey: process.env.COSMIC_WRITE_KEY,
  apiEnvironment: 'staging',
});

export async function fetchPosts() {
  return await cosmic.objects.find({ type: 'posts' }).props(['slug', 'title', 'metadata']);
}
```

## Cosmic CMS Integration

The application seamlessly integrates with your existing Cosmic CMS bucket to manage posts, authors, and categories. You can easily update content through the CMS, and those changes will reflect instantly on your site.

## Deployment Options

You can deploy this application using Vercel for optimal performance and seamless integration with Next.js. Simply connect your GitHub repository to Vercel, and it will handle the deployment automatically.

Ensure that your `.env` variables are configured in the Vercel dashboard for the deployment environment.

<!-- README_END -->