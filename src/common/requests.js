
export async function postRequest(url, query) {    

    return await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: query,
    }).then((response) => {
        return response.json();
    }).then((data) => {
        return data;
    })

}


export async function getRequest(url, headers) {

    const requestObject = {
        method: "GET"
    }

    if (headers) requestObject.headers = headers;

    return await fetch(url, requestObject)
    .then((response) => {
        return response.json();
    }).then((data) => {
        return data;
    })

}

export async function updateRequest(url, headers, query) {

    return await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: query,
    }).then((response) => {
        return response.json();
    }).then((data) => {
        return data;
    })

}

export async function deleteRequest(url, headers) {

    const requestObject = {
        method: "DELETE",
    }

    if (headers) requestObject.headers = headers;

    return await fetch(url, requestObject)
    .then((response) => {
        return response.json();
    }).then((data) => {
        return data;
    })

}