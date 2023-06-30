# OBJECT
## OBJECT чист ? 
OBJECT Чамъи ХОСИЯТХО- Набор свойств.
ХОСИЯТ иборат аст аз ном ва кимат (коючь и значение)
МИСОЛ
  let car ={
        marka:"BMW"
        model:"x7"
        color:"white"
      }
OBJECT иборат аст ном ва аз property(ключь ва значение)
## Dectiction in object 
#### Dectiction in object
мора имконият метият ки аз даруни массив ба мисли верейбл значениера бгирем 
дар object ду фарккият дорад якум кавсхо [] дар jbject инхо {}
Мисол
  let car ={
        marka:"BMW"
        model:"x7"
        color:"white"
      }


  
  
      // аз даруни объект ба ягон номи дигар бахшида гирифтан
      let {color:a}=car
      console.log(a) 
      боз хам чанд рохи дигар хам хаст 


      //rohi az daruni color ключа кати значения nishon dodan
      let {color}=car
      console.log(color) 
    
     // rohi az daruni rangho rangi yakuma noshon dodan
      let {color:{firstcolor}}=car
      console.log(firstcolor) 
      ------------------------------------------------
       //rohi az daruni object key alish karda nishon dodan 
      let {color:{firstcolor:secondcolor}}=car
      console.log(secondcolor) 
        ------------------------------------------------
            //удалит кардан
      delete car.color
      console.log(car);
--------------
Чхел мо аз даруни объект ключа значение кати бгирем ?
console.log(Object.keys(car)[0]); якум моро массив карда метияд бад вобаста ба индесаш бароварда мегиремша.
боз барои значения 

console.log(Object.values(car));
барои хам ключь хам значение гирифтан
console.log(Object.entries(car));

-------------------------------------------------
### Ключевое слово keyword this 
this хамавакт дар даруни худаш глобальный област видимостира ва ба он худашро копия мекунад.
МИСОЛ:
let notebook ={
  color:"grenn",
  FullName:function(){
    return this;
  }
}
console.log(notebook.FullName());
дуюм холат агар тахо бошад глобальный scopa мегирад.
 let a =this;
 сеюм рохаш дар fuction хам глобальный скоп мекова.
 ЯЪНЕ this хамавакт object мековад.
 ва 4 маш дар 'use string' строгий режим undefine медихад.

### new Date 
###№ new Date Чист?
new date объект тарихи сохта мешавад.

let mydata = new Date();
console.log(mydata);
Чавбш Локальный вакти хозиринара нишон метихад.
### методхои Date

getDay Рузи хафтара нишон метия.
getMonth Моха мегира ракам карда нишон метия.
getDate() руза меброра.
getFullYear() сола нишлн метия.
Date.nov() аз соли 1970 ба млсеконд нишон дода медихад.
getTime() .nov кати якхел кор мекна.
Set мегира алиш мекна.