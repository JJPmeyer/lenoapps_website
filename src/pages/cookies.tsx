import React from 'react'
import Layout from '@theme/Layout'
import Heading from '@theme/Heading'

export default function Cookies(): React.ReactNode {
  return (
    <Layout
      title="Cookies Policy - Leno Apps"
      description="Cookies Policy for Leno Apps"
    >
      <main className="container margin-vert--lg">
        <Heading as="h1">Cookies Policy</Heading>
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <section>
          <Heading as="h2">What Are Cookies</Heading>
          <p>
            Cookies are small text files that are placed on your device when you
            visit our website or use our apps.
          </p>
        </section>

        <section>
          <Heading as="h2">How We Use Cookies</Heading>
          <p>
            We use cookies to improve your experience, analyze site traffic, and
            understand where our visitors are coming from.
          </p>
        </section>

        <section>
          <Heading as="h2">Contact Us</Heading>
          <p>
            If you have any questions about our Cookies Policy, please contact
            us at <a href="mailto:support@lenoapps.com">support@lenoapps.com</a>
          </p>
        </section>
      </main>
    </Layout>
  )
}
