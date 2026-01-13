import React, { useState } from "react";
import { Modal } from "../common/Modal";
import { Button } from "../common/Button";
import { Download, Mail, User, FileText, CheckCircle2 } from "lucide-react";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate generation/download
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(2);
    }, 1200);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Download the 2026 Relocation Guide"
    >
      {step === 1 && (
        <div className="download-step">
          <div className="guide-preview-card">
            <div className="guide-icon">
              <FileText size={40} className="text-accent" />
            </div>
            <div className="guide-info">
              <h4 className="guide-name">
                The Ultimate 2026 Relocation Blueprint
              </h4>
              <p className="guide-meta">PDF • 45 Pages • Updated Jan 2026</p>
            </div>
          </div>

          <p className="download-intro">
            Our comprehensive guide covers tax residency, visa legalities, and
            cost-of-living breakdowns for the UAE and Southeast Asia.
          </p>

          <form onSubmit={handleDownload} className="download-form">
            <div className="input-group">
              <label>
                <User size={16} /> Full Name
              </label>
              <input
                type="text"
                placeholder="Jane Doe"
                required
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
                placeholder="jane@company.com"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <Button
              variant="accent"
              size="lg"
              className="w-full mt-md"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Download size={18} style={{ marginRight: "0.5rem" }} /> Get
                  Instant Access
                </>
              )}
            </Button>
          </form>
          <p className="privacy-note">
            We respect your privacy. No spam, ever.
          </p>
        </div>
      )}

      {step === 2 && (
        <div className="download-success">
          <div className="success-icon-wrapper">
            <CheckCircle2 size={56} className="text-accent" />
          </div>
          <h3 className="success-title">Success!</h3>
          <p className="success-desc">
            The guide has been sent to <strong>{formData.email}</strong>. Your
            download should also start automatically in a few seconds.
          </p>
          <div className="download-actions">
            <Button variant="primary" className="w-full">
              Download Manual Copy
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              className="w-full mt-sm"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
};
