"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { Hero } from "./Hero";
import { About } from "./About";
import { Projects } from "./Projects";
import { Certificates } from "./Certificates";
import { Education } from "./Education";
import { Contact } from "./Contact";
import { Expertise } from "./Expertise";
export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Expertise",
      link: "#expertise",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Education",
      link: "#education",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
  return (
    <div className="dark relative w-full bg-background">
      <Navbar >
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
        </NavBody>
 
        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
 
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>


        {/* Each section component is placed here */}
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="py-20">
          <About/>
        </section>

        <section id="expertise" className="py-20">
          <Expertise/>
        </section>
        
        <section id="projects" className="py-20">
          <Projects/>
        </section>

        <section id="projects" className="py-20">
          <Certificates/>
        </section>

        <section id="education" className="py-20">
          <Education/>
        </section>
        
        <section id="contact" className="py-20">
          <Contact/>
        </section>
        

    
    </div>
  );
}
 
