import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { BookingModal } from "../components/home/BookingModal";
import { DownloadModal } from "../components/home/DownloadModal";

interface ModalContextType {
  openBooking: () => void;
  closeBooking: () => void;
  openDownload: () => void;
  closeDownload: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);
  const openDownload = () => setIsDownloadOpen(true);
  const closeDownload = () => setIsDownloadOpen(false);

  return (
    <ModalContext.Provider
      value={{ openBooking, closeBooking, openDownload, closeDownload }}
    >
      {children}
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
      <DownloadModal isOpen={isDownloadOpen} onClose={closeDownload} />
    </ModalContext.Provider>
  );
};

export const useModals = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModals must be used within a ModalProvider");
  }
  return context;
};
