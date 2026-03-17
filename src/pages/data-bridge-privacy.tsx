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
          <strong>Last Updated:</strong> March 11, 2026
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
              <strong>monday Identifiers:</strong> We store your monday.com
              account ID (<code>account_id</code>), user ID (
              <code>user_id</code>), and install ID (
              <code>install_id</code>) so app data is scoped to the correct
              account and install.
            </li>
            <li>
              <strong>Support Request Data:</strong> If you submit a support
              request or request a new source, we may store the request text and
              the identity information you provide so we can respond.
            </li>
          </ul>

          <Heading as="h3">2.2 Import Configuration Data</Heading>
          <ul>
            <li>
              <strong>OAuth Credentials:</strong> We store the OAuth
              credentials required for supported integrations, including monday
              and Google credentials, in monday Secure Storage.
            </li>
            <li>
              <strong>Import Settings:</strong> We store template name, source
              settings, field mappings, board and group IDs, and schedule
              settings.
            </li>
            <li>
              <strong>Import Run Metadata:</strong> We store status, counts,
              timestamps, and error messages so imports can be tracked and
              reviewed for troubleshooting.
            </li>
          </ul>

          <Heading as="h3">2.3 Source Data Used for Imports</Heading>
          <ul>
            <li>
              <strong>Google Sheets Data:</strong> We fetch the Google Sheets
              values selected by the customer to execute the import.
            </li>
            <li>
              <strong>Excel Data:</strong> Excel data may be staged
              temporarily in chunks for background processing and then removed.
            </li>
          </ul>
        </section>

        <section>
          <Heading as="h2">3. Data Storage and Security</Heading>

          <Heading as="h3">3.1 Storage Infrastructure</Heading>
          <ul>
            <li>
              <strong>monday Infrastructure:</strong> Data is stored on monday
              infrastructure, including Document DB and Secure Storage.
            </li>
            <li>
              <strong>Account Isolation:</strong> Data is scoped by monday
              account so each account's data remains separate.
            </li>
          </ul>

          <Heading as="h3">3.2 Data Encryption and Security</Heading>
          <ul>
            <li>
              <strong>Access Control:</strong> Access is restricted through
              authenticated requests and session validation.
            </li>
            <li>
              <strong>Token Protection:</strong> Tokens and secrets are never
              exposed in the frontend and are not written to logs.
            </li>
            <li>
              <strong>Transport Security:</strong> Data is transmitted over
              HTTPS.
            </li>
            <li>
              <strong>Temporary Data Cleanup:</strong> Temporary staged Excel
              payloads are deleted after processing or cancellation, with a TTL
              fallback.
            </li>
          </ul>
        </section>

        <section>
          <Heading as="h2">5. How We Use Your Information</Heading>
          <ul>
            <li>
              <strong>Authentication:</strong> Authenticate supported
              integrations.
            </li>
            <li>
              <strong>Import Operations:</strong> Execute and resume imports
              reliably.
            </li>
            <li>
              <strong>App Experience:</strong> Show progress and import history
              in the user interface.
            </li>
            <li>
              <strong>Scheduling and Support:</strong> Support scheduling and
              customer support requests.
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
              <strong>Import Data:</strong> Import configuration data and run
              metadata are retained as needed to operate the service and support
              the app.
            </li>
            <li>
              <strong>Temporary Excel Data:</strong> Staged Excel data is
              removed after processing or cancellation, with a TTL fallback.
            </li>
          </ul>

          <Heading as="h3">7.2 Account Data Deletion</Heading>
          <ul>
            <li>
              <strong>Automatic Data Clearing:</strong> When Data Bridge is
              uninstalled, account data cleanup is triggered for that account's
              Document DB and Secure Storage records.
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
