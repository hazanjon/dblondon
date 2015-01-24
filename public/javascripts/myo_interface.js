var myMyo = Myo.create();
myMyo.orientationOffset = myMyo._lastQuant; //Zero the myo

myMyo.on('fingers_spread', function(edge){
    if(!edge) return;
    console.log('fingers_spread Myo!');
    myMyo.vibrate();
});

myMyo.on('orientation', function(data){
    if(!data) return;
    console.log((Math.round(data.x*100)/100) + " " + (Math.round(data.y*100)/100) + " " + (Math.round(data.z*100)/100));
});