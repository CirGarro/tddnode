exports.fivePercent = function(dias) {
    if (dias <= 30) {
        return true;
    }
    return false;
}

exports.tenPercent = function(dias) {
    if (dias > 30 && dias <= 60) {
        return true
    }
    return false;
}

exports.fifteenPercent = function(dias) {
    if (dias > 30 && dias <= 60) {
        return true
    }
    return false;
}