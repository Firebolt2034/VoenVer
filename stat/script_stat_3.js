let key = ['0,05'];
let answ = [];
let but = document.getElementById('but');
let get = document.getElementById('get');
let pod_but = document.getElementById('pod');
//let mes = document.getElementById('message');
let wait = true;
let i = 0;
let k;
let x;
let check = false;
//console.log(2);
window.onload = function(){
    //console.log(1);
//for (let i = 0; i < arr.length; i++) {
  //wait = false;
  
//alert(i);
//while(wait == false){
//function show(){
 //   mes.style.visibility = 'visible';
 //   show();
//}
let get_ans = document.getElementById('get_ans');
pod_but.addEventListener('click',()=>{
  console.log(4);
  if(check == false){
    pod_but.disabled=true;
  const pod ={
    data(){
      return{
        show:true,
        y:'<span id="rule_of_sum">Подсказка</span> <span v-html="y"></span>',
        
        x:'<p><span id="rule_of_sum">Математическим ожиданием дискретной случайной величины</span> называется сумма произведений значений случайной величины на их соответствующие вероятности.</p><img src="formul_6.PNG" alt="">'
      }
    }
  }

  Vue.createApp(pod).mount('.answer');
  check=true;
}
else{
  const pod ={
    data(){
      return{
        y:'',
        x:''
      }
    }
  }
  Vue.createApp(pod).mount('.answer');
  check=false;
}





})
but.addEventListener('click', ()=>{
  x ="red";
  console.log(5);
  answ.push(get.value);
  get.value = '';
  //alert(key[0]);
  //alert(answ[0]);
  if(key.length==0 || wait ==false){
    but.disabled = true;
    console.log(1);
    message("");
    
  }else{
  if(key[0]==answ[0]){
    console.log(2);
   // wait = false;
   // mes.style.visibility = 'visible';
   // mes.style.display="inline";
   // mes.innerHTML = 'Правильно';
   //console.log(1011111111111111111111111111);
    x="green";
    k = "Верно";
    but.disabled = true;
    message(k);
    but.disabled = true;
    wait=false;

    //vm.$data.message = "Правильно";
   
   // setTimeout(4000);
  }else{
   wait = false;
   console.log(3);
    //mes.style.visibility = 'visible';
   // mes.style.display="inline";
    //mes.innerHTML = 'Неправильно';
    //console.log(11111111111111111111111111111111111);
    if(key.length>0){
      but.disabled = true;
      x="red";
    message("Неверно");
    but.disabled = true;
    }
    else{
      but.disabled = true;
      x="red";
      message("Неверно");
      but.disabled = true;
    }
    //vm.$data.message = "Неправильно";
   // setTimeout(4000);

  }
  key.shift;
  answ.shift;
 // wait = true;
 //show();
 
 function message(s){
   console.log(x);
   
   but.visibility="visible";
  
    const Demo = {
        data() {
          return {
            
            show: true,
            k:"mes",
            x:x
          }
        }
      }
    /*const message ={
      data(){
        return {
          message:'{{s}}'
        }
      }
    }
    */
    const app = Vue.createApp({
      data() {
        return { message: s ,
          k:"mes",
          x:x
        }
      }
    })
    /*const button={
      data(){
        return{
          mes:'disabled'
        }
      }
    }*/
    document.getElementById('share').style.display='none';
    const anim ={
      data(){
        return{
          isActive:true
        }
      }
    }
    document.getElementById('share').style.display='none';
   
    const otvet={
      data(){
        return{
          used:true,
          f:'<button class="but_ex1_1"  v-if="show" >Назад</button>',
          n:'<form href="index_comb_ex1.html"><button class="but_ex1" v-html="z" id="im"  v-if="show">Попробовать ещё раз</button></form>',
          s:'<button class="but_3"    v-if="show">Показать решение</button>',
          y:'pod_vis',
         


        }
      }
    }
    
    if(x=="green"){
      let buttt = document.getElementById("im");
      buttt.disabled=true;
    }
      
    
    //let c = document.getElementById("mes");
    //c.style.color = "red";
    //Vue.createApp(anim).mount('#mes')
    const vm = app.mount('#message')
    
    
    
    //vm.$data.message = s;
    //console.log(vm.$data.message)
     // Vue.createApp(message).mount('#message')
      Vue.createApp(Demo).mount('.demo')
     // Vue.createApp(button).mount('#but')
     Vue.createApp(otvet).mount('#otvet')
     if(s=='Верно'){
    document.getElementById('im').style.display='none';
    document.getElementById('im').style.visibility='hidden';
     }

     document.getElementById('share').style.display='none';
  let ans_but = document.getElementById('second');
    
  ans_but.addEventListener('click',()=>{
    document.getElementById('share').style.display='none';
   // get_ans.visibility="hidden";
   document.getElementById('get_ans').style.display = 'none';
    pod = {
      data(){
        return{
        show:false
        }
      }
    }
    
    const answer ={
      data(){
        return{
          show:true,
          z:'<p>Решение.</p>',
          k:'<p>Так как на колесе рулетки 38 гнезд, то вероятность выигрыша 1/38. Соответственно вероятность проигрыша 37/38. Если игрок проигрывает, то он теряет 100 условных единиц. Если выигрывает, то получает 3500 условных единиц (вложенных в ставку 100 у.е ему никто не вернет). Таким образом, составим закон распределения дискретной случайной величины Х – прибыль игрока.</p><p><table border="1"><tr><td>X</td><td>-100</td><td>+3500</td></tr><tr><td>P</td><td>37/38</td><td>1/38</td></tr></table></p><p>Найдем математическое ожидание дискретной случайной величины.</p><p><img src="formul_7.PNG"></p><p>Отрицательная прибыль означает, что на каждую ставку в 100 у.е игрок в среднем теряет 5,26 у.е. </p>'
        }
      }
    }

    Vue.createApp(answer).mount('.podskazka');
    ans_but.disabled=true;





})

    }
  }
})}
