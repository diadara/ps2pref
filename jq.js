//Run this in the console to fill the form with required values

chrome.storage.local.get('pspref', function (result) {
       var c = result.pspref;
        console.log(result.pspref);
        var inputs = document.getElementsByTagName("input");
        for (x=0;x<inputs.length-1;x++){
/*
         var num=(inputs[x].name).match(/\d+/g);
         for(y=0;y<=inputs.length;y++){

         if(c[y]==num[0])
         break;
      }
     //console.log(num[0]); */
    inputs[x].value=c[x];
    } 
    });

