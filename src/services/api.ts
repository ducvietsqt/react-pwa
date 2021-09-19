export function fakeApi<TReponse>(response: TReponse): Promise<TReponse> {
    return new Promise((res) => setTimeout(() => res(response), 450))
}
