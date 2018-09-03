import _products from './produce'
const TIMEOUT = 500
export default {
    getProducts() {
        return new Promise(resolve => {
            setTimeout(() => resolve(_products), TIMEOUT)
        })
    },
    getGithub() {
        return fetch('https://api.github.com/')
    }
}