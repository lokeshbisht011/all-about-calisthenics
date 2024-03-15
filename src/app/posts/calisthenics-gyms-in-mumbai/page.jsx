import Image from 'next/image'
import React from 'react'
import styles from './calisthenicsGymMumbai.module.css'
import Link from 'next/link'
import gymsData from '/public/calisthenics_gyms_mumbai.json'
import PopularPosts from '@/components/popularPostMenu/PopularPostMenu'

const mumbaiImage = 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVtYmFpfGVufDB8fDB8fHww'

const page = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.blogContainer}>
                    <h1 className={styles.title}>Best Calisthenics Gyms in Mumbai</h1>
                    <div className={styles.coverImageContainer}>
                        <Image src={mumbaiImage} alt="" placeholder="blur" blurDataURL="/placeholder.jpeg" fill className={styles.coverImg} />
                    </div>
                    <div className={styles.content}>
                        <p>Experience a fitness revolution in Mumbai, where the city's dynamic spirit merges with a thriving calisthenics culture. 
                            If you're passionate about transforming your body, breaking a sweat, and joining a vibrant fitness community, 
                            Mumbai is the ultimate destination. Discover some of the city's top calisthenics parks, where you can challenge yourself, 
                            unleash your potential, and connect with like-minded individuals. Whether you're a beginner or an experienced 
                            calisthenics enthusiast, Mumbai offers a diverse range of parks and facilities to cater to your fitness needs. 
                            Join the movement and elevate your fitness journey in the heart of Mumbai.</p>

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
