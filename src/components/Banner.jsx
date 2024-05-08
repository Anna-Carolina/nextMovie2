export function Banner({titulo, subtitulo,tipo}){

    function setBackground(tipo){

        if(tipo === 'filmes')
            return 'bg-filmes'
        else if(tipo === 'series')
            return 'bg-series'
        else
            return 'bg-home'
    }

    return(
        <div className={`${setBackground(tipo)} h-[330px] bg-cover text-center flex justify-center items-center`}>
            <div>
                <h1 className="font-bold text-5xl">{titulo}</h1>
                <p className="max-w-96">{subtitulo}</p>  
            </div>
            
        </div>
    )
}