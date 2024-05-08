import { getId } from "@/api/tmdb"
import Image from "next/image";
import Link from "next/link";

export default async function PageDetalhes({params}){

    const {data,error} = await getId(params.categoria, params.id);

    console.log(data);

    if(error){
        return(<h1>Não foi possível carregar os dados</h1>)
    }

   /*if(loading){
        return <BeatLoader color="#36d7b7" width={'100%'}/>
    }*/

    function dateItem(){

        let dateItem;

        if(params.categoria == 'filmes'){
            dateItem = data.release_date;
        }else{
            dateItem = data.first_air_date;
        }

        return dateItem.substr(0,4)
    }

    return(

       <div>

           <Image src={`https://image.tmdb.org/t/p/w1280${data.backdrop_path}`} 
           width={1440} 
           height={500}
           className=" w-full h-[500px] object-cover object-center opacity-50"
           alt="Poster"
           />

            <div className="flex flex-col items-center gap-5 md:flex-row md:-top-52 max-w-[850px] mx-auto relative -top-80 bg-black bg-opacity-50 rounded-lg backdrop-blur p-7">
                
                <Image src={`https://image.tmdb.org/t/p/w1280${data.poster_path}`} 
                width={300} 
                height={450}
                className="rounded-lg"
                alt="Poster"
                />
                <div>
                    <h1 className="md:text-5xl text-3xl font-bold">{params.categoria == 'filmes' ? data.title : data.name}</h1>
                    <ul className="my-4 list-disc list-inside">
                        <li>Ano: {dateItem()}</li>
                        <li>Avaliação: {data.vote_average.toFixed()}</li>
                    </ul>
                    <p>{data.overview}</p>

                    <Link href={params.categoria == 'filmes' ? '/filmes' : '/series'}
                    className="inline-block bg-brand-blue-ligth text-black py-2 px-10 rounded-lg mt-4 hover:bg-brand-blue-dark">Voltar</Link>
                </div>
           </div>
       </div>
       
    );
}