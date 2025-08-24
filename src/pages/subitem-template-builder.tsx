import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import Layout from '@theme/Layout'
import Heading from '@theme/Heading'

import styles from './subitem-template-builder.module.css'

function SubitemTemplateBuilderHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Subitem Template Builder
        </Heading>
        <p className="hero__subtitle">
          Instantly create, save, and apply predefined templates for subitems to
          save hours of repetitive work.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Learn more
          </Link>
        </div>
      </div>
    </header>
  )
}

function Step({
  number,
  title,
  description,
  image,
  icon,
}: {
  number?: number
  title: string
  description: string
  image: string
  icon?: React.ReactNode
}) {
  return (
    <div className={styles.step}>
      <div className={styles.stepNumber}>{icon || number}</div>
      <div className={styles.stepContent}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
      <div className={styles.stepImage}>
        <img src={image} alt={title} />
      </div>
    </div>
  )
}

function Benefit({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className={styles.benefit}>
      <Heading as="h4">{title}</Heading>
      <p>{description}</p>
    </div>
  )
}

export default function SubitemTemplateBuilder(): React.ReactNode {
  return (
    <Layout
      title="Subitem Template Builder - Leno Apps"
      description="Create, save, and apply predefined templates for subitems. Save hours of repetitive work with intelligent column mapping and smart permissions."
    >
      <SubitemTemplateBuilderHeader />

      <main>
        {/* Steps Section */}
        <section className={styles.stepsSection}>
          <div className="container">
            <div className={styles.stepsGrid}>
              <Step
                number={1}
                title="Create Subitems"
                description="Create the subitems on your board that you want to use as recurring templates."
                image="/img/Step1_SubitemBuilder.png"
              />
              <Step
                number={2}
                title="Add Templates"
                description="Open the app in the item view and select the subitems from the dropdown to save them as templates."
                image="/img/Step2_SubitemBuilder.png"
              />
              <Step
                number={3}
                title="Click Apply"
                description="Select the templates, click apply and watch as new subitems are created on your board."
                image="/img/Step3_SubitemBuilder.png"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.stepsSection}>
          <div className="container">
            <Heading as="h2">Features</Heading>
            <div className={styles.stepsGrid}>
              <Step
                title="Edit Templates"
                description="Quickly update your saved subitem templates as your processes evolve."
                image="/img/Feature_EditTemplates.png"
              />
              <Step
                title="Setting Permissions"
                description="Control who can create and apply templates with fine-grained permissions."
                image="/img/Feature_SettingPermissions.png"
              />
              <Step
                title="Column Matching"
                description="Intelligently map columns between your templates and target items."
                image="/img/Feature_ColumnMatching.png"
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefitsSection}>
          <div className="container">
            <div className={styles.benefitsGrid}>
              <Benefit
                title="Save time and effort"
                description="Create subitem templates once and reuse them infinitely. No more repetitive data entry or manual setup."
              />
              <Benefit
                title="Standardize processes"
                description="Ensure consistency across your team with standardized subitem structures and default values."
              />
              <Benefit
                title="Streamline collaboration"
                description="Share templates with team members and control access with smart permission systems."
              />
              <Benefit
                title="Boost productivity"
                description="Focus on your core work while the app handles the heavy lifting of subitem creation and organization."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="container">
            <Heading as="h2">Try Subitem Template Builder for Free!</Heading>
            <p>
              Enjoy a free plan where you can apply 3 templates per month and
              discover how our app can transform your workflow.
            </p>
            <div className={styles.ctaButtons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/installation"
              >
                Get Started
              </Link>
              <Link
                className="button button--outline button--lg"
                to="/docs/intro"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
