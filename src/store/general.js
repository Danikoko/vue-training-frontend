import { defineStore } from 'pinia';

const useGeneralStore = defineStore('user', {
    state: () => ({ 
        API_URL: 'http://localhost:8000/api/'
    })
});

export default useGeneralStore;