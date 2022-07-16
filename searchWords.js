let  namelist =["mathan","moneeshram","ram","kumar","vasu","vicky"];
function filternamelist(arr,query) {
return arr.filter(function(el){
    return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
})
 }

 console.log(filternamelist(namelist,"ath"));


 function myfunction(list,swords){
    return list.filter(l=>l.toLowerCase().indexOf(swords.toLowerCase()) !== 0);
 }

 console.log(myfunction(namelist,""));