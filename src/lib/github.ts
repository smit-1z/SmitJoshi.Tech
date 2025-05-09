
export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  fork: boolean;
  archived: boolean;
}

export interface CustomProject {
  id: number;
  name: string;
  description: string;
  html_url: string;
  demo_url: string | null;
  language: string;
  type: "github" | "custom";
}

const username = 'smit-1z';

export async function fetchGitHubProjects(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const repos: GitHubRepo[] = await response.json();
    return repos.filter(repo => !repo.fork && !repo.archived);
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    return [];
  }
}

export function getCustomProjects(): CustomProject[] {
  return [
    {
      id: 1,
      name: "Github Finder",
      description: "A Github Finder app made using Github API",
      html_url: "https://github.com/smit-1z/github-finder",
      demo_url: "https://smit-1z.github.io/GithubFinder/",
      language: "JavaScript",
      type: "custom"
    },
    {
      id: 2,
      name: "Book List",
      description: "A Book List App, that stores information about the book like Title, Author and saves it to the browser's local Storage.",
      html_url: "https://github.com/smit-1z/Book-List-App",
      demo_url: "https://smit-1z.github.io/Booklist-App-/",
      language: "JavaScript",
      type: "custom"
    },
    {
      id: 3,
      name: "Menu Project",
      description: "A Restaurant menu project that sort different menu items based on its category. The data is collected from a Json file. In future if need be, the data can be fetched from APIs as well.",
      html_url: "https://github.com/smit-1z/menu",
      demo_url: "https://smit-1z.github.io/Menu-Project/",
      language: "JavaScript",
      type: "custom"
    },
    {
      id: 4,
      name: "Loan Calculator",
      description: "A Personalized Loan Calculator, that asks for parameters such as Loan Amount, Rate of Interest and Term duration. The UI is made using Bootstrap and validation is done using Javascript.",
      html_url: "https://github.com/smit-1z/loan-calculator",
      demo_url: "https://smit-1z.github.io/loanCalculator/",
      language: "JavaScript",
      type: "custom"
    }
  ];
}
