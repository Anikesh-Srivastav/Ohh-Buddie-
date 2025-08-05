'use client';

import styles from './page.module.scss'
import { useEffect, useState } from 'react';
import Preloader from '../components/Preloader';
import Landing from '../components/Landing';
import ImageScroll from '../components/ImageScroll'
import { AnimatePresence } from 'motion/react';
import Footer from '../components/Footer'
// import ValueGallery from '../components/ValueGallery'
// import { projects } from '../data'
import TextScroll from '../components/TextScroll'


const page = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])

  return (
    <>
    <main className={styles.main}>
       <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      {/* <div className={styles.gallery}>
        <ValueGallery projects={[projects[0], projects[1]]}/>
        <ValueGallery projects={[projects[2], projects[3]]} reversed={true}/>
        <ValueGallery projects={[projects[4], projects[5]]}/>
        <ValueGallery projects={[projects[6], projects[7]]} reversed={true}/>
      </div> */}
      <TextScroll />
      <ImageScroll />
      <Footer />
    </main>
    </>
  )
}

export default page