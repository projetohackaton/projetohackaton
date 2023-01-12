import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://hackaton.onrender.com/swagger'
})

export const busca = async (url:any, setDados:any, header:any) => {
    const resposta = await api.get(url, header)
        setDados(resposta.data)
}
export const buscaId = async(url: any,setDado: any, header: any) => { 
    const resposta = await api.get(url,header)
    setDado(resposta.data)
}

export const post = async(url: any, dados: any, setDado: any, header: any) => { 
    const resposta = await api.post(url,dados,header)
    setDado(resposta.data)
}

export const put = async(url: any, dados: any, setDado: any, header: any) => { 
    const resposta = await api.put(url,dados,header)
    setDado(resposta.data)
}

export const deleteId = async(url: any,header: any) => { 
    await api.delete(url,header)
}