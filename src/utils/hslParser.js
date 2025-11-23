export const parseHSL = (hslStr) => {
    const matches = hslStr.match(/[\d.]+/g)

    if(matches && matches.length>=3){
        const hue = parseFloat(matches[0]);
        const saturation = parseFloat(matches[1]);
        const light = parseFloat(matches[2]);

        return {hue,saturation,light}
    }
    return null
}
