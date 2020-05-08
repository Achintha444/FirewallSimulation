var configFile = require('./config.json');

var sourceIPCheck = (configFile, ip) => {
    subNetMask = parseInt(configFile['SourcesubNetMask']);
    if (ip.substring(0, subNetMask) == configFile['acceptedSourceIPNetworkPart'].substring(0,subNetMask)) {
        host = parseInt(ip.substring(24));
        host1 = parseInt(configFile['acceptedSourceIpHosts'][0].substring(subNetMask));
        host2 = parseInt(configFile['acceptedSourceIpHosts'][1].substring(subNetMask));
        for (i = host1; i <= host2; i++) {
            if (host == i) {
                return true
            }
        }
        return false

    }
    return false;
}

var destinationIPCheck = (configFile, ip) => {
    subNetMask = parseInt(configFile['destinationsubNetMask']);
    if (ip.substring(0, subNetMask) == configFile['acceptedDestinationIPNetworkPart'].substring(0,subNetMask)) {
        host = parseInt(ip.substring(24));
        host1 = parseInt(configFile['acceptedDestinationIpHosts'][0].substring(subNetMask));
        host2 = parseInt(configFile['acceptedDestinationIpHosts'][1].substring(subNetMask));
        for (i = host1; i <= host2; i++) {
            if (host == i) {
                return true
            }
        }
        return false

    }
    return false;
}

var sourcePortCheck = (config, port) => {
    if (parseInt(config['sourcePort'], 2) == parseInt(port, 2)) {
        return true;
    }
    return false;
}

var destinationPortCheck = (config, port) => {
    if (parseInt(config['destinationPort'], 2) == parseInt(port, 2)) {
        return true;
    }
    return false;
}


exports.check = (datStr) => {
    console.log(sourceIPCheck(configFile, datStr[0]));
    console.log(destinationIPCheck(configFile, datStr[1]));
    console.log(sourcePortCheck(configFile, datStr[2]));
    console.log(destinationPortCheck(configFile, datStr[3]));
    if ((sourceIPCheck(configFile, datStr[0])) && (destinationIPCheck(configFile, datStr[1])) && (sourcePortCheck(configFile, datStr[2])) && (destinationPortCheck(configFile, datStr[3]))) {
        return true;
    }
    return false;
}