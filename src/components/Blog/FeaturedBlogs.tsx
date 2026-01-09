import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { motion } from "framer-motion";
import { FiArrowRight, FiCalendar, FiTag } from "react-icons/fi";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useGlobalData from "@docusaurus/useGlobalData";

// Blog post metadata structure
interface BlogPostMetadata {
  title: string;
  description?: string;
  date: string;
  permalink: string;
  image?: string;
  tags?: Array<string | { label: string; permalink: string }>;
  readingTime?: number;
}

const FeaturedBlogsContent: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  const globalData = useGlobalData();
  
  // Access blog posts from Docusaurus blog plugin global data
  const blogPluginData = globalData?.["docusaurus-plugin-content-blog"]?.["default"];
  
  // Try different possible data structures
  let blogPosts: any[] = [];
  
  if (blogPluginData) {
    // The blog plugin data structure can vary, try multiple paths
    // Structure 1: blogListPaginated.items (most common)
    if (blogPluginData.blogListPaginated?.items) {
      blogPosts = blogPluginData.blogListPaginated.items;
    }
    // Structure 2: Direct blogPosts array
    else if (Array.isArray(blogPluginData.blogPosts)) {
      blogPosts = blogPluginData.blogPosts;
    }
    // Structure 3: blogListItems
    else if (Array.isArray(blogPluginData.blogListItems)) {
      blogPosts = blogPluginData.blogListItems;
    }
    // Structure 4: Check all keys for arrays that might contain blog posts
    else {
      const allKeys = Object.keys(blogPluginData);
      for (const key of allKeys) {
        const value = blogPluginData[key];
        if (Array.isArray(value) && value.length > 0) {
          const firstItem = value[0];
          // Check if it looks like a blog post structure
          if (
            (firstItem?.metadata && firstItem.metadata.title) ||
            (firstItem?.title && firstItem?.permalink) ||
            (firstItem?.content?.metadata?.title)
          ) {
            blogPosts = value;
            break;
          }
        }
      }
    }
  }
  
  // Get the 3 most recent blog posts, sorted by date
  const featuredBlogs = blogPosts
    .slice()
    .sort((a: any, b: any) => {
      const dateA = new Date(
        a?.metadata?.date || a?.date || a?.content?.metadata?.date || 0
      ).getTime();
      const dateB = new Date(
        b?.metadata?.date || b?.date || b?.content?.metadata?.date || 0
      ).getTime();
      return dateB - dateA; // Most recent first
    })
    .slice(0, 3);
  

  if (featuredBlogs.length === 0) {
    return null;
  }

  return (
    <section
      style={{
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto 60px auto",
        padding: "0 20px",
      }}
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "32px",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 32px)",
              fontWeight: "700",
              margin: "0 0 8px 0",
              background:
                "linear-gradient(135deg, var(--ifm-color-primary) 0%, var(--ifm-color-primary-dark) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Latest Blog Posts
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "var(--ifm-color-emphasis-700)",
              margin: 0,
            }}
          >
            Technical insights and engineering deep-dives
          </p>
        </div>
        <Link
          to="/blog"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 20px",
            backgroundColor: "var(--ifm-color-primary)",
            color: "white",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "600",
            textDecoration: "none",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.9";
            e.currentTarget.style.transform = "translateX(4px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "translateX(0)";
          }}
        >
          View All
          <FiArrowRight size={16} />
        </Link>
      </motion.div>

      {/* Blog Posts Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {featuredBlogs
          .filter((blogPost: any) => {
            // Filter out invalid blog posts
            const metadata = blogPost?.metadata || blogPost?.content?.metadata || blogPost;
            return metadata && metadata.title && metadata.permalink;
          })
          .map((blogPost: any, index: number) => {
            // Handle different data structures
            let metadata: BlogPostMetadata;
            
            if (blogPost.metadata) {
              metadata = blogPost.metadata;
            } else if (blogPost.content?.metadata) {
              metadata = blogPost.content.metadata;
            } else {
              metadata = blogPost as BlogPostMetadata;
            }
            
            const date = new Date(metadata.date);
            const formattedDate = date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            });

            return (
            <motion.div
              key={metadata.permalink}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Link
                to={metadata.permalink}
                style={{
                  display: "block",
                  backgroundColor: "var(--ifm-card-background-color)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "var(--ifm-global-shadow-md)",
                  border: "1px solid var(--ifm-color-emphasis-200)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "var(--ifm-global-shadow-tl)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "var(--ifm-global-shadow-md)";
                }}
              >
                {/* Image */}
                {metadata.image && (
                  <div
                    style={{
                      width: "100%",
                      height: "160px",
                      backgroundColor: "var(--ifm-color-emphasis-200)",
                      backgroundImage: `url(${metadata.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                )}

                <div style={{ padding: "20px" }}>
                  {/* Title */}
                  <h3
                    style={{
                      margin: "0 0 12px 0",
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "var(--ifm-font-color-base)",
                      lineHeight: "1.4",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {metadata.title}
                  </h3>

                  {/* Description */}
                  {metadata.description && (
                    <p
                      style={{
                        margin: "0 0 16px 0",
                        fontSize: "14px",
                        lineHeight: "1.5",
                        color: "var(--ifm-color-emphasis-700)",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {metadata.description}
                    </p>
                  )}

                  {/* Tags - Compact */}
                  {metadata.tags && metadata.tags.length > 0 && (
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "6px",
                        marginBottom: "16px",
                      }}
                    >
                      {metadata.tags.slice(0, 3).map((tag: any, tagIndex: number) => (
                        <span
                          key={tagIndex}
                          style={{
                            padding: "3px 8px",
                            backgroundColor: "var(--ifm-color-emphasis-200)",
                            color: "var(--ifm-color-emphasis-700)",
                            borderRadius: "4px",
                            fontSize: "10px",
                            fontWeight: "600",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          <FiTag size={10} />
                          {typeof tag === "string" ? tag : tag.label}
                        </span>
                      ))}
                      {metadata.tags.length > 3 && (
                        <span
                          style={{
                            padding: "3px 8px",
                            backgroundColor: "var(--ifm-color-emphasis-100)",
                            color: "var(--ifm-color-emphasis-600)",
                            borderRadius: "4px",
                            fontSize: "10px",
                            fontWeight: "500",
                          }}
                        >
                          +{metadata.tags.length - 3}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Date */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      paddingTop: "12px",
                      borderTop: "1px solid var(--ifm-color-emphasis-200)",
                      fontSize: "12px",
                      color: "var(--ifm-color-emphasis-600)",
                    }}
                  >
                    <FiCalendar size={12} />
                    <span>{formattedDate}</span>
                    {metadata.readingTime && (
                      <>
                        <span>•</span>
                        <span>{Math.ceil(metadata.readingTime)} min read</span>
                      </>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

const FeaturedBlogs: React.FC = () => {
  return (
    <BrowserOnly fallback={null}>
      {() => <FeaturedBlogsContent />}
    </BrowserOnly>
  );
};

export default FeaturedBlogs;
