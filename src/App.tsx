import React from 'react'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Education from './components/sections/Education'
import { PersonalInfo, Skill, Experience as ExperienceType, Project, Education as EducationType } from './types'
import './styles/main.scss'

const personalInfo: PersonalInfo = {
  name: "Dương Văn Cường",
  title: "Frontend Developer",
  email: "tommycuong3130@gmail.com",
  phone: "0786926024",
  location: "Vĩnh Long, Việt Nam",
  about: "Là một Frontend Developer với hơn 3 năm kinh nghiệm, tôi đam mê tạo ra những trải nghiệm người dùng tuyệt vời và có khả năng làm việc tốt với các công nghệ hiện đại."
}

const skills: Skill[] = [
  { name: "TypeScript", level: 85, category: "English" },
  { name: "React", level: 90, category: "Frontend" },
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "Next.js", level: 75, category: "Frontend" },
  { name: "GraphQL", level: 70, category: "Backend" },
]

const experiences: ExperienceType[] = [
  {
    company: "Tech Company B",
    position: "Frontend Developer",
    startDate: "01/2020",
    endDate: "12/2021",
    description: [
      "Tham gia phát triển các dự án web sử dụng React",
      "Hợp tác với các designer để cải thiện giao diện người dùng",
      "Thực hiện kiểm thử và sửa lỗi"
    ]
  }
]

const projects: Project[] = [
  {
    name: "Portfolio Website",
    description: "Trang web cá nhân để giới thiệu các dự án và kỹ năng của tôi",
    technologies: ["React", "CSS", "JavaScript"],
    link: "https://github.com/example/portfolio"
  }
]

const educationData: EducationType[] = [
  {
    school: "Trường đào tạo lập trình viên Aptech",
    degree: "Kỹ sư",
    field: "Công nghệ thông tin",
    graduationDate: "2019",
    achievements: [
      "Tốt nghiệp loại Giỏi",
    ],
    courses: [
      "Lập trình Web",
      "Cơ sở dữ liệu",
      "Phát triển ứng dụng di động"
    ]
  },
]

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <Header name={personalInfo.name} title={personalInfo.title} />
      <main className="main-content">
        <About info={personalInfo} />
        <Experience experiences={experiences} />
        <Projects projects={projects} />
        <Education education={educationData} />
        <Skills skills={skills} />
      </main>
    </div>
  )
}

export default App
