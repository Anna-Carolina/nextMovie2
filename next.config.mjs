/** @type {import('next').NextConfig} */
const nextConfig = {

    //SE UMA IMAGEM VIER DE UM SERVIDOR DE FORA, ESTA CONFIGURAÇÃO DEVERÁ SER REALIZADA 
    images:{
        remotePatterns: [
            {hostname:'image.tmdb.org'} // DOMINIO DE ONDE TÁ VINOD A IMAGEM 'https://media.themoviedb.org' -- COLOCA SEM O HTTP
        ]
    }

};

export default nextConfig;
