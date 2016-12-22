function suggestedTip() {
  var tipType = document.getElementById("tipType").value;
  var cost = document.getElementById("cost").value;
  var generous = document.getElementById("generous").value;
  var suggestedTip = 0;
//  var generousTip = 0;
  
  switch(cost) {
    case "restaurant":
      cost = 0.15;
      break;
    case "hair_salon":
      cost = 0.20;
      break;
    case "nail_salon":
      cost = 0.17;
      break;
    case "massage_parlor":
      cost = 0.05;
      break;
    case "taxi":
      cost = 0.16;
      break;
    case "pizza_delivery":
      cost = 0.10;
      break;
         }
  
  switch(generous) {
    case "not_at_all":
      generous = 1;
      break;
    case "a_little_bit":
      generous = 1.1;
      break;
    case "as_much_as_the_next_guy":
      generous = 1.25;
      break;
    case "pretty_darn":
      generous = 1.5;
      break;
    case "jesus":
      generous = 2;
      break;
                 }
  
  var suggestedTip = tipType * cost;
 // var generousTip = tipType * cost * generous;
  
  $("h2#suggestedTip span").html("").append(suggestedTip);
//  $("h2#generousTip span").html("").append(generousTip);
  
}

// reset function
function clearData() {
  $("h2#suggestedTip span").html("");
//  $("h2#generousTip span").html("");
};

