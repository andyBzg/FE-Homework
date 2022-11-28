// 1.
let d = 7;
console.log(d);
console.log(d * d);
console.log(d * d * d);

// 2.
let num_1 = Number(prompt('Enter an integer'));
if(num_1 > 0){
    console.log(num_1 * 2);
}

// 3.
let num_2 = Number(prompt('Enter the number'));
if(num_2 == 0){
    console.log('ноль');
}
else if(num_2 > 0){
    console.log('положительное');
} 
else{
    console.log('отрицательное');
}

// 4.
let first_num = Number(prompt('Enter first number'));
let second_num = Number(prompt('Enter second number'));
if(first_num == second_num){
    console.log('числа одинаковые');
}
else if(first_num > second_num){
    console.log(first_num + second_num);
}
else{
    console.log(first_num * second_num);
}

// 5.
let num_3 = Number(prompt('Enter the number'));
if(num_3 < 0){
    console.log(num_3 * num_3);
}
else{
    console.log("ошибка");
}

// 6.
let students = Number(prompt('Сколько учеников в классе?'));
let chairs = Number(prompt('Сколько стульев в классе?'));
if(chairs >= students){
    console.log('стульев хватает');
}
else{
    console.log('стульев не хватает');
}

// 7.
console.log('старт');
for(let num = 1; num < 10; num++){  
    console.log(num);    
}
console.log('финиш');

// 8.
for(let num = 10; num < 100; num++){
    if(num % 5 == 0){
        console.log(num);
    }     
}

// 9.
let num_4 = Number(prompt('Enter an integer'));
for(let num = 0; num < 14; num++){
    num_4++;
    if(num_4 % 2 != 0){
        console.log(num_4);
    }
}

// 10.
let arr1 = [151, 2, 7, 38, 50, 1, 15, 0, 4, 13, 45, 23, 17, 99, 86];
for(let num = 0; num < arr1.length; num++){
    if(arr1[num] >= 15){
        console.log(arr1[num]);
    }
}

// 11.
let arr2 = [151, 2, 7, 38, 50, 1, 15, 0, 4, 13, 45, 23, 17, 99, 86];
for(let num = 0; num < arr2.length; num++){
    if(arr2[num] % 2 != 0){
        console.log(arr2[num]);
    }
}

// 12.
let arr3 = [151, 2, 7, 38, 50, 1, 15, 0, 4, 13, 45, 23, 17, 99, 86];
for(let num = 3; num < arr3.length; num++){
    if(arr3.indexOf(arr3[num]) % 3 == 0){
        console.log(arr3.indexOf(arr3[num]));
    }
}

// 13.
let arr4 = [1, 10, 3, 12, 45, 23, 17, 88];
let sum_1 = 0;
for(let num = 0; num < arr4.length; num++){
    sum_1 += arr4[num];
}
console.log(sum_1);

// 14.
let arr5 = [1, 10, 3, 12, 45, 23, 17, 88];
let sum_2 = 0;
for(let num = 0; num < arr5.length; num++){
    if(arr5[num] % 2 != 0){
        sum_2 += arr5[num];
    }
}
console.log(sum_2);

// 15.
let arr6 = [102, 2, 7, 38, 53, 1, 15, 0, 4, 12, 45, 23, 18, 99, 86];
let sum_even = 0;
let sum_odd = 0;
for(let num = 0; num < arr6.length; num++){
    if(arr6[num] % 2 == 0){
        sum_even += arr6[num];
    }
}
for(let num = 0; num < arr6.length; num++){
    if(arr6[num] % 2 != 0){
        sum_odd += arr6[num];
    }
}
if(sum_even == sum_odd){
    console.log(0);
}
else if(sum_even > sum_odd){
    console.log(sum_even - sum_odd);
}
else{
    console.log(sum_odd - sum_even);
}