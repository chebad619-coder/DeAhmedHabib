"use client";

import React from "react";
import { MadeWithDyad } from "./made-with-dyad"; // Assuming MadeWithDyad is a common footer/attribution

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Clinic App</h1>
          {/* You can add navigation or other header elements here */}
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <footer className="p-4 bg-secondary text-secondary-foreground text-center">
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default MainLayout;