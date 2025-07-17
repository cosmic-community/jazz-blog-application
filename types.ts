interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

interface Post extends CosmicObject {
  type: 'posts';
  metadata: {
    title: string;
    excerpt?: string;
    content: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    author?: Author;
    category?: Category;
    tags?: string;
    published_date?: string;
  };
}

interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    name: string;
    description?: string;
    color?: string;
  };
}

interface Author extends CosmicObject {
  type: 'authors';
  metadata: {
    name: string;
    bio?: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
    email?: string;
    website?: string;
    twitter?: string;
    specialties?: string;
  };
}

function isPost(obj: CosmicObject): obj is Post {
  return obj.type === 'posts';
}

function isCategory(obj: CosmicObject): obj is Category {
  return obj.type === 'categories';
}

function isAuthor(obj: CosmicObject): obj is Author {
  return obj.type === 'authors';
}