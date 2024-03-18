import fs from 'fs';
import path from 'path';
import React from 'react'
import Link from "next/link";
import Image from 'next/image';

const getAllKeywords = () => {
    const filePath = path.join(process.cwd(), 'public/glossary.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const posts = JSON.parse(fileContents);
    return posts
};

const Glossary = () => {

    const keywords = getAllKeywords()

    const groupedKeywords = keywords.reduce((acc, keyword) => {
        const firstLetter = keyword.title[0].toUpperCase();
        if (!acc[firstLetter]) {
            acc[firstLetter] = [];
        }
        acc[firstLetter].push(keyword);
        return acc;
    }, {});

    const alphabetKeys = Object.keys(groupedKeywords).sort();

    return (
        <div className="text-white pb-5">
            <h1 className="p-4 text-center text-4xl">Calisthenics Glossary</h1>
            <h1 className="p-4 text-center text-2xl mx-[100px]">Welcome to the Ultimate Calisthenics Glossary. You will find all the calisthenics moves, skills and exercises here.
                You will also find all the variations of a move. We also have links to learning resources for all the moves.</h1>
            <div className="mx-[30px] my-2.5 border-[0.1px] border-solid border-[rgba(255,255,255,0.3)]"></div>
            <div className="flex flex-col gap-5 ml-[30px]">
                {alphabetKeys.map((letter) => (
                    <div key={letter} className="mb-5">
                        <h2 className="text-[40px] text-center">{letter}</h2>
                        {groupedKeywords[letter].map((keyword) => (
                            <div className="border-[0.1px] border-solid border-[rgba(255,255,255,0.3)] p-4 rounded-lg mx-auto">
                                <h2 className="text-center text-xl font-bold mb-4">{keyword.title}</h2>
                                <div className="grid grid-cols-3">
                                    <div className='col-span-1 h-[300px] relative border-[0.1px] border-solid border-[rgba(255,255,255,0.3)]'>
                                        <Image src={keyword.image} alt="" placeholder="blur" blurDataURL="/placeholder.jpeg" fill className='object-cover' />
                                    </div>
                                    <div className='ml-[20px] col-span-2 h-[350px] relative'>
                                        <p className="text-md">{keyword.description}</p>
                                        {keyword.youtubeLinks && (
                                            <div>
                                                <h3 className="text-lg font-bold mt-4">Learning Resources :</h3>
                                                <div className="mt-2">
                                                    {keyword.youtubeLinks.split(',').map((link, index) => {
                                                        const links = keyword.youtubeLinks.split(',');
                                                        const titles = keyword.youtubeTitles.split(',');
                                                        return (
                                                            <div key={index} className="mr-2 text-gray-500">
                                                                <Link href={link}>{titles[index]}</Link>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Glossary
