function displayCards(data){ 
    for(let i=0; i<data.length; i++){
      var json_data = data[i];
      var display = document.getElementById("view");
      var name = json_data.name; 
      var motto = json_data.motto;
      var link = json_data.link;
      var background = json_data.background;
      
      var title = document.createElement("h1");
      title.textContent = name; 
    }
}