import djangoBlog from "../assets/images/django-blog.png";
import taskManager from "../assets/images/task-manager.jpg";
import retail from "../assets/images/retail-sales.jpg";
import plant from "../assets/images/palnt.png";
import portfolio from "../assets/images/portfolio.png";


// "image" is optional: projects without a screenshot get a gradient banner using "icon".
export const projects = [
  {
    title: "Django Blog Application", image: djangoBlog, icon: "fa-solid fa-newspaper", badge: "Full-Stack", badgeColor: "bg-emerald-600",
    points: [
      "Blog creation & management with category-based organisation and featured posts.",
      "User authentication and author features for managing blog content.",
      "CRUD functionality with MySQL integrated through the Django ORM.",
      "Category filtering and dynamic pages using Django views, URLs and templates.",
    ],
    tags: ["Python", "Django", "MySQL", "HTML", "CSS", "Bootstrap"],
    github: "https://github.com/manerutuja22/Django-blog", live: "",
  },
  {
    title: "Task Manager App", image: taskManager, badge: "React", badgeColor: "bg-sky-600",
    points: [
      "Task manager built with React and Vite using useState and useEffect hooks.",
      "Add, complete and delete tasks, with search and All / Pending / Completed filters.",
      "Live Total, Completed and Pending counters; tasks are saved in localStorage.",
    ],
    tags: ["React.js", "JavaScript", "Vite", "CSS"],
    github: "https://github.com/manerutuja22/Task_Manager_React", live: "",
  },
  {
    title: "Retail Sales Analytics", image: retail, badge: "Data Analysis", badgeColor: "bg-indigo-600",
    points: [
      "Retail sales analysis across four Jupyter notebooks: data loading, EDA and visualisation.",
      "Explored monthly sales trends, category-wise sales, distributions and outliers.",
      "Studied the relationship between discount and profit; charts saved as report figures.",
    ],
    tags: ["Python", "Pandas", "Matplotlib", "Jupyter"],
    github: "https://github.com/manerutuja22/Retail_Sales_Analytics", live: "",
  },
  {
    title: "Plant Disease Detection using Image Recognition", image: plant, badge: "Machine Learning", badgeColor: "bg-red-600",
    points: [
      "Image-based plant disease detection system built with Python and ML.",
      "Image preprocessing and dataset validation using OpenCV.",
      "Evaluated model predictions on test datasets and analysed accuracy.",
    ],
    tags: ["Python", "Machine Learning", "OpenCV"],
    github: "https://github.com/manerutuja22/Plant_Diseases_Detection", live: "",
  },
  {
    title: "Portfolio Website", image: portfolio, badge: "Live Site", badgeColor: "bg-[#2563EB]",
    points: [
      "Responsive portfolio with dark & light themes, built with React.",
      "Working contact form that delivers messages straight to my inbox.",
      "Deployed on GitHub Pages.",
    ],
    tags: ["React", "Tailwind CSS", "EmailJS"],
    github: "https://github.com/manerutuja22/Portfolio", live: "https://manerutuja22.github.io/Portfolio/",
  },
];
