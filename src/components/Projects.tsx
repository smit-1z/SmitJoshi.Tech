
import { useEffect, useState } from "react";
import { GitHubRepo, fetchGitHubProjects, CustomProject, getCustomProjects } from "@/lib/github";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ProjectType = GitHubRepo | CustomProject;

export function Projects() {
  const [githubProjects, setGithubProjects] = useState<GitHubRepo[]>([]);
  const [customProjects, setCustomProjects] = useState<CustomProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    async function loadProjects() {
      try {
        setLoading(true);
        const data = await fetchGitHubProjects();
        setGithubProjects(data);
        
        // Load custom projects
        const custom = getCustomProjects();
        setCustomProjects(custom);
        
        setError(null);
      } catch (err) {
        setError("Failed to load projects");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    
    loadProjects();
  }, []);
  
  return (
    <section id="projects" className="section-padding">
      <div className="container px-4 md:px-6">
        <h2 className="mb-2 text-center">Projects</h2>
        <p className="text-center text-foreground/70 mb-8 max-w-2xl mx-auto">
          A selection of my recent projects and open source contributions.
        </p>
        
        <Tabs defaultValue="featured" className="w-full max-w-4xl mx-auto mb-8">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="featured">Featured Projects</TabsTrigger>
              <TabsTrigger value="github">GitHub</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="featured" className="space-y-8">
            {loading && (
              <div className="flex justify-center py-12">
                <div className="animate-pulse flex space-x-4">
                  <div className="h-12 w-12 bg-secondary rounded-full"></div>
                  <div className="space-y-4 flex-1 max-w-md">
                    <div className="h-4 bg-secondary rounded"></div>
                    <div className="h-4 bg-secondary rounded w-3/4"></div>
                  </div>
                </div>
              </div>
            )}
            
            {error && (
              <div className="text-center py-12">
                <p className="text-destructive">{error}</p>
                <Button 
                  variant="outline" 
                  onClick={() => window.location.reload()}
                  className="mt-4"
                >
                  Retry
                </Button>
              </div>
            )}
            
            {!loading && !error && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {customProjects.map((project) => (
                  <Card key={project.id} className="card-hover border-l-4 border-l-primary">
                    <CardHeader>
                      <CardTitle className="truncate">{project.name}</CardTitle>
                      <CardDescription className="text-foreground/70">
                        {project.language || "Various"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="line-clamp-3 text-sm text-muted-foreground">
                        {project.description || "No description available"}
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm" asChild className="flex items-center gap-2">
                        <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                      {project.demo_url && (
                        <Button variant="default" size="sm" asChild className="flex items-center gap-2">
                          <a href={project.demo_url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="github">
            {loading && (
              <div className="flex justify-center py-12">
                <div className="animate-pulse flex space-x-4">
                  <div className="h-12 w-12 bg-secondary rounded-full"></div>
                  <div className="space-y-4 flex-1 max-w-md">
                    <div className="h-4 bg-secondary rounded"></div>
                    <div className="h-4 bg-secondary rounded w-3/4"></div>
                  </div>
                </div>
              </div>
            )}
            
            {error && (
              <div className="text-center py-12">
                <p className="text-destructive">{error}</p>
                <Button 
                  variant="outline" 
                  onClick={() => window.location.reload()}
                  className="mt-4"
                >
                  Retry
                </Button>
              </div>
            )}
            
            {!loading && !error && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {githubProjects.map((project) => (
                    <Card key={project.id} className="card-hover">
                      <CardHeader>
                        <CardTitle className="truncate">{project.name}</CardTitle>
                        <CardDescription className="text-foreground/70">
                          {project.language || "Various"}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="line-clamp-3 text-sm text-muted-foreground h-14">
                          {project.description || "No description available"}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {project.topics.slice(0, 3).map(topic => (
                            <span 
                              key={topic} 
                              className="text-xs bg-secondary py-1 px-2 rounded-sm"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="16" 
                              height="16" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              className="mr-1"
                            >
                              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                            </svg>
                            <span>{project.stargazers_count}</span>
                          </div>
                          <div className="flex items-center">
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="16" 
                              height="16" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              className="mr-1"
                            >
                              <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM9 3.6v2.4m6-2.4v2.4M3.6 9h16.8M3.6 15h16.8m-10.2 6v-2.4m3.6 2.4v-2.4" />
                            </svg>
                            <span>{project.forks_count}</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                            View Code
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                <div className="flex justify-center mt-12">
                  <Button asChild>
                    <a 
                      href="https://github.com/smit-1z" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
