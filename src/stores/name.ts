import { writable } from 'svelte/store'

export const answerArray = writable([] as string[])
const defaultOptions = ['acid', 'ion', 'bi', 'di', 'per']
const prefixes = ['bi', 'di', 'hydro', 'per']
export const options = writable(defaultOptions)
export const activeElement = writable(null as string)

export const addText = (text: string) => {
    answerArray.update(array => {
        if (array.length == 0 || prefixes.includes(array[array.length - 1])) {
            if (text.startsWith('o') && array[array.length - 1] === 'hydro')
                return [...array, text.slice(1)]
            return [...array, text]
        }
        return [...array, ' ', text]
    })
}

export const deleteText = () => {
    answerArray.update(array => {
        array.pop()
        if (array[array.length - 1] === ' ') array.pop()
        return array
    })
}

export const clearText = () => {
    answerArray.set([])
}

export const setOptions = (_options: string[]) => {
    options.set(_options)
}

export const resetOptions = () => {
    options.set(defaultOptions)
    removeActiveElement()
}

export const setActiveElement = (element: string) => {
    activeElement.set(element)
}

export const removeActiveElement = () => {
    activeElement.set(null)
}
