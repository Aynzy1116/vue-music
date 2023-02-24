/**
 * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
 * 
 * @param {Function} func 要执行的回调函数 
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行 
 * @return null
 */
let timeout = null;

export function debounce (func, wait = 500, data, immediate = false) {
  // 清除定时器
  if (timeout !== null) clearTimeout(timeout);
  // 立即执行，此类情况一般用不到
  if (immediate) {
    var callNow = !timeout;
    timeout = setTimeout(() => {
      timeout = null;
    }, wait);
    if (callNow) typeof func === 'function' && func(data);
  } else {
    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    timeout = setTimeout(() => {
      typeof func === 'function' && func(data);
    }, wait);
  }
}



/**
 * 节流原理：在一定时间内，只能触发一次
 * 
 * @param {Function} func 要执行的回调函数 
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 * @return null
 */
let timer, flag;
export function throttle (func, wait = 500, data, immediate = true) {
  if (immediate) {
    if (!flag) {
      flag = true;
      // 如果是立即执行，则在wait毫秒内开始时执行
      typeof func === 'function' && func();
      timer = setTimeout(() => {
        flag = false;
      }, wait);
    }
  } else {
    if (!flag) {
      flag = true
      // 如果是非立即执行，则在wait毫秒内的结束处执行
      timer = setTimeout(() => {
        flag = false
        typeof func === 'function' && func();
      }, wait);
    }

  }
};



/**
 * 本地存储
 * 
 * @param {String} key 
 * @param {*} value 
 * @param {Number} expire 
 */
export function setStorage (key, value, expire = 24) {
  if (value == '' || value == null || value == undefined) value = null
  expire = expire * 60 * 60 * 1000
  let data = {
    value: value,
    time: Date.now(),
    expire: expire
  }
  localStorage.setItem(key, JSON.stringify(data))
}

// 获取指定storage
export function getStorage (key) {
  if (JSON.stringify(localStorage.getItem(key)) === 'null') {
    return null
  }
  // 优化 持续使用中续期
  const storage = JSON.parse(localStorage.getItem(key));
  console.log(storage)
  let nowTime = Date.now()
  // 过期删除
  if (storage.expire < (nowTime - storage.time)) {
    removeStorage(key)
    return null
  } else {
    // 未过期期间被调用 则自动续期 进行保活
    setStorage(key, storage.value);
    return storage.value;
  }
}

// 移除指定storage
export function removeStorage (key) {
  localStorage.removeItem(key)
}

// 清除所有storage
export function clearStorage () {
  localStorage.clear()
}


/**
 * 
 * @param {String} url 
 * @param {Object} param 
 * @param {Object} query 
 */
export function routeJump (url, param = {}, query = {}) {
  console.log('url', url);
  console.log('param', param);
  console.log('query', query);


}