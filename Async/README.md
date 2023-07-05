# Sync
## Sync чист ? 
Sync Кодхои ки  блочный астан, яъне  таг ба таг  астан

МИСОЛ
  let car = "bmw";
  let country = "Tajikistan"
Ба кодхои Sync  мо аз back данира гирифта наметонем.Яъне агар ки коди sync камтар дар ожидани бгалта ошибка меброра кор намекна 
----------------------------------------------------------------------------------------
## ASync
#### Async чист?
ASync  кодхое ки ожидат карда метонан онхоро ожидающий код меган, кодхои Async кодхоие ки малумота аз сервер ждат мекнан ва дигар кодхора нишон метия.Яъне ба дига кодо доступ метия.
Мисол
 SetTimeout(()=>){
     console.log("HELLO WORLD")
 }2000) 
 Бади 2 секунд код кор мекнад.
 Методи SetTimeout 2 параметр мегирад.
 1 функиця 2 миллисек
 ------------------------------------------------------------------------------------
#### 3. Тарзи навистани  Async code аст.

                    
   1. Callback.
   2. Promises.
   3. Async/ await syntax
   
Мисол Callback

function foo(callback){
    setTimeout(function(){
        callback("GOOD BAYE");
    },4000)
}
foo(function(value) {
    console.log(value);
});

----------------------------------------------------------------------------------------------
### New Promiyes ОБещание 
New Promiyes 3 холат дорад.
   1.Pending (Loading) Ожидание
   2.FulFilled Успешное состояние
   3.Rejected. Критичное состояние 
//конструтори promuse()

let promise = new Promise(function(resolve, reject){

});
 мисол
 
 function  promiseData(url) {
    return new Promise((resolve,reject)=>{
  fetch(url)
  .then((response)=>response.json())
  .then((data)=> resolve(data))
  .catch((erorr)=>reject(erorr))
    })
}
promiseData('https://63d14a1e3f08e4a8ff94b1a5.mockapi.io/department')
.then((data)=>console.log(data))
.catch((erorr)=>console.log(erorr));

-------------------------------------------------
### Async Await 
Дар асл Async Await  охирон версияи Async аст бехад осон кардаги аст код нависиро.



Барои кор синтаксиси махсус мавҷуд аст, ки онро "async/await"меноманд. Вай тааҷубовар осон аст
фаҳмиш ва истифода.
Калимаи калидии await тарҷумони JavaScript-ро интизор мешавад
ваъда ба тарафи рости await иҷро намешавад. Баъд аз ин, он натиҷаи худро бармегардонад ва иҷрои рамз идома меебад

мисол
async function fetchData(url){
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

fetchData("http://json")
.then(data=>console.log(data));
---------------------------------------------------------------------------
### try catch 
#### try catch  чист?
 JavaScript бо истифода аз try  catch анҷом дода мешавад... catch. try... catch синтаксиси махсус аст, ки аз 2 блоки рамз иборат аст: try {// блоки рамз, ки дар он эҳтимолияти пайдоиши хато вуҷуд дорад} catch(error) {// ин блок танҳо дар сурати пайдо шудани хато дар блоки try} иҷро карда мешавад.
 ----------------------------------------------------------------------------------------------
 Json аз string ба object мегардонад
 Методи Felch API шинос мекна 
 API Интерфейс прикладного программирования бошад Алокаи байни back ва front аст.
 
 Fetch 4 намуди запрос дорад хабарбараки малумот байни одам ва сервер 
 4 намуди запрос дорад.
 Get - запрос гирифтан 
 Post- Добавит кардан.
 Put тагир додан.
 Delete удалит кардан 
 ------------------------------------------------

### AXIOS 
#### AXIOS Чист ?

Библиотека осон барои кор бурдан бо API ва бо HTTP запросхо ва бо браузерхо хам бо сервер.
AXIOS Як Библеотекаи jS хаст ки бисер машхуп истифода бурда мешавад бо проектхои react, vue.js,Angular ва дигар фрейм воркхо.
У имконияте метия ки корро осонка байни разработчик ва API ва гирифтан ва истифода бурдани малумотора.
