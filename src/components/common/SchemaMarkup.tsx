import React from "react";

export const SchemaMarkup: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AsiaLife360",
    url: "https://asialife360.com",
    logo: "https://asialife360.com/logo.png",
    description:
      "Premium relocation agency for professionals and retirees moving to the UAE and Southeast Asia.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "UAE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+971-4-123-4567",
      contactType: "customer service",
    },
    sameAs: [
      "https://www.linkedin.com/company/asialife360",
      "https://twitter.com/asialife360",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Relocation Services",
    provider: {
      "@type": "Organization",
      name: "AsiaLife360",
    },
    areaServed: [
      "UAE",
      "Southeast Asia",
      "Philippines",
      "Thailand",
      "Indonesia",
    ],
    description:
      "Comprehensive relocation support including visa assistance, housing, and community integration.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
};
