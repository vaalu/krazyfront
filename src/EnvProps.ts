
const urlBaseService: string = `${process.env.REACT_APP_KRAZY_SERVICE_BASE_URL}`
const urlCreate = `${process.env.REACT_APP_KRAZY_SERVICE_BASE_URL}/create`
const urlFetchAll =  `${process.env.REACT_APP_KRAZY_SERVICE_BASE_URL}/fetch/all`
const urlUpdate = `${process.env.REACT_APP_KRAZY_SERVICE_BASE_URL}/update`
const urlDelete = `${process.env.REACT_APP_KRAZY_SERVICE_BASE_URL}/delete`
export const envProps = {
    urlBaseService,
    urlCreate,
    urlFetchAll,
    urlUpdate,
    urlDelete
}