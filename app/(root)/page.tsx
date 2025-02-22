import Image from 'next/image';
import { MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import Link from 'next/link';
import TooltipWrapper from '@/components/TooltipWrapper';
import ProjectCard from '@/components/ProjectCard';
import ArticleCard from '@/components/ArticleCard';
import { ScrollArea } from '@radix-ui/react-scroll-area';

import { ProjectsData, ArticlesData } from '@/data/data';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/biyinzika-joshua-j/',
    icon: <Linkedin />
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Biyinzika-Joshua-J',
    icon: <Github />
  },
  {
    name: 'Twitter/X',
    url: 'https://x.com/JoshJosephB',
    icon: <Twitter />
  }
];

export default function Home() {
  return (
    <main className="px-8 py-12">
      <div className="flex md:flex-row flex-col gap-10">
        <div className="md:w-1/2 w-full ">
          <div className="flex flex-col max-md:flex-row ">
            <div className="bg-primary p-4 rounded-full inline-block w-fit  max-md:self-center">
              <Image
                src="https://media.licdn.com/dms/image/v2/D4D03AQGA21QMWuZCbg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1712980999250?e=1737590400&v=beta&t=vkgDiMawqst-LHCoJ99hj5LP6pGD-aFwDS2BLntW0W0"
                alt="Joshua Biyinzika"
                width={180}
                height={180}
                className="rounded-full"
              />
            </div>
            <div className="space-y-4 max-md:pl-4 py-4">
              <h1 className="text-4xl font-bold py-2">Biyinzika Joshua</h1>
              <div className="flex space-x-2 items-center font-medium">
                <MapPin size={20} />
                <span>Kampala, Uganda</span>
              </div>
            </div>
          </div>

          <p className="text-lg mt-2">
            I&apos;m a software engineer with over 2 years of experience working with a diverse
            range of technologies, including JavaScript, TypeScript, Nest js, Python, React, HTMX,
            Next.js, Django, and PostgreSQL. My expertise spans both frontend and backend
            development, and I&apos;m currently expanding my skills into systems programming with
            Rust. I regularly share my journey and experiences on LinkedIn, X (formerly Twitter),
            and Medium.
          </p>
          <div className="flex items-center space-x-4 mt-6">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                className="flex items-center space-x-2"
                target="_blank"
              >
                <TooltipWrapper content={link.name}>{link.icon}</TooltipWrapper>
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full">
          <ScrollArea className="md:max-h-screen md:overflow-y-auto hide-scrollbar">
            <h2 className="text-2xl font-bold mb-6">My small bets</h2>
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10 mt-4">
              {ProjectsData.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  url={project.url}
                  width={project.width}
                  height={project.height}
                  animation={project.animation}
                />
              ))}
            </div>

            <h2 className="text-2xl font-bold my-6">My articles</h2>
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10 mt-4">
              {ArticlesData.map((article) => (
                <ArticleCard
                  key={article.title}
                  title={article.title}
                  description={article.description}
                  Icon={article.icon}
                  url={article.url}
                  width={article.width}
                  height={article.height}
                  animation={article.animation}
                  medium={article.medium}
                />
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </main>
  );
}
