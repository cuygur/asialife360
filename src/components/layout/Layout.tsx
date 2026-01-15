import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { SchemaMarkup } from "../common/SchemaMarkup";
interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <div className="noise-overlay" />
      <SchemaMarkup />

      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
