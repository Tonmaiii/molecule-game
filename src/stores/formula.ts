import { writable } from 'svelte/store'

export const answerArray = writable([] as string[])
export const oxidation = writable(0)

export const addAnswer = (text: string) => {
    answerArray.update(array => [...array, text])
}

export const deleteAnswer = () => {
    answerArray.update(array => array.slice(0, -1))
}

export const clearAnswer = () => {
    answerArray.set([])
}

export const setOxidation = (o: number) => oxidation.set(o)
