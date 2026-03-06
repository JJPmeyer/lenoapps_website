import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import Heading from '@theme/Heading'

import styles from './index.module.css'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <Heading as="h1" className={styles.heroTitle}>
              We build powerful apps that enhance your monday.com experience.
            </Heading>
            <p className={styles.heroSubtitle}>
              Our applications are designed to save you time, simplify your
              processes, and help your team work smarter.
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

type AppSection = {
  title: string
  description: string
  link: string
  imageSrc: string
  imageAlt: string
  imageClassName?: string
}

const appSections: AppSection[] = [
  {
    title: 'Data Bridge',
    description:
      'Data Bridge helps you move data into monday.com fast, cleanly, and reliably. Configure your flow once, map fields, and run repeatable data loads, including parent items and multi-level subitems. New sources are continuously added, and you can request any source your team needs.',
    link: '/data-bridge',
    imageSrc: '/img/HomePageScreenshot_DataBridge.png',
    imageAlt: 'Data Bridge Interface',
    imageClassName: styles.largeScreenshotImage,
  },
  {
    title: 'Subitem Template Builder',
    description:
      'Subitem Template Builder is a monday.com app that allows users to create, save, and apply predefined templates for subitems. Instead of manually creating the same subitem structure repeatedly, users can create a template once and apply it whenever needed, saving significant time on repetitive tasks.',
    link: '/subitem-template-builder',
    imageSrc: '/img/HomePageScreenshot_1.png',
    imageAlt: 'Subitem Template Builder Interface',
  },
]

function AppScreenshots({
  title,
  description,
  link,
  imageSrc,
  imageAlt,
  imageClassName,
}: AppSection) {
  return (
    <section className={styles.screenshotsSection}>
      <div className="container">
        <div className={styles.screenshotsContent}>
          <div className={styles.screenshotsText}>
            <Heading as="h2" className={styles.screenshotsTitle}>
              {title}
            </Heading>
            <p className={styles.screenshotsSubtitle}>
              {description}
            </p>
            <div className={styles.screenshotsButtons}>
              <Link
                className="button button--primary button--lg"
                to={link}
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className={styles.screenshotsImages}>
            <div className={styles.imageGrid}>
              <img
                src={imageSrc}
                alt={imageAlt}
                className={clsx(styles.screenshotImage, imageClassName)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home(): React.ReactNode {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="We build powerful apps that enhance your monday.com experience. Our applications are designed to save you time, simplify your processes, and help your team work smarter."
    >
      <HomepageHeader />
      <main>
        {appSections.map((app) => (
          <AppScreenshots key={app.title} {...app} />
        ))}
      </main>
    </Layout>
  )
}
