import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Download, 
  Mail, 
  Github, 
  Linkedin, 
  Server, 
  Cloud, 
  Container, 
  GitBranch,
  Terminal,
  Shield,
  Cpu,
  ChevronRight,
  Menu,
  X,
  Code2,
  Layers,
  Zap,
  Globe,
  Award,
  Briefcase,
  GraduationCap,
  Quote,
  ArrowRight,
  Play,
  Star,
  Settings,
  Package,
  Database
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import profileImage from '@assets/profile.jpeg';
import resumePDF from '@assets/Biswajitpattanaik_Resume.pdf';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

const stats = [
  { value: '1+', label: 'Years Experience', icon: Briefcase },
  { value: '07+', label: 'Projects Delivered', icon: Layers },
  { value: '10+', label: 'Technologies', icon: Code2 },
  { value: '99.9%', label: 'Uptime Achieved', icon: Zap },
];

const tools = [
  { name: 'Docker', color: '#2496ED', desc: 'Containerizes applications for consistent environments and faster deployments.' },
  { name: 'Kubernetes', color: '#326CE5', desc: 'Orchestrates containers, ensuring scalability, self-healing, and reliability.' },
  { name: 'AWS', color: '#FF9900', desc: 'Provides scalable cloud infrastructure for hosting and deployment.' },
  { name: 'Azure', color: '#0078D4', desc: 'Microsoft cloud platform for building, deploying, and managing applications.' },
  { name: 'Jenkins', color: '#D24939', desc: 'Automates CI/CD pipelines for faster and reliable software delivery.' },
  { name: 'Terraform', color: '#7B42BC', desc: 'Infrastructure as Code tool for automated and repeatable cloud setups.' },
  { name: 'Ansible', color: '#EE0000', desc: 'Automates configuration management and application deployments.' },
  { name: 'GitHub Actions', color: '#2088FF', desc: 'CI/CD automation directly integrated with GitHub repositories.' },
  { name: 'Maven', color: '#C71A36', desc: 'Manages Java project builds, dependencies, and lifecycle.' },
  { name: 'Nexus', color: '#1B9E85', desc: 'Stores and manages build artifacts securely.' },
  { name: 'Linux', color: '#FCC624', desc: 'Core OS for servers, containers, and cloud environments.' },
  { name: 'Git', color: '#F05032', desc: 'Version control system for tracking and collaborating on code.' },
  { name: 'Bash', color: '#4EAA25', desc: 'Shell scripting for automation and server administration.' },
  { name: 'Python', color: '#3776AB', desc: 'Used for automation, scripting, DevOps tools, and cloud workflows.' },
];

const skillCategories = [
  {
    title: 'Containerization & Orchestration',
    icon: Container,
    skills: [
      { name: 'Docker', level: 90, iconName: 'docker' },
      { name: 'Kubernetes', level: 85, iconName: 'kubernetes' },
    ],
  },
  {
    title: 'CI/CD & Build Tools',
    icon: Settings,
    skills: [
      { name: 'Jenkins', level: 88, iconName: 'jenkins' },
      { name: 'Maven', level: 85, iconName: 'maven' },
      { name: 'Nexus Repository', level: 80, iconName: 'nexus' },
    ],
  },
  {
    title: 'Infrastructure as Code',
    icon: Code2,
    skills: [
      { name: 'Terraform', level: 82, iconName: 'terraform' },
      { name: 'Ansible', level: 78, iconName: 'ansible' },
    ],
  },
  {
    title: 'Cloud & Operating Systems',
    icon: Cloud,
    skills: [
      { name: 'AWS (EC2, S3, IAM)', level: 85, iconName: 'amazonwebservices' },
      { name: 'Linux & Shell Scripting', level: 92, iconName: 'linux' },
    ],
  },
  {
    title: 'Version Control',
    icon: GitBranch,
    skills: [
      { name: 'Git & GitHub', level: 95, iconName: 'git' },
    ],
  },
];

const services = [
  {
    icon: Container,
    title: 'Containerization',
    description: 'Docker and Kubernetes deployment strategies for scalable, portable applications',
    features: ['Docker Compose', 'Helm Charts', 'Container Security'],
  },
  {
    icon: GitBranch,
    title: 'CI/CD Pipelines',
    description: 'Automated build, test, and deployment workflows for faster releases',
    features: ['Jenkins', 'GitHub Actions', 'GitLab CI'],
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Design and manage cloud-native infrastructure at scale',
    features: ['AWS', 'Terraform', 'CloudFormation'],
  },
  {
    icon: Shield,
    title: 'Security & Monitoring',
    description: 'Comprehensive security practices and real-time observability',
    features: ['Prometheus', 'Grafana', 'ELK Stack'],
  },
];

