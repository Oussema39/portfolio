import { WorkExperience } from "../interface/WorkExperience";

export const workExperiences: WorkExperience[] = [
  {
    jobTitle: "Junior Web Developer",
    companyName: "CieloCosta",
    startDate: new Date("2022-07-01"),
    endDate: new Date("2023-06-01"),
    description: `
      Contributed to moving a web application to production when just joined.
      Developed cross-platform accessibility with modern CSS for a mobile-responsive user experience on any device, prioritizing browser compatibility.
      Built an API following GraphQL standards allowing admins to fetch and manipulate data in MongoDB.
      Developed PowerApps and automated flows, utilizing SharePoint lists to streamline and enhance the company's daily operational activities.
    `,
  },
  {
    jobTitle: "Web Developer",
    companyName: "Automatika",
    startDate: new Date("2022-05-01"),
    endDate: new Date("2022-07-01"),
    description: `
      Developed VPAY, an innovative payment gateway integrating cutting-edge face recognition technology.
      The platform offers a user-friendly interface and a seamless step-by-step process for both online and in-person payments, leveraging advanced AI capabilities for enhanced security and convenience.
    `,
  },
  {
    jobTitle: "Freelancer",
    startDate: new Date("2021-08-01"),
    endDate: new Date("2022-05-01"),
    description: `
      Successfully resolved bugs in shopping-oriented web applications through adept utilization of diverse technologies.
      Played a pivotal role in resolving bugs across diverse web projects, addressing issues ranging from UI glitches to streamlining server intricacies.
    `,
  },
  {
    jobTitle: "Freelancer (Consulting for students)",
    startDate: new Date("2021-06-01"),
    endDate: new Date("2021-08-01"),
    description: `
      Facilitated the timely development of students' final projects, ensuring successful outcomes and prompt delivery.
      Proposed essential modifications for student applications, offering clearer pathways to streamline the development phase.
    `,
  },
  {
    jobTitle: "Full Stack Web Developer Intern",
    companyName: "ESPADA",
    startDate: new Date("2021-07-01"),
    endDate: new Date("2021-08-01"),
    description: `
      Undertook the mission to create the OPIUM platform, a web application developed using Laravel as the main technology.
      Successfully delivered the project with dedication and hard work.
    `,
  },
  {
    jobTitle: "Full Stack Web Developer Intern",
    companyName: "ESPADA",
    startDate: new Date("2020-02-01"),
    endDate: new Date("2020-03-01"),
    description: `
      Developed and expanded a restaurant admin dashboard, advancing from CRUD operations to include file handling for user images.
      Implemented robust validations and security layers for enhanced functionality and data integrity.
    `,
  },
];
