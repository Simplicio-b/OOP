class Utils {
    // gerador de ids
    static uuid() {
        var time = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (val) => {
            var random = (time + Math.random()*16)%16 | 0;
            time = Math.floor(time/16);
            return (val=='x' ? random :(random&0x3|0x8)).toString(16);
        });
        return uuid;
    }
}

module.exports = Utils
