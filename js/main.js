$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': 'fPIAO5E3YKUXkP8gP9yOK07f65KOiZlrpkdI8jK6',
    'X-Parse-REST-API-Key': 'LtIQAEjxEXvVkhYyKI6Xb4w1KloLhnVUS3uhzJys'
  }
});


var Song = Backbone.Model.extend({
  initialize: function () {
    console.log("A new song has been created");
  },
  defaults: {
    title: null,
    artist: null,
    isCool: true,
    publishYear: null
  },
  validate: function (attrs) {
    if (!attrs.title) {
      return "Title is required";
    }
    if (!attrs.artist) {
      return "Artist is required";
    }
    if (typeof attrs.title !== 'string') {
      return "Title must a string";
    }
    if (typeof attrs.artist !== 'string') {
      return "Artist must a string";
    }
    if (!attrs.publishYear) {
      return "Published Year is required";
    }
    if (isNaN(Number(attrs.publishYear))) {
      return "Published Year should be a number";
    }
  },
  _parse_class_name: "Song"
});

var song = new Song({
  title: "Für Elise",
  artist: "Beethoven",
  publishYear: 1810
})

var Songs = Backbone.Collection.extend({
  model: Song,
  _parse_class_name: "Song"
});

var SongsCollection = new Songs();

song.save(null, {
  success: function(resp) {
    console.log(resp)

    SongsCollection.fetch({
      success: function(resp) {
        console.log("success: ", resp);
      }, error: function (err) {
        console.log("error: ", err);
      }
    })
  },
  error: function (err) {
    console.log(err)
  }
});


