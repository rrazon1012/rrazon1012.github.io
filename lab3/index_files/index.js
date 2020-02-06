let x = document.getElementById("Add-Artist");
x.addEventListener('click',addArtist,false);

let y = document.getElementById("input-button");
y.addEventListener('click',add,false);

function addArtist(){
   var b = document.getElementById("addform");
   b.style.display = "flex";
}

function add(){
   var container = document.getElementById("input-destination")
   var name = document.getElementById("input-name")
   var about = document.getElementById("input-info")
   var image = document.getElementById("input-picture")
   
   var b = document.getElementById("addform");
   b.style.display = "none";
   
   var artist = document.createElement("DIV");
   artist.className = "artist";
   var pic = document.createElement("DIV")
   pic.className = "picture"
   var information = document.createElement("DIV");
   information.className = "information";
   //var deldiv = document.createElement("DIV");

   
   var artistname = document.createElement("P")
   console.log(name.value);
   artistname.className = "name";
   artistname.textContent = name.value;
   name.value = "";
   
   var artistinfo = document.createElement("P")
   artistinfo.className = "spec"
   artistinfo.textContent = about.value;
   about.value = "";
   
   var artistpicture = document.createElement("IMG")
   artistpicture.src = image.value;
   image.value = ""
   
   var del = document.createElement("BUTTON")
   del.className = "delete";
   del.textContent = "Delete"
   del.onclick = function(){
      container.removeChild(artist);
   }
   //deldiv.appendChild(del);
   
   
   artist.appendChild(pic);
   artist.appendChild(information);
   artist.appendChild(del);
   
   pic.appendChild(artistpicture);
   information.appendChild(artistname);
   information.appendChild(artistinfo);
   
   container.appendChild(artist);
}