## 简单了解下BackgroundFetch

> 好长的名字，BackgoundFetch后台请求, 以下简称bgf

- bgf在web中基于serviceWorker实现
- bgf出现在web端比较晚，是Web应用(PWA)为实现后台更新数据等功能补充的API, native app中类似功能已经被广泛使用了。

## 兼容性
主流浏览器中safari,ie,firefox, safari on IOS, Android browser还不支持，api还处在实验阶段。

## bfg在网页中是怎么工作的
1. web应用下发了一系列的后台数据请求
2. 浏览器请求并展示进度给用户
3. 请求完成或失败后，浏览器打开service worker并触发事件, 开发者自定义响应后的行为

请求开始或请求过程中离线，会保存下载进度。

## demo模拟一个完全离线的下载列表


## 补充
Javascript worker广义指不在主线程上运行的javascript脚本, more specifically指不用script标签引入的javascript脚本  

目前有三种  
- web worker  
- service worker  
- worklets  


#### Web Worker
> 作为常规运行脚本在后台运行，主要目的是减少昂贵脚本加载造成的页面卡顿  

main:  
```javascript
var worker = new Worker('worker.js')
worker.addEventListener('message', (e) => {
  console.log('receive data from worker thread >>>', e)
})
// main -> worker
worker.postMessage('slave wake up')
```
worker:  
```javascript
self.addEventListener('message', (e) => {
  console.log('processing data from main thread >>>', e)
})
// receive main msg, work and reply
self.addEventListener('message', (e) => {
  switch(e.data) {
    case 'slave wake up':
      console.log('Yes, sir')
  }
})
```

---
#### Service Worker
> 作为服务端和页面的proxy, 拦截并处理请求, 用于支持应用离线使用, backgroundFetch例子中已经用到了，不再赘述。  

---
#### Worklets
> 非常轻量和功能非常明确的worker, 用于连接处理浏览器***渲染***的不同阶段, 并对这些阶段进行low-level的处理。  
javascript > style > layout > **paint** (Paint Worklet) > composite  

针对不同的渲染阶段有不同的worklet:

- PaintWorklet 
- AnimationWorklet
- LayoutWorklet