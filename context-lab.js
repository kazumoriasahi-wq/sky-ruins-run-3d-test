/* Local QA fixture only; excluded from runtime ZIP. */
document.getElementById('lose').onclick=()=>{const c=document.getElementById('frame').contentDocument.getElementById('game'),gl=c.getContext('webgl');gl?.getExtension('WEBGL_lose_context')?.loseContext();};
