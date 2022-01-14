async function init() {
  // registered service workers required
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('./sw.js');
    });
  }

  // if ('BackgroundFetchManager' in self) {
  //   const reg = await navigator.serviceWorker.ready
  //   const ids = await reg.backgroundFetch.getIds()
  //   console.log('reg :>> ', reg, ids);
  // }
  const response = await fetch('sw.js')
  console.log(response)
  // const data = response.json()

}

(async function () {
  await init()
})()