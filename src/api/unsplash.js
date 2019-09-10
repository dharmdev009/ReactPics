import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization :' Client-ID ca34a321b07a92324fb731a75bebf1850adb248ccc821d295ded7442f32b6005'
    }
})