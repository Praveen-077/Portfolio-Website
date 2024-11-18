import project1 from "../assets/projects/RTQI.png";
import project2 from "../assets/projects/Social-media.png";
import project3 from "../assets/projects/Food.png";

export const HERO_CONTENT = `I specialize in full-stack development with MERN stack, along with expertise in machine learning and deep learning. My projects exemplify innovation and problem-solving, earning recognition at prestigious IEEE conferences and hackathons. I continually strive to expand my technical expertise and deliver meaningful solutions to real-world challenges.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];
export const PUBLICATIONS = [
  {
    year: "2024",
    description: `Presented a paper on "Design of Efficient RAM Cell using Quantum Dot Cellular Automata" at the IEEE 2nd International Conference on Computer, Electronics, and Electrical Engineering.`,
  },
];
export const CERTIFICATIONS = [
  {
    title: "IoT and Autonomous Systems",
    institution: "Funded by British Council and IEEE ITSS, covering topics such as IoT applications and intelligent systems",
    date: "May 2024",
  },
  {
    title: "Certified Full Stack Developer",
    institution: "Udemy",
    date: "May 2023",
  },
  {
    title: "IEEE Conference Participation",
    institution: "2nd International Conference on Computer, Electronics, and Electrical Engineering.",
    date: "June 2023",
  },
];


export const PROJECTS = [
  {
    title: "Road Traffic Quality Index",
    image: project1,
    description:
      "Leveraged machine learning and deep learning to predict the road quality index (RTQI) from real-time sensor data, with the predictions displayed through a React Native app ",
    technologies: ["Python", "React Native", "Here API", "Flask"],
    link: "https://github.com/Praveen-077/Road-Traffic-Index-Prediction-RTQI-.git",
  },
  {
    title: "Social Media Platform",
    image: project2,
    description:
      "Built a secure and responsive social media platform using the MERN stack with JWT authentication",
    technologies: ["React", "Tailwind CSS","Node Js","Express Js", "MongoDB",],
    link: "https://twitter-clone-website-eods.onrender.com/",
  },
  {
    title: "Food Ordering Management System",
    image: project3,
    description:
      "Designed a food ordering management system to streamline order processing, tracking, and data management for improved efficiency.",
    technologies: ["C++", "OOP", "MySQL",],
    link: "https://github.com/Praveen-077/Food-Ordering-Management-System.git",
  },
];

export const CONTACT = {
  email: "praveenkumarg079@gmail.com",
  linkedin: "https://www.linkedin.com/in/praveen-kumar-3871482a5/",
  github: "https://github.com/Praveen-077",
};
