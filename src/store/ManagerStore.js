import { managerService } from '../services/ManagerService'

export const ManagerModule = {
    state: {
        managers: [],
        manager: {},
        managerErrors: { email: '', image_url: '' }
    },

    mutations: {
        setManagers(state, managers) {
            state.managers = managers
        },

        setManager(state, manager) {
            state.manager = manager
        },
    },

    actions: {
        fetchManagers(context, first_name) {
            return managerService.getAll(first_name)
                .then(
                    response => {
                        context.commit('setManagers', response.data)
                    })
        },

        fetchManager(context, id) {
            return managerService.get(id)
                .then(
                    response => { context.commit('setManager', response.data) }
                )
        },
    },

    getters: {
        managers(state) {
            return state.managers
        },

        manager(state) {
            return state.manager
        },
    }
}