const experience = [
  {
    role: 'DevOps Engineer Intern',
    company: 'Bariflo Cybernetics Pvt. Ltd.',
    period: 'July 2025 – Present',
    location: 'Bhubaneswar',
    description: 'Deployed and managed production applications on Ubuntu Linux with focus on containerization, CI/CD automation, and system optimization.',
    achievements: [
      '🚀 Deployed 4+ production applications (Autofeeder, Feedtray, Feeder Maintenance, Inkless) on Ubuntu Linux with database setup and static IP configuration',
      '⚡ Reduced deployment time significantly using Docker-based containerization and automation',
      '🔄 Implemented Docker-based CI/CD pipelines with Jenkins for faster, repeatable deployments',
      '🛠️ Optimized Linux systems for production workloads and managed containerized environments'
    ],
  },
];

const projects = [
  {
    title: 'Two-Tier Flask Application Deployment',
    description: 'Deployed a two-tier Flask-based Todo application with MySQL backend, containerized using Docker and deployed on AWS EKS',
    tags: ['Docker', 'Flask', 'MySQL', 'AWS EKS'],
    githubUrl: 'https://github.com/biswajit-70/two-tier-flask-mysql-app.git',
    featured: true,
  },
  {
    title: 'End-to-End CI/CD Implementation — Jenkins',
    description: 'Designed and implemented end-to-end CI/CD pipelines in Jenkins for microservices, reducing deployment time by 40%',
    tags: ['Jenkins', 'Docker', 'Kubernetes', 'Maven'],
    githubUrl: 'https://github.com/biswajit-70/Simple-Spring-Boot-Web-App.git',
    featured: true,
  },
  {
    title: 'Infrastructure as Code Framework',
    description: 'Reusable Terraform modules for rapid infrastructure provisioning with Ansible configuration management',
    tags: ['Terraform', 'AWS', 'Ansible', 'Bash'],
    githubUrl: 'https://github.com/biswajit-70/terraform-aws-infrastructure',
    featured: false,
  },
  {
    title: 'Real-time Monitoring Dashboard',
    description: 'Comprehensive observability stack with Prometheus, Grafana, custom alerting and SLO tracking',
    tags: ['Prometheus', 'Grafana', 'Alertmanager', 'Kubernetes'],
    githubUrl: 'https://github.com/biswajit-70/monitoring-stack',
    featured: false,
  },
];

