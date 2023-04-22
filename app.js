$(document).ready(function(){
    
    
    $("#add").on("click",function(event){
        event.preventDefault();
        addInput();
    })

  
    
    function addInput(){
        const title = $('#title').val();
        const rating = $('#rating').val();
        //$("table").append("<tr class='container'>");
         $(".container").append("<tr class='row'><td class='movie'></td><td class='rates'></td></tr>");
         //$(".container").append("<td class='rates'>");
        

       
             $(".movie").append(title)
             $(".rates").append(rating);

        const deleteBtn = $(".row").append("<button>Delete</button>"); 
    
         deleteBtn.on("click", function(event){
                 event.target.parentElement.remove();
               })        
    
    }   
});