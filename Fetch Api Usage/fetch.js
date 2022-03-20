fetch('http://example.com/movies.json', { //basic element of fetch api

        'mode': 'no-cors', // avoid cors based errors
        headers: { 'content-type': 'application/json' }
    })
    .then(response => response.json()) //receive data
    .then(data => console.log(data)); // show data on console