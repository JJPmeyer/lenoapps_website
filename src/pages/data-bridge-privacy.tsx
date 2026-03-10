import React from 'react'
import Layout from '@theme/Layout'
import Heading from '@theme/Heading'

export default function DataBridgePrivacy(): React.ReactNode {
  return (
    <Layout
      title="Privacy Policy - Leno Apps"
      description="Privacy Policy for Data Bridge - Leno Apps"
    >
      <main className="container margin-vert--lg">
        <Heading as="h1">Privacy Policy - Data Bridge</Heading>
        <p>
          <strong>Last Updated:</strong> March 10, 2026
        </p>

        <section>
          <Heading as="h2">1. Introduction</Heading>
          <p>
            This Privacy Policy describes how Data Bridge ("we," "our," or
            "us") collects, uses, and protects your information when you use
            our monday.com marketplace application. This policy applies to all
            users of our application and is designed to comply with applicable
            privacy laws and monday.com's marketplace requirements.
          </p>
        </section>

        <section>
          <Heading as="h2">2. Information We Collect</Heading>

          <Heading as="h3">2.1 User Information</Heading>
          <ul>
            <li>
              <strong>User Profile Data:</strong> We collect your monday.com
              user ID to identify your app access and usage.
            </li>
            <li>
              <strong>Account Information:</strong> We collect your monday.com
              account ID and install information for subscription management and
              app operation.
            </li>
            <li>
              <strong>Support Request Data:</strong> If you contact us for
              support, your name and email may be used to respond to your
              request.
            </li>
          </ul>

          <Heading as="h3">2.2 Board and Item Data</Heading>
          <ul>
            <li>
              <strong>Board Structure:</strong> We read board, group, column,
              and item information so imports can be set up correctly.
            </li>
            <li>
              <strong>Import Context:</strong> We use board IDs, group IDs, and
              item IDs to run and track imports.
            </li>
            <li>
              <strong>Import Results:</strong> We may store reference
              information between your source data and monday items to support
              repeat imports and job results.
            </li>
          </ul>

          <Heading as="h3">2.3 Application Data</Heading>
          <ul>
            <li>
              <strong>Source Configurations:</strong> We store the source
              details needed to run your imports, such as selected files,
              connected sheets, and related import settings.
            </li>
            <li>
              <strong>Template and Schedule Configurations:</strong> We store
              saved mappings, templates, schedules, and run settings so imports
              can be repeated reliably.
            </li>
            <li>
              <strong>Connection Credentials:</strong> For supported
              integrations, we may securely store the access details needed to
              keep your connections working.
            </li>
            <li>
              <strong>Import Logs and Error Details:</strong> We store import
              status, progress, and error details to help diagnose failures and
              data issues.
            </li>
            <li>
              <strong>Temporary Upload Data:</strong> Excel uploads may be
              stored temporarily while an import is being processed.
            </li>
          </ul>
        </section>

        <section>
          <Heading as="h2">3. Data Storage and Security</Heading>

          <Heading as="h3">3.1 Storage Infrastructure</Heading>
          <ul>
            <li>
              <strong>monday.com Hosted Infrastructure:</strong> Data Bridge
              uses monday.com's hosted infrastructure and secure storage
              services to operate the app.
            </li>
            <li>
              <strong>Account Isolation:</strong> Data is scoped to your monday
              account. Imports can work across multiple boards within the same
              account, but not across accounts.
            </li>
          </ul>

          <Heading as="h3">3.2 Data Encryption and Security</Heading>
          <ul>
            <li>
              <strong>Encryption at Rest:</strong> Data is protected using the
              storage and encryption controls provided by monday.com's
              infrastructure.
            </li>
            <li>
              <strong>Transport Security:</strong> Communications are protected
              using secure transport protocols.
            </li>
            <li>
              <strong>Access Control:</strong> Access is restricted to
              authorized systems and authorized personnel.
            </li>
            <li>
              <strong>Operational Review:</strong> Stored import data and logs
              may be accessed by authorized personnel when needed for
              troubleshooting, security review, or compliance matters.
            </li>
          </ul>
        </section>

        <section>
          <Heading as="h2">5. How We Use Your Information</Heading>
          <ul>
            <li>
              <strong>Import Operations:</strong> Run imports from supported
              source connectors into monday.com boards.
            </li>
            <li>
              <strong>Configuration Management:</strong> Save mappings,
              templates, schedules, and import settings.
            </li>
            <li>
              <strong>Usage Tracking:</strong> Monitor import activity and
              enforce plan-based limits such as monthly imports and scheduling
              limits.
            </li>
            <li>
              <strong>Support and Troubleshooting:</strong> Review logs and
              error details to resolve issues and improve reliability.
            </li>
            <li>
              <strong>No Model Training:</strong> We do not use customer data
              for model training, profiling, or marketing.
            </li>
          </ul>
        </section>

        <section>
          <Heading as="h2">6. Third-Party Services and Dependencies</Heading>
          <p>Our application uses the following services and libraries:</p>

          <Heading as="h3">6.1 monday.com Services</Heading>
          <ul>
            <li>
              <strong>monday.com Platform Services:</strong> For board, item,
              storage, and app operations
            </li>
          </ul>

          <Heading as="h3">6.2 Connector and Integration Services</Heading>
          <ul>
            <li>
              <strong>Google APIs:</strong> For Google Sheets access using
              read-only spreadsheet permissions for sheets you choose to connect
            </li>
          </ul>

          <Heading as="h3">6.3 Support and Website Services</Heading>
          <ul>
            <li>
              <strong>Resend:</strong> Support request email delivery only
            </li>
            <li>
              <strong>Crisp:</strong> Website support chat
            </li>
          </ul>
        </section>

        <section>
          <Heading as="h2">7. Data Logging and Retention</Heading>

          <Heading as="h3">7.1 Data Retention</Heading>
          <ul>
            <li>
              <strong>Import Configuration Data:</strong> Source settings,
              mappings, templates, schedules, and related job data are retained
              as long as necessary to provide the service, unless earlier
              deletion is required.
            </li>
            <li>
              <strong>Temporary Excel Upload Data:</strong> Excel staging data
              has a default retention target of 24 hours, with earlier cleanup
              on completion, error, or cancellation.
            </li>
            <li>
              <strong>Operational Logs:</strong> Import logs and row-level error
              details are retained as needed for service operation and
              troubleshooting.
            </li>
          </ul>

          <Heading as="h3">7.2 Account Data Deletion</Heading>
          <ul>
            <li>
              <strong>Automatic Data Clearing:</strong> When Data Bridge is
              uninstalled, account-scoped stored data and saved connection
              records for that account are removed.
            </li>
            <li>
              <strong>Deletion Timeline:</strong> Temporary data may be removed
              automatically on completion, error, cancellation, or account
              cleanup.
            </li>
            <li>
              <strong>No Backups After Deletion:</strong> No backups are
              retained after deletion.
            </li>
          </ul>
        </section>

        <section>
          <Heading as="h2">8. Data Sharing and Disclosure</Heading>
          <ul>
            <li>
              <strong>No Third-Party Sale or Trade:</strong> We do not sell,
              trade, or market customer data to third parties.
            </li>
            <li>
              <strong>Service Providers:</strong> Data may be processed by the
              services described in this policy to provide the application.
            </li>
            <li>
              <strong>Legal Compliance:</strong> Data may be disclosed if
              required by law or legal process.
            </li>
          </ul>
        </section>

        <section>
          <Heading as="h2">9. Your Rights and Data Control</Heading>

          <Heading as="h3">9.1 Access and Control</Heading>
          <ul>
            <li>
              <strong>monday Authorization:</strong> You can manage app access
              through monday.com's app management controls.
            </li>
            <li>
              <strong>Google Access:</strong> You can revoke Google access
              through your Google account permissions.
            </li>
            <li>
              <strong>Data Deletion:</strong> You can request deletion through
              support or by uninstalling the app.
            </li>
            <li>
              <strong>Connector Controls:</strong> There is currently no
              dedicated in-app disconnect control.
            </li>
          </ul>
        </section>

        <section>
          <Heading as="h2">10. Cookies and Tracking</Heading>

          <Heading as="h3">10.1 Essential Cookies Only</Heading>
          <p>
            Our website uses essential cookies required for basic
            functionality:
          </p>
          <ul>
            <li>
              <strong>Session Cookies:</strong> Temporary cookies for website
              operation and navigation
            </li>
            <li>
              <strong>Preference Cookies:</strong> Store user interface settings
              and preferences
            </li>
            <li>
              <strong>Functional Cookies:</strong> Enable core website features
              and functionality
            </li>
            <li>
              <strong>No Advertising Tracking:</strong> We do not use cookies
              for advertising purposes
            </li>
          </ul>

          <Heading as="h3">10.2 Third-Party Website Services</Heading>
          <ul>
            <li>
              <strong>Support Chat:</strong> We use Crisp chat on the website
              for support conversations
            </li>
            <li>
              <strong>No Social Media Tracking:</strong> We do not use social
              media pixels or advertising trackers
            </li>
          </ul>

          <Heading as="h3">10.3 Cookie Management</Heading>
          <ul>
            <li>
              <strong>Essential Cookies:</strong> Cannot be disabled if required
              for website operation
            </li>
            <li>
              <strong>Browser Control:</strong> Users can manage cookies through
              browser settings
            </li>
          </ul>

          <Heading as="h3">10.4 App vs Website Cookies</Heading>
          <ul>
            <li>
              <strong>Separate Systems:</strong> Our monday.com app and website
              use different systems. Website chat and cookie behavior are
              separate from app data processing.
            </li>
          </ul>
        </section>

        <section>
          <Heading as="h2">11. Children's Privacy</Heading>
          <p>
            Our application is designed for business use and is not intended for
            children under 13. We do not knowingly collect information from
            children.
          </p>
        </section>

        <section>
          <Heading as="h2">12. International Data Transfers</Heading>
          <p>
            Data processing may occur through monday.com's global
            infrastructure and connected service providers, subject to their
            applicable safeguards and commitments.
          </p>
        </section>

        <section>
          <Heading as="h2">13. Changes to This Privacy Policy</Heading>
          <p>
            We will notify users of material changes by updating the "Last
            Updated" date and posting notifications within the app where
            appropriate.
          </p>
        </section>

        <section>
          <Heading as="h2">14. Contact Information</Heading>
          <p>For privacy-related questions or concerns:</p>
          <ul>
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:support@lenoapps.com">support@lenoapps.com</a>
            </li>
            <li>
              <strong>Domain:</strong> lenoapps.com
            </li>
          </ul>
        </section>

        <section>
          <Heading as="h2">15. Compliance and Certifications</Heading>
          <p>This privacy policy is designed to align with:</p>
          <ul>
            <li>monday.com marketplace privacy and security requirements</li>
            <li>UK General Data Protection Regulation (UK GDPR)</li>
            <li>Data Protection Act 2018</li>
            <li>Privacy and Electronic Communications Regulations (PECR)</li>
            <li>Google API Services User Data Policy requirements</li>
          </ul>
        </section>
      </main>
    </Layout>
  )
}
