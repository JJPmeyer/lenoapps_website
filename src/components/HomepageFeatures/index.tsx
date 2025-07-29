import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import Heading from '@theme/Heading'

import styles from './styles.module.css'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: React.ReactNode
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Subitem Template Builder',
    Svg: require('@site/static/img/feature-template.svg').default,
    description: (
      <>
        Create and save unlimited subitem templates with support for all
        monday.com column types. Organize templates with descriptive names and
        categories for easy access.
      </>
    ),
  },
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): React.ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div
          className="text--center padding-horiz--md"
          style={{ marginTop: '3rem' }}
        >
          <Link
            className="button button--primary button--lg"
            to="/subitem-template-builder"
          >
            Learn More About Subitem Template Builder
          </Link>
        </div>
      </div>
    </section>
  )
}
