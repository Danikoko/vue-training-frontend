import { defineStore } from 'pinia';

const useInventoryStore = defineStore('inventory', {
    state: () => ({ 
        allInventories: localStorage.getItem('allInventories') || null
    }),
    getters: {
        inventories: state => {
            return (
                state.allInventories
                ? JSON.parse(state.allInventories)
                : []
            );
        }
    },
    actions: {
        storeInventories(allInventories) {
            const stringifiedData = JSON.stringify(allInventories);
            localStorage.getItem('allInventories', allInventories)
            this.allInventories = stringifiedData;
        },
    }
});

export default useInventoryStore;