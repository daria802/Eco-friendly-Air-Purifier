import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const blogPosts = [
  {
    title: 'The Science Behind Clean Air',
    category: 'Air Quality Science',
    excerpt: 'Understanding how modern filtration technology removes microscopic pollutants from your living space.',
    image: 'https://images.unsplash.com/photo-1747224317356-6dd1a4a078fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXIlMjBxdWFsaXR5JTIwbW9uaXRvcnxlbnwxfHx8fDE3Njk3MDQ0NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    readTime: '5 min read',
    date: 'Jan 25, 2026',
  },
  {
    title: '10 Ways to Live More Sustainably',
    category: 'Living Sustainably',
    excerpt: 'Small changes in your daily routine can make a significant impact on reducing your carbon footprint.',
    image: 'https://images.unsplash.com/photo-1762112211894-d090fccb74fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJyZWF0aGluZyUyMGZyZXNoJTIwYWlyfGVufDF8fHx8MTc2OTcxMTAyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    readTime: '7 min read',
    date: 'Jan 22, 2026',
  },
  {
    title: 'Creating a Healthy Home Environment',
    category: 'Living Sustainably',
    excerpt: 'Explore the relationship between indoor air quality, plants, and your overall wellbeing.',
    image: 'https://images.unsplash.com/photo-1631004970665-5b3e55194900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwaW50ZXJpb3IlMjBwbGFudHN8ZW58MXx8fHwxNzY5NzExMDI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    readTime: '6 min read',
    date: 'Jan 18, 2026',
  },
];

export function BlogGrid() {
  return (
    <section id="blog" className="py-[120px] bg-secondary/20">
      <div className="max-w-[1440px] mx-auto px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">News & Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed about air quality, sustainable living, and the latest
            in environmental health research.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group bg-white rounded-[16px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Large Thumbnail */}
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary/30">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-4 py-2 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>

                <button className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-4 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-[30px] hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
