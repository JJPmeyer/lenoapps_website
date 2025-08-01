import React from 'react'
import Layout from '@theme/Layout'
import Heading from '@theme/Heading'

export default function Terms(): React.ReactNode {
  return (
    <Layout
      title="Terms of Service - Tiny Tree Solutions"
      description="Terms of Service for Subitem Template Builder - Tiny Tree Solutions"
    >
      <main className="container margin-vert--lg">
        <Heading as="h1">Terms of Service</Heading>
        <p>
          <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
        </p>

        <section>
          <Heading as="h2">1. Acceptance of Terms</Heading>
          <p>
            By accessing and using the Subitem Template Builder application
            ("the App") on the monday.com marketplace, you agree to be bound by
            these Terms of Service ("Terms"). If you do not agree to these
            Terms, please do not use the App.
          </p>
        </section>

        <section>
          <Heading as="h2">2. Description of Service</Heading>
          <p>
            The Subitem Template Builder is a monday.com marketplace application
            that allows users to:
          </p>
          <ul>
            <li>Create and save templates for subitems</li>
            <li>
              Apply templates to create multiple subitems with predefined data
            </li>
            <li>Manage template permissions and sharing</li>
            <li>Track usage for subscription management</li>
          </ul>
        </section>

        <section>
          <Heading as="h2">3. User Accounts and Responsibilities</Heading>

          <Heading as="h3">3.1 Account Requirements</Heading>
          <ul>
            <li>You must have a valid monday.com account to use the App</li>
            <li>
              You are responsible for maintaining the security of your
              monday.com account
            </li>
            <li>
              You must provide accurate and complete information when using the
              App
            </li>
          </ul>

          <Heading as="h3">3.2 Acceptable Use</Heading>
          <p>
            You agree to use the App only for lawful purposes and in accordance
            with these Terms. You agree not to:
          </p>
          <ul>
            <li>Use the App to violate any applicable laws or regulations</li>
            <li>
              Attempt to gain unauthorized access to the App or monday.com
              systems
            </li>
            <li>
              Use the App to create templates that contain malicious content or
              violate intellectual property rights
            </li>
            <li>Interfere with or disrupt the App's functionality</li>
            <li>
              Use the App for any commercial purpose without proper
              authorization
            </li>
          </ul>
        </section>

        <section>
          <Heading as="h2">4. Subscription and Payment Terms</Heading>

          <Heading as="h3">4.1 Subscription Plans</Heading>
          <p>The App offers the following subscription plans:</p>
          <ul>
            <li>
              <strong>Free Plan:</strong> Limited to 3 template applications per
              month
            </li>
            <li>
              <strong>Starter Plan:</strong> $5/month for up to 30 template
              applications per month
            </li>
            <li>
              <strong>Growth Plan:</strong> $20/month for up to 70 template
              applications per month with permission controls
            </li>
            <li>
              <strong>Scale Plan:</strong> $40/month for unlimited template
              applications with permission controls
            </li>
          </ul>

          <Heading as="h3">4.2 Payment and Billing</Heading>
          <ul>
            <li>Payments are processed through monday.com's billing system</li>
            <li>Subscriptions automatically renew unless cancelled</li>
            <li>
              You may cancel your subscription at any time through your
              monday.com account
            </li>
            <li>No refunds are provided for partial months of service</li>
          </ul>

          <Heading as="h3">4.3 Usage Limits</Heading>
          <ul>
            <li>
              Free plan users are limited to 3 template applications per month
            </li>
            <li>Paid plan users are subject to their plan's monthly limits</li>
            <li>Usage is tracked and enforced automatically by the App</li>
          </ul>
        </section>

        <section>
          <Heading as="h2">5. Intellectual Property</Heading>

          <Heading as="h3">5.1 App Ownership</Heading>
          <p>
            The App and its original content, features, and functionality are
            owned by Tiny Tree Solutions and are protected by international
            copyright, trademark, and other intellectual property laws.
          </p>

          <Heading as="h3">5.2 User Content</Heading>
          <ul>
            <li>
              You retain ownership of any templates and data you create using
              the App
            </li>
            <li>
              You grant us a limited license to store and process your templates
              for App functionality
            </li>
            <li>
              You are responsible for ensuring you have the right to use any
              content in your templates
            </li>
          </ul>
        </section>

        <section>
          <Heading as="h2">6. Privacy and Data Protection</Heading>

          <Heading as="h3">6.1 Data Collection</Heading>
          <p>
            We collect and process data as described in our Privacy Policy,
            which is incorporated into these Terms by reference.
          </p>

          <Heading as="h3">6.2 Data Security</Heading>
          <ul>
            <li>
              We implement appropriate security measures to protect your data
            </li>
            <li>
              All data is stored within monday.com's secure infrastructure
            </li>
            <li>
              We do not store sensitive data outside of monday.com's systems
            </li>
          </ul>
        </section>

        <section>
          <Heading as="h2">7. User Communications</Heading>

          <Heading as="h3">7.1 Service-Related Communications</Heading>
          <p>We may contact you regarding:</p>
          <ul>
            <li>Important updates to the App</li>
            <li>Security notifications</li>
            <li>Subscription and billing matters</li>
            <li>Technical support and troubleshooting</li>
            <li>Service announcements and maintenance</li>
          </ul>

          <Heading as="h3">7.2 Marketing Communications</Heading>
          <ul>
            <li>
              We will not send marketing communications without your explicit
              consent
            </li>
            <li>You may opt out of marketing communications at any time</li>
            <li>Service-related communications cannot be opted out of</li>
          </ul>

          <Heading as="h3">7.3 Communication Methods</Heading>
          <p>We may contact you through:</p>
          <ul>
            <li>In-app notifications</li>
            <li>Email (for important service matters)</li>
            <li>monday.com's notification system</li>
          </ul>
        </section>

        <section>
          <Heading as="h2">8. Disclaimers and Limitations</Heading>

          <Heading as="h3">8.1 Service Availability</Heading>
          <ul>
            <li>The App is provided "as is" and "as available"</li>
            <li>We do not guarantee uninterrupted or error-free service</li>
            <li>
              The App may be temporarily unavailable for maintenance or updates
            </li>
          </ul>

          <Heading as="h3">8.2 Data Accuracy</Heading>
          <ul>
            <li>
              We do not guarantee the accuracy of template data or results
            </li>
            <li>
              You are responsible for verifying the correctness of templates you
              create
            </li>
            <li>We are not liable for any errors in template application</li>
          </ul>

          <Heading as="h3">8.3 Limitation of Liability</Heading>
          <p>
            To the maximum extent permitted by law, we shall not be liable for
            any indirect, incidental, special, consequential, or punitive
            damages arising from your use of the App.
          </p>
        </section>

        <section>
          <Heading as="h2">9. Termination</Heading>

          <Heading as="h3">9.1 Termination by User</Heading>
          <p>You may stop using the App at any time by:</p>
          <ul>
            <li>Uninstalling the App from your monday.com account</li>
            <li>Cancelling your subscription (if applicable)</li>
          </ul>

          <Heading as="h3">9.2 Termination by Us</Heading>
          <p>We may terminate or suspend your access to the App if:</p>
          <ul>
            <li>You violate these Terms</li>
            <li>You engage in fraudulent or illegal activities</li>
            <li>Required by law or regulation</li>
          </ul>

          <Heading as="h3">9.3 Effect of Termination</Heading>
          <p>Upon termination:</p>
          <ul>
            <li>Your access to the App will cease</li>
            <li>
              We will delete your data within 10 days (as required by
              monday.com)
            </li>
            <li>Any unused subscription fees are non-refundable</li>
          </ul>
        </section>

        <section>
          <Heading as="h2">10. Changes to Terms</Heading>
          <p>
            We reserve the right to modify these Terms at any time. We will
            notify users of material changes through:
          </p>
          <ul>
            <li>In-app notifications</li>
            <li>Email notifications</li>
            <li>Updates to the monday.com marketplace listing</li>
          </ul>
          <p>
            Continued use of the App after changes constitutes acceptance of the
            new Terms.
          </p>
        </section>

        <section>
          <Heading as="h2">11. Governing Law</Heading>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of the United States, without regard to its conflict of law
            provisions.
          </p>
        </section>

        <section>
          <Heading as="h2">12. Contact Information</Heading>
          <p>
            For questions about these Terms of Service, please contact us at:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:support@tinytreesolutions.com">
                support@tinytreesolutions.com
              </a>
            </li>
            <li>
              <strong>Domain:</strong> tinytreesolutions.com
            </li>
          </ul>
        </section>

        <section>
          <Heading as="h2">13. Severability</Heading>
          <p>
            If any provision of these Terms is found to be unenforceable or
            invalid, that provision will be limited or eliminated to the minimum
            extent necessary so that the Terms will otherwise remain in full
            force and effect.
          </p>
        </section>
      </main>
    </Layout>
  )
}
