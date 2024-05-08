"use client"

import { getData } from "@/api/tmdb";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Select from 'react-select'
import { BarLoader, BeatLoader } from "react-spinners";

export function List({tipo}){

    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [option, setSub] = useState('popular');

    const options = [
        { value: 'poupular', label: 'Popular' },
        { value: 'now_playing', label: 'Em Cartaz' },
        { value: 'top_rated', label: 'Melhor Pontuação' },
        { value: 'upcoming', label: 'Em Breve' }
     ]

    //por padrao todos os componentes do next rodam no servidor
    //so que, não dá possibilidade compponentes de interação de tela por parte do servidor
    //precisa trocar para use client
    useEffect(()=>{

        async function loadData(){

            try {

                const {data, error} = await getData(tipo,option);

                if(error){
                    setError(error);
                }else{
                    setItems(data); //armazenando o retorno dos dados da API
                    setLoading(false);
                }
                
            }catch(error){
                console.log(error);
            }
        }

        loadData();
    }, [option])

    if(error){
        return <h1>Erro ao acessar a API</h1>
    }

    if(loading){
        return <BarLoader color="#36d7b7" width={'100%'}/>
    }

    return(
       // <h1>Listagem de {tipo} </h1>
       <>
            <div>
                <Select placeholder="Opções" options={options} onChange={() => setSub([options.value])} className="flex max-w-[1140px] mx-auto my-14 gap-7 flex-wrap"/>
            </div>
            <div className="max-w-[1140px] mx-auto my-14 flex gap-7 flex-wrap justify-center">
                    {items.map(item => (
                        <div className="relative hover:-translate-y-1.5 transition" key={item.id} >
                            <Link href={`/detalhes/${tipo}/${item.id}`} className="hover:brightness-150">
                                <Image className="w-[360px] h-[200px] object-cover rounded-lg opacity-50"
                                    src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} 
                                    alt={`Imagem ${tipo}`} 
                                    width={500} 
                                    height={500} 
                                    quality={75}>
                                </Image>
                                <div className="absolute bottom-3 left-3 font-bold">
                                    <h2 className="text-2xl ">{tipo == 'filmes' ? item.title : item.name}</h2>
                                    <h3 >Ano: {tipo == 'filmes' ? item.release_date.substr(0,4) : item.first_air_date}</h3>
                                    <span className="flex gap-x-3 text-brand-yellow">
                                        <Image alt="estrela" src={"/assets/star.svg"} width={16} height={16}></Image>
                                        {item.vote_average.toFixed(1)}
                                    </span>
                                </div>
                            </Link>
                        </div>

                    ))}
            </div>
       
       </>
        
    );
}