import { AsyncStorage } from "react-native"

function saveData(data) {
    return async (dispatch) => {
        const getdata = JSON.parse(await AsyncStorage.getItem('@setItem'))
        if (data) {
            // await AsyncStorage.clear()
            const a = JSON.parse(await AsyncStorage.getItem('@setItem'))
            a ? await AsyncStorage.setItem('@setItem', JSON.stringify([...a, data])) : await AsyncStorage.setItem('@setItem', JSON.stringify([data]))
            const b = JSON.parse(await AsyncStorage.getItem('@setItem'))
            dispatch({ type: "SAVEDATA", data: b })
        } else if (getdata == null) {
            dispatch({ type: "SAVEDATA", data: [] })

        } else {
            const b = JSON.parse(await AsyncStorage.getItem('@setItem'))
            dispatch({ type: "SAVEDATA", data: b })
        }
    } 
}

function deletALL() {
    return async (dispatch) => {
        await AsyncStorage.setItem('@setItem', JSON.stringify([]))
        const getdata = JSON.parse(await AsyncStorage.getItem('@setItem'))
        dispatch({ type: "SAVEDATA", data: getdata })
    }
}

function delet(index) {
    return async (dispatch) => {
        const getdata = JSON.parse(await AsyncStorage.getItem('@setItem'))
        const data = getdata
        data.splice(index, 1)
        await AsyncStorage.setItem('@setItem', JSON.stringify(data))
        dispatch({ type: "SAVEDATA", data: data })
    }
}

function update(isEnabled, textValue, key) {
    return async (dispatch) => {
        const getdata = JSON.parse(await AsyncStorage.getItem('@setItem'))
        const data = getdata
        data[key].text=textValue
        data[key].complete=isEnabled
        await AsyncStorage.setItem('@setItem', JSON.stringify(data))
        dispatch({ type: "SAVEDATA", data: data })
    }
}

export {
    saveData,
    deletALL,
    delet,
    update,
}