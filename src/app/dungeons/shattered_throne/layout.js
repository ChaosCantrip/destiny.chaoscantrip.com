import {BungieIcons} from "@components/BungieIcons";
import ActivityLayout from "@components/ActivityLayout";
import BackgroundImage from "@components/BackgroundImage";
import layout from "@src/styles/modules/layout.module.css";
import Background from "@backgrounds/st.jpg";

export const metadata = {
    "title": "Shattered Throne",
}

export default function ThroneLayout({children}) {
    return (
        <div className={layout.page_wrapper}>
            <BackgroundImage src={Background}/>
            <ActivityLayout title={"Shattered Throne"} icon_url={BungieIcons.dungeons.st}>
                {children}
            </ActivityLayout>
        </div>
    )
}