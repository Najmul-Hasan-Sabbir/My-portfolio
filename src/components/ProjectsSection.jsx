import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Full-Stack Real Estate System",
    description: "Comprehensive platform for property listings, bookings, and payments with MERN stack implementation.",
    image: "/projects/project_1.png", // Changed to .jpg
    tags: ["React", "Node.js", "MongoDB", "Express"],
    demoUrl: "#",
    githubUrl: "https://github.com/Najmul-Hasan-Sabbir/Real_Estate_Management", // Specific link
  },
  {
     id: 2,
    title: "Competitive Programming Solutions",
    description: "Collection of 500+ problem solutions across Codeforces, LeetCode with algorithmic analysis and DSA.",
    image: "/projects/project_2.png", // Changed to .jpg
    tags: ["C++", "Algorithms", "DSA", "LeetCode"],
    demoUrl: "#",
    githubUrl: "https://github.com/Najmul-Hasan-Sabbir/Data-Structures-and-Algorithms_Leetcode", // Specific link
  },
  {
    id: 3,
    title: "Hospital Performance Analytics",
    description: "Interactive Power BI dashboard for tracking hospital cost and claims KPIs with SQL transformations.",
    image: "/projects/project_3.png", // Changed to .jpg
    tags: ["SQL", "Power BI", "Python", "Data Analysis"],
    demoUrl: "#",
    githubUrl: "https://github.com/Najmul-Hasan-Sabbir/Hospital-Performance-Data-Analysis-project-", // Specific link
  },
  {
    id: 4,
    title: "Health Insurance Claims Data Analysis",
    description: "Comprehensive analysis of health insurance claims data with statistical insights and visualization.",
    image: "/projects/project_4.png", // Changed to .jpg
    tags: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
    demoUrl: "#",
    githubUrl: "https://github.com/Najmul-Hasan-Sabbir/Health_Insurance_Claims_Data_Analysis", // Specific link
  },
  {
    id: 5,
    title: "Python for Data Analysis",
    description: "Collection of data analysis projects using Python libraries for data manipulation and visualization.",
    image: "/projects/project_5.png", // Changed to .jpg
    tags: ["Python", "Pandas", "NumPy", "Data Visualization"],
    demoUrl: "#",
    githubUrl: "https://github.com/Najmul-Hasan-Sabbir/Python-for-Data-Analysis", // Specific link
  },
  {

id: 6,
    title: "Sign Language Detection System",
    description: "Real-time sign language gesture recognition using YOLOv8 and OpenCV for practical ML application.",
    image: "/projects/project_6.png", // Changed to .jpg
    tags: ["Python", "YOLOv8", "OpenCV", "Machine Learning"],
    demoUrl: "#",
    githubUrl: "https://github.com/Najmul-Hasan-Sabbir/", // Keep as is

   
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my projects that showcase my expertise in software engineering, competitive programming, and data science.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* Image Section - Will show actual image if exists, otherwise placeholder */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    // If image doesn't exist, show placeholder
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/30 flex items-center justify-center">
                        <div class="text-center p-4">
                          <div class="text-4xl mb-2">${getProjectIcon(project.id)}</div>
                          <h3 class="text-lg font-semibold">${project.tags[0]}</h3>
                          <p class="text-sm text-muted-foreground">Project ${project.id}</p>
                        </div>
                      </div>
                    `;
                  }}
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        title="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      title="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Najmul-Hasan-Sabbir"
          >
            View All Projects on GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

// Helper function for placeholder icons
function getProjectIcon(id) {
  const icons = {
    1: "🏠", // Real Estate
    2: "🤖", // Sign Language
    3: "🏥", // Hospital Analytics
    4: "📊", // Health Insurance
    5: "🐍", // Python Data Analysis
    6: "⚡", // Competitive Programming
  };
  return icons[id] || "📁";
}