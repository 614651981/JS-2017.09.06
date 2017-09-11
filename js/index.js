table1(5,6);
table1(8,9);
function table1(rows,cols){
var table="<table border=1 cellspacing=0>";
for(var i=1;i<=rows;i++){
	var color;
	if(i%2==0){
		color='skyblue';
	}else{
		color='pink';
	}
	table=table+'<tr bgcolor='+color+'>'
	for(var j=1;j<=cols;j++){
	table=table+'<td bgcolor='+color+'>'+j+'*'+i+'</td>';
	}
	table=table+'</tr>'
}
document.write(table);
}



// 金字塔
jzt1(8);
function jzt1(row){

for(var i=1;i<=row;i++){
	for(var j=1;j<=row-i;j++){
		document.write('_');
	}
	for(var j=1;j<=2*i-1;j++){
		document.write('*');
	}
	document.write('<br>')
}
}
// *********     row 1     &nbsp 0     star  9
//  *******          2           1           7
//   *****           3           2           5
//    ***            4           3           3
//     *             5           4           1
//                   i           i-1         2row-(2i-1)

jzt2(7);
function jzt2(row){
// var row=5;
for(var i=1; i<=row; i++){
	for(var j=0;j<=i-1;j++){
		document.write('_');
	}
	for(var j=1;j<=2*row-(2*i-1);j++){
		document.write('*');
	}
	document.write('<br>')
}
}  


// 1   1   2   3   5   8   13   21 斐波那契数列
// i   j   k
//         k=i+j
//i=j  j=k k=i+j
//把j的值赋值给i，把k的值赋值给j
shulie(200);
function shulie(shuzhi){
var i=1,j=1;
document.write(i+'&nbsp');
document.write(j+'&nbsp');
for(var k=0;k<=shuzhi;){
	k=i+j;
	document.write(k+'&nbsp');
	i=j;
	j=k;
}
}


// 数组查找最大值
var arr=[16, 5,36,55,22,68,43,82,93];
arr1(arr);
function arr1(arr){
var max=arr[0];
for(var i=0;i<=arr.length;i++){
	if(max<arr[i]){
		max=arr[i];
    }
}
console.log(max);
}

// 数组查找最小值
var arr=[36, 2,18,55,43,69,17,95,14];
arr2(arr);
function arr2(arr){
var min=arr[0];
for(var i=0;i<=arr.length;i++){
	if(min>arr[i]){
		min=arr[i];
	}
}
console.log(min);
}


// 数组中从大到小的排列
var arr=[36, 2,18,55,43,69,17,95,14,100];
arr3(arr);
function arr3(arr){
for(var i=0;i<=arr.length;i++){
   for(var j=i+1;j<=arr.length;j++){
   	if(arr[i]<arr[j]){
   		var temp=arr[j];
   		arr[j]=arr[i];
   		arr[i]=temp;
   	}
   }
}
console.log(arr);
}
// 数组中从小到大的排列
// var arr=[36, 2,18,55,43,69,17,95,14];
arr4(arr);
function arr4(arr){
for(var i=0;i<=arr.length;i++){
   for(var j=i+1;j<=arr.length;j++){
   	if(arr[i]>arr[j]){
   		var temp=arr[i];
   		arr[i]=arr[j];
   		arr[j]=temp;
   	}
   }
}
console.log(arr);
}

// 数组中去空
var arr=[1,2,3,,4,5,6,7,,,8];
arr5(arr);
function arr5(arr){
var newarr =[];
for(var i=0;i<arr.length;i++){
   if(arr[i]!=undefined){
   	newarr[newarr.length]=arr[i];
   }
 }
console.log(newarr);
}


// 二维数组的遍历
var arr=[
[62,85,79],
[89,76,81],
[84,90,87]
]
arr6(arr);
function arr6(arr){
var max=arr[0][0];
for(i=0;i<arr.length;i++){
	for(j=0;j<arr[i].length;j++){
		if(max<arr[i][j]){
			max=arr[i][j];
		}
	}
}
console.log(max);
}

// 在数组的后边添加任意数组元素
var arr=[1,2,3,4,5,6,7,8,9];
push(arr,'a','b')
function push(arr){
    for(var i=arr.length;i<arr.length;i++){
    	arr[arr.length]=arguments[i];
    }
    console.log(arr);
}
