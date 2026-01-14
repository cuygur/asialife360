import React, { useState } from "react";
import { Modal } from "../common/Modal";
import { Button } from "../common/Button";
import { Calendar, User, Mail, Globe } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    timeframe: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate network delay
    setTimeout(() => {
      setIsLoading(false);
      setStep(3);
    }, 1500);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Book Your Discovery Call">
      {step === 1 && (
        <div className="space-y-8">
          <p className="text-text-muted leading-relaxed">
            Tell us a bit about your vision. This 30-minute call will focus on
            your specific relocation goals.
          </p>
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-primary">
                <User size={16} className="text-accent" /> Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-primary">
                <Mail size={16} className="text-accent" /> Work Email
              </label>
              <input
                type="email"
                placeholder="john@company.com"
                className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-primary">
                <Globe size={16} className="text-accent" /> Preferred
                Destination
              </label>
              <select
                className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all appearance-none cursor-pointer"
                value={formData.destination}
                onChange={(e) =>
                  setFormData({ ...formData, destination: e.target.value })
                }
              >
                <option value="">Select a destination...</option>
                <option value="uae">UAE (Dubai/Abu Dhabi)</option>
                <option value="thailand">Thailand</option>
                <option value="philippines">The Philippines</option>
                <option value="indonesia">Indonesia (Bali)</option>
                <option value="not_sure">Not sure yet</option>
              </select>
            </div>
          </div>
          <Button
            className="w-full py-4 text-lg"
            onClick={() => setStep(2)}
            disabled={!formData.name || !formData.email}
          >
            Next: Choose Time
          </Button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-primary text-sm font-bold border border-accent/20">
            <User size={14} className="text-accent" /> {formData.name} •{" "}
            <Globe size={14} className="text-accent" />{" "}
            {formData.destination || "Global"}
          </div>
          <h4 className="text-xl font-bold text-primary">
            Select a Date & Time
          </h4>
          <div className="space-y-6">
            <div className="grid grid-cols-7 gap-2">
              {/* Simplified placeholder for a calendar */}
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center p-3 rounded-xl border border-border transition-colors cursor-pointer hover:bg-surface ${
                    i === 2
                      ? "bg-primary text-white border-primary shadow-md"
                      : "bg-surface"
                  }`}
                >
                  <span className="text-[10px] uppercase tracking-wider font-bold opacity-60">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                  </span>
                  <div className="text-lg font-bold">{15 + i}</div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["9:00 AM", "11:30 AM", "2:00 PM", "4:30 PM"].map((time) => (
                <button
                  key={time}
                  className="py-3 px-4 rounded-xl border border-border text-center font-semibold hover:border-accent hover:bg-accent/5 transition-all text-sm disabled:opacity-50"
                  onClick={handleSubmit}
                  disabled={isLoading}
                >
                  {isLoading && time === "9:00 AM" ? "Booking..." : time}
                </button>
              ))}
            </div>
          </div>
          <button
            className="text-sm font-bold text-accent hover:underline flex items-center justify-center w-full"
            onClick={() => setStep(1)}
          >
            Go back to details
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="text-center py-6 space-y-6">
          <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-8">
            <Calendar size={48} className="text-accent" />
          </div>
          <h3 className="text-3xl font-heading font-bold text-primary">
            Call Confirmed!
          </h3>
          <p className="text-text-muted leading-relaxed">
            We've sent a calendar invitation to{" "}
            <strong className="text-primary">{formData.email}</strong>. We look
            forward to helping you design your new life.
          </p>
          <Button
            variant="outline"
            onClick={onClose}
            className="w-full py-4 text-lg mt-8"
          >
            Close
          </Button>
        </div>
      )}
    </Modal>
  );
};
