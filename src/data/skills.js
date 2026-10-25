// Tailwind needs full class names, so each color maps to explicit classes
const c = {
  yellow: "bg-yellow-50 text-yellow-600", orange: "bg-orange-50 text-orange-600", blue: "bg-blue-50 text-blue-600",
  emerald: "bg-emerald-50 text-emerald-600", sky: "bg-sky-50 text-sky-600", indigo: "bg-indigo-50 text-indigo-600",
  green: "bg-green-50 text-green-600", red: "bg-red-50 text-red-600",
};

export const skills = [
  { icon: "fa-brands fa-python", color: c.yellow, title: "Python", sub: "Core Language · OOP", text: "Writing clean, object-oriented Python for web back ends, automation and machine learning." },
  { icon: "fa-solid fa-leaf", color: c.emerald, title: "Django & REST APIs", sub: "Backend Development", text: "CRUD apps, authentication, Django ORM, views, URLs, templates and REST API development." },
  { icon: "fa-brands fa-react", color: c.sky, title: "React.js", sub: "Frontend Development", text: "Building component-based, responsive user interfaces with hooks and modern tooling." },
  { icon: "fa-brands fa-html5", color: c.orange, title: "HTML, CSS & Bootstrap", sub: "Responsive Layouts", text: "Semantic markup and mobile-first styling for clean, accessible pages." },
  { icon: "fa-brands fa-square-js", color: c.yellow, title: "JavaScript (ES6+)", sub: "Dynamic Frontend Logic", text: "DOM manipulation, async programming and interactive user experiences." },
  { icon: "fa-solid fa-database", color: c.indigo, title: "MySQL & PostgreSQL", sub: "Databases · SQL", text: "Designing schemas and writing SQL queries; integrating databases with Django." },
  { icon: "fa-solid fa-chart-column", color: c.blue, title: "Data Analysis", sub: "NumPy · Pandas · Matplotlib", text: "Cleaning data, finding patterns and visualising insights with Python libraries." },
  { icon: "fa-brands fa-github", color: c.red, title: "Git, GitHub & Tools", sub: "Linux (Basic) · VS Code", text: "Version control, collaboration and everyday developer tooling." },
  { icon: "fa-solid fa-diagram-project", color: c.green, title: "Core CS Concepts", sub: "DSA · DBMS · SDLC", text: "Strong foundation in data structures, algorithms, DBMS, OOP and software development life cycle." },
];
