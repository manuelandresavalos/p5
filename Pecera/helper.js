function ratioFromWidth(width, ratio){
    var ratioArr = ratio.split(":");
    var height = ((ratioArr[1] * width) / ratioArr[0]);

    return {
        "width":width, 
        "height":height
    };
}