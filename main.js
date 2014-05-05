$(function() {
			$('.sortable').sortable();
			$('.handles').sortable({
				handle: 'span'
			});
			$('.connected').sortable({
				connectWith: '.connected'
			});
			$('.exclude').sortable({
				items: ':not(.disabled)'
			});
		});
$(document).ready(function(){
	script();
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('getpreferences');
    // onClick's logic below:
    link.addEventListener('click', function() {
       var allElements = document.getElementsByTagName("li");
var allIds = [];
for (var i = 0, n = allElements.length; i < n; ++i) {
  var el = allElements[i];
  allIds.push(parseInt(el.innerHTML,10));
}
console.log(allIds);
chrome.storage.local.set({'pspref': allIds}, function() {
    // Notify that we saved.
    console.log('Settings saved');
    window.open('http://172.18.9.55:8084/prefent/servlet/prefent.PreferenceEntry', '_blank');
  });
    });
});

function script(){
var allElements = document.getElementsByTagName("li");
var allIds = [];
chrome.storage.local.get('pspref', function (result) {
       if (typeof result === "undefined")
       filldefault();
    });
//filldefault();
chrome.storage.local.get('pspref', function (result) {
       var c = result.pspref;
    if (c.length < 380)
        for(var i=360;i<381;i++)
            c.push(i);
       console.log(result.pspref);
       var allElements = document.getElementsByTagName("li");
       var i = 0, n = allElements.length;
       while (i < n) {
          var el = allElements[i];
          var num=parseInt(el.innerHTML,10);
          if(num==c[i])
          i++;
          else{
          for(var j = 0, n = allElements.length; j < n; j++){
                    if(c[j]==num){
                     var text=allElements[j].innerHTML;
                     allElements[j].innerHTML=el.innerHTML;
                     allElements[i].innerHTML=text;
                     break;
                            
             }          
          }
          }
          
}
       
        
    });

/*
for (var i = 0, n = allElements.length; i < n; ++i) {
  var el = allElements[i];
  allIds.push(parseInt(el.innerHTML,10));
}
console.log(allIds);
chrome.storage.local.set({'preferences': allIds}, function() {
    // Notify that we saved.
    console.log('Settings saved');
  });
/*
chrome.storage.local.get('preferences', function (result) {
       // c = result["preferences"];
        console.log(result.preferences);
    });

*/
}


document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('save');
    // onClick's logic below:
    link.addEventListener('click', function() {
       var allElements = document.getElementsByTagName("li");
var allIds = [];
for (var i = 0, n = allElements.length; i < n; ++i) {
  var el = allElements[i];
  allIds.push(parseInt(el.innerHTML,10));
}
console.log(allIds);
chrome.storage.local.set({'pspref': allIds}, function() {
    // Notify that we saved.
    console.log('Settings saved');
  });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('reset');
    // onClick's logic below:
    link.addEventListener('click', function() {
       filldefault();
       location.reload();
    });
});



function filldefault(){
  var allIds=[];
  for (var i = 1, n = 381; i <= n; i++) {
  allIds.push(i);
}
chrome.storage.local.set({'pspref': allIds}, function() {
    // Notify that we saved.
    console.log('Settings saved');
  });

}
