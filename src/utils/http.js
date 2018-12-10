import axios from 'axios'

export default ({method, url}) => {
    return axios({
        method,
        url,
  
    })
    .then(result => {
        return result.data
    })
    .catch(error => {
        return error
    })
}