import { defineStore } from 'pinia';

const useGeneralStore = defineStore('general', {
    state: () => ({ 
        API_URL: 'https://vue-training-backend.danikoko.com/api/'//'http://localhost:8000/api/'
    })
});

export default useGeneralStore;