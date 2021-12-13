const createDebounceFunction = require("../createDebounceFunction");

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');
const log100 = () => console.log(100);
describe('createDebounceFunction', ()=>{
    it("Вызывает cb через 1000мс", () => {
        const debounceLog100 = createDebounceFunction(log100, 1000);
        debounceLog100();
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
        jest.clearAllTimers();
    })
    it("Вызывает cb через 1200 мс после таймаута", () => {
        const callback = jest.fn();
        const debounceLog100 = createDebounceFunction(callback, 1000);
        setTimeout(debounceLog100, 200);
        expect(callback).not.toBeCalled(); // проверка срабатывания раньше 1200мс
        jest.advanceTimersByTime(1200);
        expect(callback).toBeCalled();// проверка срабатывания по таймеру 1200мс
        expect(callback).toHaveBeenCalledTimes(1);
    })
    it("Вызывает cb через 1400 мс после 2х таймаутов", () => {
        const callback = jest.fn();
        const debounceLog100 = createDebounceFunction(callback, 1000);
        setTimeout(debounceLog100, 200);
        setTimeout(debounceLog100, 400);
        expect(callback).not.toBeCalled(); // проверка срабатывания раньше 1400мс
        jest.advanceTimersByTime(1400);
        expect(callback).toBeCalled();// проверка срабатывания по таймеру 1400мс
        expect(callback).toHaveBeenCalledTimes(1);
    })
})
