import React from 'react'
import Layout from '@theme/Layout'
import Heading from '@theme/Heading'

export default function Terms(): React.ReactNode {
  return (
    <Layout
      title="Terms of Service - Leno Apps"
      description="Terms of Service for Subitem Template Builder - Leno Apps"
    >
      <main className="container margin-vert--lg">
        <Heading as="h1">Terms of Service - Subitem Template Builder</Heading>
        <p>
          <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
        </p>

        <section>
          <Heading as="h2">1. Acceptance of Terms</Heading>
          <p>
            By installing, accessing, or using the Subitem Template Builder
            application ("App," "Service," "we," "us," or "our"), you ("User,"
            "you," or "your") agree to be bound by these Terms of Service
            ("Terms"). If you do not agree to these Terms, do not use the App.
          </p>
        </section>

        <section>
          <Heading as="h2">2. Description of Service</Heading>
          <p>
            Subitem Template Builder is a monday.com marketplace application
            that allows users to:
          </p>
          <ul>
            <li>Create and save subitem templates with various column types</li>
            <li>
              Apply saved templates to create multiple subitems efficiently
            </li>
            <li>Manage template permissions and sharing</li>
            <li>Track usage for subscription plan management</li>
            <li>Map template columns to board columns automatically</li>
          </ul>
        </section>

        <section>
          <Heading as="h2">3. Eligibility and Account Requirements</Heading>

          <Heading as="h3">3.1 monday.com Account Required</Heading>
          <ul>
            <li>You must have a valid monday.com account to use this App</li>
            <li>You must comply with monday.com's Terms of Service</li>
            <li>
              You are responsible for maintaining the security of your
              monday.com account
            </li>
          </ul>

          <Heading as="h3">3.2 Authorization</Heading>
          <ul>
            <li>
              You must authorize the App to access your monday.com data through
              the required permissions
            </li>
            <li>
              You can revoke authorization at any time through monday.com's app
              management interface
            </li>
          </ul>
        </section>

        <section>
          <Heading as="h2">4. App Permissions and Data Access</Heading>

          <Heading as="h3">4.1 Required Permissions</Heading>
          <p>The App requires the following monday.com permissions:</p>
          <ul>
            <li>
              <strong>me:read:</strong> To identify users and manage template
              permissions
            </li>
            <li>
              <strong>boards:read:</strong> To read board structure and existing
              subitem data
            </li>
            <li>
              <strong>boards:write:</strong> To create and modify subitems from
              templates
            </li>
          </ul>

          <Heading as="h3">4.2 Scope of Access</Heading>
          <ul>
            <li>The App only accesses boards you explicitly authorize</li>
            <li>
              Data access is limited to functionality described in this
              agreement
            </li>
            <li>The App does not access data outside of authorized boards</li>
          </ul>
        </section>

        <section>
          <Heading as="h2">5. Subscription Plans and Billing</Heading>

          <Heading as="h3">5.1 Plan Types</Heading>

          <ul>
            <li>
              Please see the pricing section of the app on the monday.com
              marketplace for the latest pricing.
            </li>
          </ul>

          <Heading as="h3">5.2 Billing and Payment</Heading>
          <ul>
            <li>
              Billing is handled through monday.com's marketplace billing system
            </li>
          </ul>

          <Heading as="h3">5.3 Plan Changes and Cancellation</Heading>
          <ul>
            <li>
              Billing is handled through monday.com's marketplace billing system
            </li>
          </ul>
        </section>

        <section>
          <Heading as="h2">6. Acceptable Use</Heading>

          <Heading as="h3">6.1 Permitted Use</Heading>
          <p>You may use the App to:</p>
          <ul>
            <li>
              Create and manage subitem templates for legitimate business
              purposes
            </li>
            <li>Share templates with authorized team members</li>
            <li>Automate subitem creation within your organization</li>
          </ul>

          <Heading as="h3">6.2 Prohibited Use</Heading>
          <p>You may not:</p>
          <ul>
            <li>Use the App for illegal or unauthorized purposes</li>
            <li>Attempt to reverse engineer, decompile, or hack the App</li>
            <li>
              Create templates containing harmful, offensive, or inappropriate
              content
            </li>
            <li>Share your account credentials with unauthorized users</li>
          </ul>
        </section>

        <section>
          <Heading as="h2">7. Intellectual Property</Heading>

          <Heading as="h3">7.1 App Ownership</Heading>
          <ul>
            <li>
              The App, including all code, features, and functionality, is owned
              by us and protected by intellectual property laws
            </li>
            <li>
              These Terms grant you a limited, non-exclusive, non-transferable
              license to use the App
            </li>
          </ul>

          <Heading as="h3">7.2 User Content</Heading>
          <ul>
            <li>You retain ownership of your template data and content</li>
            <li>
              You grant us a limited license to process your data to provide the
              Service
            </li>
            <li>
              You are responsible for ensuring you have rights to any content
              you include in templates
            </li>
          </ul>
        </section>

        <section>
          <Heading as="h2">8. Data and Privacy</Heading>

          <Heading as="h3">8.1 Data Processing</Heading>
          <ul>
            <li>We process your data in accordance with our Privacy Policy</li>
            <li>
              All data is stored securely within monday.com's infrastructure
            </li>
            <li>
              We do not share your data with third parties except as described
              in our Privacy Policy
            </li>
          </ul>
        </section>

        <section>
          <Heading as="h2">10. User Communications</Heading>

          <Heading as="h3">10.1 Service Communications</Heading>
          <p>We may contact you regarding:</p>
          <ul>
            <li>Critical service updates or security issues</li>
            <li>Billing and subscription matters</li>
            <li>Support requests you initiate</li>
            <li>Legal or compliance requirements</li>
          </ul>

          <Heading as="h3">10.2 Marketing Communications</Heading>
          <ul>
            <li>
              We do not send marketing emails or promotional communications
            </li>
            <li>We do not contact users for sales or marketing purposes</li>
            <li>All communications are strictly service-related</li>
          </ul>

          <Heading as="h3">10.3 Communication Preferences</Heading>
          <ul>
            <li>
              Service-related communications are necessary for app functionality
            </li>
            <li>You cannot opt out of critical service communications</li>
          </ul>
        </section>

        <section>
          <Heading as="h2">11. Disclaimers and Limitations</Heading>

          <Heading as="h3">11.1 Service Disclaimer</Heading>
          <ul>
            <li>The App is provided "as is" without warranties of any kind</li>
            <li>
              We do not guarantee that the App will meet all your requirements
            </li>
            <li>
              We are not responsible for data loss due to user error or misuse
            </li>
          </ul>

          <Heading as="h3">11.2 Limitation of Liability</Heading>
          <ul>
            <li>
              Our liability is limited to the amount you paid for the Service in
              the 12 months preceding the claim
            </li>
            <li>
              We are not liable for indirect, incidental, or consequential
              damages
            </li>
            <li>
              Some jurisdictions do not allow liability limitations, so these
              may not apply to you
            </li>
          </ul>
        </section>

        <section>
          <Heading as="h2">12. Indemnification</Heading>
          <p>
            You agree to indemnify and hold us harmless from claims arising
            from:
          </p>
          <ul>
            <li>Your use of the App in violation of these Terms</li>
            <li>Your violation of any third-party rights</li>
            <li>Your violation of applicable laws or regulations</li>
          </ul>
        </section>

        <section>
          <Heading as="h2">13. Termination</Heading>

          <Heading as="h3">13.1 Termination by You</Heading>
          <ul>
            <li>
              You may terminate your use of the App at any time by uninstalling
              it from your monday.com account
            </li>
            <li>
              Subscription cancellations are handled through monday.com's
              billing system
            </li>
          </ul>

          <Heading as="h3">13.2 Termination by Us</Heading>
          <p>We may terminate your access if you:</p>
          <ul>
            <li>Violate these Terms or our Privacy Policy</li>
            <li>Use the App in a way that harms our Service or other users</li>
            <li>Fail to pay subscription fees when due</li>
          </ul>
        </section>

        <section>
          <Heading as="h2">14. Changes to Terms</Heading>

          <Heading as="h3">14.1 Modifications</Heading>
          <ul>
            <li>We may modify these Terms at any time</li>
            <li>
              Material changes will be communicated through the App or email
            </li>
            <li>
              Continued use after changes constitutes acceptance of new Terms
            </li>
          </ul>

          <Heading as="h3">14.2 Version Control</Heading>
          <ul>
            <li>
              The "Last Updated" date indicates when Terms were last modified
            </li>
            <li>Previous versions are not maintained or accessible</li>
          </ul>
        </section>

        <section>
          <Heading as="h2">15. Governing Law and Disputes</Heading>

          <Heading as="h3">15.1 Governing Law</Heading>
          <p>
            These Terms are governed by UK law, without regard to conflict of
            law principles.
          </p>
        </section>

        <section>
          <Heading as="h2">16. Integration with monday.com</Heading>

          <Heading as="h3">16.1 monday.com Terms</Heading>
          <ul>
            <li>
              Your use of the App is also subject to monday.com's Terms of
              Service
            </li>
            <li>
              In case of conflict between these Terms and monday.com's Terms,
              monday.com's Terms prevail for platform-related matters
            </li>
          </ul>
        </section>

        <section>
          <Heading as="h2">17. Miscellaneous</Heading>

          <Heading as="h3">17.1 Entire Agreement</Heading>
          <p>
            These Terms, together with our Privacy Policy, constitute the entire
            agreement between you and us.
          </p>
        </section>

        <section>
          <Heading as="h2">18. Contact Information</Heading>
          <p>For questions about these Terms of Service:</p>
          <ul>
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:support@lenoapps.com">support@lenoapps.com</a>
            </li>
            <li>
              <strong>Website:</strong> www.lenoapps.com
            </li>
          </ul>
        </section>
      </main>
    </Layout>
  )
}
