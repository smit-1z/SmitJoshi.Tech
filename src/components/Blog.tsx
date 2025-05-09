
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen } from "lucide-react";

// Sample general blog posts
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    date: "May 02, 2024",
    description: "Learn how to use React Hooks to simplify your React components and manage state effectively.",
    minutesToRead: 5,
    link: "#"
  },
  {
    id: 2,
    title: "Building a Portfolio Website with Modern Tools",
    date: "April 15, 2024",
    description: "A guide to creating your own portfolio site with React, Tailwind CSS, and other modern web technologies.",
    minutesToRead: 8,
    link: "#"
  },
  {
    id: 3,
    title: "The Future of Web Development",
    date: "March 28, 2024",
    description: "Exploring upcoming trends and technologies that will shape the future of web development.",
    minutesToRead: 6,
    link: "#"
  }
];

// Machine Learning blog posts
const mlBlogPosts = [
  {
    id: 1,
    title: "Comparing Two Different CNN Image Classifiers on Multi-Class Image Dataset",
    date: "April 10, 2024",
    description: "An in-depth analysis of two CNN architectures for image classification tasks with comparative results.",
    minutesToRead: 7,
    link: "https://medium.com/@smit.joshi80/comparing-two-different-cnn-image-classifiers-on-multi-class-image-dataset-1b5f755168f7"
  },
  {
    id: 2,
    title: "Naive Bayes Text Classifier Using Python",
    date: "March 15, 2024",
    description: "Building and evaluating a Naive Bayes classifier for text data using Python's scikit-learn library.",
    minutesToRead: 6,
    link: "https://medium.com/@smit.joshi80/naive-bayes-text-classifier-using-python-822366f9165a"
  },
  {
    id: 3,
    title: "Image Classifier Using PyTorch",
    date: "February 20, 2024",
    description: "A step-by-step guide to creating an image classifier with PyTorch, including data preparation and model training.",
    minutesToRead: 8,
    link: "https://medium.com/@smit.joshi80/image-classifier-using-pytorch-53dccbbecd72"
  },
  {
    id: 4,
    title: "Titanic Tutorial: Kaggle Challenge",
    date: "January 05, 2024",
    description: "Solving the classic Kaggle Titanic survival prediction challenge with various machine learning techniques.",
    minutesToRead: 10,
    link: "https://medium.com/@smit.joshi80/titanic-tutorial-kaggle-challenge-225c5a58100"
  }
];

export function Blog() {
  return (
    <section id="blog" className="section-padding bg-secondary/30">
      <div className="container px-4 md:px-6">
        <h2 className="mb-2 text-center">Blog</h2>
        <p className="text-center text-foreground/70 mb-8 max-w-2xl mx-auto">
          Thoughts, ideas, and knowledge I've shared with the community.
        </p>
        
        <Tabs defaultValue="ml" className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="ml" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>Machine Learning</span>
              </TabsTrigger>
              <TabsTrigger value="general">General</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="ml" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mlBlogPosts.map((post) => (
                <Card key={post.id} className="card-hover border-l-4 border-l-primary">
                  <CardHeader>
                    <CardDescription>{post.date} • {post.minutesToRead} min read</CardDescription>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      {post.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="hover:bg-primary/10" asChild>
                      <a href={post.link} target="_blank" rel="noopener noreferrer">
                        Read on Medium
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="general">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Card key={post.id} className="card-hover">
                  <CardHeader>
                    <CardDescription>{post.date} • {post.minutesToRead} min read</CardDescription>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      {post.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="hover:bg-primary/10" asChild>
                      <a href={post.link}>Read More</a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            {blogPosts.length > 3 && (
              <div className="flex justify-center mt-8">
                <Button variant="outline">View All Posts</Button>
              </div>
            )}
            
            {blogPosts.length === 0 && (
              <div className="text-center py-12 bg-muted rounded-lg">
                <h3 className="text-xl mb-2">Coming Soon</h3>
                <p className="text-muted-foreground">
                  I'm working on some interesting articles. Check back soon!
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
