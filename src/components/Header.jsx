import Link from "next/link"

export function Header(){

    return(
      <header className="bg-brand-dark flex flex-col items-center p-6 gap-y-3 md:flex-row md:justify-between">
        <img src="/assets/logo.svg" alt="Logotipo"></img>
        <nav className="flex gap-x-16">
            <Link href="/" className="hover:text-brand-blue-ligth">Início</Link>
            <Link href="/filmes" className="hover:text-brand-blue-ligth">Filmes</Link>
            <Link href="/series" className="hover:text-brand-blue-ligth">Series</Link>
        </nav>
      </header>
    )
}