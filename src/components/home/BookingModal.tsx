import React, { useState } from "react";
import { Modal } from "../common/Modal";
import { GOOGLE_BOOKING_URL } from "../../constants/config";
import { Loader2 } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Book Your Discovery Call">
      <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden rounded-xl bg-surface">
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface z-10 transition-opacity duration-300">
            <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
            <p className="text-text-muted font-medium">
              Loading calendar availability...
            </p>
          </div>
        )}
        <iframe
          src={GOOGLE_BOOKING_URL}
          width="100%"
          height="100%"
          frameBorder="0"
          title="Book Discovery Call"
          onLoad={() => setIsLoading(false)}
          className={`w-full h-full transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
        ></iframe>
      </div>
    </Modal>
  );
};
