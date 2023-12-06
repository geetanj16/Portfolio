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
    aicte,
    vertex,
    tutedude,
    aws,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Front-End Developer",
      icon: backend,
    },
    {
      title: "AWS Certified Cloud Practitioner",
      icon: creator,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Cloud Computing Apprentice",
      company_name: "Skill vertex",
      icon: vertex,
      iconBg: "#383E56",
      date: "April 2021 - May 2021",
      points: [
        "Learned the basics of Cloud Computing under a mentor.",
        "Collaborated with team member to make a report related to cloud services available and the services they provide.",
        "Worked on Microsoft Azure , learned its basic functions and done Vnet Peering",
        "Learned the basics of AWS Cloud and also learned a little about Google Cloud Platform.",
      ],
    },
    {
      title: "Brand Ambassador",
      company_name: "Tutedude",
      icon: tutedude,
      iconBg: "#E6DEDD",
      date: "June 2022 - August 2022",
      points: [
        "Marketing based internship in which i was asked to sell their course to new people.",
        "Work was to create catchy posters and sell their courses",
        "Learned to used FIGMA and CANVA to make attrative promotional material",
        "Learned networking and became active on LinkedIN and make 500+ connections",
      ],
    },
    {
      title: "AICTE Cloud Dveloper Trainee",
      company_name: "AICTE & Ministry of Housing and Urban Affairs",
      icon: aicte,
      iconBg: "#E6DEDD",
      date: "May 2023 - July 2023",
      points: [
        "Delved into resourcing and cyber secuirty aspect of AWS more.",
        "Earned in certification in AWS Cloud Architecting t learn more about the architecture of AWS Cloud.",
        "Learned about five pillars of AWS Cloud.",
        "Learned to use AWS Cloud with my full-stack projects.",
      ],
    },
    {
      title: "AWS Certified Cloud Practitioner",
      company_name: "Amazon Web Services",
      icon: aws,
      iconBg: "#383E56",
      date: "November 2022 - November 2025",
      points: [
        "Learned about AWS cloud in depth, theoritically and practically.",
        "Learned about cloud management, deployment and resourcing.",
        "Learned to implement optimized solutions in certain scenarios.",
        "Learned to use AWS Glue ETL jobs and integrated it with AWS lambda to trigger it remotely",
      ],
    },
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