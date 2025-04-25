import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 text-center">
      <h1 className="text-4xl font-bold mb-4">Blog Post #{id}</h1>
      <p className="max-w-2xl text-gray-600">
        This is the detailed content for blog post #{id}. You can fetch real data here in the future.
      </p>
    </div>
  );
}

export default BlogPost;
