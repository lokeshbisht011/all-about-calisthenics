import React from 'react'
import styles from './hero.module.css'

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.line}></div>
      <h1 className={styles.title}>
        <b>All About Calisthenics</b>
      </h1>
      <h1 className={styles.subTitle}>
      Discover the world of calisthenics, where strength meets artistry. 
      From beginner guides to advanced techniques, find everything you need to know about calisthenics right here. 
      Start your journey today and redefine what your body is capable of.
      </h1>
      <div className={styles.line}></div>
    </div>
  )
}

export default Hero