const testimonials = [
  {
    name: 'Tech Lead',
    role: 'Senior Engineer',
    content: 'Exceptional problem-solving skills and a deep understanding of DevOps best practices. A valuable team member.',
    rating: 5,
  },
  {
    name: 'Project Manager',
    role: 'Bariflo Cybernetics',
    content: 'Delivered complex infrastructure projects on time with impressive attention to detail and automation.',
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Professional Animated Photo Frame Component with Enhanced Visuals
const AnimatedPhotoFrame = ({ profileImage }: { profileImage: string }) => {
  const [currentPhase, setCurrentPhase] = useState<'tools' | 'infinity' | 'photo'>('tools');
  
  // Enhanced DevOps tools with professional logos
  const devopsTools = [
    { icon: Container, name: 'Docker', color: '#2496ED', bgGradient: 'from-blue-500/20 to-blue-600/10' },
    { icon: Database, name: 'Kubernetes', color: '#326CE5', bgGradient: 'from-indigo-500/20 to-indigo-600/10' },
    { icon: Cloud, name: 'AWS', color: '#FF9900', bgGradient: 'from-orange-500/20 to-orange-600/10' },
    { icon: GitBranch, name: 'Jenkins', color: '#D24939', bgGradient: 'from-red-500/20 to-red-600/10' },
    { icon: Server, name: 'Terraform', color: '#7B42BC', bgGradient: 'from-purple-500/20 to-purple-600/10' },
    { icon: Shield, name: 'Ansible', color: '#EE0000', bgGradient: 'from-rose-500/20 to-rose-600/10' },
  ];

  useEffect(() => {
    const sequence = async () => {
      // Show tools with staggered animation for 4 seconds
      await new Promise(resolve => setTimeout(resolve, 4000));
      setCurrentPhase('infinity');
      
      // Show infinity logo with rotation for 3 seconds
      await new Promise(resolve => setTimeout(resolve, 3000));
      setCurrentPhase('photo');
      
      // Show photo for 5 seconds then restart
      await new Promise(resolve => setTimeout(resolve, 5000));
      setCurrentPhase('tools');
    };

    sequence();
    const interval = setInterval(sequence, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-md mx-auto rounded-3xl overflow-hidden border-2 border-primary/20 shadow-2xl">
      <AnimatePresence mode="wait">
        {currentPhase === 'tools' && (
          <motion.div
            key="tools"
            initial={{ opacity: 0, scale: 0.9, rotateY: -90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotateY: 90 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary/10 to-purple-900/30 flex items-center justify-center backdrop-blur-sm"
          >
            {/* Animated grid background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(32, 180, 180, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(32, 180, 180, 0.3) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }} />
            </div>
            
            <div className="relative grid grid-cols-3 gap-4 p-6">
              {devopsTools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0, rotate: -180, y: 50 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    rotate: 0,
                    y: 0
                  }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className={`relative group flex flex-col items-center justify-center p-5 rounded-2xl bg-gradient-to-br ${tool.bgGradient} backdrop-blur-md border border-white/10 hover:border-white/30 transition-all`}
                >
                  {/* Glow effect */}
                  <motion.div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      boxShadow: `0 0 30px ${tool.color}60, inset 0 0 20px ${tool.color}20`
                    }}
                  />
                  
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      rotate: { duration: 20, repeat: Infinity, ease: "linear", delay: index * 2 },
                      scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }
                    }}
                  >
                    <tool.icon 
                      className="w-12 h-12 mb-2 drop-shadow-lg" 
                      style={{ color: tool.color }}
                    />
                  </motion.div>
                  
                  <motion.span 
                    className="text-xs font-semibold text-center tracking-wide"
                    style={{ color: tool.color }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                  >
                    {tool.name}
                  </motion.span>
                  
                  {/* Particle effect */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    <div className="absolute top-2 right-2 w-1 h-1 rounded-full" style={{ backgroundColor: tool.color }} />
                    <div className="absolute bottom-2 left-2 w-1 h-1 rounded-full" style={{ backgroundColor: tool.color }} />
                  </motion.div>
                </motion.div>
              ))}
            </div>
            
            {/* Floating particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-primary/30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  x: [-10, 10, -10],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>
        )}

        {currentPhase === 'infinity' && (
          <motion.div
            key="infinity"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/30 to-purple-900/40 flex items-center justify-center overflow-hidden"
          >
            {/* Animated tech background */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 3
                  }}
                />
              ))}
            </div>

            <div className="relative">
              {/* DevOps Infinity Symbol with proper shape */}
              <svg
                width="400"
                height="200"
                viewBox="0 0 400 200"
                className="drop-shadow-2xl"
              >
                {/* Glow effect layers */}
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="25%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="75%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
                
                {/* Outer glow */}
                <motion.path
                  d="M 80 100 C 80 50, 50 30, 80 30 C 120 30, 140 70, 200 100 C 260 130, 280 170, 320 170 C 350 170, 320 150, 320 100 C 320 50, 350 30, 320 30 C 280 30, 260 70, 200 100 C 140 130, 120 170, 80 170 C 50 170, 80 150, 80 100 Z"
                  fill="none"
                  stroke="url(#infinityGradient)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  opacity="0.3"
                  filter="blur(8px)"
                />
                
                {/* Main infinity path - animated stroke */}
                <motion.path
                  d="M 80 100 C 80 50, 50 30, 80 30 C 120 30, 140 70, 200 100 C 260 130, 280 170, 320 170 C 350 170, 320 150, 320 100 C 320 50, 350 30, 320 30 C 280 30, 260 70, 200 100 C 140 130, 120 170, 80 170 C 50 170, 80 150, 80 100 Z"
                  fill="none"
                  stroke="url(#infinityGradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#glow)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1] }}
                  transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.5 }}
                />
                
                {/* Inner highlight */}
                <motion.path
                  d="M 80 100 C 80 50, 50 30, 80 30 C 120 30, 140 70, 200 100 C 260 130, 280 170, 320 170 C 350 170, 320 150, 320 100 C 320 50, 350 30, 320 30 C 280 30, 260 70, 200 100 C 140 130, 120 170, 80 170 C 50 170, 80 150, 80 100 Z"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.6"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1] }}
                  transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }}
                />
              </svg>
              
              {/* CI/CD Lifecycle stages around the infinity */}
              {[
                { label: 'PLAN', angle: 0, color: '#06b6d4', icon: '📋' },
                { label: 'CODE', angle: 51.4, color: '#3b82f6', icon: '💻' },
                { label: 'BUILD', angle: 102.8, color: '#8b5cf6', icon: '🔨' },
                { label: 'TEST', angle: 154.2, color: '#ec4899', icon: '🧪' },
                { label: 'RELEASE', angle: 205.6, color: '#f97316', icon: '📦' },
                { label: 'DEPLOY', angle: 257, color: '#eab308', icon: '🚀' },
                { label: 'OPERATE', angle: 308.4, color: '#22c55e', icon: '⚙️' },
              ].map((stage, index) => {
                const radius = 180;
                const centerX = 200;
                const centerY = 100;
                const radian = (stage.angle * Math.PI) / 180;
                const x = centerX + radius * Math.cos(radian);
                const y = centerY + radius * Math.sin(radian);
                
                return (
                  <motion.div
                    key={stage.label}
                    className="absolute"
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1.2, 1],
                      opacity: [0, 1, 1]
                    }}
                    transition={{
                      delay: index * 0.2,
                      duration: 0.6,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  >
                    {/* Stage badge */}
                    <motion.div
                      className="relative"
                      animate={{ 
                        y: [-5, 5, -5],
                      }}
                      transition={{
                        duration: 2 + index * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {/* Glow */}
                      <div 
                        className="absolute inset-0 rounded-full blur-lg opacity-50"
                        style={{ backgroundColor: stage.color }}
                      />
                      
                      {/* Badge */}
                      <div 
                        className="relative px-3 py-1.5 rounded-full backdrop-blur-sm border-2 flex items-center gap-1.5"
                        style={{
                          backgroundColor: `${stage.color}20`,
                          borderColor: stage.color
                        }}
                      >
                        <span className="text-sm">{stage.icon}</span>
                        <span 
                          className="text-xs font-bold uppercase tracking-wider whitespace-nowrap"
                          style={{ color: stage.color }}
                        >
                          {stage.label}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
              
              {/* Center DevOps text */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                  opacity: [0, 1, 1, 1, 0],
                  scale: [0.5, 1.1, 1, 1, 0.5]
                }}
                transition={{ duration: 4, repeat: Infinity, repeatDelay: 0.5 }}
              >
                <h3 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl mb-2">
                  DevOps
                </h3>
                <motion.p 
                  className="text-sm text-cyan-400 font-mono tracking-widest"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  CONTINUOUS LIFECYCLE
                </motion.p>
              </motion.div>
            </div>
            
            {/* Flowing particles along the path */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  background: i % 2 === 0 ? '#06b6d4' : '#8b5cf6',
                  boxShadow: `0 0 10px ${i % 2 === 0 ? '#06b6d4' : '#8b5cf6'}`,
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  x: [0, 100, 200, 300, 200, 100, 0, -100, -200, -100, 0],
                  y: [0, -50, -30, 0, 70, 70, 0, 70, -30, -50, 0],
                  scale: [1, 1.2, 1, 1.2, 1],
                  opacity: [0.5, 1, 0.8, 1, 0.5]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: i * 0.75,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        )}

        {currentPhase === 'photo' && (
          <motion.div
            key="photo"
            initial={{ opacity: 0, scale: 1.3, rotateZ: -10 }}
            animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotateZ: 10 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0"
          >
            {/* Animated border gradient */}
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'linear-gradient(0deg, rgba(32,180,180,0.3), rgba(168,85,247,0.3))',
                  'linear-gradient(90deg, rgba(32,180,180,0.3), rgba(168,85,247,0.3))',
                  'linear-gradient(180deg, rgba(32,180,180,0.3), rgba(168,85,247,0.3))',
                  'linear-gradient(270deg, rgba(32,180,180,0.3), rgba(168,85,247,0.3))',
                  'linear-gradient(360deg, rgba(32,180,180,0.3), rgba(168,85,247,0.3))'
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <motion.img
              src={profileImage}
              alt="Biswajit Pattnayak"
              className="relative w-full h-full object-cover object-top"
              animate={{
                filter: [
                  'brightness(1) contrast(1) saturate(1)',
                  'brightness(1.05) contrast(1.05) saturate(1.1)',
                  'brightness(1) contrast(1) saturate(1)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Spotlight effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/20"
              animate={{
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            {/* Corner accent lines */}
            <motion.div
              className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-cyan-400"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated Corner Indicators */}
      <motion.div
        className="absolute top-4 right-4 flex gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {['tools', 'infinity', 'photo'].map((phase, idx) => (
          <motion.div
            key={phase}
            className="w-2 h-2 rounded-full"
            animate={{
              backgroundColor: currentPhase === phase ? '#20b4b4' : '#ffffff40',
              scale: currentPhase === phase ? 1.5 : 1
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/xkoowelj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.a 
              href="#home"
              className="font-display font-bold text-xl text-gradient flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              data-testid="logo-link"
            >
              <Terminal className="w-6 h-6 text-primary" />
              Biswajit.Dev
            </motion.a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => {
                const sectionId = link.href.substring(1); // Remove '#' from href
                const isActive = activeSection === sectionId;
                
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-medium transition-colors relative group ${
                      isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                    }`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    data-testid={`nav-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                    <span 
                      className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </motion.a>
                );
              })}
            </div>

            <motion.a
              href={resumePDF}
              download="Biswajit_Pattanayak_Resume.pdf"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground rounded-full font-medium text-sm hover:shadow-lg hover:shadow-primary/25 transition-all"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="button-download-cv"
            >
              <Download className="w-4 h-4" />
              Download CV
            </motion.a>

            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden glass border-t border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`mobile-nav-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              ))}
              {/* Download CV button for mobile */}
              <motion.a
                href={resumePDF}
                download="Biswajit_Pattanayak_Resume.pdf"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground rounded-full font-medium text-sm hover:shadow-lg hover:shadow-primary/25 transition-all mt-4"
                whileTap={{ scale: 0.95 }}
                data-testid="button-download-cv-mobile"
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>
            </div>
          </motion.div>
        )}
      </nav>

      <section id="home" ref={heroRef} className="min-h-screen flex items-center pt-16 relative overflow-hidden">
        {/* Enhanced Animated Technical Background */}
        <div className="absolute inset-0">
          {/* Gradient base */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
          
          {/* Animated gradient orbs */}
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <motion.div 
              className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-[100px]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>
          
          {/* Animated technical grid pattern */}
          <motion.div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'linear-gradient(rgba(32, 180, 180, 0.1) 2px, transparent 2px), linear-gradient(90deg, rgba(32, 180, 180, 0.1) 2px, transparent 2px)',
              backgroundSize: '100px 100px'
            }}
            animate={{
              backgroundPosition: ['0px 0px', '100px 100px']
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Floating tech icons background */}
          {[
            { Icon: Container, pos: { top: '15%', left: '10%' }, delay: 0, color: '#2496ED' },
            { Icon: Cloud, pos: { top: '25%', right: '15%' }, delay: 1, color: '#FF9900' },
            { Icon: Database, pos: { bottom: '20%', left: '15%' }, delay: 2, color: '#326CE5' },
            { Icon: GitBranch, pos: { top: '50%', right: '8%' }, delay: 1.5, color: '#D24939' },
            { Icon: Server, pos: { bottom: '30%', right: '20%' }, delay: 2.5, color: '#7B42BC' },
            { Icon: Terminal, pos: { top: '60%', left: '8%' }, delay: 0.5, color: '#22d3ee' },
            { Icon: Shield, pos: { top: '80%', right: '12%' }, delay: 3, color: '#EE0000' },
            { Icon: Code2, pos: { top: '40%', left: '5%' }, delay: 1.8, color: '#20b4b4' },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="absolute opacity-[0.03] pointer-events-none"
              style={item.pos}
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 360],
                opacity: [0.03, 0.08, 0.03]
              }}
              transition={{
                y: { duration: 6 + i, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 20 + i * 3, repeat: Infinity, ease: "linear" },
                opacity: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: item.delay }
              }}
            >
              <item.Icon className="w-24 h-24 md:w-32 md:h-32" style={{ color: item.color }} />
            </motion.div>
          ))}
          
          {/* Code-like rain effect */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent"
              style={{
                left: `${(i * 5)}%`,
                height: '100px'
              }}
              animate={{
                y: [-100, window.innerHeight + 100],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "linear"
              }}
            />
          ))}
          
          {/* Dot pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMGI0YjQiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        </div>

        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-2 lg:order-1"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                variants={itemVariants}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-primary font-medium">Available for opportunities</span>
              </motion.div>
              
              <motion.h1 
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                variants={itemVariants}
              >
                <span className="text-foreground">Hi, I'm </span>
                <span className="text-gradient glow-text">Biswajit Pattnayak</span>
                <br />
                <span className="text-foreground text-3xl sm:text-4xl lg:text-5xl">DevOps Engineer</span>
              </motion.h1>

              <motion.p 
                className="text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed"
                variants={itemVariants}
              >
                Automating the future, one pipeline at a time. Specializing in 
                <span className="text-primary font-medium"> CI/CD</span>, 
                <span className="text-primary font-medium"> Cloud Infrastructure</span>, and 
                <span className="text-primary font-medium"> Container Orchestration</span>.
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-4 mb-8"
                variants={itemVariants}
              >
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground rounded-full font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid="button-hire-me"
                >
                  Let's Work Together
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#portfolio"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary/50 text-foreground rounded-full font-semibold hover:bg-primary/10 hover:border-primary transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid="button-view-work"
                >
                  <Play className="w-5 h-5 text-primary" />
                  View My Work
                </motion.a>
              </motion.div>

              <motion.div 
                className="flex gap-3"
                variants={itemVariants}
              >
                {[
                  { icon: Github, href: 'https://github.com/biswajit-70', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/biswajit-pattanayak-424822281', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:biswajitpattanaik453@gmail.com', label: 'Email' },
                ].map((social) => (
                  <motion.a 
                    key={social.label}
                    href={social.href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    data-testid={`link-${social.label.toLowerCase()}`}
                  >
                    <social.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              className="order-1 lg:order-2 flex justify-center"
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <div className="relative">
                <motion.div 
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-cyan-400 to-purple-500 blur-2xl opacity-50"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.7, 0.5]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full p-1.5 bg-gradient-to-r from-primary via-cyan-400 to-purple-500 animate-gradient">
                  <div className="w-full h-full rounded-full overflow-hidden bg-background p-1">
                    <img 
                      src={profileImage} 
                      alt="Biswajit Pattnayak" 
                      className="w-full h-full object-cover rounded-full object-top"
                      data-testid="img-profile"
                    />
                  </div>
                </div>
                
                <motion.div 
                  className="absolute -top-4 -right-4 p-4 glass rounded-2xl"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Container className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Docker</p>
                      <p className="text-sm font-semibold">Expert</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute -bottom-2 -left-6 p-4 glass rounded-2xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                      <Cloud className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">AWS</p>
                      <p className="text-sm font-semibold">Certified</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute top-1/2 -right-8 p-3 glass rounded-xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <Server className="w-6 h-6 text-blue-400" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="relative group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative glass rounded-2xl p-6 text-center border border-border group-hover:border-primary/50 transition-colors">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="font-display text-3xl font-bold text-gradient mb-1" data-testid={`stat-value-${index}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground" data-testid={`stat-label-${index}`}>
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs font-medium">Scroll Down</span>
            <ChevronRight className="w-5 h-5 rotate-90" />
          </a>
        </motion.div>
      </section>

      <section className="py-20 border-y border-border bg-gradient-to-b from-card/50 via-card/30 to-background relative overflow-hidden">
        {/* Optimized static background - no animation for performance */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(32, 180, 180, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(32, 180, 180, 0.2) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Cloud className="w-6 h-6 text-primary" />
              <span className="text-primary font-mono text-sm uppercase tracking-widest">Tech Stack</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              DevOps & <span className="text-gradient">Cloud Technologies</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
              Industry-leading tools and platforms for continuous delivery
            </p>
          </motion.div>
          
          {/* Grid of tool cards - optimized for mobile */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.05 }
              }
            }}
          >
            {tools.map((tool) => (
              <motion.div
                key={tool.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                {/* Glow effect on hover - GPU accelerated */}
                <div 
                  className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"
                  style={{
                    backgroundColor: `${tool.color}30`,
                    willChange: 'opacity'
                  }}
                />
                
                {/* Tool card */}
                <div 
                  className="relative glass rounded-2xl p-4 border border-border group-hover:border-primary/50 transition-all duration-300 flex flex-col items-center justify-center min-h-[140px]"
                  style={{ willChange: 'transform' }}
                >
                  {/* Icon container with colored background */}
                  <div
                    className="w-16 h-16 rounded-xl mb-3 flex items-center justify-center relative"
                    style={{
                      backgroundColor: `${tool.color}15`,
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    {/* DevIcon logo */}
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${
                        tool.name.toLowerCase()
                          .replace(' ', '')
                          .replace('githubactions', 'github')
                      }/${
                        tool.name.toLowerCase()
                          .replace(' ', '')
                          .replace('githubactions', 'github')
                      }-original.svg`}
                      alt={tool.name}
                      className="w-10 h-10"
                      onError={(e) => {
                        // Fallback to plain-wordmark if original fails
                        const target = e.target as HTMLImageElement;
                        const fallbackName = tool.name.toLowerCase().replace(' ', '').replace('githubactions', 'github');
                        target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${fallbackName}/${fallbackName}-plain.svg`;
                      }}
                    />
                    
                    {/* Status indicator */}
                    <div
                      className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
                      style={{ 
                        backgroundColor: tool.color,
                        boxShadow: `0 0 8px ${tool.color}`
                      }}
                    />
                  </div>
                  
                  {/* Tool name */}
                  <span 
                    className="text-xs font-semibold text-center group-hover:text-primary transition-colors leading-tight mb-2"
                    style={{ 
                      color: tool.color,
                      fontSize: tool.name.length > 10 ? '0.65rem' : '0.75rem'
                    }}
                  >
                    {tool.name}
                  </span>
                  
                  {/* Description inside card - shows on hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/98 to-background rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-4 text-center">
                    <span className="font-semibold block mb-2 text-sm" style={{ color: tool.color }}>
                      {tool.name}
                    </span>
                    <span className="text-xs text-muted-foreground leading-snug">
                      {tool.desc}
                    </span>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transition-all duration-300 scale-x-0 group-hover:scale-x-100"
                    style={{ 
                      backgroundColor: tool.color,
                      transformOrigin: 'center'
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Tooltip hint */}
          <motion.p
            className="text-center text-xs text-muted-foreground mt-8 font-mono opacity-50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Hover or tap a tool to see its purpose
          </motion.p>
        </div>
      </section>

      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col lg:flex-row gap-16 items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-1/2">
              <div className="relative">
                <AnimatedPhotoFrame profileImage={profileImage} />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-primary to-cyan-400 rounded-2xl -z-10" />
                <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/30 rounded-2xl -z-10" />
              </div>
            </div>

            <div className="lg:w-1/2">
              <motion.span 
                className="text-primary font-mono text-sm mb-4 block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                // ABOUT ME
              </motion.span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
                Passionate About <span className="text-gradient">Automation</span> & <span className="text-gradient">Infrastructure</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I'm <span className="text-primary font-medium">Biswajit Pattnayak</span>, an aspiring DevOps Engineer with hands-on experience in 
                <span className="text-primary font-medium"> Docker, Kubernetes, Jenkins, and AWS</span>. Currently interning at 
                <span className="text-primary font-medium">Bariflo Cybernetics Pvt Ltd</span>, where I've successfully deployed production applications 
                and built automated CI/CD pipelines.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Proficient in <span className="text-primary font-medium">deploying containerized applications</span>, 
                managing <span className="text-primary font-medium">Linux-based systems</span>, and implementing 
                <span className="text-primary font-medium">cloud-native architectures</span>. 
                Strong focus on automation and DevOps best practices to <span className="text-primary font-medium">reduce deployment time and improve system reliability</span>.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: 'docker', label: 'Docker', color: '#2496ED' },
                  { icon: 'kubernetes', label: 'Kubernetes', color: '#326CE5' },
                  { icon: 'jenkins', label: 'Jenkins', color: '#D24939' },
                  { icon: 'amazonwebservices', label: 'AWS', color: '#FF9900' },
                ].map((item) => (
                  <motion.div 
                    key={item.label} 
                    className="group flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${item.color}15` }}
                    >
                      <img
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${item.icon}/${item.icon}-original.svg`}
                        alt={item.label}
                        className="w-6 h-6"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${item.icon}/${item.icon}-plain.svg`;
                        }}
                      />
                    </div>
                    <span className="text-sm font-medium" style={{ color: item.color }}>{item.label}</span>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all"
                whileHover={{ x: 5 }}
              >
                Let's Connect <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-mono text-sm mb-4 block">// SKILLS</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              My <span className="text-gradient">Technical</span> Arsenal
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to build, deploy, and manage infrastructure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="glass rounded-2xl p-6 border border-border hover:border-primary/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg">{category.title}</h3>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group relative">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          {/* DevIcon logo */}
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <img
                              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.iconName}/${skill.iconName}-original.svg`}
                              alt={skill.name}
                              className="w-5 h-5"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.iconName}/${skill.iconName}-plain.svg`;
                              }}
                            />
                          </div>
                          <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                        <span className="text-xs text-primary font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            background: 'linear-gradient(90deg, hsl(180 85% 50%) 0%, hsl(190 80% 55%) 50%, hsl(200 75% 60%) 100%)'
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-mono text-sm mb-4 block">// SERVICES</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              What I <span className="text-gradient">Offer</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end DevOps solutions to accelerate your development lifecycle
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative glass rounded-2xl p-6 h-full border border-border group-hover:border-primary/50 transition-all">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-500/10 text-primary w-fit mb-6 group-hover:from-primary group-hover:to-cyan-500 group-hover:text-white transition-all">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <ChevronRight className="w-3 h-3 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-mono text-sm mb-4 block">// EXPERIENCE</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Work <span className="text-gradient">History</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                className="relative pl-8 pb-12 last:pb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-cyan-400 border-4 border-background" />
                <div className="absolute left-[7px] top-4 w-0.5 h-full bg-border last:hidden" />
                
                <div className="glass rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {exp.period}
                    </span>
                    <h3 className="font-display font-semibold text-xl">{exp.role}</h3>
                  </div>
                  <p className="text-primary font-medium mb-3">{exp.company}</p>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-mono text-sm mb-4 block">// PORTFOLIO</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of my best work in DevOps and infrastructure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative block ${project.featured ? 'md:col-span-1' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative glass rounded-3xl overflow-hidden border border-border group-hover:border-primary/50 transition-all cursor-pointer">
                  <div className="h-56 bg-gradient-to-br from-primary/10 via-card to-purple-500/10 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-4 left-4 w-32 h-32 border border-primary/30 rounded-lg" />
                      <div className="absolute bottom-4 right-4 w-24 h-24 border border-cyan-400/30 rounded-full" />
                    </div>
                    <div className="relative">
                      <Github className="w-20 h-20 text-primary/30 group-hover:text-primary/50 transition-colors" />
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" /> Featured
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 px-3 py-1.5 glass text-xs font-medium rounded-lg flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Github className="w-4 h-4" />
                      View on GitHub
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1.5 text-xs bg-primary/10 text-primary rounded-lg font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-mono text-sm mb-4 block">// TESTIMONIALS</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              What People <span className="text-gradient">Say</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="glass rounded-2xl p-8 border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-mono text-sm mb-4 block">// CONTACT</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Let's Build Something <span className="text-gradient">Amazing</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to automate your infrastructure? Let's talk about your project!
            </p>
          </motion.div>

          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-3xl p-8 md:p-10 border border-border">
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-sm flex items-center gap-2"
                >
                  <span className="text-lg">✓</span>
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm flex items-center gap-2"
                >
                  <span className="text-lg">✕</span>
                  <span>Failed to send message. Please try again or email me directly.</span>
                </motion.div>
              )}
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3.5 bg-card border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                      placeholder="John Doe"
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3.5 bg-card border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                      placeholder="john@example.com"
                      data-testid="input-email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3.5 bg-card border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                    placeholder="DevOps Consultation"
                    data-testid="input-subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3.5 bg-card border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all resize-none"
                    placeholder="Tell me about your project and how I can help..."
                    data-testid="input-message"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground rounded-xl font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  data-testid="button-send-message"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              {[
                { icon: Github, href: 'https://github.com/biswajit-70', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/biswajit-pattanayak-424822281', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:biswajitpattanaik453@gmail.com', label: 'Email' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl glass border border-border hover:border-primary transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-8 border-t border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-primary" />
              <span className="font-display font-semibold text-gradient">Biswajit.Dev</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2026 Biswajit Pattnayak. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/biswajit-70" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/biswajit-pattanayak-424822281" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:biswajitpattanaik453@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
