import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default ({method, url, data}) => {
    return axios({
        method,
        url,
        data,
    })
    .then(result => {
        return result.data
    })
    .catch(error => {
        return error
    })
}