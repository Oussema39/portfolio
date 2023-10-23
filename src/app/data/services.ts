import { ComputerIcon } from "../icons/ComputerIcon";
import { DataReportsIcon } from "../icons/DataReportsIcon";
import { SolutionIcon } from "../icons/SolutionIcon";
import { Service } from "../interface/Service";

export const services: Service[] = [
  {
    title: "End-to-End Development",
    description:
      "As a full-stack developer, I seamlessly merge front-end design with back-end logic, ensuring a cohesive application. I craft user-friendly interfaces while managing server-side processes and databases, guaranteeing a comprehensive and well-integrated development experience.",
    icon: ComputerIcon,
  },
  {
    title: "Cross-Functional Problem Solving",
    description:
      "My expertise spans the development stack, enabling me to swiftly identify and resolve issues in both user interfaces and server-side functionalities. This cross-functional problem-solving approach ensures efficient debugging and results in a robust, unified solution for a seamless user experience.",
    icon: SolutionIcon,
  },
  {
    title: "Optimizing Performance and Scalability",
    description:
      "In the dynamic realm of web development, I prioritize optimizing performance. I refine database queries, implement efficient caching, and utilize responsive design to create a high-performance application.",
    icon: DataReportsIcon,
  },
];
