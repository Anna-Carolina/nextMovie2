import axios from "axios";

export async function getData(tipo,option){

    let categoria = tipo == 'filmes' ? 'movie' : 'tv';

    try{
        const response = await axios.get(`https://api.themoviedb.org/3/${categoria}/${option}`,{
            params: {
                api_key: '7ae09d2bd46f879fedf4e8c6cfae9b2d',
                page: 1,
                language: 'pt-BR'
            }
        })

        return {data : response.data.results};

    }catch(error){
        return {error: error.message};
    }
}

export async function getId(tipo, id){
    //https://api.themoviedb.org/3/${categoria}/${id}

    let categoria = tipo == 'filmes' ? 'movie' : 'tv';

    try{
        const response = await axios.get(`https://api.themoviedb.org/3/${categoria}/${id}`,{
            params: {
                api_key: '7ae09d2bd46f879fedf4e8c6cfae9b2d',
                language: 'pt-BR'
            }
        })
        return {data : response.data};

    }catch(error){
        return {error: error.message};
    }

}