'use strict';
(() => {
  let installPrompt;
  const button=document.getElementById('install-app');
  const notice=document.getElementById('offline-status');
  const updateConnection=()=>{notice.hidden=navigator.onLine;};
  addEventListener('online',updateConnection);
  addEventListener('offline',updateConnection);
  updateConnection();
  addEventListener('beforeinstallprompt',event=>{
    event.preventDefault();
    installPrompt=event;
    button.hidden=false;
  });
  button.addEventListener('click',async()=>{
    const prompt=installPrompt;
    installPrompt=null;
    button.hidden=true;
    if(prompt)await prompt.prompt();
  });
  addEventListener('appinstalled',()=>{button.hidden=true;installPrompt=null;});
  if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js').catch(error=>console.warn('환수냥이 오프라인 설치:',error));
  }
})();
