const text = '[ { "idRegione":"1", "nomeProvincia":"Perugia", "comuni":["Gubbio","Foligno"]}, { "idRegione":"1", "nomeProvincia":"Terni", "comuni":["Narni","Otricoli"]}, { "idRegione":"2", "nomeProvincia":"Roma", "comuni":["Grottaferrata","Fiumicino"]}, { "idRegione":"2", "nomeProvincia":"Roma", "comuni":["Grottaferrata","Fiumicino"]}, { "idRegione":"2", "nomeProvincia":"Viterbo", "comuni":["Vetralla","Tarquinia"]}, { "idRegione":"3", "nomeProvincia":"Livorno", "comuni":["Piombino","Cecina"]}, { "idRegione":"4", "nomeProvincia":"Ancona", "comuni":["Numana","Sirolo"]}, { "idRegione":"4", "nomeProvincia":"Ascoli Piceno", "comuni":["San Benedetto Del Tronto","Grottammare"]} ]';
const myArr = JSON.parse(text);

function removeAllOptions(selectBox) {
  if (selectBox.options.length > 1) {
      while (selectBox.options.length > 1)
          selectBox.remove(1);
  }
}

function ViewRegione() {
  var divReg = document.getElementById("divRegione");
	divReg.style.visibility = "visible";

  // call rest api to load region data
  GetDataRegione();
  
  var divProv = document.getElementById("divProvincia");
  divProv.style.visibility = "hidden";
  
  var divCom = document.getElementById("divComune");
  divCom.style.visibility = "hidden"; 
  
}

function CaricaProvincia() {
  removeAllOptions(document.getElementById("idProvincia"));
  removeAllOptions(document.getElementById("idComune"));

  let selRegion = document.getElementById("idRegione");
  let selProvincia=document.getElementById("idProvincia");
  var divProv = document.getElementById("divProvincia");
  divProv.style.visibility = "visible";
  // regione = selRegion.value;
  for(let i = 0; i < myArr.length; i++) {
    if( myArr[i].idRegione == selRegion.value) {
      let optionProv= document.createElement("option");
      optionProv.value = i+1;
      optionProv.text= myArr[i].nomeProvincia;
      selProvincia.add(optionProv);
    }
  }
  
}

function CaricaComune() {
  removeAllOptions(document.getElementById("idComune"));

  let selProvincia=document.getElementById("idProvincia");
  let selComune=document.getElementById("idComune");
  var divCom = document.getElementById("divComune");
  divCom.style.visibility = "visible";
  const indexSelected=selProvincia.selectedIndex;
  const proviciaSelected = selProvincia.options[indexSelected].text;
  // provincia = proviciaSelected;

  // debugger;
  
  for(let i = 0; i < myArr.length; i++) {
    if( myArr[i].nomeProvincia == proviciaSelected) {
      
      for(let j=0; j < myArr[i].comuni.length; j++) {
        let optionCom= document.createElement("option"); 
        optionCom.value = j+1;
        optionCom.text= myArr[i].comuni[j];
        selComune.add(optionCom);
      }

      break;
    }
  }

}

function VisualizzaRicerca()
{
  let regione = "";
  let provincia = "";
  let comune = "";
  document.getElementById("btnSearch").style.display = "inline-block"; 

  let selRegion = document.getElementById("idRegione");
  let selProvincia=document.getElementById("idProvincia");
  let selComune=document.getElementById("idComune");
  // debugger;
  regione = selRegion.options[selRegion.selectedIndex].text;
  provincia = selProvincia.options[selProvincia.selectedIndex].text;
  comune = selComune.options[selComune.selectedIndex].text;
  
  alert('L\' utente ha selezionato: ' + regione + ' - ' + provincia + ' - ' + comune); 
}
 
function ajaxCall() {
  $.ajax({

      // Our sample url to make request 
      url: 'https://jsonplaceholder.typicode.com/todos/1',

      // Type of Request
      type: "GET",

      // Function to call when to
      // request is ok 
      success: function (data) {
          var x = JSON.stringify(data);
          console.log(x);
      },

      // Error handling 
      error: function (error) {
          console.log(`Error ${error}`);
      }
  });
}

function GetDataRegione() {
  // TO DO IMPLEMENTARE web service
  console.log('GetDataRegione');
  return;
  $.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/users", 
    success: function(regionData)
    {
        
        console.log(regionData);
        // debugger;
        $("#div1").html(JSON.stringify(regionData));
        $("#div2").html(regionData[0].id);      // campo value della select regione - idRegione
        $("#div2").html(regionData[0].name);    // campo text della select regione - idRegione
    },
    error: function(xhr, status, error){
    var errorMessage = xhr.status + ': ' + xhr.status + ' - status: ' + status + ' - error: ' + error;
    alert('Error - ' + errorMessage);
    }
  });
}

function GetDataAPI() {
 /* $.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    type: "GET",
    success: function(result) {
          console.log('callUsersApiRest - ' + result);   
    },
     error: function(error) {
           console.log('callUsersApiRest - Error: ' + error);
     }
   }); */
   // debugger;
   console.log('GetDataAPI - Chiamata dal bottone ricerca');
   $.ajax({
      type: "GET",
      url: "https://jsonplaceholder.typicode.com/users", 
      success: function(result)
      {
          
          console.log(result);
          // debugger;
          $("#div1").html(JSON.stringify(result));
          $("#div2").html(result[0].address.geo.lat);
      },
      error: function(xhr, status, error){
      var errorMessage = xhr.status + ': ' + xhr.status + ' - status: ' + status + ' - error: ' + error;
      alert('Error - ' + errorMessage);
      }
    });
}
