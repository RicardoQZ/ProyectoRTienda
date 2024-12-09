const useFetch=(url:string)=>{
    const get =async()=>{
        const response=await fetch(url)
        const json=response.json()
        return json
    }
    const post=async(data:object)=>{
        const response= await fetch(url, {method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        const json= await response.json()
        return json
    }
    return{
        post,get
    }
}

export default useFetch