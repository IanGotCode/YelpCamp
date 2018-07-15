var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
 
 var data = [
     {
         name: "Clouds Rest",
         image: "https://hatimukmin.files.wordpress.com/2011/11/black-sea.jpg",
         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
     },
     {
         name: "Cool Ocean",
         image: "http://dr92wy3r2elps.cloudfront.net/6J/mlor-1293117954.jpg",
         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
     },
     {
         name: "Best Rest",
         image: "http://data.freehdw.com/water-ocean-waves-sea-high-resolution-pictures.jpg",
         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
     }
];
    
function seedDB(){
        //Remove all Campgrounds
        Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
            console.log("removed campgrounds!");
            //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("added a campground");
                    //create comment on each campground
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet.",
                            author: "Ian Gibson"
                        }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("created new comments");
                                }
                        });
                }
            });
        });
    });  
    
    //add a few comments
}

module.exports = seedDB;


