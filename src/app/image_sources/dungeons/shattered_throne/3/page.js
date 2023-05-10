import styles from "@image_components/LootTable.module.css";
import ImageHeader from "@image_components/ImageHeader";
import Image from "next/image";
import Background from "@backgrounds/st.jpg";
import {BungieIcons} from "@components/BungieIcons";
import ImageUnderConstruction from "@image_components/ImageUnderConstruction";

/* TODO: This is a placeholder page. */

export const metadata = {
    other: {
        width: 1920,
        height: 1080,
    }
}

export default function STEncounter3() {
    return (
        <body className={styles.main}>
        <Image src={Background} alt={""} className={styles.background}/>
        <div className={styles.wrapper}>
            <ImageHeader title={"Shattered Throne"} subtitle={"Dul Incaru, the Eternal Return"} icon={BungieIcons.dungeons.st} href={"chaosd2.com/st/3"}/>
            <div className={styles.content}>
                <ImageUnderConstruction/>
            </div>
        </div>
        </body>
    );
}