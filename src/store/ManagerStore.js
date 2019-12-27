import {managerService} from '../services/ManagerService'
//import {shopsService} from '../services/ShopService'

export const ManagerModule = {
    state: {
        managers: [],
        manager: {},
        managerErrors: {email: '', image_url: ''}
    },

    mutations: {
        setManagers(state, managers) {
            state.managers = managers
        },

        setManager(state, manager) {
            state.manager= manager
        },

        // setManagerErrors(state, errors) {
        //     state.managerErrors = errors
        // }
    },

    actions: {
        fetchManagers(context, first_name) {
            return managerService.getAll(first_name)
            .then(
                response => {context.commit('setManagers', response.data)
            })
        },

        fetchManager(context, id) {
            return managerService.get(id)
            .then(
                response => {context.commit('setManager', response.data)}
            )
        },

        // async addManager(context, {manager, shop_id}) {
        //     try {
        //         const response = await managerService.add(manager)
        //         return context.dispatch('updateManagerId', { manager: { manager_id: response.data.id }, id: shop_id })
                
        //     }
        //     catch (exception) {
        //         context.commit('setManagerErrors', exception.response.data.errors)
        //     }
        // },

        // updateManagerId(context,{manager, id}) {
        //     if(id) {
        //         return shopsService.setManager(manager, id)
        //     }
        //     return
        // }
    },

    getters: {
        managers(state) {
            return state.managers
        },

        manager(state) {
            return state.manager
        },

        // managerErrors(state) {
        //     return state.managerErrors
        // }
    }
}