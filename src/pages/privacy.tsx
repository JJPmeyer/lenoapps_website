import React from 'react'
import Layout from '@theme/Layout'
import Heading from '@theme/Heading'

export default function Privacy(): React.ReactNode {
  return (
    <Layout
      title="Privacy Policy - Tiny Tree Solutions"
      description="Privacy Policy for Subitem Template Builder - Tiny Tree Solutions"
    >
      <main className="container margin-vert--lg">
        <Heading as="h1">Privacy Policy</Heading>
        <p>
          <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
        </p>

        <section>
          <Heading as="h2">1. Introduction</Heading>
          <p>
            This Privacy Policy describes how Subitem Template Builder ("we,"
            "our," or "us") collects, uses, and protects your information when
            you use our monday.com marketplace application. This policy applies
            to all users of our application and is designed to comply with
            applicable privacy laws and monday.com's marketplace requirements.
          </p>
        </section>

        <section>
          <Heading as="h2">2. Information We Collect</Heading>

          <Heading as="h3">2.1 Information You Provide</Heading>
          <ul>
            <li>
              <strong>User Profile Information:</strong> When you use our app,
              we collect your monday.com user profile information including your
              name, email address, and user ID.
            </li>
            <li>
              <strong>Board Data:</strong> We access and process board data that
              you authorize us to read and modify, including board structure,
              column configurations, and item data.
            </li>
          </ul>

          <Heading as="h3">2.2 Information We Collect Automatically</Heading>
          <ul>
            <li>
              <strong>Usage Data:</strong> We track how many templates you
              create and apply each month for subscription management purposes.
            </li>
            <li>
              <strong>App Settings:</strong> We store your template
              configurations and preferences using monday.com's secure storage.
            </li>
          </ul>
        </section>

        <section>
          <Heading as="h2">3. How We Use Your Information</Heading>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li>
              <strong>Template Management:</strong> To create, save, and apply
              subitem templates to your monday.com boards
            </li>
            <li>
              <strong>Subscription Management:</strong> To track usage and
              manage your subscription plan
            </li>
            <li>
              <strong>App Functionality:</strong> To provide the core features
              of our template builder application
            </li>
            <li>
              <strong>Support:</strong> To provide customer support and
              troubleshoot issues
            </li>
            <li>
              <strong>Improvements:</strong> To improve our application and
              develop new features
            </li>
          </ul>
        </section>

        <section>
          <Heading as="h2">4. Data Storage and Security</Heading>

          <Heading as="h3">4.1 Storage Location</Heading>
          <p>
            All data is stored securely within monday.com's infrastructure using
            their secure storage APIs. We do not maintain any external databases
            or servers.
          </p>

          <Heading as="h3">4.2 Data Encryption</Heading>
          <ul>
            <li>
              All data is encrypted at rest using monday.com's encryption
              standards
            </li>
            <li>All communications are encrypted using TLS 1.2 or higher</li>
            <li>User access tokens are encrypted and stored securely</li>
          </ul>

          <Heading as="h3">4.3 App Permissions</Heading>
          <p>
            Our application requests the following permissions from monday.com,
            and here's why each permission is necessary:
          </p>

          <Heading as="h4">
            4.3.1 me:read - Read User Profile Information
          </Heading>
          <p>
            <strong>Why we need this permission:</strong>
          </p>
          <ul>
            <li>
              To identify the current user creating and managing templates
            </li>
            <li>
              To implement template permission controls (who can view/edit
              templates)
            </li>
            <li>To track usage data for subscription management</li>
            <li>To provide personalized support and troubleshooting</li>
          </ul>
          <p>
            <strong>What data we access:</strong>
          </p>
          <ul>
            <li>User ID, name, and email address</li>
            <li>Account information for subscription management</li>
          </ul>

          <Heading as="h4">4.3.2 boards:read - Read Board Data</Heading>
          <p>
            <strong>Why we need this permission:</strong>
          </p>
          <ul>
            <li>To read board structure and column configurations</li>
            <li>To understand the data types and formats in your boards</li>
            <li>To display existing subitems and their properties</li>
            <li>To map template columns to actual board columns</li>
            <li>
              To validate that templates are compatible with your board
              structure
            </li>
          </ul>
          <p>
            <strong>What data we access:</strong>
          </p>
          <ul>
            <li>Board structure and column definitions</li>
            <li>Existing subitem data (names, column values)</li>
            <li>Board metadata and settings</li>
          </ul>

          <Heading as="h4">4.3.3 boards:write - Modify Board Data</Heading>
          <p>
            <strong>Why we need this permission:</strong>
          </p>
          <ul>
            <li>To create new subitems from your saved templates</li>
            <li>To apply template data to your boards</li>
            <li>To update existing subitems when templates are modified</li>
            <li>
              To create the actual subitems with the configured column values
            </li>
          </ul>
          <p>
            <strong>What data we modify:</strong>
          </p>
          <ul>
            <li>Creates new subitems with template data</li>
            <li>
              Updates column values on existing subitems (when applying
              templates)
            </li>
          </ul>

          <Heading as="h4">4.3.4 Permission Usage</Heading>
          <ul>
            <li>We only access the specific boards you authorize</li>
            <li>
              We only read and write data that is necessary for template
              functionality
            </li>
            <li>
              We do not access any data outside of the boards you explicitly
              grant permission to
            </li>
            <li>
              All data access is logged and monitored for security purposes
            </li>
          </ul>

          <Heading as="h3">4.4 Security Measures</Heading>
          <ul>
            <li>
              We implement proper authentication and authorization for all
              requests
            </li>
            <li>All user-supplied data is validated and sanitized</li>
            <li>
              We follow monday.com's security best practices and requirements
            </li>
          </ul>
        </section>

        <section>
          <Heading as="h2">5. Data Sharing and Third-Party Services</Heading>

          <Heading as="h3">5.1 Third-Party Services</Heading>
          <p>Our application uses the following third-party services:</p>
          <ul>
            <li>
              <strong>monday.com APIs:</strong> For accessing and modifying
              board data, user information, and secure storage
            </li>
            <li>
              <strong>Vibe UI Components:</strong> For user interface components
              (no data collection)
            </li>
            <li>
              <strong>React and related libraries:</strong> For application
              functionality (no data collection)
            </li>
          </ul>

          <Heading as="h3">5.2 Data Sharing</Heading>
          <p>
            We do not sell, trade, or otherwise transfer your personal
            information to third parties except:
          </p>
          <ul>
            <li>As required by law or to comply with legal process</li>
            <li>To protect our rights and safety</li>
            <li>With your explicit consent</li>
          </ul>
        </section>

        <section>
          <Heading as="h2">6. Your Rights and Choices</Heading>

          <Heading as="h3">6.1 Access and Control</Heading>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>
              Request deletion of your data (subject to monday.com's data
              retention policies)
            </li>
          </ul>

          <Heading as="h3">6.2 Data Retention</Heading>
          <ul>
            <li>
              Template data is retained as long as you maintain an active
              monday.com account
            </li>
            <li>Usage data is retained for subscription management purposes</li>
            <li>
              When you deauthorize or uninstall our app, we will delete all
              associated data within 10 days
            </li>
          </ul>
        </section>

        <section>
          <Heading as="h2">7. Cookies and Tracking</Heading>
          <p>
            Our application does not use cookies for tracking purposes. Any
            cookies used are strictly for application functionality and are
            handled securely.
          </p>
        </section>

        <section>
          <Heading as="h2">8. Children's Privacy</Heading>
          <p>
            Our application is not intended for use by children under the age of
            13. We do not knowingly collect personal information from children
            under 13.
          </p>
        </section>

        <section>
          <Heading as="h2">9. International Data Transfers</Heading>
          <p>
            Your data is processed and stored within monday.com's
            infrastructure, which may involve international data transfers. We
            ensure appropriate safeguards are in place for such transfers.
          </p>
        </section>

        <section>
          <Heading as="h2">10. Changes to This Privacy Policy</Heading>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any material changes by posting the new Privacy Policy on
            this page and updating the "Last Updated" date.
          </p>
        </section>

        <section>
          <Heading as="h2">11. Contact Information</Heading>
          <p>
            If you have any questions about this Privacy Policy or our data
            practices, please contact us at:
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
          <Heading as="h2">12. Compliance</Heading>
          <p>This Privacy Policy is designed to comply with:</p>
          <ul>
            <li>monday.com's marketplace privacy and security requirements</li>
            <li>Applicable data protection laws and regulations</li>
            <li>Best practices for data privacy and security</li>
          </ul>
        </section>
      </main>
    </Layout>
  )
}
