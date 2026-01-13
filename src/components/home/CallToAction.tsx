import React from "react";
import { Button } from "../common/Button";

export const CallToAction: React.FC = () => {
  return (
    <section
      className="section"
      style={{
        backgroundColor: "var(--color-primary)",
        color: "white",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background Accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "var(--color-accent)",
          filter: "blur(150px)",
          opacity: 0.2,
          transform: "translate(50%, -50%)",
        }}
      ></div>

      <div
        className="container"
        style={{ position: "relative", zIndex: 10, textAlign: "center" }}
      >
        <h2
          style={{ fontSize: "3rem", marginBottom: "1.5rem", color: "white" }}
        >
          Stop Dreaming. Start Living.
        </h2>
        <p
          style={{
            fontSize: "1.25rem",
            opacity: 0.9,
            maxWidth: "700px",
            margin: "0 auto 3rem auto",
          }}
        >
          The life you want is waiting. The only thing standing between you and
          your upgrade is the logistics. Let us handle those.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <Button variant="accent" size="lg">
            Book Your Free Strategy Call
          </Button>
          <div style={{ fontSize: "0.875rem", opacity: 0.8 }}>
            Get a custom relocation roadmap in 30 minutes.
          </div>

          <div style={{ marginTop: "2rem" }}>
            <a
              href="#"
              style={{
                textDecoration: "underline",
                color: "var(--color-accent)",
              }}
            >
              Or Download 2026 Relocation Guide
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
