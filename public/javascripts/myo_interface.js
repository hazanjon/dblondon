var myMyo = Myo.create();
myMyo.on('fingers_spread', function(edge){
    if(!edge) return;
    alert('Hello Myo!');
    myMyo.vibrate();
});