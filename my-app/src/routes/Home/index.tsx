import { useEffect, useState } from "react"



export default function Home() {
    type Usuario = {
        "login": string,
        "id": number,
        "node_id": string,
        "avatar_url": string,
        "gravatar_id": string,
        "url": string,
        "html_url": string,
        "followers_url": string,
        "following_url": string,
        "gists_url": string,
        "starred_url": string,
        "subscriptions_url": string,
        "organizations_url": string,
        "repos_url": string,
        "events_url": string,
        "received_events_url": string,
        "type": "User",
        "user_view_type": string,
        "site_admin": boolean,
    }



    const [clicado, setClicado] = useState<number>(0)
    function adicionar() {
        if (clicado >= 10) {
            setClicado(10)
        } else {
            setClicado(clicado + 1)
        }


    }

    function diminuir() {
        if (clicado <= 0) {
            setClicado(0)
        } else {
            setClicado(clicado - 1)
        }

    }

    useEffect(() => { console.log(clicado) }, [])


    const [usuarios, setUsuarios] = useState<Usuario[]>([])

    useEffect(() => {

        async function loadingusuarios() {
            try {
                const response = await fetch("https://api.github.com/users");

                if (!response.ok) {
                    throw new Error("Erro ao buscar usuários")
                }

                const data: Usuario[] = await response.json();
                setUsuarios(data);
            } catch (error) {
                console.log(error)
            }

        }

        loadingusuarios()

    }, [])

    return (
        <div>
            <h1>Home </h1>
            <div>
                <p>Valor de State: {clicado}</p>

                <button onClick={() => adicionar()}>Alterar valor</button>
                <button onClick={() => diminuir()}>diminuir</button>
            </div>
            <div>
                <ul>
                    {usuarios.map((u) => (
                        <li>
                            <p>{u.login}</p>
                            <img src={u.avatar_url} alt={u.login} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )
}