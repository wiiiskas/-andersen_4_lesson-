## Задание №4:
Запуск: `npm start`
Тесты: `npm test`
1) Написать функцию createDebounceFunction. 
Она должна принимать два аргумента: callback-функцию 
и задержку в миллисекундах. 
Данная функция должна возвращать новую функцию, 
вызывающую callback-функцию с задержкой в переданное 
количество миллисекунд.
<span style="color: red"> ПРИ ЭТОМ! Если за то время, пока внутрення
callback-функция ждёт своего вызова, наша созданная 
функция вызывается ещё раз, то "счётчик" времени должен 
сбрасываться и начинаться заново 
(т.е. вызова внутренней функции произойти не должно).</span>