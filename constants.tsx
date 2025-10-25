
import React from 'react';
import { CodeIcon, AIIcon, DesignIcon, CloudIcon, MobileIcon, DataIcon, GithubIcon, LinkedinIcon, TwitterIcon, ReactIcon, NodeIcon, PythonIcon, AWSIcon, DockerIcon, FigmaIcon } from './components/icons';

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const servicesData = [
  {
    icon: <AIIcon className="h-10 w-10 text-primary" />,
    title: 'AI & Machine Learning',
    description: 'We build intelligent systems that learn, adapt, and predict, turning complex data into actionable insights.',
  },
  {
    icon: <CodeIcon className="h-10 w-10 text-primary" />,
    title: 'Web Development',
    description: 'Crafting high-performance, scalable web applications with modern architecture and seamless user experiences.',
  },
  {
    icon: <DesignIcon className="h-10 w-10 text-primary" />,
    title: 'UI/UX Design',
    description: 'Designing intuitive and beautiful interfaces that engage users and elevate your brand to the next level.',
  },
  {
    icon: <MobileIcon className="h-10 w-10 text-primary" />,
    title: 'Mobile App Development',
    description: 'Building native and cross-platform mobile apps that deliver smooth performance and a fantastic user journey.',
  },
  {
    icon: <CloudIcon className="h-10 w-10 text-primary" />,
    title: 'Cloud & DevOps',
    description: 'Automating workflows and deploying robust cloud infrastructure for maximum efficiency and reliability.',
  },
  {
    icon: <DataIcon className="h-10 w-10 text-primary" />,
    title: 'Data Engineering',
    description: 'Architecting and managing scalable data pipelines to ensure your data is always ready for analysis.',
  },
];

export const techStackData = [
  { name: 'React', icon: <ReactIcon /> },
  { name: 'Node.js', icon: <NodeIcon /> },
  { name: 'Python', icon: <PythonIcon /> },
  { name: 'AWS', icon: <AWSIcon /> },
  { name: 'Docker', icon: <DockerIcon /> },
  { name: 'Figma', icon: <FigmaIcon /> },
];

export const projectsData = [
  {
    image: 'https://picsum.photos/seed/project1/600/400',
    title: 'Project Alpha',
    description: 'An AI-powered analytics platform that provides real-time market insights for e-commerce businesses.',
    tags: ['React', 'Node.js', 'Python', 'AI/ML'],
    link: '#',
  },
  {
    image: 'https://picsum.photos/seed/project2/600/400',
    title: 'Project Beta',
    description: 'A cross-platform mobile application for seamless team collaboration and project management.',
    tags: ['React Native', 'Firebase', 'UI/UX'],
    link: '#',
  },
  {
    image: 'https://picsum.photos/seed/project3/600/400',
    title: 'Project Gamma',
    description: 'A decentralized finance (DeFi) dashboard offering secure asset management and trading.',
    tags: ['Web3', 'Solidity', 'Next.js'],
    link: '#',
  },
  {
    image: 'https://picsum.photos/seed/project4/600/400',
    title: 'Project Delta',
    description: 'A cloud-native data processing pipeline designed for large-scale genomic data analysis.',
    tags: ['AWS', 'Docker', 'Kubernetes'],
    link: '#',
  },
];

export const socialLinks = [
  { name: 'GitHub', icon: <GithubIcon className="h-6 w-6" />, link: '#' },
  { name: 'LinkedIn', icon: <LinkedinIcon className="h-6 w-6" />, link: '#' },
  { name: 'Twitter', icon: <TwitterIcon className="h-6 w-6" />, link: '#' },
];
