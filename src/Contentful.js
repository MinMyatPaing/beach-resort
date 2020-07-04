import { createClient } from 'contentful';

let client = createClient({
    space: process.env.REACT_APP_API_SPACE,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
})


export default client;