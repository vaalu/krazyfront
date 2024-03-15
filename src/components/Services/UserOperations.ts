import { envProps } from '../../EnvProps'
export class UserOperations {
    deleteUser = (id:number) => {
        const deleteUrl = `${envProps.urlDelete}/${id}`
        return fetch(deleteUrl, { method: 'DELETE' })
    }
    fetchAllUsers = () => fetch(envProps.urlFetchAll)
    createUser = (user: any) => {
        const createUrl = `${envProps.urlCreate}`
        const requestOpts = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }
        return fetch(createUrl, requestOpts)
    }
    updateUser = (user: any) => {
        const updateUrl = `${envProps.urlUpdate}`
        const requestOpts = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }
        return fetch(updateUrl, requestOpts)
    }
}
const operations = new UserOperations()
export default operations