# Array
## Method чист ? 
Аrray Чамъи коллексияхои переменниёшон якхела хастанд.
Array дар холате истифода бурда мешавад ки зиеда аз чанд верейбли хархела дошта бошем он гох Массивро истифода мебарем.
мисол
let array =[1,2,3,4,5,"name",[]]
console.log(array);
чавоб
Array(7) [ 1, 2, 3, 4, 5, "name", [] ]

## Method Array 
#### Метхои Массив 

--------------
1.
Push() Дохил мекна дар охири массив.
мисол 
let array =[1,2,3,4,5,"name",[]]
let arrays =array.push(5,6)
console.log(array);
Методи Push массиви асосиро тагир медихад
Array(9) [ 1, 2, 3, 4, 5, "name", [], 5, 6 ]
............................................................
2.
Pop() Аз охир охирон масивро удалит мекна.
pop() массиви асосиро иваз мекунад.
МИСОЛ
let array =[1,2,3,4,5,"name",[]]
let arrays =array.pop()
console.log(array);
Чавоб
Array(6) [ 1, 2, 3, 4, 5, "name" ]
-------------------------------------------
3.
Unshift - Дар Массива аз аввал  дохил мекунад.
Методи unshift массиви асосиро иваз мекна.
мисол 
let array =[1,2,3,4,5,"name",[]]
let arrays =array.unshift("start")
console.log(array);
Чавоб

Array(8) [ "start", 1, 2, 3, 4, 5, "name", [] ]

4.
shift()- Аз аввали массив удалит мекна.
Методи shift массиви асосиро иваз мекунад.

Мисол
let array =[1,2,3,4,5,"name",[]]
let arrays =array.shift()
console.log(array);
Чавоб
Array(6) [ 2, 3, 4, 5, "name", [] ]

-----------------------------------------------------
#### {ХАМИН 4 МЕТОД ХАСТ КИ МАССИВИ АСЛИРО ИВАЗ МЕКУНАНД}
--------------------------------------------------------------
5.
tostring() методи хаст ки ракамро ба string  иваз мекунад, ва хамаи массивро як string мекунад.
Методи tostring массиви асосиро иваз намекунад.
Мисол

let array =[1,2,3,4,5,"name",[]]
let arrays =array.toString()
console.log(arrays);
Чавоб

1,2,3,4,5,name, як стринг шуд.
6.
join() Ин метод хам мисли tostring кор мекнад факад параметр мегирад.
Он чизе ки дар даруни параметр монем он чиз ро дар байни элементхо мемонад.
Мисол 
let array =[1,2,3,4,5,"name",[]]
let arrays =array.join("-")
console.log(arrays);
Чавоб
1-2-3-4-5-name-

7.
Методи join массивро иваз намекунад.
index.of 2 параметр мегирад -1. элемента дида индексша миева.
2- пазиция аз позиция бадша биева.
методи join() массиви асосиро иваз намекна.


Мисол
let array =["bmw","mercedes","cadillac","volvo","lamborgini","ferrari"]
let arrays =array.indexOf("cadillac")
console.log(arrays);
 Чавоб -2
 8.
 includes() методе хаст ки индекса дида чавоб меброра true еки false
 Мисол
 let array =["bmw","mercedes","cadillac","volvo","lamborgini","ferrari"]
let arrays =array.includes("lada")
console.log(arrays);
Чавоб -false

9.
slice() 2 параметр мегирад якумаш старти буридан дуюмаш то кадом бурад. ЯЪНЕ АЗ кадом ТО кадом кор мекунад ва бурида нишон медихад.
методи slice массиви ассосиро иваз намекунад.
Мисол
let array =["bmw","mercedes","cadillac","volvo","lamborgini","ferrari"]
let arrays =array.slice(1,5)
console.log(arrays);
Чавоб 
Array(4) [ "mercedes", "cadillac", "volvo", "lamborgini" ]
10.
concat() Ду переменнира мечаспонад.
Мисол
let array =["bmw","mercedes","cadillac","volvo","lamborgini","ferrari"]
let array2 =["fiat", "honda"]
let arrays =array.concat(array2)
console.log(arrays);

Array(8) [ "bmw", "mercedes", "cadillac", "volvo", "lamborgini", "ferrari", "fiat", "honda" ]
0: "bmw"
1: "mercedes"
2: "cadillac"
3: "volvo"
4: "lamborgini"
5: "ferrari"
6: "fiat"
7: "honda"
length: 8
 11.
 Splice() 3 параметр мегирад 
 1.start яъне индекс 2.аз куче ва чанта удалит кна.3.чира добавит кна.
 Мисол 
 let array =["bmw","mercedes","cadillac","volvo","lamborgini","ferrari"]

let arrays =array.splice(1,3,"Diga moshin nest")
console.log(array);
Чавоб
Array(4) [ "bmw", "Diga moshin nest", "lamborgini", "ferrari" ]
0: "bmw"
1: "Diga moshin nest"
2: "lamborgini"
3: "ferrari"
length: 4

 Методи splice массиви асосиро иваз мекунад.
 ### МЕТОДХОИ CALLBACK
 #### Callback чист ? 
Callback Як функцияи хаст ки хамчун параметр дар як функция меояд.
Ва Callback вобаста ба параметрш иваз мешавад
 Методхои ки вобаста ба дарозии массив худаш тов мехра меброраш
 
 1. forEach()
 2. map()
 3. find()
 4. filter()
 5. sort()
 6. reduce()'
 

 forEach((elem,ind,arr) То дарозии массива меравад тов мехра ва якта якта нишон медихад.
Методи forEach return надорад

 МИСОЛ

let array =["bmw","mercedes","cadillac","volvo","lamborgini","ferrari"]
array.forEach((elem,ind,arr)=>{
    console.log(elem,ind,arr)
})
ЧАВОБ

bmw 0 
Array(6) [ "bmw", "mercedes", "cadillac", "volvo", "lamborgini", "ferrari" ]
mercedes 1 
Array(6) [ "bmw", "mercedes", "cadillac", "volvo", "lamborgini", "ferrari" ]
cadillac 2 
Array(6) [ "bmw", "mercedes", "cadillac", "volvo", "lamborgini", "ferrari" ]
volvo 3 
Array(6) [ "bmw", "mercedes", "cadillac", "volvo", "lamborgini", "ferrari" ]
lamborgini 4 
Array(6) [ "bmw", "mercedes", "cadillac", "volvo", "lamborgini", "ferrari" ]
ferrari 5 
Array(6) [ "bmw", "mercedes", "cadillac", "volvo", "lamborgini", "ferrari" ]

Map як параметр мегирад callback функция бошад 3 параметр мегирад ва массиви нав возвращат мекна массиви асосира намерасад.
