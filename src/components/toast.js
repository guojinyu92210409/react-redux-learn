/*
 * Copyright (c) 2018-present, 网信智投, Inc.
 *
 * @Author: Jone.Lin
 * @Date: 2018-08-29 23:35:37
 * @Last Modified by: Jone.Lin
 * @Last Modified time: 2018-08-29 23:36:01
 * @Note toast提示和loading
 */

var timer = null

export const toast = (text,succ) => {
  var div = document.getElementById('app-toast-all')
  var txtdiv = document.getElementById('app-toast-text')
  if (succ){
    txtdiv.innerHTML = '<div class="app-toast-icon"></div>' + text
  }else{
    txtdiv.innerText = text
  }
  
  timer && clearTimeout(timer)
  if (div.style.display == 'none') {
    div.style.display = 'block'
    div.style.marginTop = -(txtdiv.offsetHeight / 2) + 'px'
  }
  timer = setTimeout(function() {
    div.style['display'] = 'none'
  }, 1500)
}

export const showload = type => {
  var div = document.getElementById('app-loading-all')
  if (type) {
    div.style.display = 'block'
  } else {
    div.style.display = 'none'
  }
}
