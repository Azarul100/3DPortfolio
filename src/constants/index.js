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
    animemania,
    pluvio,
    eyechoose,
    nike,
    rememble
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
    {
      title: "Retail Store Associate",
      company_name: "Nike",
      icon: nike,
      iconBg: "#E6DEDD",
      date: "Sept 2023 - Present",
      points: [
        "Expertly assisted customers in both shoe and apparel sections, ensuring a tailored and positive shopping experience",
        "Efficiently operated as a cashier, processing transactions and delivering exceptional customer service",
        "Managed stock room activities, including unloading shipments and organizing inventory to maintain optimal stock levels",
        "Collaborated with team members to maintain a clean and organized store, contributing to an inviting shopping environment",
        "Demonstrated strong communication skills in addressing customer inquiries and resolving issues promptly and effectively",
        "Actively engaged in product knowledge sessions to stay updated on Nike's offerings, enabling informed customer assistance",
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
      name: "AnimeMania",
      description:
        "Website that utilizes the Kitsuanime API to showcase popular, trending, and new anime and manga titles, while also providing personalized recommendations tailored to users' preferences.",
      tags: [
        {
          name: "react",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "postman",
          color: "pink-text-gradient",
        },
        {
          name: "materialui",
          color: "green-text-gradient",
        },
        {
          name: "figma",
          color: "blue-text-gradient",
        },
      ],
      image: animemania,
      source_code_link: "https://github.com/Azarul100/AnimeMania",
    },
    {
      name: "Pluvio",
      description:
        "Social media platform for movie enthusiasts, offering features like movie search and rating, personalized movie recommendations based on your preferences, and the ability to connect with others, follow their movie choices, and discover new films to enjoy.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "figma",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "materialui",
          color: "green-text-gradient",
        },
        {
          name: "git",
          color: "pink-text-gradient",
        },
      ],
      image: pluvio,
      source_code_link: "https://github.com/feizza615/pluvio",
    },
    {
      name: "Rememble",
      description:
        "Website that follows the classic Wordle game with a unique twist. Make guesses to find the secret five-letter word within six attempts. However, after each guess, the corresponding row disappears, forcing players to rely on memory for subsequent attempts.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "git",
          color: "green-text-gradient",
        },
        {
          name: "materialui",
          color: "pink-text-gradient",
        },
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
      ],
      image: rememble,
      source_code_link: "https://github.com/Azarul100/Rememble",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };