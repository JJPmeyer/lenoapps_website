import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import Layout from '@theme/Layout'
import Heading from '@theme/Heading'

import styles from './data-bridge.module.css'

function DataBridgeHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Data Bridge
        </Heading>
        <p className="hero__subtitle">
          Bring data into monday.com fast, cleanly, and reliably from a growing
          set of sources.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/data-bridge/intro"
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

export default function DataBridge(): React.ReactNode {
  return (
    <Layout
      title="Data Bridge - Leno Apps"
      description="Move data into monday.com quickly with source-agnostic mapping, hierarchy support, and clear run progress logs."
    >
      <DataBridgeHeader />

      <main>
        <section className={styles.stepsSection}>
          <div className="container">
            <div className={styles.stepsGrid}>
              <Step
                number={1}
                title="Choose and Connect a Source"
                description="Pick from available source connectors, connect your data, and select what you want to load into monday.com."
                image="/img/Step1_DataBridge.png"
              />
              <Step
                number={2}
                title="Map Your Fields"
                description="Choose where each field should go in your monday.com board and set the item name so your data lands in the right place."
                image="/img/Step2_DataBridge.png"
              />
              <Step
                number={3}
                title="Run and Monitor Data Flow"
                description="Run data loads with clear progress logs in real time so your team can track every run from start to finish."
                image="/img/Step3_DataBridge.png"
              />
            </div>
          </div>
        </section>

        <section className={styles.stepsSection}>
          <div className="container">
            <Heading as="h2">Features</Heading>
            <div className={styles.stepsGrid}>
              <Step
                title="Multiple Sources, One Workflow"
                description="Use one consistent workflow across source types, with new source connectors added continuously as Data Bridge evolves."
                image="/img/Feature_MultipleSources_DataBridge.png"
              />
              <Step
                title="Scheduling for Hands-Free Runs"
                description="Set schedules once and let Data Bridge run recurring loads automatically so your monday.com boards stay current without manual reruns."
                image="/img/Feature_Scheduling_DataBridge.png"
              />
              <Step
                title="Standard Boards and Multi Subitems Boards"
                description="Load into standard boards and multi subitems boards from one workflow. Multi subitems board support is the key differentiator here, and no other app currently offers this level of support."
                image="/img/Feature_MultiSubitemsBoards_DataBridge.png"
              />
            </div>
          </div>
        </section>

        <section className={styles.benefitsSection}>
          <div className="container">
            <div className={styles.benefitsGrid}>
              <Benefit
                title="Import at scale"
                description="Move large data sets in minutes instead of spending hours on manual entry."
              />
              <Benefit
                title="Map once, reuse often"
                description="Set up field mapping once and run consistent data loads with less setup work every time."
              />
              <Benefit
                title="Hierarchy-ready"
                description="Import parent items, subitems, and multi-level subitems to match real data structures."
              />
              <Benefit
                title="Full visibility"
                description="Track every run with live progress and clear logs so your team can trust each import."
              />
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className="container">
            <Heading as="h2">Start moving data with Data Bridge</Heading>
            <p>
              Configure once, save your template, and run clean repeatable data
              loads into monday.com. New sources are added regularly, and you
              can request any source your team needs.
            </p>
            <div className={styles.ctaButtons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/data-bridge/installation"
              >
                Get Started
              </Link>
              <Link
                className="button button--outline button--lg"
                to="/docs/data-bridge/intro"
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
