const File = require("sf-core/io/file");
const FileStream = require("sf-core/io/filestream");

function lgn(){
    
    this.login = function login(username,pwd,callback) {
        
        var filePath = 'assets://randomUsers.json';
        
        var jsonFile = new File({
            path: filePath
        });
        var jsonFileStream = jsonFile.openStream(FileStream.StreamType.READ, FileStream.ContentMode.TEXT);
        var jsonData = JSON.parse(jsonFileStream.readToEnd());
        
        for(var i = 0; jsonData.length > i; i++){
            var result = jsonData[i];
            console.log("pwd is " + pwd);
            if(result.password === pwd){
                console.log(result.password);
                return callback && callback(null, result);
            }
            if(i === jsonData.length)
            alert("Invalid username or password");
                return callback(result);
        }
        
    };
}

module && (module.exports = lgn);