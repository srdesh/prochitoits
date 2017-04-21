/*--------------------
    google map api   |
----------------------*/
function myMap() {
var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: {lat: 23.793804, lng: 90.403835}
        });

var labels = '';
var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });
var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }
// nearest retailer latitude and longitude
var locations = [
  {lat: 23.793804, lng: 90.403835}
]


/*--------------------
         slider       |
----------------------*/
$(function() {
				var demo1 = $("#news-slider").slippry({
					transition: 'horizontal',
					useCSS: true,
					speed: 1000,
					pause: 6000,
					auto: true,
					preload: 'visible',
					autoHover: false
				});
			});

/*--------------------
         skill bar     |
----------------------*/
  (function() {
  
    var Progress = function( element ) {
      
      this.context = element.getContext( "2d" );
      this.refElement = element.parentNode;
      this.loaded = 0;
      this.start = 4.72;
      this.width = this.context.canvas.width;
      this.height = this.context.canvas.height;
      this.total = parseInt( this.refElement.dataset.percent, 10 );
      this.timer = null;
      
      this.diff = 0;
      
      this.init();  
    };
    
    Progress.prototype = {
      init: function() {
        var self = this;
        self.timer = setInterval(function() {
          self.run(); 
        }, 25);
      },
      run: function() {
          var self = this;
          
          self.diff = ( ( self.loaded / 100 ) * Math.PI * 2 * 10 ).toFixed( 2 );  
          self.context.clearRect( 0, 0, self.width, self.height );
          self.context.lineWidth = 10;
          self.context.fillStyle = "#7f8c8d";
          self.context.strokeStyle = "#e67e22";
          self.context.textAlign = "center";
          
          self.context.fillText( self.loaded + "%", self.width * .5, self.height * .5 + 2, self.width );
          self.context.beginPath();
          self.context.arc( 35, 35, 30, self.start, self.diff / 10 + self.start, false );
          self.context.stroke();
          
          if( self.loaded >= self.total ) {
            clearInterval( self.timer );
          }
          
          self.loaded++;
        }
      };
      
      var CircularSkillBar = function( elements ) {
        this.bars = document.querySelectorAll( elements );
        if( this.bars.length > 0 ) {
          this.init();
        } 
      };
      
    CircularSkillBar.prototype = {
      init: function() {
      this.tick = 25;
      this.progress();    
      },
      progress: function() {
      var self = this;
      var index = 0;
      var firstCanvas = self.bars[0].querySelector( "canvas" );
      var firstProg = new Progress( firstCanvas );
          
          
          
        var timer = setInterval(function() {
          index++;
                  
          var canvas = self.bars[index].querySelector( "canvas" );
          var prog = new Progress( canvas );
                
            if( index == self.bars.length ) {
              clearInterval( timer );
            } 
            
        }, self.tick * 100);
            
      }
    };
      
    document.addEventListener( "DOMContentLoaded", function() {
      var circularBars = new CircularSkillBar( "#bars .bar" );
    });
  
  })();

/*--------------------
         angular     |
----------------------*/
// app module
var app = angular.module("pits", []);

// member controller
app.controller ('profileController', function(){
  this.entityList = profileList;
});

// client controller
app.controller ('clientController', function(){
  this.reviewerList = clientList;
});

//skill controller
app.controller('skillController', function(){
  this.skills = skillList;
});

// member list
var profileList = [
  {
    name: 'Salman Rahman Desh',
    photo: 'img/img-1.jpg',
    rank: 'UI/UX Designer',
    note: 'Hi, its Salman working as a UI/UX desginer at prochito its.',
    github: 'www.github.com/salman',
    twitter: 'www.twitter.com',
    linkedin: 'www.linkedin.com'
  },
  {
    name: 'Tahsin Hasan Rahit',
    photo: 'img/img-1.jpg',
    rank: 'Project Manager',
    note: 'Working as a project manager is cool',
    github: 'www.github.com/rahit',
    twitter: 'www.twitter.com',
    linkedin: 'www.linkedin.com'
  },
  {
    name: 'Tawseef Hasan',
    photo: 'img/img-1.jpg',
    rank: 'Back end developer',
    note: 'I work as a backend developer and sing opera',
    github: 'www.github.com/tawseef',
    twitter: 'www.twitter.com',
    linkedin: 'www.linkedin.com'
  },
  {
    name: 'Sadman Hasan',
    photo: 'img/img-1.jpg',
    rank: 'Mobile Apps developer',
    note: 'I do like to play fifa in offtime and like to eat',
    github: 'www.github.com/sadman',
    twitter: 'www.twitter.com',
    linkedin: 'www.linkedin.com'
  },
  {
    name: 'Zahin',
    photo: 'img/img-1.jpg',
    rank: 'Tester',
    note: 'Mammay boy and I love to eat burger',
    github: 'www.github.com/zahin',
    twitter: 'www.twitter.com',
    linkedin: 'www.linkedin.com'
  },
  {
    name: 'Zafra Apu',
    photo: 'img/img-1.jpg',
    rank: 'Senior Tester',
    note: 'Full time mother and housewife as well as tester',
    github: 'www.github.com/zafra',
    twitter: 'www.twitter.com',
    linkedin: 'www.linkedin.com'
  },
    {
    name: 'Zafra Apu',
    photo: 'img/img-1.jpg',
    rank: 'Senior Tester',
    note: 'Full time mother and housewife as well as tester',
    github: 'www.github.com/zafra',
    twitter: 'www.twitter.com',
    linkedin: 'www.linkedin.com'
  }
]

var clientList = [
  {
    name: 'Amanda Cerny',
    photo: 'img/cimg-1.jpg',
    comment: 'Being a popular playboy model I was concerning to have a website of my own. I was searching for a firm who can full-fill my requirements and Prochito ITS successfully served my demands. Best wishes for this awesome team.'
  },
  {
    name: 'Romio Juliet',
    photo: 'img/cimg-2.jpg',
    comment: 'Very good team with quality service and all. I really love to recommand them for your development works.'
  }
]

var skillList = [
  {
    name: 'HTML',
    percent: '100%'
  },
  {
    name: 'JS',
    percent: '80%'
  },
  {
    name: 'CSS',
    percent: '100%'
  },
  {
    name: 'AngularJS',
    percent: '70%'
  },
  {
    name: 'php',
    percent: '70%'
  }
]