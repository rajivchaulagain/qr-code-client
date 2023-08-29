export const generateCode = async(url:string) => {
     const response = await fetch('http://localhost:8000/generate-qr' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            url
        })
    })
    return await response.json()
}