export async function filterFetch(f) {
    return await f.then(response => {
        if (!response.ok) {
            throw new Error(response.statusText || 'unknown');
        }
        return response.json();
    }).then(json => {
        if( json.code != '0'){
            throw new Error(json.message || 'unknown');
        }
        return json.data;
    })
}