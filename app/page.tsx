"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Mail, Phone, MapPin, Github, Linkedin, Twitter, ExternalLink, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const projects = [
    {
      title: "E-Commerce API Platform",
      description:
        "Scalable REST API for e-commerce platform handling 10k+ concurrent users with advanced caching and real-time inventory management.",
      tech: ["Node.js", "NestJS", "PostgreSQL", "TypeScript"],
      link: "https://github.com/dilgusha/ecommerce",
    },
    {
      title: "Real-time Chat System",
      description:
        "High-performance chat application with WebSocket connections, message queuing, and horizontal scaling capabilities.",
      tech: ["Node.js", "Socket.io", "MongoDB", "TypeScript"],
      link: "https://github.com/dilgusha/socket",
    },
    {
      title: "Social Networking Platform",
      description:
        "Distributed system with 12+ microservices, API gateway, service discovery, and comprehensive monitoring.",
      tech: ["ExpressJS", "PostgreSQL", "TypeScript"],
      link: "https://github.com/dilgusha/linkedin-project",
    },
    {
      title: "Music Platform",
      description:
        "ETL pipeline processing millions of records daily with real-time analytics and automated reporting.",
      tech: ["Nestjs", 'PostgreSQL', "TypeORM", "PostgreSQL"],
      link: "https://github.com/dilgusha/music-platform",
    },
  ]

  const skills = [
    { name: "Node.js", level: 95 },
    { name: "NestJS", level: 90 },
    { name: "ExpressJS", level: 82 },
    { name: "PostgreSQL", level: 88 },
    { name: "TypeORM", level: 85 },
    { name: "React", level: 80 },
    { name: "MongoDB", level: 85 },
    { name: "NextJS", level: 85 },
    { name: "Tailwind CSS", level: 89 },
    { name: "Bootstrap", level: 89 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO at TechFlow",
      content:
        "Dilgusha's backend architecture transformed our platform's performance. Her attention to clean code and scalability is exceptional.",
    },
    {
      name: "Michael Chen",
      role: "Lead Developer at DataSync",
      content:
        "Working with Dilgusha was a game-changer. She delivered robust APIs that handle our complex business logic flawlessly.",
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager at CloudBase",
      content:
        "Dilgusha's technical expertise and problem-solving skills helped us scale from 1K to 100K users seamlessly.",
    },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 min-h-screen">
        {/* Header */}
        <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-purple-100 dark:border-purple-800/30">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">&lt;&gt;</span>
                </div>
                <span className="text-xl font-serif font-semibold text-gray-800 dark:text-white">devPicollo</span>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <a
                  href="#about"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Skills
                </a>
                {/* <a
                  href="#testimonials"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Testimonials
                </a> */}
                <a
                  href="#contact"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Contact
                </a>
                <Button variant="ghost" size="sm" onClick={toggleDarkMode} className="text-gray-600 dark:text-gray-300">
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              </nav>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center space-x-2">
                <Button variant="ghost" size="sm" onClick={toggleDarkMode} className="text-gray-600 dark:text-gray-300">
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-600 dark:text-gray-300"
                >
                  {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <nav className="md:hidden mt-4 pb-4 border-t border-purple-100 dark:border-purple-800/30 pt-4">
                <div className="flex flex-col space-y-3">
                  <a
                    href="#about"
                    className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    About
                  </a>
                  <a
                    href="#projects"
                    className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    Projects
                  </a>
                  <a
                    href="#skills"
                    className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    Skills
                  </a>
                  {/* <a
                    href="#testimonials"
                    className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    Testimonials
                  </a> */}
                  <a
                    href="#contact"
                    className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    Contact
                  </a>
                </div>
              </nav>
            )}
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-serif font-light text-gray-800 dark:text-white mb-6">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Dilgusha
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Full-Stack Web Developer crafting modern user interfaces and building scalable backend systems with Node.js.              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#projects">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full"
                  >
                    View My Work
                  </Button>
                </a>
                <a href="/resume.pdf" download>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-purple-300 text-purple-600 hover:bg-purple-50 dark:border-purple-600 dark:text-purple-400 dark:hover:bg-purple-900/20 px-8 py-3 rounded-full"
                  >
                    Download Resume
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-serif font-light text-center text-gray-800 dark:text-white mb-16">
                About Me
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-72 h-72 mx-auto bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 rounded-full flex items-center justify-center">
                    <div className="w-64 h-64 bg-gradient-to-br from-purple-300 to-pink-300 dark:from-purple-700 dark:to-pink-700 rounded-full flex items-center justify-center">
                      <span className="text-6xl font-serif text-white">&lt;&gt;</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Hi, I’m Dilgusha — a backend developer focused on Node.js and a passionate mentor. I care about clean code, teamwork, and sharing knowledge. I’m always eager to learn new technologies and create meaningful impact in the software world.
                  </p>
                  {/* <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    My approach combines technical excellence with business understanding, ensuring that every line of
                    code contributes to meaningful solutions. I believe in writing code that not only works today but
                    scales for tomorrow.
                  </p> */}
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                      Node.js
                    </span>
                    <span className="px-4 py-2 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full text-sm">
                      RESTful APIs
                    </span>
                    <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                      Clean Code
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 bg-white/50 dark:bg-gray-800/20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-serif font-light text-center text-gray-800 dark:text-white mb-16">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-purple-100 dark:border-purple-800/30 bg-white/80 dark:bg-gray-800/50"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-5 w-5 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                      {/* <ExternalLink target="_blank" href={project.link} className="h-5 w-5 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" /> */}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-4xl font-serif font-light text-center text-gray-800 dark:text-white mb-16">
              Technical Skills
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        {/* <section id="testimonials" className="py-20 px-6 bg-white/50 dark:bg-gray-800/20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-serif font-light text-center text-gray-800 dark:text-white mb-16">
              What People Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="border-purple-100 dark:border-purple-800/30 bg-white/80 dark:bg-gray-800/50"
                >
                  <CardContent className="p-8">
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-4xl font-serif font-light text-center text-gray-800 dark:text-white mb-16">
              Let's Work Together
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Get in Touch</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                    Ready to build something amazing together? I'd love to hear about your project and discuss how we
                    can create scalable solutions that drive your business forward.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    <span className="text-gray-600 dark:text-gray-300">dilgusha.has@div.edu.az <br></br>dila.hesenli5@gmail.com </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    <span className="text-gray-600 dark:text-gray-300">+94 (70) 604-68-68</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    <span className="text-gray-600 dark:text-gray-300">Baku, Azerbaijan</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-300 text-purple-600 hover:bg-purple-50 dark:border-purple-600 dark:text-purple-400 dark:hover:bg-purple-900/20"
                  >
                    <a
                      href="https://github.com/dilgusha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />

                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-300 text-purple-600 hover:bg-purple-50 dark:border-purple-600 dark:text-purple-400 dark:hover:bg-purple-900/20"
                  >
                    <a
                      href="https://www.linkedin.com/in/dilgusha-hasanova-251a01219/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Linkedin className="h-4 w-4" />

                    </a>
                  </Button>
                  {/* <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-300 text-purple-600 hover:bg-purple-50 dark:border-purple-600 dark:text-purple-400 dark:hover:bg-purple-900/20"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button> */}
                </div>
              </div>
              <Card className="border-purple-100 dark:border-purple-800/30 bg-white/80 dark:bg-gray-800/50">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div>
                      <Input
                        placeholder="Your Name"
                        className="border-purple-200 dark:border-purple-700 focus:border-purple-400 dark:focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        className="border-purple-200 dark:border-purple-700 focus:border-purple-400 dark:focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Subject"
                        className="border-purple-200 dark:border-purple-700 focus:border-purple-400 dark:focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        rows={5}
                        className="border-purple-200 dark:border-purple-700 focus:border-purple-400 dark:focus:border-purple-500"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 bg-white/50 dark:bg-gray-800/20 border-t border-purple-100 dark:border-purple-800/30">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">&lt;&gt;</span>
                </div>
                <span className="text-lg font-serif font-semibold text-gray-800 dark:text-white">devPicollo</span>
              </div>
              <div className="flex space-x-6 mb-4 md:mb-0">
                <a
                  href="#about"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Contact
                </a>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">© {new Date().getFullYear()} Dilgusha. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
