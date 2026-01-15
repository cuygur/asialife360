import React, { useEffect } from "react";
import { Layout } from "../components/layout/Layout";

export const PrivacyPolicy: React.FC = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="pt-24 pb-16 min-h-screen bg-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-heading text-primary mb-8 text-center">
            Privacy Policy
          </h1>
          <div className="prose prose-lg prose-invert mx-auto bg-card/30 p-8 rounded-2xl border border-white/5 backdrop-blur-sm shadow-xl">
            <p className="text-text-muted mb-6">
              Last Updated: January 15, 2026
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-heading text-secondary mb-4">
                1. Introduction
              </h2>
              <p className="text-text-muted leading-relaxed">
                Welcome to AsiaLife360. We respect your privacy and are
                committed to protecting your personal data. This privacy policy
                will inform you as to how we look after your personal data when
                you visit our website (regardless of where you visit it from)
                and tell you about your privacy rights and how the law protects
                you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading text-secondary mb-4">
                2. Important Information and Who We Are
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                This privacy policy aims to give you information on how
                AsiaLife360 collects and processes your personal data through
                your use of this website, including any data you may provide
                through this website when you sign up for our newsletter or
                purchase a service.
              </p>
              <p className="text-text-muted leading-relaxed">
                This website is not intended for children and we do not
                knowingly collect data relating to children.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading text-secondary mb-4">
                3. The Data We Collect About You
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                Personal data, or personal information, means any information
                about an individual from which that person can be identified. It
                does not include data where the identity has been removed
                (anonymous data).
              </p>
              <p className="text-text-muted leading-relaxed mb-4">
                We may collect, use, store and transfer different kinds of
                personal data about you which we have grouped together follows:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-text-muted">
                <li>
                  <strong>Identity Data:</strong> includes first name, maiden
                  name, last name, username or similar identifier, title, date
                  of birth and gender.
                </li>
                <li>
                  <strong>Contact Data:</strong> includes billing address,
                  delivery address, email address and telephone numbers.
                </li>
                <li>
                  <strong>Financial Data:</strong> includes bank account and
                  payment card details.
                </li>
                <li>
                  <strong>Transaction Data:</strong> includes details about
                  payments to and from you and other details of services you
                  have purchased from us.
                </li>
                <li>
                  <strong>Technical Data:</strong> includes internet protocol
                  (IP) address, your login data, browser type and version, time
                  zone setting and location, browser plug-in types and versions,
                  operating system and platform and other technology on the
                  devices you use to access this website.
                </li>
                <li>
                  <strong>Profile Data:</strong> includes your username and
                  password, purchases or orders made by you, your interests,
                  preferences, feedback and survey responses.
                </li>
                <li>
                  <strong>Usage Data:</strong> includes information about how
                  you use our website and services.
                </li>
                <li>
                  <strong>Marketing and Communications Data:</strong> includes
                  your preferences in receiving marketing from us and our third
                  parties and your communication preferences.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading text-secondary mb-4">
                4. How We Use Your Personal Data
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                We will only use your personal data when the law allows us to.
                Most commonly, we will use your personal data in the following
                circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-text-muted">
                <li>
                  Where we need to perform the contract we are about to enter
                  into or have entered into with you.
                </li>
                <li>
                  Where it is necessary for our legitimate interests (or those
                  of a third party) and your interests and fundamental rights do
                  not override those interests.
                </li>
                <li>
                  Where we need to comply with a legal or regulatory obligation.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading text-secondary mb-4">
                5. Disclosures of Your Personal Data
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                We may have to share your personal data with the parties set out
                below for the purposes set out in paragraph 4 above.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-text-muted">
                <li>Internal Third Parties.</li>
                <li>
                  External Third Parties (Service Providers, Professional
                  Advisers, Regulators).
                </li>
                <li>
                  Third parties to whom we may choose to sell, transfer, or
                  merge parts of our business or our assets.
                </li>
              </ul>
              <p className="text-text-muted leading-relaxed mt-4">
                We require all third parties to respect the security of your
                personal data and to treat it in accordance with the law. We do
                not allow our third-party service providers to use your personal
                data for their own purposes and only permit them to process your
                personal data for specified purposes and in accordance with our
                instructions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading text-secondary mb-4">
                6. Data Security
              </h2>
              <p className="text-text-muted leading-relaxed">
                We have put in place appropriate security measures to prevent
                your personal data from being accidentally lost, used or
                accessed in an unauthorized way, altered or disclosed. In
                addition, we limit access to your personal data to those
                employees, agents, contractors and other third parties who have
                a business need to know. They will only process your personal
                data on our instructions and they are subject to a duty of
                confidentiality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading text-secondary mb-4">
                7. Your Legal Rights
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                Under certain circumstances, you have rights under data
                protection laws in relation to your personal data.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-text-muted">
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
                <li>Request transfer of your personal data.</li>
                <li>Right to withdraw consent.</li>
              </ul>
              <p className="text-text-muted leading-relaxed mt-4">
                If you wish to exercise any of the rights set out above, please
                contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading text-secondary mb-4">
                8. Contact Details
              </h2>
              <p className="text-text-muted leading-relaxed">
                If you have any questions about this privacy policy or our
                privacy practices, please contact us at:
                <br />
                <br />
                <strong className="text-text">AsiaLife360 Support</strong>
                <br />
                Email: privacy@asialife360.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};
