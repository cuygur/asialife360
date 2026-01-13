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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    timeframe: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate booking
    setStep(3);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Book Your Discovery Call">
      {step === 1 && (
        <div className="booking-step">
          <p className="booking-intro">
            Tell us a bit about your vision. This 30-minute call will focus on
            your specific relocation goals.
          </p>
          <div className="booking-form-grid">
            <div className="input-group">
              <label>
                <User size={16} /> Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="input-group">
              <label>
                <Mail size={16} /> Work Email
              </label>
              <input
                type="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="input-group">
              <label>
                <Globe size={16} /> Preferred Destination
              </label>
              <select
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
            className="w-full mt-lg"
            onClick={() => setStep(2)}
            disabled={!formData.name || !formData.email}
          >
            Next: Choose Time
          </Button>
        </div>
      )}

      {step === 2 && (
        <div className="booking-step">
          <div className="booking-summary-pill">
            <User size={14} /> {formData.name} • <Globe size={14} />{" "}
            {formData.destination || "Global"}
          </div>
          <h4 className="step-title">Select a Date & Time</h4>
          <div className="placeholder-calendar">
            <div className="calendar-grid">
              {/* Simplified placeholder for a calendar */}
              {[...Array(7)].map((_, i) => (
                <div key={i} className="calendar-day">
                  <span className="day-name">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                  </span>
                  <div className="day-number">{15 + i}</div>
                </div>
              ))}
            </div>
            <div className="time-slots">
              {["9:00 AM", "11:30 AM", "2:00 PM", "4:30 PM"].map((time) => (
                <button
                  key={time}
                  className="time-slot-btn"
                  onClick={handleSubmit}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
          <button className="back-link" onClick={() => setStep(1)}>
            Go back to details
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="booking-success">
          <div className="success-icon-wrapper">
            <Calendar size={48} className="text-accent" />
          </div>
          <h3 className="success-title">Call Confirmed!</h3>
          <p className="success-desc">
            We've sent a calendar invitation to{" "}
            <strong>{formData.email}</strong>. We look forward to helping you
            design your new life.
          </p>
          <Button variant="outline" onClick={onClose} className="w-full">
            Close
          </Button>
        </div>
      )}
    </Modal>
  );
};
