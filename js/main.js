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
  _parse_class_name: "Song",
  idAttribute: "objectId"
});

var Router = Backbone.Router.extend({
  initialize: function () {
    Backbone.history.start({pushState: true});
  },
  routes: {
    "help": "help",
    "contact": "contact",
    "contact/phone": "phone",
    "about":"about",
    "faq":"faq",
    "song/:objectId":"song",
    "": "index"
  }
});

var router = new Router();

router.on('route:song', function(objectId) {
  var song = new Song({objectId: objectId});
  song.fetch();
  console.log(song);
});

router.on('route:help', function (){
  console.log("help page");
});

router.on('route:contact', function () {
  console.log('contact page');
  $("a").css({color:"black"});
});

router.on('route:phone', function () {
  console.log('phone page');
});

router.on('route:about', function () {
  console.log('about page');
});

router.on('route:faq', function () {
  console.log('faq page');
});

router.on('route:index', function () {
  console.log('home page');
});



$("a").on('click', function(e){
  e.preventDefault();
  var href = $(this).attr('href');
  href = href.substr(1);
  router.navigate(href, {trigger:true});
});


