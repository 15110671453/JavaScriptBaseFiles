
/*
为购物车 设计JS代码

初步思想
构造一个对象 来管理这一业务

js中构造对象 方式 第一种 {a:b,c:d} 大括号字面量构造 ；不方便主要思路不清晰 代码管理与调用在维护使用中有很多不方便 不选择；

选择构造器方式  并选择立即执行函数
面到JavaScript中函数的定义主要有函数声明和函数表达式两种，并提到了它们两种的一些区别。
它们两者间其实除了上面提到的区别之外，主要的区别还有在函数立即执行上的不同：
函数表达式后面加上括号可以立即调用该函数，
但是函数声明不可以，函数声明只能是以函数名后面跟'()'的方式进行调用；
 
函数声明 

function func(){
    alert('func');
}

func();

function func1(){   // 报错： ' SyntaxError: Unexpected token ) '  语法级错误
    alert('func1');
}();


函数表达式 

var func2 = function(){ // 函数表达式在函数体后面添加括号后会立即调用，此时func2的值不是函数的地址，而是 1
    return 1;
}();

console.log(func2);  // 输出结果为 1

func2();  // 报错  TypeError: number is not a function

*/
// var  base = {};
//注意在构建该购物车业务的 实现库时 先引用三个全局变量的数据文件 方便调试
//productsdata.json 声明变量 productManager 使用前检查该变量是否被赋值
//zhekoujson.js 声明变量
//youhuijson 声明变量
//
var base = function newObjec(){
	//
	var base = function baseNew()
      {
       console.log(productManager) ; 
      };
    base.loadTab = function loadTab(firstObj)
    {
      if (typeof(firstObj)) {

      }


    };
    base.greetTest = function greetTest(name)
    {
    	return "Hi" + name;
    }
    if (productManager===undefined) {
    	//判断全局对象变量是否已经赋值
    }
    base.productsDianZiData = [];
      base.productsRiYongPinData = [];
        base.productsShiPInData = [];
          base.productsJiuPinData = [];
         //这里为我们的base对象添加版本号 使用前检查版本号是否赋值 如果声明变量但未赋值则
         //数值类型环境中 undefined 值会被转换为 NaN。
          base.versionID = 1.0;
            base.stringConvertInt = function stringConvertInt(str)
            {
                return str.parseInt();
            }
            base.stringConvertFloat = function stringConvertFloat(str)
            {
            	return str.parseFloat();
            }
            base.stringConvertDouble = function stringConvertDouble(str)
            {
            	return str.parseDouble().ToFixed(2);
            }
            base.showDianZi = function showDianZi()
            {
            	if (typeof(productManager)===undefined) {

            	}else{
            		this.productsDianZiData = productManager.productData[0];
            	
            		if (this.productsDianZiData.length==0) {

            		}else
            		{
            			
            		}

            	}
            }
             base.showShiPin = function showShiPin()
            {
            	if (typeof(productManager)===undefined) {

            	}else{
            		this.productsShiPInData = productManager.productData[1];
            		if (this.productsShiPInData.length==0) {

            		}else
            		{
            			
            		}

            	}
            }
             base.showRiYongPin = function showRiYongPin()
            {
            	if (typeof(productManager)===undefined) {

            	}else{
            		this.productsRiYongPinData = productManager.productData[2];
            	if (this.productsRiYongPinData.length==0) {

            		}else
            		{
            			
            		}

            	}
            }
             base.showJiuLei = function showJiuLei()
            {
            	if (typeof(productManager)===undefined) {

            	}else{
            		this.productsJiuPinData = productManager.productData[3];
            		if (this.productsJiuPinData.length==0) {

            		}else
            		{

            		}
            	}
            }
     return base;
   
}();

base();














