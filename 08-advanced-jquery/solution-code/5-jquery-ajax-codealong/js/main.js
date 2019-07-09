/*$.get("https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD", (r) => {
    let s = JSON.stringify(r);
    console.log(s);
});*/

$.ajax({
    url: "https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD",
    data: {
        format: "json"
    },
    success: (response) => {
        console.log(response);
    }
})