function randomImg(){
    var tabImg = new Array();
    tabImg[0]  = "amadeus-1984-drama.jpg";
    tabImg[1]  = "fightClub-1999-drama.jpg";
    tabImg[2]  = "backToTheFutur-2985-comedy.jpg";
    tabImg[3]  = "cityOfGod-2002-drama.jpg";
    
    var tabImg2 = new Array();
    tabImg2[0] = "thePianist-2002-drama.jpg";
    tabImg2[1] = "theLastJedi-2017-action.jpg";
    tabImg2[2] = "theBigLebowski-1998-comedy.jpg";
    tabImg2[3] = "ShichininNoSamurai-1954-drama.jpg";
    
    var tabImg3 = new Array();
    tabImg3[0] = "rearWindow-1954-thriller.jpg";
    tabImg3[1] = "lesdeuxtours-2002-aventure.jpg";
    tabImg3[2] = "goodfellas-1990-drama.jpg";
    tabImg3[3] = "batmanmovie-2017-comedie.jpg";
    
    var tabImg4 = new Array();
    tabImg4[0] = "inception-2010-scifi.jpg";
    tabImg4[1] = "leon-1994-thriller.jpg";
    tabImg4[2] = "lepatientanglais-1996-dramatique.jpg";
    tabImg4[3] = "metropolis-1927-drama.jpg";
    
    var tabImg5 = new Array();
    tabImg5[0] = "theGreenMile-1999-drama.jpg";
    tabImg5[1] = "seven-1995-thriller.jpg";
    tabImg5[2] = "12AngryMen-1957-drama.jpg";
    tabImg5[3] = "zoolander-2001-comedie.jpg";
    
    var tabImg6 = new Array();
    tabImg6[0] = "hostel-2005-thriller.jpg";
    tabImg6[1] = "thefall-2006-dramatique.jpg";
    tabImg6[2] = "starwarsempire-1980-scifi.jpg";
    tabImg6[3] = "psychose-1960-horror.jpg";

    

  
   document.getElementById('image1').src += tabImg[Math.round(Math.random()*3)];
   document.getElementById('image2').src += tabImg2[Math.round(Math.random()*3)];
   document.getElementById('image3').src += tabImg3[Math.round(Math.random()*3)];
   document.getElementById('image4').src += tabImg4[Math.round(Math.random()*3)];
   document.getElementById('image5').src += tabImg5[Math.round(Math.random()*3)];
   document.getElementById('image6').src += tabImg6[Math.round(Math.random()*3)];    
}



function recupInfos()
        {
            var fName = document.getElementById("inputFname").value;
            var lName = document.getElementById("inputLname").value;
            var eMail = document.getElementById("inputEmail").value;
            var subject = document.getElementById("inputSubject").value;
            var message = document.getElementById("inputMessage").value;
            alert("Prenom: " + fName + "\n \n " + "Nom: " + lName + "\n \n" + "Email: " + eMail + " \n \n" + "Sujet: " + subject + "\n \n " + "Votre message: "  + message);
                
                   
        }      

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topButton").style.display = "block";
    } else {
        document.getElementById("topButton").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}