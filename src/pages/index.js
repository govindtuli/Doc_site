import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css'; // This line imports your CSS module

function Home() {
  return (
    <Layout
      title=" "
      description="">
      <main>
        <div className={styles.container}>
          <header className={styles.heroBanner}>
            <img src="static/img/govind3.jpg" alt="Govind" className={styles.profilePicture}/>
            <h1>Govind Tuli</h1>
            <p>I enjoy developing and researching software for scientific and machine learning applications.</p>
            <div className={styles.socialLinks}>
              <Link to="https://linkedin.com/in/josevq">LinkedIn</Link>
              {/* Add other social links similarly */}
            </div>
          </header>
        </div>
      </main>
    </Layout>
  );
}

export default Home;


