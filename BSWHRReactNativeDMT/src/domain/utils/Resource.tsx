export abstract class Resource{ constructor(){}}
export function Loading(): Resource { return {} }
export function Succes(data: any): Resource{ return { data } }
export function GeneralError(error: string): Resource { return { error } }