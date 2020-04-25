import axios, { AxiosRequestConfig } from 'axios'
import { Ref, ref } from '@vue/composition-api'

function useRemoteResource<T>(url: string, options?: AxiosRequestConfig) : [Ref<null|T>, Ref<boolean>];

function useRemoteResource<T, S>(url: string, options: AxiosRequestConfig, decoder: (responseData: T) => S): [Ref<null|S>, Ref<boolean>];

function useRemoteResource<T, S>(
	url: string,
	options?: AxiosRequestConfig,
	decoder?: (responseData: T) => S
) {
	if (typeof decoder === "undefined") {
		const res = ref<T>(null)
		const loading  = ref(true)
	
		axios.get<T>(url, options)
			.then((response) => {
				res.value = response.data
				loading.value = false
			})
		
		return [res,  loading]
	
	}
	else {
		const res = ref<S>(null)
		const loading  = ref(true)
	
		axios.get<T>(url, options)
			.then((response) => {
				res.value = decoder(response.data)
				loading.value = false
			})
		
		return [res, loading]
	}
}

export default useRemoteResource