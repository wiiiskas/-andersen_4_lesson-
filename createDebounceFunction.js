function createDebounceFunction(cb, timeout) {
    let timer;
    return () => {
        if(timer) clearTimeout(timer);
        timer = setTimeout(() =>cb.apply(), timeout);
    };
}

module.exports = createDebounceFunction;