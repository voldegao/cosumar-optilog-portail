import { get,writable } from 'svelte/store';
import { getData, postData } from './methods.js';

export const centralPerf = writable({})
export const centralPerfb = writable({})
export const centralMaamouraa = writable({})
export const centralMaamourab = writable({})
export const quais = writable({})
export const chart = writable({})

export const quaisLoading = writable(false)



export function getQuais(){
	let [data, loading, error, g]  =  getData('http://localhost:8000/api/quai/infos',1)
	
	loading.subscribe(value => {
		if(value){
			console.log('Loading',value)
			quaisLoading.set(true)
		}else{
			console.log('loaded',value)
			quaisLoading.set(false)
		}
		});

	data.subscribe(value => {
		if(value){
            console.log(value)
			quais.set(value)
		}
	});
}
export function getCentralPerf(){
	let [data, loading, error, g]  =  getData('http://localhost:8000/api/central/performances',1)
	
	loading.subscribe(value => {
		if(value){
			console.log('Loading',value)
			quaisLoading.set(true)
		}else{
			console.log('loaded',value)
			quaisLoading.set(false)
		}
		});

	data.subscribe(value => {
		if(value){
            console.log(value)
			centralPerf.set(value)
		}
	});
}