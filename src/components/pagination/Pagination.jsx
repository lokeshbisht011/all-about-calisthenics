"use client";

import React from "react";
import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext, category }) => {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <button
                className={styles.button}
                disabled={!hasPrev}
                onClick={() => {
                    let queryString = `?page=${page - 1}`;
                    if (category) {
                      queryString += `&category=${category}`;
                    }
                    router.push(queryString);
                  }}
            >
                Previous
            </button>
            <button
                disabled={!hasNext}
                className={styles.button}
                onClick={() => {
                    let queryString = `?page=${page + 1}`;
                    if (category) {
                      queryString += `&category=${category}`;
                    }
                    router.push(queryString);
                  }}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;