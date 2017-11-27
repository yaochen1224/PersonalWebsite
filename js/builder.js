// HTML strings
var HTMLskills = '<p class="col-sm-2">%skillName%</p><div class="col-sm-9 progress skill-bar slideanim"><div class="progress-bar" role="progressbar" aria-valuenow="%value%" aria-valuemin="0" aria-valuemax="100"><span class="skill">%skillName%<i class="val">%value%%</i></span></div></div>';

var HTMLportfolioStart = '<div class="col-md-4"><div class="thumbnail"><a class="portfolio-link" data-toggle="modal" href="#%modalID%"><img src="%itemImage%" alt="%projectTitle%" width="400" height="300"><div class="overlay"><div class="caption-content"><p><strong>%projectTitle%</strong></p><p>%caption%</p></div></div></a></div></div>';
var HTMLmodalTitle = '<div aria-hidden="true" class="portfolio-modal modal fade" id="%modalID%" role="dialog" tabindex="-1"><div class="modal-dialog" role="document"><div class="modal-content"><div class="close-modal" data-dismiss="modal"><div class="lr"><div class="rl"></div></div></div><div class="modal-body"><div class="container  text-center"><div class="row"><div class="col-md-2"></div><div class="col-md-8 offset-md-2"><h2>%projectTitle%</h2><hr class="star-primary">';
var HTMLmodalImage = '<img alt="" class="img-fluid img-centered" src="%source%">';
var HTMLmodalDescription = '<p>%description%</p>';
var HTMLmodalFooter = '<ul class="list-inline item-details"><li>Demo: <strong><a href="%link%">Click here</a></strong></li><li>Date: <strong><a href="">%date%</a></strong></li></ul><button class="btn btn-success" data-dismiss="modal" type="button"><i class="fa fa-times"></i> Close</button></div></div></div></div></div></div></div>';

var portfolio = {
  "projects": [{
    "modalID":"STD",
  	"projectTitle": "STD Crisis",
  	"itemImage": "images/portfolio/game.png",
  	"caption": "An educational board game",
    "images":["images/portfolio/organs.png", "images/portfolio/STD.png","images/portfolio/cureMethods.png"],
    "description":"STD crisis is a board game, which allows four players to play and two players are teamed up against another team.<br>To set up, each player has four Organ Cards. To prevent awkwardness, we personate and rename each organs.<br>Withdraw ATTACK cards until each player has five in their hands (not visible to other players). Shuffle and place other ATTACK, PROTECTION and CURE cards in the center.<br>Starting with the player by using attack card, each player will take a turn goingcounterclockwise. During your turn, you are allowed to make one move： either to attack opponents with a STD card, or protect and cure your teammate or yourself<br>The objection of the game is to remove your opponent's’ organs using corresponding attack cards and to protect and cure yourself and teammates’ organs using corresponding protection and cure cards to win the game.",
    "demoLink":"https://youtu.be/Z7OT7jFK_SQ",
    "date":"2016.11-2017.3"
  }, {
    "modalID":"Aiesec",
    "projectTitle": "AIESEC Global Community<br> Development Programme",
  	"itemImage": "images/portfolio/cabin.png",
  	"caption": "",
    "images":["images/portfolio/slum1.png", "images/portfolio/slum2.png","images/portfolio/slum3.png"],
    "description":"Gave daily lessons to local students and taught them to speak simple Chinese words.<br/>Sold handwriting postcards and collected donations to build a reading room for local students.<br/>Improved the lightening system in schools in slums.<br/>Designed and handed out brochures on the prevention of AIDS.",
    "demoLink":"https://youtu.be/Z7OT7jFK_SQ",
    "date":"2014.7–2014.8"
  }, {
    "modalID":"frogger",
    "projectTitle": "Frogger",
  	"itemImage": "images/portfolio/submarine.png",
  	"caption": "Front-end Nanodegree Arcade Game",
    "images":["images/portfolio/frogger.jpeg"],
    "description":"Recreated the classic arcade game Frogger with provided visual by using JavaScript to add a number of entities to the game including player characters, enemies, collectable items and rules to level up and reset",
    "demoLink":"https://yaochen1224.github.io/",
    "date":"2017.3"
  }]
};

portfolio.display = function(){
  for(var i=0; i<portfolio.projects.length; i++) {
    var formattedPortfolio = HTMLportfolioStart.replace(/%projectTitle%/g,portfolio.projects[i].projectTitle).replace("%itemImage%",portfolio.projects[i].itemImage).replace("%caption%",portfolio.projects[i].caption).replace("%modalID%",portfolio.projects[i].modalID);
    var formattedModalTitle = HTMLmodalTitle.replace(/%projectTitle%/g,portfolio.projects[i].projectTitle).replace("%modalID%",portfolio.projects[i].modalID);
    var formattedModalDescription = HTMLmodalDescription.replace("%description",portfolio.projects[i].description);
    var formattedFooter = HTMLmodalFooter.replace("%link%",portfolio.projects[i].demoLink).replace("%date%",portfolio.projects[i].date);
    var images = '';
    $("#portfolio .row").append(formattedPortfolio);
    if(portfolio.projects[i].images.length>0){
      for (var q=0; q < portfolio.projects[i].images.length; q++) {
        var formattedImage = HTMLmodalImage.replace("%source%",portfolio.projects[i].images[q]);
        images += formattedImage;
      }
    }
    $("body").append(formattedModalTitle+images+formattedModalDescription+formattedFooter);
  }
};
//Objects
var professional = {
  "skills":[
    {
      "skillName": "JAVA",
      "value": "90"
    },
    {
      "skillName": "HTML",
      "value": "100"
    },
    {
      "skillName": "CSS",
      "value": "82"
    },
    {
      "skillName": "JavaScript",
      "value": "85"
    },{
      "skillName": "Python",
      "value": "70"
    },{
      "skillName": "R",
      "value": "65"
    }]
};

professional.display = function(){
  for(var i=0; i < professional.skills.length; i++){
    var formattedSkill = HTMLskills.replace(/%skillName%/g, professional.skills[i].skillName).replace(/%value%/g, professional.skills[i].value);
    $("#skills").append(formattedSkill);
  }
};


// smooth scroll animation
$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if
  });
})

$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});

$(document).scroll(function() {
     $('.progress .progress-bar').css("width",
               function() {
                   return $(this).attr("aria-valuenow") + "%";
               }
       )
  });
