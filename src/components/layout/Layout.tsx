import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

import { SchemaMarkup } from "../common/SchemaMarkup";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <SchemaMarkup />
      <Navbar />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};
