import axios from "axios"
import { useEffect, useState } from "react"

const useGetData = () => {
    const [getData, setGetData] = useState()
    useEffect(() => {
        const URL = `https://script.google.com/macros/s/AKfycbyKkydjYsaFbqykKCc5pmZeNjfx9F-4QU_kkPbMUlbh7nsaVcSUoqeMPlD_0wyaJYGtCg/exec?action=data`
        axios.get(URL)
            .then(({ data }) => setGetData(data))
            .catch(err => console.log(err))

    }, [])
    return getData
}

export default useGetData