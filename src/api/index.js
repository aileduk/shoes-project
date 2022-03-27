const BASE_URL = 'http://gloria.rdport.net:28041/'


async function getRequest(url) {
    const response = await fetch(`${BASE_URL}${url}`, {
        headers: { Authorization: 'Basic QWRtaW5pc3RyYXRvcjp3d3cxMjM=' }
    })
    return await response.json()
}

export async function getShoesRequest() {
    const result = await getRequest('ViaGloria/hs/dropship/items')
    return result.items
}