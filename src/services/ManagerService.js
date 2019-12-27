import { HttpService } from './HttpService'

class ManagerService extends HttpService  {
        
    getAll(term='') {
        return this.axios.get('/managers', {params:{term}})
    }

    get(id) {
        return this.axios.get(`/managers/${id}`)
    }

    add(manager) {
        return this.axios.post('/managers', manager)
    }
}

export const managerService = new ManagerService()