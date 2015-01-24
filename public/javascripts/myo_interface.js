// var myMyo = Myo.create();
// myMyo.orientationOffset = myMyo._lastQuant; //Zero the myo

// myMyo.on('fingers_spread', function(edge){
//     if(!edge) return;
//     console.log('fingers_spread Myo!');
//     myMyo.vibrate();
// });

// myMyo.on('orientation', function(data){
//     if(!data) return;
//     console.log((Math.round(data.x*100)/100) + " " + (Math.round(data.y*100)/100) + " " + (Math.round(data.z*100)/100));
// });

var filetree = [];

var client = new Dropbox.Client({ key: "rffb13te1cmgm5b" });

var buildtree = function(dir, tree){
	client.readdir(dir, function(error, entries) {
		if (error) {
			console.log(error);
			return;
		}

		console.log(entries);
		for (var i = 0; i < entries.length; i++) {
			client.stat(entries[i], function(error, details) {
				if (error) {
					console.log(error);
					return;
				}

				details.children = [];
				tree.push(details);
			  	console.log(details);
			  	if(details.isFolder){
			  		buildtree(details.path, details.children);
			  	}
			});
		};
	});
}

client.authenticate(function(error, client) {
  if (error) {
    // Replace with a call to your own error-handling code.
    //
    // Don't forget to return from the callback, so you don't execute the code
    // that assumes everything went well.
    console.log(error);
  }

  // Replace with a call to your own application code.
  //
  // The user authorized your app, and everything went well.
  // client is a Dropbox.Client instance that you can use to make API calls.
	buildtree("/", filetree);
});