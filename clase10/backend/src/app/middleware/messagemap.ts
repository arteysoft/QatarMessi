

export interface Mensaje {
    origen:string,
    destino:string
    mensaje:string
    ts: Number
}

export interface Map {
    [key:string]: Mensaje
}

export let messagemap:Map = {}

