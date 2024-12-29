import React from "react";
import { Code2, Laptop, Music2, School } from "lucide-react";
import one from "../assets/images/0_1.png";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={one}
          alt="Hero background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl font-bold mb-4">My Journey</h1>
        <p className="text-xl opacity-80">
          From Automation to Software Development
        </p>
        <div className="mt-12 flex justify-center gap-8">
          <div className="text-center">
            <School size={32} className="mx-auto mb-2" />
            <p>Education</p>
          </div>
          <div className="text-center">
            <Music2 size={32} className="mx-auto mb-2" />
            <p>Music</p>
          </div>
          <div className="text-center">
            <Code2 size={32} className="mx-auto mb-2" />
            <p>Development</p>
          </div>
          <div className="text-center">
            <Laptop size={32} className="mx-auto mb-2" />
            <p>Tech Lead</p>
          </div>
        </div>
      </div>
    </section>
  );
};
