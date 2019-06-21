var getJSON = function(url, callback) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    
    xhr.onload = function() {
    
        var status = xhr.status;
        
        if (status == 200) {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    };
    
    xhr.send();
    console.log("finished");
};

getJSON('http://128.113.106.57:5000/get-sdd/',  function(err, data) {
    
    if (err != null) {
        console.error(err);
    } else {
        
        console.log(data[0]);
          }
        
       
});
