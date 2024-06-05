import Image from 'next/image'
import React from 'react'
import styles from './calisthenicsGymBangalore.module.css'
import Link from 'next/link'
import gymsData from '/public/calisthenics_gyms_bangalore.json'
import PopularPosts from '@/components/popularPostMenu/PopularPostMenu'

const coverImage = "https://images.unsplash.com/photo-1598266663439-2056e6900339?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FsaXN0aGVuaWNzfGVufDB8fDB8fHww"
const page = () => {
    return (
        <div className="w-full pb-10 bg-black text-white">
            <div className="grid grid-cols-3 gap-x-8">
                <div className="col-span-2 p-12 ml-12">
                    <h1 className="font-bold text-4xl mt-4 mb-4 text-center">How to Start Calisthenics: The Beginner's Guide</h1>
                    <div className="h-[350px] relative items-center mb-4 border-[0.1px] border-opacity-30 border-solid border-white">
                        <Image src={coverImage} alt="" placeholder="blur" blurDataURL="/placeholder.jpeg" fill className="object-cover" />
                    </div>
                    <div className={styles.content}>
                        <p>There are various forms of physical movements you can do to maintain your physical fitness and have a healthy lifestyle.
                            Using your own body weight is one such way of training.
                            In this article, you are going to learn what Calisthenics is and how you can start using your own body weight for strength training.
                        </p>
                        <h1 className="font-bold text-3xl mt-4 mb-4">What is Calisthenics?</h1>
                        <p>The word <b>Calisthenics</b> comes from the ancient Greek words kállos which means beauty and sthenos which means strength.
                        Calisthenics is a form of strength training in which we use our own body weight as resistance and perform various exercises to develop our body.</p>

                        <h1 className="font-bold text-3xl mt-4 mb-4">Benefits of Calisthenics</h1>
                        <p></p>
                        <div className="h-[350px] relative items-center mb-4 border-[0.1px] border-opacity-30 border-solid border-white">
                            <Image src={coverImage} alt="" placeholder="blur" blurDataURL="/placeholder.jpeg" fill className="object-cover" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.verticalLine}></div>
                    <PopularPosts />
                </div>
            </div >
        </div>
    )
}

export default page
