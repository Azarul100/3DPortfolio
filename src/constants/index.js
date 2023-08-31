import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    sports,
    naruto,
    controller,
    exercise,
    bt,
    dr,
    hunter,
    c,
    python,
    flutter,
    materialui,
    firebase,
    vscode,
    postman,
    excel,
    linux,
  } from "../assets";
  
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Sports",
      icon: sports,
      description: "I'm really into playing and watching sports, with soccer being my absolute favorite. I've been a die-hard Liverpool FC fan since I was 8, and you'll often find me playing soccer or basketball out with my cousins.",
    },
    {
      title: "Anime",
      icon: naruto,
      description: "I'm a big fan of watching anime and reading manga. I often enjoy a good romcom or action-packed shounen series. Naruto holds a special place in my heart as it's my first and favorite anime.",
    },
    {
      title: "Video Games",
      icon: controller,
      description: "I enjoy playing video games with my friends and family. The type of games I usually play are sports games or first-person shooter games. My favorite game series are Fifa and Call of Duty.",
    },
    {
      title: "Exercise",
      icon: exercise,
      description: "I take pleasure in staying active through gym sessions and outdoor activities when not at home. A healthy routine is vital as it benefits physical health and one's mental well-being.",
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Postman",
      icon: postman,
    },
    {
      name: "Linux",
      icon: linux,
    },
    {
      name: "VSCode",
      icon: vscode,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "C++",
      icon: c,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Excel",
      icon: excel,
    },
    {
      name: "MaterialUI",
      icon: materialui,
    },
  ];
  
  const experiences = [
    {
      title: "Brooklyn Technical High School",
      company_name: "High School Diploma",
      icon: bt,
      iconBg: "#383E56",
      date: "Sept 2015 - June 2019",
      points: [
        "Location: Brooklyn, NY",
        "Major: Computer Science",
      ],
    },
    {
      title: "Customer Service Associate",
      company_name: "Duane Reade",
      icon: dr,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - Dec 2022",
      points: [
        "Provided exceptional customer service by warmly greeting customers and addressing their inquiries and concerns",
        "Demonstrated proficiency in performing efficient and accurate checkout procedures, consistently ensuring customer satisfaction",
        "Actively promoted the store's credit card to customers, enhancing sales and fostering customer loyalty",
        "Collaborated with the sales floor team to maintain well-stocked shelves, ensuring a pleasant shopping experience for customers",
        "Assisted guests promptly and effectively, maintaining a tidy front-end area and ensuring a seamless shopping process",
        "Processed various payment methods, including credit cards, debit cards, cash, gift cards, and store credit, with precision and reliability",
      ],
    },
    {
      title: "Hunter College",
      company_name: "Bachelors of Art",
      icon: hunter,
      iconBg: "#383E56",
      date: "Aug 2019 - May 2023",
      points: [
        "Location: Manhattan, NY",
        "Major: Computer Science",
        "Minor: Mathematics",
        "GPA: 3.71 / 4.00"
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };