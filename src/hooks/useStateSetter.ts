export function stateSetter(payload: any, ...setState: Array<(payload: any) => void>) {
    return setState.map((fn, i: number) => fn(payload[i]))
}