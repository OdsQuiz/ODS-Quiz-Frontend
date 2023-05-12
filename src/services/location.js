export const verifyCep = async (cep, setCepError) => {
    const cepUrl = `https://viacep.com.br/ws/${cep}/json/`

    return fetch(cepUrl)
        .then((request) => request.json())
        .then((data) => {
            if(!data.erro){
                setCepError(false)
                return true
            }
            else{
                setCepError(true)
                return false
            }
        })
        .catch(() => {
            setCepError(true)
        })
}

 export const getCoordinates = async (address, setTryAgain, setError) => {
    const locationIQBaseUrl = `https://us1.locationiq.com/v1/search?key=pk.a99128e5faf493a362164a3f34b06554&q=${address}&format=json`

    return fetch(locationIQBaseUrl)
        .then((request) => request.json())
        .then((data) =>{
            setTryAgain(false)
            setError(false)
            return [data[0].lat, data[0].lon]
        })
        .catch(() => {
            setTryAgain(false)
            setError(true)
        })
}
