const isVerfied = "";

console.log(`${isVerfied === true ? "verified" : "not verified"}`); // not verified

//
//
//
// time
function getTimeString(time) {
    // get hour and minute
    const hour = Math.floor(time / 3600);
    const minute = Math.floor((time % 3600) / 60);

    // return time string
    return `${hour}hrs ${minute}min ago`;
}

console.log(getTimeString(4500));
