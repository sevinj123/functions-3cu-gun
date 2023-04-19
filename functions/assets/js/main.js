//eger promtpa her hansisa simvol reqem text verilse icindeki reqemi secib ekrana versin ki burada eded var
// hasNumber(prompt("eded"))
// function hasNumber(value){
// for (let i=0; i<value.length; i++){
//     if (value[i]>0){
//         alert("eded var");
//     }
// }
// }

//2. verilmis string deyerinde verilmis char in hansi indexde yerlesdiyini tapib qaytaran alq qurun eger hemin herf sozde yoxdursa ekrana -1 ver
// char(prompt("salam"))
// function char(value,char){
//     for (let i=0; i<value.length; i++){
//         if(text[i]==char){
//             return i;
//         }
//     }
//    return -1;
// }
// console.log(char("salam","l"));




//Cevrenin sahesi -S=p*rkvadrati (p=3)

// function areaOfCircle(radius){
//     return 3*radius*radius
// }
// console.log(areaOfCircle(prompt("Radiusu daxil edin")));




// // duzbucaqlinin sahesi s=a*b

//  function areaOfrectangular(a,b){
//     return a*b
//  }
//  console.log(areaOfrectangular(prompt("a-ni daxil edin"),prompt("b-ni daxil edin")))


// //Duzbucaqli paralipipedin tam sethinin sahesi s=2(a*b+a*c+b*c)

// function areOfParallelepiped(a,b,c){
//     return 2*(a*b+a*c+b*c)
// }
// console.log(areOfParallelepiped( prompt("a ni daxil edin"),prompt("b ni daxil edin"),prompt("c ni daxil edin")))



//ucbucaqlinin daxiline cekilmis cevrenin sahesi s=p*r p+(a+b+c)/2
// function areOfTriangular(r,a,b,c){
//  p=(number(a)+number(b)+number(c)/2);
//     return p*r
// }
// console.log(areOfTriangular( prompt("a ni daxil edin"),prompt("b ni daxil edin"),prompt("c ni daxil edin"),prompt("r-i daxil edin")))


//Proqram ikirəqəmli ədədi oxuyur və ədədin hər bir rəqəmini arada boşluq olmaqla ekrana verir.
// var i=10;
// while(i<100)



//Verilen ededin 2nin quvveti olub olmadgnii yoxlayin,eger 2nin quvvetidirse ekrana yazan funksiya
//while
// function ikininquvveti(number){
//     if (number<1){
//         return false;
//     }
//     while (number%2===0){
//         number /=2;
//     }
//     if (number ===1){
//         return true;
//     }
//     else{
// return false;
//     }
// }
// .console.log(ikininquvveti(prompt()));


// //for
// function FindPow(number){
//     for(let i=1; i<=number; i*=2){
//         if(i===number){
//             return true;
//         }
//     }
//     return false;
// }
// alert(FindPow(Number(prompt("eded daxil edin"))));




// var say=0;
// function eded(number){
//     if(number>0 && number<50){
//         for (var i=0; i<number; i++){

//             if(i%3===0){
//                 say++;
//             }

//         }
//     }
//     else if (number>0 && number<50) {


//     }
// }



//Ededlerden ibaret array verilib. arrayin en kicik elementini qaytaran funksiya yazin
// function enKicikElement(arr){
//  var min = arr[0];
//  for(let i=1; i<arr.length; i++){
//     if(min>arr[i]){
//         min=arr[i]
//     }
//  }
//  return min;
// }
// console.log(enKicikElement([1,2,-4,-5,7,8]));


//Ededlerden ibaret array verilib. arrayin en kicik elementini qaytaran funksiya yazin
// function enBoyukElement(arr){
//     var max = arr[0];
//     for(let i=0; i<arr.length; i++){
//        if(max<arr[i]){
//            max=arr[i]
//        }
//     }
//     return max;
//    }
//    console.log(enBoyukElement([1,2,-4,-5,7,8]));



//cut yerde dayanan ededlerin  cemini tapin   










  //verilmis ededin reqemlerinin ededi ortasini tapan function
  // function ededinnReqemleri(num){
  //   var say = 0
  //   var cem =0
  //   while(num>0){
  //       var reqem=num%10;
  //       num=(num-reqem)/10;
  //       cem=cem+reqem
  //       say++
  //   }
  //   return cem/say
  // }
  //   alert(ededinnReqemleri(+prompt("eded daxil edin")))





    //2.Daxil edilmis string deyerinde ardicil a ve l char-larinin olub olmadigini tapan proqram.
    //misal ucun alma,salam kimi sozlere vardir yazdirilmalidir


//     function noun(str){
//         for(let i=0; i<str.length;i++){
//             if(str[i]==="a" && str[i+1]==="l"){
//                 return true
//             }
//         }
































//         return false

//     }
//   alert(noun("alma"))


//3.Daxil edilmis yazi siyahisinda (string array) nece sozde reqem oldugunu tapan proqram
























































































































