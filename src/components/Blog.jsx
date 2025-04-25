// src/components/Blog.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    date: 'April 07, 2020',
    author: 'Admin',
    comments: 3,
    image: 'https://themewagon.github.io/petsitting/images/image_1.jpg',
  },
  {
    id: 2,
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    date: 'April 07, 2020',
    author: 'Admin',
    comments: 3,
    image: 'https://themewagon.github.io/petsitting/images/image_2.jpg',
  },
  {
    id: 3,
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    date: 'April 07, 2020',
    author: 'Admin',
    comments: 3,
    image: 'https://themewagon.github.io/petsitting/images/image_3.jpg',
  },
];

function Blog() {
  return (
    <section className="py-16 px-4 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">
          Latest News from Our Blog
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className="bg-white text-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img src={post.image} alt="Blog" className="w-full h-48 object-cover" />
              <div className="p-5 space-y-2">
                <div className="text-xs text-gray-500">
                  {post.date} • {post.author} • {post.comments} comments
                </div>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-lg font-semibold text-gray-800 hover:text-orange-500 transition"
                >
                  {post.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
