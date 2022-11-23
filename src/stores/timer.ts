import { writable } from 'svelte/store'

export const timer = writable(0)
export const timerMS = writable(0)
let startTime = 0
let running = true

export const resetTimer = () => {
    startTime = Date.now()
}

export const stopTimer = () => {
    running = false
}

const update = () => {
    timer.set(Math.floor((Date.now() - startTime) / 1000))
    timerMS.set(Date.now() - startTime)
    if (running) {
        requestAnimationFrame(update)
    }
}
requestAnimationFrame(update)

export const timerText = time =>
    `${Math.floor(time / 60)}:${`${time % 60}`.padStart(2, '0')}`
