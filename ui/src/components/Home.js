import { Heading } from '@chakra-ui/react';
import styles from './home.module.scss';
import InterfaceParser from './InterfaceParser/InterfaceParser';

function Home() {
  const logo = 'https://quabbly.com/_next/image?url=%2Fimages%2Fquabbly_logo.svg&w=128&q=75';

  return (
    <div className={styles.Home}>
      <header className={styles.header}>
        <img src={logo} className={styles.title} alt="logo" />
        <Heading color="steelblue" as="h1" size="lg" my={5}>
          Interface to Output
        </Heading>
      </header>
      <main>
        <InterfaceParser />
      </main>
    </div>
  );
}

export default Home;
