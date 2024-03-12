import Image from 'next/image'
import React from 'react'
import styles from './calisthenicsGymBangalore.module.css'
import Link from 'next/link'
import gymsData from '/public/calisthenics_gyms_bangalore.json'
import PopularPosts from '@/components/popularPostMenu/PopularPostMenu'

const bangaloreImage = 'https://images.unsplash.com/photo-1596796679119-7cf1a9e5448b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFuZ2Fsb3JlfGVufDB8fDB8fHww'

const page = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.blogContainer}>
                    <h1 className={styles.title}>Best Calisthenics Gyms in Bangalore</h1>
                    <div className={styles.coverImageContainer}>
                        <Image src={bangaloreImage} alt="" placeholder="blur" blurDataURL="/placeholder.jpeg" fill className={styles.coverImg} />
                    </div>
                    <div className={styles.content}>
                        <p>Welcome to the ultimate guide to calisthenics gyms in Bangalore!
                            If you're looking to break a sweat, build strength, and join a vibrant fitness community,
                            you've come to the right place. Bangalore is not only known for its tech scene but also
                            for its thriving fitness culture, especially when it comes to calisthenics.
                            Whether you're a beginner or a seasoned pro, this blog will take you on a journey
                            through the best calisthenics gyms in the city, along with tips, reviews,
                            and inspiring stories from fellow fitness enthusiasts.
                            These are the best calisthenics gyms in Bangalore.</p>

                        {gymsData.gyms.map((gym, index) => (
                            <div key={index}>
                                <h1 className={styles.subtitle}>{index + 1}. {gym.name}</h1>
                                <div className={styles.imageContainer}>
                                    <Image src={gym.coverImage} alt="" placeholder="blur" blurDataURL="/placeholder.jpeg" fill className={styles.image} />
                                </div>
                                <h1 className={styles.paragraphHeading}>About</h1>
                                <p>{gym.about}</p>
                                {gym.location && (
                                    <div>
                                        <h1 className={styles.paragraphHeading}>Location{gym.hasMultipleLocations && 's'}</h1>
                                        {gym.hasMultipleLocations ? (
                                            <p>{gym.name} is located at {gym.maps.split(',').map((location, index, array) => (
                                                <span key={index}>
                                                    <Link href={array[index].trim()} className={styles.locationLink}>{gym.location.split(',')[index].trim()}</Link>{index !== array.length - 1 ? ' and ' : '.'}
                                                </span>
                                            ))}</p>
                                        ) : (
                                            <>
                                                <p>{gym.name} is located at <Link href={gym.maps} className={styles.locationLink}>{gym.location}.</Link></p>                                                
                                            </>
                                        )}

                                    </div>
                                )}
                                {gym.instagram && (
                                    <div>
                                        <h1 className={styles.paragraphHeading}>Links</h1>
                                        {gym.website && (
                                            <p>Check out their website <Link href={gym.website} className={styles.locationLink}>here.</Link></p>
                                        )}
                                        {gym.instagram && (
                                            <p>Check out their Instagram page <Link href={gym.instagram} className={styles.locationLink}>here.</Link></p>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                <div className={styles.verticalLine}></div>
                <PopularPosts />
                </div>
            </div>
        </div>
    )
}

export default page
