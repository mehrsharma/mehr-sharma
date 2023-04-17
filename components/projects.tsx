import { useEffect, useRef } from 'react';
import PostPreview from './post-preview';
import type Post from '../interfaces/post';
import styles from './Intro.module.css';

type Props = {
  posts: Post[];
};

const Projects = ({ posts }: Props) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && headingRef.current) {
          headingRef.current.classList.add(styles.typing);
          observer.unobserve(sectionRef.current!);
        }
      },
      {
        rootMargin: '-50px',
        threshold: 0,
      }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <section ref={sectionRef}>
      <div className="inline-block">
        <h2
          ref={headingRef}
          className={`hidden mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight`}
        >
          projects
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
