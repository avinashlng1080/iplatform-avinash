export const saveToLocalStorage = (key: string, value: any) => {
    try {
        localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
        console.error(error)
    }
}

export const getFromLocalStorage = (key: string) => {
    if (localStorage.getItem(key)) {
        try {
            let value: any = localStorage.getItem(key)
            const json = JSON.parse(value)
            console.log(json)
            return json    
        } catch (error) {
            console.error(error)
        }
    }
}