import Image from 'next/image'
import React from 'react'
import styles from './pushupsPage.module.css'

const pushupImage = 'https://images.unsplash.com/photo-1598971457999-ca4ef48a9a71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVzaHVwc3xlbnwwfHwwfHx8MA%3D%3D'
const page = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.blogContainer}>
                    <h1 className={styles.title}>How To do Pushups</h1>
                    <div className={styles.coverImageContainer}>
                        <Image src={pushupImage} alt="" placeholder="blur" blurDataURL="/placeholder.jpeg" fill className={styles.coverImg} />
                    </div>
                    <div className={styles.content}>
                        <h1>Introduction</h1>
                        <p><br /></p>
                        <p>Calisthenics, derived from the Greek words "kallos" (beauty) and "sthenos" (strength), is a form of exercise that uses only the body's weight for resistance. It is a versatile and accessible workout regimen that has gained popularity worldwide for its effectiveness in building strength, flexibility, and endurance.</p>
                        <p><br /></p>
                    </div>
                </div>
                <div className={styles.verticalLine}></div>
            </div>
        </div>
    )
}

export default page
