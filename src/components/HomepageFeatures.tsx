import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Student Group',
    image: require('@site/static/images/group.png').default,
    description: (
      <>
        The community you&apos;ve always needed, but didn&apos;t know you
        wanted.
      </>
    ),
  },
  {
    title: 'Hands On Projects by Students',
    image: require('@site/static/images/project.png').default,
    description: (
      <>Useful Workshops followed by industry related/humanitarian projects. Ditch the classrooms, we got you!</>
    ),
  },
  {
    title: 'Practical Curriculum',
    image: require('@site/static/images/learning.png').default,
    description: (
      <>Whole new curriculum which complement's generic university&apos;s missing ones.</>
    ),
  },
];

function Feature({ image, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureImage} src={image} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((feature) => (
            <Feature key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
