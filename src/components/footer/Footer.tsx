"use client";

import React from "react";
import {
  Zap,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Heart,
  Coffee,
  Code,
  Palette,
  User,
  Briefcase,
  FileText,
  MapPin,
  Calendar,
  ArrowUp,
  Music,
  Headphones,
  X,
  Play,
  Pen,
} from "lucide-react";
import { cn } from "../../lib/utils";

interface FooterProps {
  readonly variant?: "default" | "glass" | "gradient" | "minimal";
  readonly showSocial?: boolean;
  readonly showNavigation?: boolean;
  readonly showContact?: boolean;
  readonly showStats?: boolean;
  readonly onSectionChange?: (section: string) => void;
  readonly className?: string;
}

type NavigationLink = {
  name: string;
  icon: typeof Code;
} & ({ id: string; href?: never } | { href: string; id?: never });

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/ehsanpo",
    color: "hover:text-gray-600 dark:hover:text-gray-300",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ehsanp/",
    color: "hover:text-blue-600",
  },
  {
    name: "SoundCloud",
    icon: Headphones,
    href: "https://soundcloud.com/eprumental",
    color: "hover:text-orange-500",
  },
  {
    name: "Dribbble",
    icon: Pen, // Using Pen as placeholder for Dribbble
    href: "https://dribbble.com/epo",
    color: "hover:text-pink-500",
  },
  {
    name: "Twitter/X",
    icon: X,
    href: "https://twitter.com/ehsanpo",
    color: "hover:text-black dark:hover:text-white",
  },
  {
    name: "YouTube",
    icon: Play, // Using Play as placeholder for YouTube
    href: "https://www.youtube.com/user/ehsanpo/",
    color: "hover:text-red-600",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:ehsan.po@gmail.com",
    color: "hover:text-green-500",
  },
];

const navigationSections: { title: string; links: NavigationLink[] }[] = [
  {
    title: "Portfolio",
    links: [
      { name: "Work", href: "/portfolio", icon: Briefcase },
      { name: "Skills", href: "/skills", icon: Code },
      { name: "Services", href: "/services", icon: Palette },
      { name: "About", href: "/about", icon: User },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Music", href: "/music", icon: Music },
      { name: "Resume", href: "/cv", icon: FileText },
      { name: "Contact", href: "/contact", icon: Mail },
      { name: "Home", href: "/", icon: ExternalLink },
    ],
  },
  {
    title: "Connect",
    links: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ehsanp/",
        icon: Linkedin,
      },
      { name: "GitHub", href: "https://github.com/ehsanpo", icon: Github },
      {
        name: "SoundCloud",
        href: "https://soundcloud.com/eprumental",
        icon: Headphones,
      },
      {
        name: "YouTube",
        href: "https://www.youtube.com/user/ehsanpo/",
        icon: Play,
      },
      { name: "Email", href: "mailto:ehsan.po@gmail.com", icon: Mail },
    ],
  },
];

