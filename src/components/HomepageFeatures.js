// import React from 'react';
// import clsx from 'clsx';
// import styles from './HomepageFeatures.module.css';

// const FeatureList = [
//   {
//     title: 'Easy to Use',
//     Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
//     description: (
//       <>
//         Docusaurus was designed from the ground up to be easily installed and
//         used to get your website up and running quickly.
//       </>
//     ),
//   },
// ];

// function Feature({Svg, title, description}) {
//   return (
//     <div className={clsx('col col--4')}>
//       <div className="text--center">
//         <Svg className={styles.featureSvg} alt={title} />
//       </div>
//       <div className="text--center padding-horiz--md">
//         <h3>{title}</h3>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

// export default function HomepageFeatures() {
//   return (
//     <section className={styles.features}>
//       <div className="container">
//         <div className="row">
//           {FeatureList.map((props, idx) => (
//             <Feature key={idx} {...props} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// import React from 'react';
// import clsx from 'clsx';
// import styles from './HomepageFeatures.module.css';

// const FeatureList = [
//   {
//     title: 'Welcome to My Website',
//     Svg: require('../../static/img/govind.jpg').default, // Replace with your image
//     description: (
//       <>
//         Hi, I'm [Your Name] and I specialize in [Your Specialty]. This website is 
//         designed to showcase my projects and document my journey in [Your Field].
//       </>
//     ),
//   }
// ];

// function Feature({Svg, title, description}) {
//   return (
//     <div className={clsx('col col--4')}>
//       <div className="text--center">
//         <Svg className={styles.featureSvg} alt={title} />
//       </div>
//       <div className="text--center padding-horiz--md">
//         <h3>{title}</h3>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

// export default function HomepageFeatures() {
//   return (
//     <section className={styles.features}>
//       <div className="container">
//         <div className="row">
//           {FeatureList.map((props, idx) => (
//             <Feature key={idx} {...props} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

function Home() {
  return (
    <Layout
      title={`Hello from Jose`}
      description="Jose Vargas-Quiros's personal homepage">
      <main>
        <div className="container">
          <header>
            <h1>Jose Vargas-Quiros</h1>
            <p>I enjoy developing and researching software for scientific and machine learning applications.</p>
          </header>
          <div>
            <p>In my free time, I like to go around taking photos. If you find them interesting, feel free to follow me on Instagram!</p>
            <Link to="https://instagram.com/josedvq">
              @josedvq
            </Link>
          </div>
          {/* Add more sections as needed */}
        </div>
      </main>
    </Layout>
  );
}

export default Home;
