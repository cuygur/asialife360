import React, { useEffect } from "react";
import { Layout } from "../components/layout/Layout";

export const TermsOfService: React.FC = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="pt-24 pb-16 min-h-screen bg-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-heading text-primary mb-8 text-center">
            Terms of Service
          </h1>
          <div className="prose prose-lg prose-invert mx-auto bg-card/30 p-8 rounded-2xl border border-white/5 backdrop-blur-sm shadow-xl">
            <p className="text-text-muted mb-6">
              Last Updated: January 15, 2026
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-heading text-secondary mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-text-muted leading-relaxed">
                By accessing and using the AsiaLife360 website ("Service"), you
                accept and agree to be bound by the terms and provision of this
                agreement. In addition, when using these particular services,
                you shall be subject to any posted guidelines or rules
                applicable to such services. All such guidelines or rules are
                hereby incorporated by reference into the Terms of Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading text-secondary mb-4">
                2. Description of Services
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                AsiaLife360 provides relocation consulting services,
                information, and resources for individuals moving to Asia.
              </p>
              <p className="text-text-muted leading-relaxed">
                <strong>Disclaimer:</strong> The information provided on this
                website and during our consultations constitutes general
                guidance and does not constitute legal, financial, or tax
                advice. You should consult with professional advisors for advice
                concerning your specific situation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading text-secondary mb-4">
                3. User Account
              </h2>
              <p className="text-text-muted leading-relaxed">
                If you create an account on the Service, you are responsible for
                maintaining the security of your account and you are fully
                responsible for all activities that occur under the account. You
                must immediately notify us of any unauthorized uses of your
                account or any other breaches of security. AsiaLife360 will not
                be liable for any acts or omissions by You, including any
                damages of any kind incurred as a result of such acts or
                omissions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading text-secondary mb-4">
                4. Payment and Refunds
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                Certain services available on the site are purchased on a fee
                basis. You agree to pay all fees and applicable taxes associated
                with your use of the Service.
              </p>
              <p className="text-text-muted leading-relaxed">
                Refund policies for specific services will be outlined at the
                time of purchase. Generally, due to the nature of consulting
                services, once a service has been rendered, it is
                non-refundable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading text-secondary mb-4">
                5. Intellectual Property
              </h2>
              <p className="text-text-muted leading-relaxed">
                The Service and its original content, features and functionality
                are and will remain the exclusive property of AsiaLife360 and
                its licensors. The Service is protected by copyright, trademark,
                and other laws of both the domestic and foreign countries. Our
                trademarks and trade dress may not be used in connection with
                any product or service without the prior written consent of
                AsiaLife360.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading text-secondary mb-4">
                6. Limitation of Liability
              </h2>
              <p className="text-text-muted leading-relaxed">
                In no event shall AsiaLife360, nor its directors, employees,
                partners, agents, suppliers, or affiliates, be liable for any
                indirect, incidental, special, consequential or punitive
                damages, including without limitation, loss of profits, data,
                use, goodwill, or other intangible losses, resulting from (i)
                your access to or use of or inability to access or use the
                Service; (ii) any conduct or content of any third party on the
                Service; (iii) any content obtained from the Service; and (iv)
                unauthorized access, use or alteration of your transmissions or
                content, whether based on warranty, contract, tort (including
                negligence) or any other legal theory, whether or not we have
                been informed of the possibility of such damage, and even if a
                remedy set forth herein is found to have failed of its essential
                purpose.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading text-secondary mb-4">
                7. Dispute Resolution
              </h2>
              <p className="text-text-muted leading-relaxed">
                Any dispute arising out of or in connection with these Terms,
                including any question regarding its existence, validity or
                termination, shall be referred to and finally resolved by
                arbitration in accordance with the rules of the relevant
                jurisdiction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading text-secondary mb-4">
                8. Changes to Terms
              </h2>
              <p className="text-text-muted leading-relaxed">
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material we
                will try to provide at least 30 days notice prior to any new
                terms taking effect. What constitutes a material change will be
                determined at our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading text-secondary mb-4">
                9. Contact Us
              </h2>
              <p className="text-text-muted leading-relaxed">
                If you have any questions about these Terms, please contact us
                at: <br />
                <br />
                <strong className="text-text">AsiaLife360 Support</strong>
                <br />
                Email: legal@asialife360.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};
