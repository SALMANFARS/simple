# Scope. Hoisting. Recursion. Clouser

## Scope  Область Видимости. Минтакаи Муаян.
### Scope чист ?
Scope муаян мекунад ки кадом функсияхо  ва кадом тагирёбандахо дар кадом минтака кор кунанд.
## 1.Global scope.
#### Global scope. Глобальная область видимости. Ин чист ?
Глобальная область видимости / Яьне файл.js 
var x = 2;       // Global scope
let x = 2;       // Global scope
const x = 2;       // Global scope
## 2 Function scope.
#### Function scope. Функцианальная область видимост. Ин чист ? 
Function scope локальный область видимости дора яьне ки хамавакт чи чизе дар даруни функция бошад онро мехонад бад аз он берун аз функция меброя.
### 3. Block scope.
#### Block scope. Чист ?
Scope condition and loop блок scope хастанд.
### 4. Module scope.
## 3 ТИПИ СКОП
![N|МИСОЛ](https://miro.medium.com/max/1400/1*KxHwVbB0zhnSVrhrWtT-gg.jpeg)
## МИСОЛИ MODULE SCOPE
![N|МИСОЛ](https://i.stack.imgur.com/PaSqe.png)


!!!VAR функцианальный скоп а let and const блочный скоп локальный скоп!!!
## Hoisting БОЛОРАВИ  ПОДНЯТИЕ
#### Hoisting ЧИСТ ? 
Дар холате ки натичаи код ро боло бардори ва код кор кунад. Тагиёбандахои let ва const дар болобардори кор намекунанд ва хатоги мебароран, лекин var маьно (значениеяи ) undefined.Дар функция declaration хам болорави кор мекунад факад да IIFE ва Expretion хам кор намекунад ва хатогии ReferenceErrore яьне пеш аз худаш ферёед карда намешавад.
Ва  вакте ки let ва const истифода мебарем дар минтакаи TDZ яьне митакаи мурда.
![N|МИСОЛ](https://i.ytimg.com/vi/ucsf_ZqcY-g/maxresdefault.jpg)


Dillinger is a cloud-enabled, mobile-ready, offline-storage compatible,
AngularJS-powered HTML5 Markdown editor.

- Type some Markdown on the left
- See HTML in the right
- ✨Magic ✨

## 3. Recursion
#### Recursion ЧИСТ ? 

Рекурсия Функция хаст ки худаш худашро визов мекна.
![N|МИСОЛ](https://cdn.programiz.com/sites/tutorial2program/files/javascript-recursion.png)

## 4. Clouser Замыкание 
#### Clouser Замыкание ЧИСТ ?
Clouser Функция хасти дар даруни худаш як функция нав бебарад ва аз даруни функция даруни доступ ба тагиребандахои функцияи беруни дорад 

3