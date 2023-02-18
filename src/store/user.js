import { defineStore } from 'pinia';

const useUserStore = defineStore('user', {
    state: () => ({ 
        //
    }),
    getters: {
        userIsAuth: () => false,
    },
    actions: {
        //
    }
});

export default useUserStore;