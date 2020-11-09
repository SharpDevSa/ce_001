document.addEventListener('visibilitychange', function (e) {
    //on visibility change inset random number
    document.getElementsByTagName('body')[0].innerText = Date.now().toString();
    if (document.visibilityState === 'visible'){
        console.log('visible');
    } else {
        console.log('hidden');
    }
    return true;
});
