import { Banner } from "@/components/Banner";
import { List } from "@/components/List";

export const metadata = {
    title: "Lista de Séries",
    description: "Página de Séries",
};

export default function PageSeries(){
    return(
        <>
            <Banner titulo="Séries" tipo="series"/>
            <List tipo="series"/>
        </>
       
    )
}