import fs from 'fs';
import path from 'path';
import React from 'react'
import Link from "next/link";
import styles from "./glossaryPage.module.css"

const getDataFromFile = () => {
    const filePath = path.join(process.cwd(), 'public/posts.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const posts = JSON.parse(fileContents);

    return posts
};

const getAllKeywords = () => {
    const posts = getDataFromFile()

    const newPosts = posts.map(({ keyword, slug }) => ({ keyword, slug }));
    return newPosts
}

const Glossary = () => {

    const newPosts = getAllKeywords()

    const groupedPosts = newPosts.reduce((acc, post) => {
        const firstLetter = post.keyword[0].toUpperCase();
        if (!acc[firstLetter]) {
            acc[firstLetter] = [];
        }
        acc[firstLetter].push(post);
        return acc;
    }, {});

    const alphabetKeys = Object.keys(groupedPosts).sort();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Glossary</h1>
            <div className={styles.horizontalLine}></div>
            <div className={styles.glossaryContainer}>
                {alphabetKeys.map((letter) => (
                    <div className={styles.alphabetContainer} key={letter}>
                        <h2 className={styles.alphabetText}>{letter}</h2>
                        {groupedPosts[letter].map((post) => (
                            <div className={styles.keyword}  key={post.keyword}>
                                <Link href={`/posts/${encodeURIComponent(post.slug)}`}>
                                    <span className={styles.keyword}>{post.keyword}</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Glossary
