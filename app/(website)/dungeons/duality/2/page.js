import EncounterMap from "@images/dungeons/duality/2.png";
import EncounterPage from "@components/EncounterPage";

export const metadata = {
    description: "Encounter 2 - Vault",
    openGraph: {
        images: "/duality/2/i"
    }
}
export default function Encounter2() {
    return (
        <EncounterPage
            image_ql="/duality/2"
            encounter_name="Encounter 2 - Vault"
            map={EncounterMap}
        />
    )
}