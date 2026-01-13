import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { SchemaMarkup } from "../common/SchemaMarkup";
import { BookingModal } from "../home/BookingModal";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isBookingOpen, setIsBookingOpen] = React.useState(false);

  // Pass setIsBookingOpen down to children?
  // For now, let's just make Navbar and children able to trigger it.

  return (
    <div className="layout-wrapper">
      <SchemaMarkup />
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
      <Navbar onBookClick={() => setIsBookingOpen(true)} />
      <main className="main-content">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              onBookClick: () => setIsBookingOpen(true),
            } as any);
          }
          return child;
        })}
      </main>
      <Footer />
    </div>
  );
};
