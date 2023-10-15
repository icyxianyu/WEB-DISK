import { AxiosResponse } from 'axios';
import axios from './axios';

interface props {
    params?: Record<string, string>,
    body?: Record<string, any>
}

export type fetchType<T> =
    (props?: props) =>
        Promise<AxiosResponse<T>>

interface test {
    id: number,
    login: string,
    avatar_url: string,
    html_url: string,
    type: string,
    site_admin: boolean
}

interface test2 {
    id: number,
    login: string,
}


export const testAxios: fetchType<test> = (props) => {
    const { params } = props || {};
    return axios.get('/users', { params })
}

export const testAxiosPost: fetchType<test2> = (props) => {
    const { body } = props || {};
    return axios.post('/users', body)
}









