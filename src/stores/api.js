import {apiKey} from "../main";
import {defineStore} from "pinia";
import {ref} from "vue";

export const useApiStore = defineStore('api-store', () => {
    const games = ref([])

    async function getApiJson(query, params = '') {
        if (!query) throw('Category must provided');
        let res = await fetch(`https://rawg.io/api/${query}?token&key=${apiKey}${params}`)
            .catch(err => {
                throw(err)
            })

        console.log(`URL: ${res.url}`)
        return await res.json()
    }

    function toArray(data) {
        const proxy = new Proxy([data], {
            get(target, prop) {
                return target[prop];
            }
        });
        return [proxy]
    }

    return {getApiJson, games, toArray}

})