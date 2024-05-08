import { Banner } from "@/components/Banner";
import { List } from "@/components/List";

export const metadata = {
    title: "Lista de Filmes",
    description: "Página de Filmes",
};

export default function PageFilmes(){
    return(
        <>
            <Banner titulo="Filmes" tipo="filmes"/>
            <List tipo="filmes"/>
        </>
    )
}