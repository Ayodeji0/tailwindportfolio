import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#project", text: "project" },
];

export const skills = [
  {
    id: nanoid(),
    title: "THE NAME CRYPTECH",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "As Cryptech, I excel in crypto trading and software engineering. My skills include market analysis, risk management, and strategic trading, combined with proficiency in coding, debugging, and automation. I leverage advanced tools for data-driven decisions and identify opportunities. With strong analytical abilities, adaptability, and a disciplined approach, I ensure consistent performance in both dynamic markets and software development",
  },
  {
    id: nanoid(),
    title: "SOFTWARE DEVELOPMENT",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "I excel in coding, debugging, and problem-solving with expertise in  programming languages such as javascript, next and typescript. My skills include version control, testing, and effective communication. I thrive in collaborative environments, adapt quickly, and continuously seek to improve my craft",
  },
  {
    id: nanoid(),
    title: "MANUAL TESTING",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "I excel in meticulous manual testing, identifying bugs, and ensuring software quality. Skilled in test case design, execution, and defect tracking, I have strong analytical abilities and attention to detail. My strengths include effective communication, collaboration, and a commitment to continuously improving my testing methodologies",
  },
  {
    id: nanoid(),
    title: "AUTOMATION TESTING",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "I specialize in automation testing using Playwright, Cypress, Selenium with Java and Python, Appium for mobile testing, and JMeter for load and performance testing. I excel in test script design, execution, and bug identification. With strong analytical skills, attention to detail, and effective communication, I continuously enhance testing methodologies.",
  },
  {
    id: nanoid(),
    title: "CRYPTO TRADING",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "As a crypto trader, I excel in market analysis, risk management, and strategic trading. Proficient in technical and fundamental analysis, I use advanced tools to identify opportunities. I adapt to market trends, make data-driven decisions, and manage portfolios effectively. My strong analytical skills and disciplined approach ensure consistent performance",
  },
];
