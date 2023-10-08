//Задача № 1
const md5 = require('./js-md5.js');

function cachingDecoratorNew(func) {
    let cache = [];
    
    function wrapper(...args) {
        const hash = md5(args); 
        let objectInCache = cache.find(item => item.hash === hash); 
        if (objectInCache) { 
            console.log("Из кеша: " + objectInCache.value);
            return "Из кеша: " + objectInCache.value;
        }
    
        let result = func(...args); 
        cache.push({hash: hash, value: result}) ; 
        if (cache.length > 5) { 
            cache.shift(); 
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;  
    }
    return wrapper;
    }

module.exports = {
  cachingDecoratorNew
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
	let timeoutId = null;
	wrapper.count = 0;
	wrapper.allCount = 0;

	function wrapper(...args) {
		if (timeoutId === null) {
			func(...args);
			wrapper.count++;
		}
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		timeoutId = setTimeout(() => {
			timeoutId = true;
			func(...args);
			wrapper.count++;
		}, delay);
		wrapper.allCount++;
	}
	return wrapper;
}

module.exports = {
  debounceDecoratorNew, 
}
