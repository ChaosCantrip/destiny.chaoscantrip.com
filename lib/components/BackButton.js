"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { useRouter, usePathname } from "next/navigation";

import styles from "@/styles/modules/back_button.module.css";


export default function BackButton() {
    const router = useRouter();
    const pathname = usePathname();
    const target = pathname.split("/").slice(0, -1).join("/");
    return (
        <h2 className={styles.button} onClick={() => router.push(target)}>
            <FontAwesomeIcon icon={faArrowLeft} />
        </h2>
    )
}