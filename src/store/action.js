
import axios from 'axios'

const GetPosts = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            debugger;
            console.log(response)
        })
        .catch((err) => {
            debugger;
            console.log(err)
        })
}

export {GetPosts} ;