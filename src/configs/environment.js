var _Environments = {
    production:  {BASE_URL: '', API_KEY: ''},
    staging:     {BASE_URL: '', API_KEY: ''},
    development: {BASE_URL: '', API_KEY: ''},
}

function getEnvironment() {
    
    var platform = getPlatform()

    // ...now return the correct environment
    return _Environments[platform]
}

var Environment = getEnvironment()
module.exports = Environment