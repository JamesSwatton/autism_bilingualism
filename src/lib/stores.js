import { writable } from "svelte/store";

export const thisPage = writable('resources');
export const lang = writable('english');
export const disableScroll = writable(false);