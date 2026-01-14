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
        <div className="space-y-8">
          <div className="flex items-center gap-6 p-6 rounded-2xl bg-surface border border-border">
            <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
              <FileText size={40} className="text-accent" />
            </div>
            <div className="space-y-1">
              <h4 className="text-lg font-bold text-primary leading-tight">
                The Ultimate 2026 Relocation Blueprint
              </h4>
              <p className="text-xs text-text-muted font-semibold uppercase tracking-wider">
                PDF • 45 Pages • Updated Jan 2026
              </p>
            </div>
          </div>

          <p className="text-text-muted leading-relaxed">
            Our comprehensive guide covers tax residency, visa legalities, and
            cost-of-living breakdowns for the UAE and Southeast Asia.
          </p>

          <form onSubmit={handleDownload} className="space-y-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-primary">
                <User size={16} className="text-accent" /> Full Name
              </label>
              <input
                type="text"
                placeholder="Jane Doe"
                required
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
                placeholder="jane@company.com"
                required
                className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <Button
              variant="accent"
              size="lg"
              className="w-full py-4 text-lg mt-4"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Download size={20} /> Get Instant Access
                </span>
              )}
            </Button>
          </form>
          <p className="text-center text-[10px] text-text-muted uppercase tracking-widest font-bold">
            We respect your privacy. No spam, ever.
          </p>
        </div>
      )}

      {step === 2 && (
        <div className="text-center py-6 space-y-8">
          <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={56} className="text-accent" />
          </div>
          <h3 className="text-3xl font-heading font-bold text-primary">
            Success!
          </h3>
          <p className="text-text-muted leading-relaxed">
            The guide has been sent to{" "}
            <strong className="text-primary">{formData.email}</strong>. Your
            download should also start automatically in a few seconds.
          </p>
          <div className="space-y-4">
            <Button variant="primary" className="w-full py-4 text-lg">
              Download Manual Copy
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              className="w-full py-4 text-lg"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
};
