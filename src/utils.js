export function copyToClipboard(id) {
    var copyText = document.getElementById(id) || null;
    if (copyText !== null) {
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */
        document.execCommand("copy");
        alert("Copied the string: " + copyText.value);
    } else {
        console.log("Copy text is null");
    }
}

export function encodeTweet(text, url, hashtags, username) {
    let data = {
        baseUrl : 'https://twitter.com/intent/tweet?',
        params : { 
            'text':text,
            'url':url,
            'hashtags':hashtags,
            'via':username,
            }
        }
        console.log(data);
    let query = data.baseUrl 
    for (let d in data.params) {
        if (data.params[d] !== '')
            query += encodeURIComponent(d) + '=' + encodeURIComponent(data.params[d]) + '&';
    }
    return query.slice(0, -1)
}