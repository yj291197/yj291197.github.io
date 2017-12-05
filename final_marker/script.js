(function(window, google, mapster) {
 
  var lats = [26.4616,26.46063,26.46113,26.46268,26.46042,26.45943,26.4636,26.46451,26.46524,26.4664,26.46719,26.4681,26.4702,26.47758,26.48163,26.48528,26.46031,26.48701,26.49094,26.48863,26.48401,26.47697,26.47053,26.47362,26.46974,26.46746,26.46584,26.46307,26.46166,26.45695,26.45611,26.45948,26.46051,26.45951,26.46234,26.4653,26.46517,26.46578,26.46446,26.46535,26.47093,26.47453,26.4706,26.46795,26.46551,26.47344];
  var lngs = [74.60314,74.60385,74.60634,74.61127,74.61222,74.6132,74.61466,74.61748,74.61969,74.61678,74.61376,74.61202,74.61463,74.61113,74.60914,74.60731,74.61374,74.61745,74.6216,74.62881,74.63116,74.63292,74.63332,74.6361,74.6443,74.6402,74.63778,74.63861,74.63793,74.63669,74.63647,74.63304,74.63186,74.6317,74.63133,74.63176,74.63006,74.62611,74.62239,74.61922,74.609,74.61224,74.60783,74.6057,74.60493,74.60986];
  var place = ["Hotel Holiday Inn","Telephone Exchange Chaurah","Honey Garden","Soninagar","Soninagar Inside","Gopeshwar Mahadev Mandir","Vinayak Jwellers","Renuka Stell Foysagar","Anasagar Police Chowki","Adwaid Ashram","Ramnagar School","Pancholi Chaurah","Laxmi Palace","Regional College Chaurah","Regional College Post Office","Dahrsen Smarak","Demonstration School","Maheshwari Public School","HKH","Pachseal Chaurah","Rajasthan Sweets","RG Academy","Bajrang Garh","Jawahar Rangmanch","Bus Stand","Collectrate Office","Vega Mall","Kshetrapal Eye Hospital","Kuchery Road","Railway Station","Madar Gate","RR Jewellers","Gol Pyau","Saraogi Muhalla","Agra Gate","Ajmer Nasiya","Ghati","Luv Kush Garden","Papa Paanwala","Arihant Colony","Carnival Cinemas","Mittal Hospital","Mamta Sweets","Queen Marry's Girls School","Ambe Vihar","Radha Vihar"];
  var index = [7.3303614,7.4074888,5.6176138,6.5982847,3.7198954,6.9592466,1.2722836,3.9119959,5.8266897,4.8580418,5.2171917,6.2719517,5.5877934,5.8610239,5.5512753,7.9156532,7.22896,7.777606,8.142849,7.236083,5.3136654,6.1713753,1.3438702,3.4664116,5.4642191,6.4704552,5.8569851,3.7891569,4.2577677,3.7303047,3.1744871,3.3300114,3.9815426,4.4141684,3.5129328,2.6425323,3.2122726,6.9982319,4.5430689,1.5399961,4.0460682,6.8442755,6.7293768,4.814292,7.3130674,5.3486147];
  var options = mapster.MAP_OPTIONS,
   
  element = document.getElementById('map-canvas'),
    map = mapster.create(element, options);
    
     
    
    var i = 0;
    for(i=0;i<lats.length;i++){
    	if(index[i]<=3)
    	{
    		map.addMarker({
       lat: lats[i], 
       lng: lngs[i],
      
     	content: 
     	" <div style='background-color:rgba(193, 66, 66, 0.75); border:2px solid black; color:black; width:250px; height:300px'>"+
     	"<IMG SRC='images/"+ (i+1) +".jpg' style='BORDER:5px solid black; margin-left:18px; margin-top:10px'>"+
  "<h2>"+"Place: "+place[i]+"</h2>"+
  "<h2>"+"Lat: "+ lats[i]+"  Lng: "+lngs[i]+"</h2>"+
   "<h2>"+"RSI: " +index[i].toFixed(2)+"/10"+"</h2>"+
  
  
"</div>",

      icon: 'icon_small2.png',
       
     });

    	}
    	else if(index[i]>3 && index[i]<=5)
    	{
    		map.addMarker({
       lat: lats[i], 
       lng: lngs[i],
      
     	content: 
     	" <div style='background-color:rgba(150, 66, 66, 0.75); border:2px solid black; color:black; width:250px; height:300px'>"+
     	"<IMG SRC='images/"+ (i+1) +".jpg' style='BORDER:5px solid black; margin-left:18px; margin-top:10px'>"+
  "<h2>"+"Place: "+place[i]+"</h2>"+
  "<h2>"+"Lat: "+ lats[i]+"  Lng: "+lngs[i]+"</h2>"+
 "<h2>"+"RSI: " +index[i].toFixed(2)+"/10"+"</h2>"+
  
  
"</div>",

      icon: 'icon_small.png',
       
     });

    	}
    	else if(index[i]>5&&index[i]<6.5)
    	{
    		map.addMarker({
       lat: lats[i], 
       lng: lngs[i],
       
     	content: 
     	" <div style='background-color:rgba(127, 150, 63, 0.75); border:2px solid black; color:black; width:250px; height:300px'>"+
     	"<IMG SRC='images/"+ (i+1) +".jpg' style='BORDER:5px solid black; margin-left:18px; margin-top:10px'>"+
  "<h2>"+"Place: "+place[i]+"</h2>"+
  "<h2>"+"Lat: "+ lats[i]+"  Lng: "+lngs[i]+"</h2>"+
  "<h2>"+"RSI: " +index[i].toFixed(2)+"/10"+"</h2>"+
  
  
"</div>",

      icon: 'icon_small3.png',
       
     });
    
   
    }
    else if(index[i]>=6.5)
    	{
    		map.addMarker({
       lat: lats[i], 
       lng: lngs[i],
       
     	content: 
     	" <div style='background-color:rgba(127, 191, 63, 0.75); border:2px solid black; color:black; width:250px; height:300px'>"+
     	"<IMG SRC='images/"+ (i+1) +".jpg' style='BORDER:5px solid black; margin-left:18px; margin-top:10px'>"+
  "<h2>"+"Place: "+place[i]+"</h2>"+
  "<h2>"+"Lat: "+ lats[i]+"  Lng: "+lngs[i]+"</h2>"+
 "<h2>"+"RSI: " +index[i].toFixed(2)+"/10"+"</h2>"+
  
  
"</div>",

      icon: 'icon_small4.png',
       
     });
    	}
    }
  
       
        
}(window, google, window.Mapster || (window.Mapster = {})));












