import Link from "next/link";

import layout from "@/styles/modules/layout.module.css";

export const metadata = {
    "title": "Raids",
}

export default function Raids() {
    return (
        <div className={layout.page}>
            <h1 className={layout.page_title}>Raids</h1>
            <p>Page Under Construction</p>
            <ul>
                <li><Link href={"/raids/root_of_nightmares"}>Root of Nightmares</Link></li>
                <li><Link href={"/raids/kings_fall"}>King's Fall</Link></li>
                <li><Link href={"/raids/vow_of_the_disciple"}>Vow of the Disciple</Link></li>
                <li><Link href={"/raids/vault_of_glass"}>Vault of Glass</Link></li>
                <li><Link href={"/raids/deep_stone_crypt"}>Deep Stone Crypt</Link></li>
                <li><Link href={"/raids/garden_of_salvation"}>Garden of Salvation</Link></li>
                <li><Link href={"/raids/last_wish"}>Last Wish</Link></li>
            </ul>
        </div>
    )
}