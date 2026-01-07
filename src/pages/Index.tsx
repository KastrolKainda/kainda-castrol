import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Github, Linkedin, Facebook, Twitter, Mail, Phone, MapPin, ExternalLink, BookOpen, Video, Code, Palette, Brain, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    "Graphic Design",
    "Web Design and Development",
    "Web Application Development",
    "UI/UX",
    "Tech Tutoring"
  ];

  const stats = [
    { number: "15+", label: "Projects Completed" },
    { number: "200+", label: "Students Taught" },
    { number: "1+", label: "Years Experience" }
  ];

  const techStacks = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design Tools",
      tools: ["Figma", "Adobe Express", "Canvas", "WIX", "DrawIO", "Premier Pro"],
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Developer",
      tools: ["PHP (Laravel)", "Python", "JavaScript", "MySQL", "Supabase", "React", "HTML", "CSS", "Tailwind"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Tools",
      tools: ["ChatGPT", "Claude", "Cursor", "Gemini", "Lovable", "DeepSeek"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Data Analyst",
      tools: ["Excel", "Python (Basics)", "Power BI", "Google Analytics"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-nav bg-background/80 shadow-lg' : ''}`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="text-2xl font-heading font-bold gradient-text">
              Kainda Castrol
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
              
              {/* Skills Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsSkillsOpen(!isSkillsOpen)}
                  className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors"
                >
                  <span>Skills</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isSkillsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isSkillsOpen && (
                  <div className="absolute top-full mt-2 w-64 glass-strong rounded-lg shadow-lg p-4 animate-scale-in">
                    {skills.map((skill, index) => (
                      <a
                        key={index}
                        href="#skills"
                        className="block px-4 py-2 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                      >
                        {skill}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-foreground"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden glass-strong rounded-lg mt-4 p-6 animate-slide-in">
              <a href="#home" className="block py-3 text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#about" className="block py-3 text-foreground hover:text-primary transition-colors">About</a>
              <a href="#contact" className="block py-3 text-foreground hover:text-primary transition-colors">Contact</a>
              <div className="py-3">
                <button
                  onClick={() => setIsSkillsOpen(!isSkillsOpen)}
                  className="flex items-center justify-between w-full text-foreground hover:text-primary transition-colors"
                >
                  <span>Skills</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isSkillsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isSkillsOpen && (
                  <div className="mt-2 pl-4 space-y-2">
                    {skills.map((skill, index) => (
                      <a
                        key={index}
                        href="#skills"
                        className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {skill}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-32 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in">
              <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
                Hi, I'm <span className="gradient-text">Kainda Castrol</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Computer Science Professional specializing in Web Development, UI/UX Design, and Tech Education
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary transition-all hover:scale-105">
                  <a href="#projects">View Projects</a>
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <a href="#contact">Get in Touch</a>
                </Button>
              </div>
            </div>

            <div className="relative animate-float">
              <div className="w-full h-96 glass rounded-2xl overflow-hidden glow-primary">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                  alt="Developer workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="glass hover-lift text-center p-8 border-0 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-2">{stat.number}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative animate-slide-in">
              <div className="w-full h-96 glass rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
                  alt="About me"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 animate-slide-in">
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                About <span className="gradient-text">Me</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Computer Science professional with over 1+ years of experience in web development, 
                UI/UX design, and tech education. I've had the privilege of working on 15+ personal projects and teaching 
                200+ students the art of programming and design.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans across multiple domains including full-stack web development, graphic design, 
                AI tools integration, and data analysis. I believe in creating solutions that are not only 
                functional but also beautiful and user-friendly.
              </p>
              
             
                
            </div>
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section id="skills" className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              How I <span className="gradient-text">Work</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leveraging cutting-edge tools and technologies to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStacks.map((stack, index) => (
              <Card
                key={index}
                className="glass hover-lift border-0 p-6 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stack.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {stack.icon}
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{stack.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Projects Section */}
      <section id="github" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              GitHub <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore my open-source contributions and personal projects
            </p>
          </div>

          <div className="flex justify-center">
            <Card className="glass hover-lift border-0 p-12 text-center max-w-2xl w-full">
              <Github className="w-20 h-20 mx-auto mb-6 text-primary" />
              <h3 className="text-2xl font-heading font-bold mb-4">View All My Repositories</h3>
              <p className="text-muted-foreground mb-6">
                Check out my latest work, contributions, and open-source projects on GitHub
              </p>



              
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary">
                <Github className="w-5 h-5 mr-2" />
                <a href="https://github.com/KastrolKainda/KastrolKainda"> Visit GitHub Profile </a>
                
              </Button>
            
            </Card>
          </div>
        </div>
      </section>

      {/* eBooks & Videos Section */}
      <section id="resources" className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              eBook & <span className="gradient-text">Videos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Educational resources from my undergraduate studies and beyond
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass hover-lift border-0 p-8">
              <BookOpen className="w-16 h-16 mb-6 text-accent" />
              <h3 className="text-2xl font-heading font-bold mb-4">eBook Collection</h3>
              <p className="text-muted-foreground mb-6">
                Access comprehensive guides and documentation I've created during my studies
              </p>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                <ExternalLink className="w-4 h-4 mr-2" />
                <a href="https://tr.ee/S6eKVXGmza"> View eBook</a>
              </Button>
            </Card>

            <Card className="glass hover-lift border-0 p-8">
              <Video className="w-16 h-16 mb-6 text-primary" />
              <h3 className="text-2xl font-heading font-bold mb-4">Video Tutorials</h3>
              <p className="text-muted-foreground mb-6">
                Watch my educational videos covering various programming and design topics
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <ExternalLink className="w-4 h-4 mr-2" />
                <a href="https://drive.google.com/file/d/1Y8oYQYQEwKQiB2gWhLnaJwwJ7fP6p9RY/view?usp=sharing"> Watch Videos </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>


      

      {/* Project Hub Section */}
      <section id="projects" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Project <span className="gradient-text">Hub</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of websites and applications I've built with Wix and other platforms
            </p>
          </div>


          



          

          <div className="text-center">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary">
              <a href="https://sites.google.com/view/kastrolprojecthub/home">View All Projects </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Me Section */}
      <section id="why-me" className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Why <span className="gradient-text">Me?</span>
            </h2>
            
            <Card className="glass border-0 p-8 md:p-12 text-left">
              <h3 className="text-2xl font-heading font-bold mb-6 gradient-text-accent">My Story</h3>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate computer scientist who turned curiosity into expertise. With 5+ years of experience 
                  building digital solutions and teaching 200+ students, I bridge technology and design to create 
                  experiences that work beautifully.
                </p>
                <p className="font-semibold text-foreground">
                  When you work with me, you're partnering with someone who genuinely cares about your success and 
                  delivers results that exceed expectations.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how we can work together to bring your project to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="glass border-0 p-8 animate-slide-in">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-muted/50 border-border"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-muted/50 border-border"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-muted/50 border-border"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-primary">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8 animate-slide-in">
              <Card className="glass border-0 p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold mb-2">Email</h3>
                <p className="text-muted-foreground">ckinds09@gmail.com</p>
              </Card>

              <Card className="glass border-0 p-6">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-bold mb-2">Phone</h3>
                <p className="text-muted-foreground">+260 978 027 616</p>
                <p className="text-muted-foreground">+260 960 606 912</p>
              </Card>

              <Card className="glass border-0 p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold mb-2">Location</h3>
                <p className="text-muted-foreground">Plot No: 227/75 Ibex Hill, Lsk, Zambia</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-12">
        <div className="container-custom">
          <div className="flex flex-col items-center space-y-6">
            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/kainda-castrol-65394523b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BbzEMckHbSXS%2FR5S%2B4vMqLA%3D%3D"
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/Kastrol.Kinds?mibextid=ZbWKwL"
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/CastrolKainda"
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/KastrolKainda/KastrolKainda"
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Kainda Castrol. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
