import Image from 'next/image'
import React from 'react'
import styles from './calisthenicsGymDelhi.module.css'
import Link from 'next/link'
import gymsData from '/public/calisthenics_gyms_delhi.json'
import PopularPosts from '@/components/popularPostMenu/PopularPostMenu'

const delhiImage = 'https://images.unsplash.com/photo-1592639296346-560c37a0f711?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGVsaGl8ZW58MHx8MHx8fDA%3D'

const page = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.blogContainer}>
                    <h1 className={styles.title}>Best Calisthenics Gyms in Delhi</h1>
                    <div className={styles.coverImageContainer}>
                        <Image src={delhiImage} alt="" placeholder="blur" blurDataURL="/placeholder.jpeg" fill className={styles.coverImg} />
                    </div>
                    <div className={styles.content}>
                        <p>Embark on an exhilarating fitness journey in Delhi, where the rich cultural heritage meets a burgeoning calisthenics scene. 
                            If you're eager to sculpt your body, sweat it out, and become part of a dynamic fitness community, Delhi is the place to be.
                            Discover the best calisthenics parks in the city, offering a perfect blend of historical charm and modern fitness amenities. 
                            Whether you're a newcomer or a seasoned calisthenics enthusiast, Delhi's parks provide the ideal setting to push your boundaries and achieve your fitness goals. 
                            Join the movement and embrace a new way of fitness in the vibrant capital city of India.</p>
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
