//action dan object return bolishi kerak

export function incrementNumber() {
    return {//bu object reducer ga boradi
        type: "incrementNumber"
    }
}

export function decrementNumber() {
    return {
        type: "decrementNumber"
    }
}