export function Footer({
  variant = "glass",
  showSocial = true,
  showNavigation = true,
  showContact = true,
  showStats = true,
  onSectionChange,
  className,
}: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigation = (id: string) => {
    if (onSectionChange) {
      onSectionChange(id);
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case "glass":
        return "glass-card border-t border-border/50 border-gray-800";
      case "gradient":
        return "bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border-t border-primary-500/20";
      case "default":
        return "bg-background border-t border-border";
      case "minimal":
        return "bg-transparent border-t border-border/30";
      default:
        return "glass-card border-t border-border/50";
    }
  };

  if (variant === "minimal") {
    return (
      <footer className={cn("py-8", className)}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <svg
                  width="48"
                  height="48"
                  className="text-primary-500"
                  viewBox="0 0 27.8 26.7"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M0.5,19.4C0.2,19,0,18.7,0,18.2c0-0.4,0.2-0.8,0.5-1.1L17.1,0.5C17.4,0.2,17.8,0,18.2,0c0.4,0,0.8,0.2,1.1,0.5
                    c0.3,0.3,0.5,0.7,0.5,1.1c0,0.4-0.2,0.8-0.5,1.1L2.7,19.4c-0.3,0.3-0.7,0.5-1.1,0.5C1.2,19.8,0.8,19.7,0.5,19.4z M12.4,25.6
                    c-0.3,0.3-0.8,0.6-1.3,0.8s-1,0.3-1.5,0.3c-0.5,0-1.1-0.1-1.6-0.3c-0.5-0.2-1.1-0.5-1.5-1l-2.1-2.1c-0.4-0.4-0.6-0.8-0.5-1.2
                    c0.1-0.4,0.4-0.8,0.9-1.3L20.6,5c0.3-0.3,0.7-0.5,1.1-0.5c0.4,0,0.8,0.2,1.1,0.5c0.3,0.3,0.5,0.7,0.5,1.1c0,0.4-0.2,0.8-0.5,1.1
                    l-15,15L9,23.4c0.2,0.2,0.4,0.2,0.6,0.2c0.2,0,0.5-0.1,0.7-0.4L25.1,8.4C25.4,8.1,25.8,8,26.2,8c0.4,0,0.8,0.2,1.1,0.5
                    c0.3,0.3,0.5,0.7,0.5,1.1c0,0.4-0.2,0.8-0.5,1.1L12.4,25.6z"
                  />
                </svg>
              </div>
              <span className="font-basement text-foreground">
                Ehsan Pourhadi
              </span>
            </div>

            {/* Social Links */}
            {showSocial && (
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "p-2 rounded-lg transition-all duration-300 hover:scale-110",
                        "text-muted-foreground",
                        social.color
                      )}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            )}

            {/* Copyright */}
            <div className="text-sm text-muted-foreground font-kabel">
              © 2024 Ehsan Pourhadi. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className={cn("relative mt-20", getVariantClasses(), className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500/10 to-secondary-500/60 rounded-lg flex items-center justify-center">
                <svg
                  width="48"
                  height="48"
                  className="text-primary-500"
                  viewBox="0 0 27.8 26.7"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M0.5,19.4C0.2,19,0,18.7,0,18.2c0-0.4,0.2-0.8,0.5-1.1L17.1,0.5C17.4,0.2,17.8,0,18.2,0c0.4,0,0.8,0.2,1.1,0.5
                    c0.3,0.3,0.5,0.7,0.5,1.1c0,0.4-0.2,0.8-0.5,1.1L2.7,19.4c-0.3,0.3-0.7,0.5-1.1,0.5C1.2,19.8,0.8,19.7,0.5,19.4z M12.4,25.6
                    c-0.3,0.3-0.8,0.6-1.3,0.8s-1,0.3-1.5,0.3c-0.5,0-1.1-0.1-1.6-0.3c-0.5-0.2-1.1-0.5-1.5-1l-2.1-2.1c-0.4-0.4-0.6-0.8-0.5-1.2
                    c0.1-0.4,0.4-0.8,0.9-1.3L20.6,5c0.3-0.3,0.7-0.5,1.1-0.5c0.4,0,0.8,0.2,1.1,0.5c0.3,0.3,0.5,0.7,0.5,1.1c0,0.4-0.2,0.8-0.5,1.1
                    l-15,15L9,23.4c0.2,0.2,0.4,0.2,0.6,0.2c0.2,0,0.5-0.1,0.7-0.4L25.1,8.4C25.4,8.1,25.8,8,26.2,8c0.4,0,0.8,0.2,1.1,0.5
                    c0.3,0.3,0.5,0.7,0.5,1.1c0,0.4-0.2,0.8-0.5,1.1L12.4,25.6z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xl font-bold font-basement gradient-text">
                  Ehsan Pourhadi
                </div>
                <div className="text-sm font-kabel text-muted-foreground">
                  Software Developer
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground font-kabel leading-relaxed mb-6">
              Experienced software developer passionate about creating impactful
              digital experiences with modern web technologies and thoughtful
              design.
            </p>

            {/* Social Links */}
            {showSocial && (
              <div className="flex items-center gap-1">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "w-10  p-2  border border-gray-800 rounded-lg glass-card transition-all duration-300 hover:scale-110 group relative overflow-hidden",
                        "text-muted-foreground",
                        social.color
                      )}
                      aria-label={social.name}
                    >
                      {/* Glossy effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Icon className="w-5 h-5 relative z-10" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Navigation Sections */}
          {showNavigation &&
            navigationSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-basement text-foreground text-lg mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => {
                    const Icon = link.icon;
                    return (
                      <li key={link.name}>
                        {link.href ? (
                          <a
                            href={link.href}
                            target={
                              link.href.startsWith("http") ? "_blank" : "_self"
                            }
                            rel={
                              link.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="flex items-center text-sm text-gray-400 hover:text-primary-500 transition-colors font-kabel group"
                          >
                            <Icon className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                            {link.name}
                            {link.href.startsWith("http") && (
                              <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                            )}
                          </a>
                        ) : (
                          <button
                            onClick={() => link.id && handleNavigation(link.id)}
                            className="flex items-center text-sm text-muted-foreground hover:text-primary-500 transition-colors font-kabel group"
                          >
                            <Icon className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                            {link.name}
                          </button>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}

          {/* Contact Section */}
          {showContact && (
            <div>
              <div className="mb-6">
                <svg
                  width="48"
                  height="48"
                  className="text-primary-500"
                  viewBox="0 0 27.8 26.7"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M0.5,19.4C0.2,19,0,18.7,0,18.2c0-0.4,0.2-0.8,0.5-1.1L17.1,0.5C17.4,0.2,17.8,0,18.2,0c0.4,0,0.8,0.2,1.1,0.5
                    c0.3,0.3,0.5,0.7,0.5,1.1c0,0.4-0.2,0.8-0.5,1.1L2.7,19.4c-0.3,0.3-0.7,0.5-1.1,0.5C1.2,19.8,0.8,19.7,0.5,19.4z M12.4,25.6
                    c-0.3,0.3-0.8,0.6-1.3,0.8s-1,0.3-1.5,0.3c-0.5,0-1.1-0.1-1.6-0.3c-0.5-0.2-1.1-0.5-1.5-1l-2.1-2.1c-0.4-0.4-0.6-0.8-0.5-1.2
                    c0.1-0.4,0.4-0.8,0.9-1.3L20.6,5c0.3-0.3,0.7-0.5,1.1-0.5c0.4,0,0.8,0.2,1.1,0.5c0.3,0.3,0.5,0.7,0.5,1.1c0,0.4-0.2,0.8-0.5,1.1
                    l-15,15L9,23.4c0.2,0.2,0.4,0.2,0.6,0.2c0.2,0,0.5-0.1,0.7-0.4L25.1,8.4C25.4,8.1,25.8,8,26.2,8c0.4,0,0.8,0.2,1.1,0.5
                    c0.3,0.3,0.5,0.7,0.5,1.1c0,0.4-0.2,0.8-0.5,1.1L12.4,25.6z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-basement text-foreground text-lg mb-4">
                  Get In Touch
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground font-kabel">
                    <Mail className="w-4 h-4 mr-2 text-primary-500" />
                    <a
                      href="mailto:ehsan.po@gmail.com"
                      className="hover:text-primary-500 transition-colors"
                    >
                      ehsan.po@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground font-kabel">
                    <MapPin className="w-4 h-4 mr-2 text-primary-500" />
                    <span>Malmö, Sweden</span>
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground font-kabel">
                    <ExternalLink className="w-4 h-4 mr-2 text-primary-500" />
                    <a
                      href="https://www.ehsan-pourhadi.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary-500 transition-colors"
                    >
                      ehsan-pourhadi.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Stats Section */}
        {showStats && (
          <div className="mt-12 pt-8 border-t border-border/50 border-gray-500/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold font-basement gradient-text">
                  70+
                </div>
                <div className="text-sm text-muted-foreground font-kabel">
                  Projects Completed
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-2xl font-bold font-basement gradient-text">
                  50+
                </div>
                <div className="text-sm text-muted-foreground font-kabel">
                  Happy Clients
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-2xl font-bold font-basement gradient-text">
                  12+
                </div>
                <div className="text-sm text-muted-foreground font-kabel">
                  Years Experience
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-2xl font-bold font-basement gradient-text">
                  100%
                </div>
                <div className="text-sm text-muted-foreground font-kabel">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/50 border-gray-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-1 text-xs text-gray-500 font-kabel">
              <span>© 2025 Ehsan Pourhadi. All rights reserved.</span>
              <div className="flex items-center space-x-1 ">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-600 fill-current" />
                <span>and</span>
                <Coffee className="w-4 h-4 text-yellow-500" />
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card transition-all duration-300 hover:scale-105 text-sm font-kabel"
            >
              <ArrowUp className="w-4 h-4" />
              Back to Top
            </button>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs text-muted-foreground font-kabel mr-2">
              Built with:
            </span>
            <span className="px-2 py-1 bg-neutral-500/20 rounded text-xs text-muted-foreground">
              Astro
            </span>
            <span className="px-2 py-1 bg-neutral-500/20 rounded text-xs text-muted-foreground">
              React
            </span>
            <span className="px-2 py-1 bg-neutral-500/20 rounded text-xs text-muted-foreground">
              TypeScript
            </span>
            <span className="px-2 py-1 bg-neutral-500/20 rounded text-xs text-muted-foreground">
              TailwindCSS
            </span>
            <span className="px-2 py-1 bg-neutral-500/20 rounded text-xs text-muted-foreground">
              Claude Sonnet 4
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
