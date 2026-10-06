import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

// Metadata packages have no card of their own: they are reached through Architecture and Standards.
const sections = [
  {
    title: 'Community health workflows',
    to: '/docs/workflows/',
    body: 'Registration, visits, maternal and child health, surveillance, commodities, referral.',
  },
  {
    title: 'Reference architecture',
    to: '/docs/architecture/',
    body: 'The layers and components of the reference eCHIS and how they connect.',
  },
  {
    title: 'Integration workflows',
    to: '/docs/integrations/',
    body: 'Identity, referral, supply chain, surveillance, reporting and analytics exchanges.',
  },
  {
    title: 'Standards & interoperability',
    to: '/docs/standards/',
    body: 'FHIR profiles, terminology and the metadata packages that implement them.',
  },
  {
    title: 'Implementation guidance',
    to: '/docs/implementation/',
    body: 'Governance, configuration, testing, go-live, training and operations.',
  },
];

const journeys = [
  ['Understand what the reference eCHIS is', '/docs/architecture/'],
  ['See how a community health service works end to end', '/docs/workflows/'],
  ['Connect eCHIS to an MPI, EMR, LMIS or DHIS2', '/docs/integrations/'],
  ['Find FHIR profiles, value sets and metadata packages', '/docs/standards/'],
  ['Plan governance, rollout and operations', '/docs/implementation/'],
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/architecture/">
            Start with the architecture
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main className="container margin-vert--xl">
        <p>
          This portal is the implementation companion to the Digital Community System Toolkit.
          Country teams use it to turn an approved scope into workflows, configuration,
          integrations, testing, deployment, and operations. The reference eCHIS is one worked
          example of that method.
        </p>
        <Heading as="h2">I want to…</Heading>
        <table className={styles.journeys}>
          <tbody>
            {journeys.map(([goal, to]) => (
              <tr key={to}>
                <td>{goal}</td>
                <td>
                  <Link to={to}>Go →</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className={clsx('row', styles.cards)}>
          {sections.map(({title, to, body}) => (
            <div key={to} className="col col--4 margin-bottom--lg">
              <Link to={to} className={clsx('card padding--lg', styles.card)}>
                <Heading as="h3">{title}</Heading>
                <p>{body}</p>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
