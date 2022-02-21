import { writable } from 'svelte/store';

export const userRoleID = writable(0);
export const primeSelection = writable(1);

export function getData(url,authToken) {
	const loading = writable(false)
	const error = writable(false)
	const data = writable({})
	
	async function get() {
		loading.set(true)
		error.set(false)
		try {
			const response = await fetch(url,{
				method: 'GET', 
                // mode: 'cors',
                // cache: 'no-cache',
                // credentials: 'same-origin',
                headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer '+authToken, 
					},
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                
			})
			data.set(await response.json())
		} catch(e) {
			error.set(e)
		}
		loading.set(false)
	}
	
	get()
	
	return [ data, loading, error, get]
}

export function postData(url,requets,authToken) {
	const loading = writable(false)
	const error = writable(false)
	const data = writable({})
	
	async function post() {
		loading.set(true)
		error.set(false)
		try {
			const response = await fetch(url, {
                method: 'POST', 
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                'Content-Type': 'application/json',
				'Authorization': 'Bearer '+authToken, 
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(requets) // body data type must match "Content-Type" header
            })
			data.set(await response.json())
		} catch(e) {
			error.set(e)
		}
		loading.set(false)
	}
	
	post()
	
	return [ data, loading, error, post]
}