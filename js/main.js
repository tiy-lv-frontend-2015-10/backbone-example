$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': '24nAZjkW4b1FG2A8Syz2nsLoFI9C6YylSeFq7gy4',
    'X-Parse-REST-API-Key': 'QizoxovCQQl1DdiLXyfJ64MMoFC0lnjqNT9OEXvJ'
  }
});


var Movie = Backbone.Model.extend({
  initialize: function () {
    console.log("A new movie has been created");
  },
  _parse_class_name:"Movies"
 
 
});
var movie = new Movie({
  title:"test",
  genre:"test"
});
var movie = new Movie({
  title:"Se7en",
  genre:"thriller"
});
var movie = new Movie({
  title:"The Hills Have Eyes",
  genre:"Horror",
  director:"I don't know"
});
var movie = new Movie({
  title:"Insidious",
  genre:"Horror",
  director:"James Wan"
});



var Movies=Backbone.Collection.extend({
url:"https://test1117.parseapp.com/classes/Movies",
model: Movie,
_parse_class_name:"Movies"

});

// Movies.fetch({
 
//       success:function(resp) {
//         console.log(resp);
//       }, error:function(err) {
//         console.log(err)
//       }
//     })
// })


movie.save(null, {
  success: function(resp) {
    console.log("success: ",resp)
  },
  error: function(err) {
    console.log("error: ",err)
  }
});



