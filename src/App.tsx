import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin,
  ExternalLink,
  Code,
  Briefcase,
  User,
  Send,
  Menu,
  X,
  GraduationCap,
  Award,
  Calendar,
  Building
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const skills = [
    { name: 'Python', level: 90, color: 'bg-green-500' },
    { name: 'JavaScript', level: 85, color: 'bg-yellow-400' },
    { name: 'React', level: 80, color: 'bg-blue-500' },
    { name: 'Node.js', level: 75, color: 'bg-green-600' },
    { name: 'Java', level: 70, color: 'bg-red-500' },
    { name: 'MySQL', level: 75, color: 'bg-blue-600' },
  ];

  const techCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'bg-blue-500',
      skills: ['Python', 'C', 'Java', 'Bash', 'SQL', 'MySQL']
    },
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'bg-purple-500',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS']
    },
    {
      title: 'Backend & Tools',
      icon: Briefcase,
      color: 'bg-green-500',
      skills: ['Node.js', 'PHP', 'Git', 'GitHub', 'VS Code', 'Netlify']
    }
  ];

  const projects = [
    {
      title: 'CloudWise – Smart Cloud Cost Optimizer',
      description: 'Python-based system that analyzes cloud resource usage to optimize costs and suggest savings. Parses structured cloud logs and visualizes resource consumption.',
      tech: ['Python', 'Data Analysis', 'CSV/JSON Processing'],
      category: 'Python',
      githubUrl: '#',
      type: 'backend'
    },
    {
      title: 'Virtual OS Simulator',
      description: 'Python-based simulator mimicking core OS functionalities like file management, memory allocation, and process scheduling.',
      tech: ['Python', 'System Programming', 'OS Concepts'],
      category: 'Python',
      githubUrl: '#',
      type: 'backend'
    },
    {
      title: 'Code DND - Code Prompt Visualizer',
      description: 'Interactive frontend web app that allows users to paste code snippets and visually interpret programming logic like loops and conditionals.',
      tech: ['JavaScript', 'HTML', 'CSS', 'Interactive UI'],
      category: 'Website',
      liveUrl: 'https://gokularam-12.github.io/Code-DND/',
      githubUrl: '#',
      type: 'frontend'
    },
    {
      title: 'Neuro Weave – Thought-to-Code Visualizer',
      description: 'Creative web tool that translates user moods into coding ideas using dynamic UI and a random prompt generator.',
      tech: ['JavaScript', 'Dynamic UI', 'Creative Design'],
      category: 'Website',
      liveUrl: 'https://gokularam-12.github.io/NEURO-WAVE/',
      githubUrl: '#',
      type: 'frontend'
    },
    {
      title: 'Exam Allocation Website',
      description: 'User-friendly interface for students to view exam hall assignments and for faculty to verify class-in-charge details efficiently.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      category: 'Website',
      liveUrl: 'https://gokularam-12.github.io/Exam-Allocation-web/',
      githubUrl: '#',
      type: 'frontend'
    },
    {
      title: 'DevDock – Unified Developer Workspace',
      description: 'Productivity-focused web app integrating essential developer tools like code editors, terminal emulators, and task management. Built with MERN stack.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      category: 'MERN Stack',
      githubUrl: '#',
      type: 'fullstack',
      status: 'ongoing'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Gokularam M
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="inline mr-2" size={18} />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="Gokularam M" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Gokularam M
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in-up animation-delay-200">
              Software Developer & Computer Science Student
            </p>
            <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
              Passionate about building innovative web applications and exploring the latest technologies. 
              Currently mastering the MERN stack and creating impactful digital solutions.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-600">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Let's Connect
            </button>
          </div>

          <div className="animate-bounce">
            <ChevronDown 
              size={32} 
              className="mx-auto text-gray-400 cursor-pointer hover:text-white transition-colors"
              onClick={() => scrollToSection('about')}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              About <span className="text-blue-600">Me</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Computer Science student with hands-on experience in full-stack development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                My Journey
              </h3>
              <p className="text-gray-700 leading-relaxed">
                I'm a passionate Computer Science Engineering student at SRM Madurai College, 
                currently in my 2nd year with a CGPA of 7.14. My journey in technology began 
                with curiosity and has evolved into a deep passion for creating innovative solutions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I recently completed a Full Stack Development internship at White and Box Tech 
                Products and Services in Bangalore, where I built full-stack applications, 
                developed REST APIs, and created web scraping pipelines integrated with LLM processing.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <GraduationCap className="text-blue-600 mr-3" size={24} />
                  <h4 className="font-semibold text-gray-900">Education</h4>
                </div>
                <p className="text-gray-700">
                  <strong>SRM Madurai College for Engineering and Technology</strong><br />
                  B.E. in Computer Science Engineering (2022-2027)<br />
                  Current CGPA: 7.51 
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">6+</div>
                  <div className="text-gray-700">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">1</div>
                  <div className="text-gray-700">Internship Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
                <img 
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Developer workspace"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Currently Learning MERN Stack</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Technical <span className="text-blue-600">Skills</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full transition-all duration-1000 ${skill.color}`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {techCategories.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className={`inline-flex p-4 rounded-full ${category.color} mb-4`}>
                  <category.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Experience & <span className="text-blue-600">Achievements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My professional journey and key accomplishments
            </p>
          </div>

          <div className="space-y-12">
            {/* Internship Experience */}
            <div className="relative">
              <div className="md:flex items-start space-y-4 md:space-y-0 md:space-x-8">
                <div className="md:w-1/4">
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold inline-block">
                    1 Month
                  </div>
                </div>
                <div className="md:w-3/4">
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500">
                    <div className="flex items-center mb-4">
                      <Building className="text-blue-600 mr-3" size={24} />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Full Stack Development Intern</h3>
                        <p className="text-blue-600 font-semibold">White and Box Tech Products and Services, Bangalore</p>
                        <p className="text-gray-500 text-sm">On-site</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-700">Built a full-stack application and REST APIs</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-700">Developed a web scraping pipeline with Node.js for data accumulation, integrated with LLM processing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <Award className="text-green-600 mr-3" size={32} />
                  <h3 className="text-xl font-bold text-gray-900">Workshop</h3>
                </div>
                <p className="text-gray-700 font-semibold">Data Structures and Algorithms</p>
                <p className="text-green-600 font-medium">NIT Thiruchy</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <Award className="text-purple-600 mr-3" size={32} />
                  <h3 className="text-xl font-bold text-gray-900">Training</h3>
                </div>
                <p className="text-gray-700 font-semibold">Placement Preparation</p>
                <p className="text-purple-600 font-medium">INTERNSHALA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Featured <span className="text-blue-600">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my recent work across different technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.type === 'frontend' ? 'bg-blue-100 text-blue-800' :
                      project.type === 'backend' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {project.category}
                    </span>
                    {project.status === 'ongoing' && (
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-semibold">
                        Ongoing
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        Live Demo
                      </a>
                    )}
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-gray-800 text-sm font-medium"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Get In <span className="text-blue-600">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to collaborate on your next project? Let's connect and create something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-gray-900">
                Let's discuss your project
              </h3>
              <p className="text-gray-700">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hello, I'll do my best to get back to you!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-700">gokularamrm@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="text-green-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-700">+91 8870213343</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <MapPin className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-700">Madurai, Tamil Nadu</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-gray-900 text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://linkedin.com/in/gokularam12" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Name
                  </label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email
                  </label>
                  <input 
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Subject
                  </label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Gokularam M
            </div>
            <p className="text-gray-400 mb-6">
              Full Stack Developer & Computer Science Student
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/gokularam12" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 Gokularam M. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
