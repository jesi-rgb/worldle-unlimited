import { writable } from 'svelte/store';

export const names = writable([]);
export const correctAnswer = writable(false);
export const points = writable(0);
export const country = writable({});
