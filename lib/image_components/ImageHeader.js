import styles from "@/lib/image_components/ImageHeader.module.css";

export default function ImageHeader({ icon, title, subtitle, href }) {
    return (
        <div className={styles.header}>
            <img className={styles.logo} src={icon} alt={""}/>
            <div className={styles.header_text}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
            <div className={styles.watermark}>
                <h2>{href}</h2>
                <p className={styles.date}>Updated {new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric"})}</p>
            </div>
        </div>
    )
}