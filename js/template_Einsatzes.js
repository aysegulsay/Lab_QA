//var url_to_endpoint = "http://localhost:3030/LAB_DATA/sparql";
var url_to_endpoint = "http://localhost:3030/solide_25_test/sparql";

$('#searchSubmit').on('click', function() {
    userQuery_20 = $('#searchField').val();
	var sub_string = userQuery_20.substring (23,);
    if (userQuery_20.match("^Was ist das Datum  von")) {
        var base_query_20 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
                         
						  
							        SELECT DISTINCT  ?d
							WHERE {
								 ?ID  so:NameDesEinsatzes  ?obj . 
								 ?ID  so:datumvon ?d.
								  FILTER (regex (str(?obj),\"` + sub_string + `\"\))
                          }`;

        var queryUrl_20 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_20) + "&format=json";
        $.ajax({
            url: queryUrl_20,
            data: "",
            success: function(data) {
				
				if ( data.results.bindings == "" || data.results.bindings == null )
				{
					alert(" ERROR : No results found!");
					
				}
			else
				{
					displayResults(data);
				}
				
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                $("#resultsContainer").html("<b>ERROR :</b> Input could not be resolved to a query!")
            }
        });
    }
});

$('#searchSubmit').on('click', function() {
    userQuery_21 = $('#searchField').val();
	//var sub_string = userQuery_21.substring (39,);
    if (userQuery_21.match("^Welche Einsatz hat den  Alarmstichwort")) {
        var base_query_21 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
						
                          SELECT DISTINCT
                            ?d
                          WHERE
                          {    ?ID  so:hatAlarmstichwort  ?label. 
								?ID  so:NameDesEinsatzes ?d.
							    FILTER (regex (str(\"` + userQuery_21 + `\"\),?label ))
                          } `;
        var queryUrl_21 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_21) + "&format=json";
        $.ajax({
            url: queryUrl_21,
            data: "",
            success: function(data) {
             
			 	
				if ( data.results.bindings == "" || data.results.bindings == null )
				{
					alert(" ERROR : No results found!");
					
				}
			else
				{
					displayResults(data);
				}
			 
			 
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                $("#resultsContainer").html("<b>ERROR :</b> Input could not be resolved to a query!")
            }
        });
    }
});

$('#searchSubmit').on('click', function() {
    userQuery_28 = $('#searchField').val();
	 var sub_string = userQuery_28.substring (41,);
    if (userQuery_28.match("^Welche Einsatzkräefte haben den  Einsatz")) {
        var base_query_28 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
						
                     
							        SELECT DISTINCT  ?d
							WHERE {
								 ?ID  so:NameDesEinsatzes  ?obj . 
								 ?ID  so:hatEinsatzkraefte ?d.
								  FILTER (regex(str(?obj) ,\"` + sub_string + `\"\))
                          }
						  LIMIT 5`;
        var queryUrl_28 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_28) + "&format=json";
        $.ajax({
            url: queryUrl_28,
            data: "",
            success: function(data) {
             			 	
				if ( data.results.bindings == "" || data.results.bindings == null )
				{
					alert(" ERROR : No results found!");
					
				}
			else
				{
					displayResults(data);
				}
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                $("#resultsContainer").html("<b>ERROR :</b> Input could not be resolved to a query!")
            }
        });
    }
});

$('#searchSubmit').on('click', function() {
   
   var userQuery_46 = $("#searchField").val();
   var sub_string = userQuery_46.substring (39, 49);
    if (userQuery_46.match("^Welche Einsatzes haben das Datum  nach")) {
        var base_query_46 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
                       
					   SELECT DISTINCT ?obj1
                          WHERE
                          {     
						       ?ID  so:NameDesEinsatzes ?obj1.
							   ?ID  so:datumvon  ?date .
							   FILTER(?date > \"` + sub_string + `\"\ )

				    		  
                          }LIMIT 50
						  `;
						  
						  
        var queryUrl_46 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_46) + "&format=json";
        $.ajax({
            url: queryUrl_46,
            data: "",
            success: function(data) {
                	
				if ( data.results.bindings == "" || data.results.bindings == null )
				{
					alert(" ERROR : No results found!");
					
				}
			else
				{
					displayResults(data);
				}
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                $("#resultsContainer").html("<b>ERROR :</b> Input could not be resolved to a query!")
            }
        });
    }
});

$('#searchSubmit').on('click', function() {
   
   var userQuery_47 = $("#searchField").val();
   var sub_string = userQuery_47.substring (38, 48);
    if (userQuery_47.match("^Welche Einsatzes haben das Datum  vor")) {
        var base_query_47 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
                       
					   SELECT DISTINCT ?obj1
                          WHERE
                          {     
						       ?ID  so:NameDesEinsatzes ?obj1.
							   ?ID  so:datumvon  ?date .
							   FILTER(?date < \"` + sub_string + `\"\ )

				    		  
                          }LIMIT 50
						  `;
						  
						  
        var queryUrl_47 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_47) + "&format=json";
        $.ajax({
            url: queryUrl_47,
            data: "",
            success: function(data) {
                	
				if ( data.results.bindings == "" || data.results.bindings == null )
				{
					alert(" ERROR : No results found!");
					
				}
			else
				{
					displayResults(data);
				}
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                $("#resultsContainer").html("<b>ERROR :</b> Input could not be resolved to a query!")
            }
        });
    }
});


function displayResults(data) {
    var html = "";
    $.each(data["results"]["bindings"], function(i, l) {
        $.each(l, function(k, v) {
            if (i % 2 == 0) {
                html += "<tr class=\"unevenRow\">";
            } else {
                html += "<tr class=\"evenRow\">";
            }
            html += "<td> " + v["value"] + "</td></tr>";
        });
    });
    console.log(data);
    $("#tableResults").html(html);

}
