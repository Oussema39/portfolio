import { Project } from "../interface/Project";

const screenshotsFolderPath = "/images/screenshots";

export const projects: Project[] = [
  {
    id: 0,
    name: "Audits tracker",
    description:
      "Upon joining the team, I played a pivotal role in swiftly launching a web application. I enhanced the user experience with a mobile-responsive design, prioritizing cross-platform accessibility and ensuring compatibility across browsers. Additionally, I developed a robust API following GraphQL standards, empowering administrators to seamlessly manage and manipulate data stored in MongoDB.",
  },
  {
    id: 1,
    name: "VPAY",
    description:
      "Led the development of VPAY, an innovative payment gateway with state-of-the-art face recognition technology. Contributed to creating a user-friendly interface and a smooth step-by-step process for both online and in-person payments. Leveraged Flask and React for efficient web development, supported by a robust backend with REST API and MySQL. Integrated advanced AI capabilities to enhance security and deliver a convenient payment experience through VPAY.",
    imgPath: `${screenshotsFolderPath}/vpay/preview.png`,
  },
  {
    id: 2,
    name: "OPIUM",
    description:
      "Embarked on the mission to develop the OPIUM platform, a web application utilizing Laravel as the primary technology. Successfully delivered the project with dedication and hard work. Expanded the restaurant admin dashboard, elevating it from basic CRUD operations to include file handling for user images. Implemented robust validations and security layers to enhance functionality and ensure data integrity.",
    imgPath: `${screenshotsFolderPath}/opium/preview.png`,
    githubRepoLink: "https://github.com/Oussema39/Laravel-Reservation",
  },
  {
    id: 3,
    name: "Skills Matrix",
    description:
      "Developed Skills Matrix, a PowerApp seamlessly integrated with Azure Active Directory and Microsoft Tenant. This tool streamlines the process for managers to efficiently assign optimal developers to specific projects, enhancing overall project management.",
    imgPath: `${screenshotsFolderPath}/skills-matrix/preview.png`,
  },
  {
    id: 4,
    name: "Insightful reads",
    description:
      "Developed an Articles Next App, implementing NextAuth seamlessly with Next Router. This app delivers fresh articles in a modern UI, combining a smooth authentication experience with a user-friendly interface.",
    imgPath: `${screenshotsFolderPath}/insightful-reads/preview.png`,
    githubRepoLink: "https://github.com/Oussema39/insightful-reads",
  },
  {
    id: 5,
    name: "Password generator",
    description:
      "This is a simple Next.js web application that generates random passwords and provides the ability to refresh for a new password or copy the generated password to the clipboard.",
    imgPath: `${screenshotsFolderPath}/password-generator/preview.png`,
    githubRepoLink: "https://github.com/Oussema39/password-generator",
  },
];
