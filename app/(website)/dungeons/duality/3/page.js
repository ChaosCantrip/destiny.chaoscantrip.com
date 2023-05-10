import EncounterMap from "@images/dungeons/duality/3.png";
import EncounterPage from "@components/EncounterPage";

export const metadata = {
    description: "Encounter 3 - Nightmare of Caiatl",
    openGraph: {
        images: "/duality/3/i"
    }
}

export default function Encounter3() {
    return (
        <EncounterPage
            image_ql="/duality/3"
            encounter_name="Encounter 3 - Nightmare of Caiatl"
            map={EncounterMap}
        />
    )
}