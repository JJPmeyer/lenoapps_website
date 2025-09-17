import React from 'react'
import Layout from '@theme/Layout'
import Heading from '@theme/Heading'

export default function Privacy(): React.ReactNode {
  return (
    <Layout
      title="Privacy Policy - Leno Apps"
      description="Privacy Policy for Subitem Template Builder - Leno Apps"
    >
      <main className="container margin-vert--lg">
        <Heading as="h1">Privacy Policy - Subitem Template Builder</Heading>
        <p>
          <strong>Last Updated:</strong> September 8, 2025
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

          <Heading as="h3">2.1 User Information</Heading>
          <ul>
            <li>
              <strong>User Profile Data:</strong> We collect your monday.com
              user ID, name, and email address through the me:read permission
              for template permissions management and user identification.
            </li>
            <li>
              <strong>Account Information:</strong> We collect your monday.com
              account ID for subscription and usage tracking purposes.
            </li>
            <li>
              <strong>Team Member Data:</strong> We access coworker names and
              user IDs through the users:read permission to enable people
              assignment in templates and facilitate template sharing with
              specific teammates.
            </li>
          </ul>

          <Heading as="h3">2.2 Board and Item Data</Heading>
          <ul>
            <li>
              <strong>Board Structure:</strong> We read board column
              configurations, types, and metadata to ensure template
              compatibility.
            </li>
            <li>
              <strong>Subitem Data:</strong> We access existing subitem names,
              column values, and properties to populate templates and display
              current data.
            </li>
            <li>
              <strong>Item Context:</strong> We access the current item ID and
              board ID where the app is being used.
            </li>
          </ul>

          <Heading as="h3">2.3 Application Data</Heading>
          <ul>
            <li>
              <strong>Template Configurations:</strong> We store your saved
              subitem templates including column mappings and values.
            </li>
            <li>
              <strong>Usage Metrics:</strong> We track monthly template
              application counts for subscription plan enforcement.
            </li>
            <li>
              <strong>User Preferences:</strong> We store app settings and
              configuration preferences.
            </li>
          </ul>
        </section>

        <section>
          <Heading as="h2">3. Data Storage and Security</Heading>

          <Heading as="h3">3.1 Storage Infrastructure</Heading>
          <ul>
            <li>
              <strong>monday.com Secure Storage:</strong> All data is stored
              exclusively within monday.com's secure storage infrastructure
              using their storage APIs.
            </li>
            <li>
              <strong>No External Databases:</strong> We do not maintain any
              external databases, servers, or third-party storage systems.
            </li>
          </ul>

          <Heading as="h3">3.2 Data Encryption and Security</Heading>
          <ul>
            <li>
              <strong>Encryption at Rest:</strong> All data is encrypted using
              monday.com's encryption standards.
            </li>
            <li>
              <strong>Transport Security:</strong> All communications use TLS
              1.2 or higher encryption.
            </li>
            <li>
              <strong>Access Control:</strong> Data access is restricted to
              authorized board members only.
            </li>
            <li>
              <strong>Input Validation:</strong> All user-supplied data is
              validated and sanitized before processing.
            </li>
          </ul>
        </section>

        <section>
          <Heading as="h2">5. How We Use Your Information</Heading>
          <ul>
            <li>
              <strong>Template Management:</strong> Create, save, edit, and
              apply subitem templates
            </li>
            <li>
              <strong>Permission Control:</strong> Manage who can view and edit
              specific templates
            </li>
            <li>
              <strong>Usage Tracking:</strong> Monitor template applications for
              subscription plan limits
            </li>
            <li>
              <strong>Column Mapping:</strong> Automatically map template
              columns to board columns
            </li>
          </ul>
        </section>

        <section>
          <Heading as="h2">6. Third-Party Services and Dependencies</Heading>
          <p>Our application uses the following services and libraries:</p>

          <Heading as="h3">6.1 monday.com Services</Heading>
          <ul>
            <li>
              <strong>monday.com GraphQL API:</strong> For all data operations
            </li>
            <li>
              <strong>monday.com SDK:</strong> For platform integration
            </li>
            <li>
              <strong>monday.com Seamless API:</strong> For enhanced API
              functionality
            </li>
            <li>
              <strong>monday.com Storage:</strong> For secure data persistence
            </li>
          </ul>

          <Heading as="h3">6.2 UI and Development Libraries</Heading>
          <ul>
            <li>
              <strong>Vibe UI Components (@vibe/core):</strong> User interface
              components (no data collection)
            </li>
            <li>
              <strong>React Libraries:</strong> Application framework and UI
              components (no data collection)
            </li>
            <li>
              <strong>Date/Number Formatting Libraries:</strong> Local data
              formatting only (no data transmission)
            </li>
          </ul>

          <Heading as="h3">6.3 Development Infrastructure</Heading>
          <ul>
            <li>
              <strong>Vite:</strong> Build tool (development only)
            </li>
            <li>
              <strong>monday.com Apps Tunnel:</strong> Development tunneling
              (.apps-tunnel.monday.app)
            </li>
          </ul>
        </section>

        <section>
          <Heading as="h2">7. Data Logging and Retention</Heading>

          <Heading as="h3">7.1 Data Retention</Heading>
          <ul>
            <li>
              <strong>Template Data:</strong> We keep your information for as
              long as necessary to fulfill the purposes outlined in this privacy
              notice unless otherwise required by law. We will only keep your
              personal information for as long as it is necessary for the
              purposes set out in this privacy notice, unless a longer retention
              period is required or permitted by law (such as tax, accounting,
              or other legal requirements).
            </li>
            <li>
              <strong>Usage Data:</strong> Monthly usage data retained for
              subscription management
            </li>
          </ul>
        </section>

        <section>
          <Heading as="h2">8. Data Sharing and Disclosure</Heading>
          <ul>
            <li>
              <strong>No Third-Party Sharing:</strong> We do not sell, trade, or
              share your data with third parties
            </li>
            <li>
              <strong>Legal Compliance:</strong> Data may be disclosed if
              required by law or legal process
            </li>
            <li>
              <strong>monday.com Platform:</strong> Data remains within
              monday.com's ecosystem
            </li>
          </ul>
        </section>

        <section>
          <Heading as="h2">9. Your Rights and Data Control</Heading>

          <Heading as="h3">9.1 Access and Control</Heading>
          <ul>
            <li>
              <strong>Template Management:</strong> Full control over your saved
              templates
            </li>
            <li>
              <strong>Permission Settings:</strong> Control who can access your
              templates
            </li>
          </ul>
        </section>

        <section>
          <Heading as="h2">10. Cookies and Tracking</Heading>

          <Heading as="h3">10.1 Essential Cookies Only</Heading>
          <p>
            Our website uses only essential cookies required for basic
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
              <strong>No Tracking or Analytics:</strong> We do not use cookies
              for tracking, analytics, or advertising purposes
            </li>
          </ul>

          <Heading as="h3">10.2 No Third-Party Cookies</Heading>
          <ul>
            <li>
              <strong>First-Party Only:</strong> All cookies are set directly by
              our website domain
            </li>
            <li>
              <strong>No External Services:</strong> We do not use Google
              Analytics, advertising networks, or other third-party tracking
              services
            </li>
            <li>
              <strong>No Cross-Site Tracking:</strong> No tracking across other
              websites or platforms
            </li>
            <li>
              <strong>No Social Media Tracking:</strong> No social media pixels
              or tracking codes
            </li>
          </ul>

          <Heading as="h3">10.3 Cookie Management</Heading>
          <ul>
            <li>
              <strong>Essential Cookies:</strong> Cannot be disabled as they are
              required for website operation
            </li>
            <li>
              <strong>No Consent Required:</strong> Essential cookies do not
              require consent under UK GDPR
            </li>
            <li>
              <strong>Browser Control:</strong> Users can clear cookies through
              their browser settings
            </li>
          </ul>

          <Heading as="h3">10.4 App vs Website Cookies</Heading>
          <ul>
            <li>
              <strong>Separate Systems:</strong> Our monday.com app and website
              use different systems. There are no cookies used in our app.
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
            Data processing occurs within monday.com's global infrastructure
            with appropriate safeguards for international transfers as governed
            by monday.com's privacy policies.
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
          <p>This privacy policy complies with:</p>
          <ul>
            <li>monday.com marketplace privacy and security requirements</li>
            <li>UK General Data Protection Regulation (UK GDPR)</li>
            <li>Data Protection Act 2018</li>
            <li>Privacy and Electronic Communications Regulations (PECR)</li>
            <li>Consumer Rights Act 2015</li>
            <li>Industry security best practices</li>
          </ul>
        </section>
      </main>
    </Layout>
  )
}
