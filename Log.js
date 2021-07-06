const log = {
    info: function(info){
        return `Information :  ${info}`
    },

    warning: function(warn){
        return `Warning :  ${warn}`
    },

    error: function(error){
        return `Error :  ${error}`
    }

}

module.exports = log;