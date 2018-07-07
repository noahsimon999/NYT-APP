$(document).ready(function(){

    $(".searchBtn").on('click', function() {
       var searchTerm = $("searchInput");
       var numOfRecord = 0;
       var startDate = 0;
       var endDate = 0;
    
       var NYTSearch = $(".searchInput").val().trim();
       var articles = $(".numberArticles").val().trim();
       var startYear = $(".startYear").val().trim();
       var endYear = $(".endYear").val().trim();


       var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
       queryURL += "?" + $.param ({
           'api-key'   : "5a1e7f7d6d37457bb8b310f35362a743",
           'q'         : NYTSearch,
           'begin_date': startYear + "0101",
           'end_date'  : endYear + "1231"
       });
       console.log(queryURL);
       $.ajax ({
           url: queryURL,
           method: "GET",
       }).done(function(response){
           if(articles <= 10) {
               for(var i = 0; i < articles; i++) {
                $(".articles").append("<h4>" + response.response.docs[i].headline.main + "<h4>");
                $(".articles").append(response.response.docs[i].byline.original);
               }
           } else {
               alert("You must have less then 10 articles")
               return false;
           }
            
                
                    
                    
         
            
       }).fail(function(error){
           console.log("You fail");
       });
    });
});