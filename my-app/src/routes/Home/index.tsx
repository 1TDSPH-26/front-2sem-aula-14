import { useEffect, useState } from "react"

export default function Home(){
    document.title = "Home"
    let chamada: number = 0
    const[clicado,setClicado] = useState<number>(0);

    useEffect(() => { 
        console.log("Um milhão de linhas carregadas", clicado)
    },[clicado])


    type TipoUsuarioGit = {
    "login": string;
    "id": number;
    "node_id": string;
    "avatar_url": string;
    "gravatar_id": string;
    "url": string;
    "html_url": string,
    "followers_url": string;
    "following_url": string;
    "gists_url": string;
    "starred_url": string;
    "subscriptions_url": string;
    "organizations_url": string;
    "repos_url": string;
    "events_url": string;
    "received_events_url": string;
    "type": string;
    "user_view_type":string;
    "site_admin": boolean;
    }

    const[usuario, setUsuario] = useState<TipoUsuarioGit[]>([]);

        useEffect(()=>{

        
        async function loadingData() {
            try{
                const response = await fetch("https://api.github.com/users");

            if(!response.ok){
                throw new Error ("A listagem dos usuários falhou!");
            }

            const data = await response.json();
        } catch(error){
            console.log(error)
        }
            
        } 
    
    loadingData();
    },[])

    return(
        <main>
            <h2>Página Inicial</h2>

             <div>
                <p>valor STATE: {clicado}</p>
                <button onClick={()=>setClicado(clicado + 1)}>Alterar valor = {clicado}</button>
             </div>

             <div>
                <ul>
                    {usuario.map((objeto,indice)=> 
                    <li key={indice}>{objeto.id}{objeto.login}</li>
                    
                    )}
                    
                </ul>
             </div>
        </main>
    )
}