
// var url_to_endpoint = "http://localhost:3030/LAB_DATA/sparql";
 var url_to_endpoint = "http://localhost:3030/solide_25_test/sparql";



$('#searchSubmit').on('click', function() {
    userQuery4 = $('#searchField').val();
	  var sub_string = userQuery4.substring (30,);
    if (userQuery4.match("^Welche Einheit hat der Leiter")) {
        var base_query4 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
						
                        SELECT DISTINCT  ?Answer 
                          WHERE
                          {   ?ID  rdfs:label  ?Answer.
						      ?ID  so:hatLeiter ?obj1.
							  ?obj1 rdfs:label ?obj2.
							  FILTER ( regex(str(?obj2),\"` + sub_string + `\"\))
                          }`;
        var queryUrl4 = url_to_endpoint + "?query=" + encodeURIComponent(base_query4) + "&format=json";
        $.ajax({
            url: queryUrl4,
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
                $("#resultsContainer").html("<b>ERROR :</b> No results found!")
            }
        });
    }
});




$('#searchSubmit').on('click', function() {
    userQuery6 = $('#searchField').val();
	var sub_string = userQuery6.substring (31,);
    if (userQuery6.match("^Wer ist der Leiter der Einheit")) {
        var base_query6 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
						
                          SELECT DISTINCT
                            ?name 
                          WHERE
                          {   ?ID  rdfs:label  ?label.
						      ?ID  so:hatLeiter ?leiter.
							  ?leiter  rdfs:label  ?name.
							  FILTER ( regex(str(\"` + sub_string + `\"\) , ?label))
                          }
						  `;
						  
        var queryUrl6 = url_to_endpoint + "?query=" + encodeURIComponent(base_query6) + "&format=json";
        $.ajax({
            url: queryUrl6,
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
                $("#resultsContainer").html("<b>ERROR :</b> No results found!")
            }
        });
    }
});



$('#searchSubmit').on('click', function() {
    userQuery_11 = $('#searchField').val();
	var sub_string = userQuery_11.substring (40,);
    if (userQuery_11.match("^Wie lautet die Telefonnummer von Leiter")) {
        var base_query_11 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
						
                          SELECT DISTINCT
                            ?telefon 
                          WHERE
                          {  
							  ?ID  so:hatLeiter ?obj1.
							  ?obj1 rdfs:label ?obj2.
							  ?obj1 so:telefon ?telefon.
							  FILTER ( regex(str(?obj2) ,\"` + sub_string + `\"\ ))
                          }`;

        var queryUrl_11 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_11) + "&format=json";
        $.ajax({
            url: queryUrl_11,
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
                $("#resultsContainer").html("<b>ERROR :</b> No results found!")
            }
        });
    }
});



$('#searchSubmit').on('click', function() {
    userQuery9 = $('#searchField').val();
		
    if (userQuery9.match("^Wie viele unterleiter hat Einsatzkraft")) {
        var base_query9 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
						                          
								  SELECT  ?Answer9
                          WHERE
                          {     ?s so:takteinheit ?d.
								?s so:einsatzstärkeunterführer ?Answer9.
							  FILTER ( contains(str(\"` + userQuery9 + `\"\) , ?d))
                          }`;
        var queryUrl9 = url_to_endpoint + "?query=" + encodeURIComponent(base_query9) + "&format=json";
        $.ajax({
            url: queryUrl9,
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
                $("#resultsContainer").html("<b>ERROR :</b> No results found!")
            }
        });
    }
});



$('#searchSubmit').on('click', function() {
    userQuery10 = $('#searchField').val();
    if (userQuery10.match("^Wie viele Leiter hat Einsatzkraft")) {
        var base_query10 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
						              
								  SELECT ?Answer10
                          WHERE
                          {     ?s so:takteinheit ?d.
								?s so:einsatzstärkeführer ?Answer10.
							  FILTER ( contains(str(\"` + userQuery10 + `\"\) , ?d))
                          }`;

        var queryUrl10 = url_to_endpoint + "?query=" + encodeURIComponent(base_query10) + "&format=json";
        $.ajax({
            url: queryUrl10,
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
                $("#resultsContainer").html("<b>ERROR :</b> No results found!")
            }
        });
    }
});


$('#searchSubmit').on('click', function() {
    userQuery5 = $('#searchField').val();
	var sub_string = userQuery5.substring (35,);
    if (userQuery5.match("^Wie viele Einheiten hat der Leiter")) {
        var base_query5 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
						 
							SELECT DISTINCT  (COUNT(?Answer) as ?count) 
                          WHERE
                          {   ?ID  rdfs:label  ?Answer.
						      ?ID  so:hatLeiter ?obj1.
							  ?obj1 rdfs:label ?obj2.
							  FILTER ( regex(str(?obj2),\"` + sub_string + `\"\))
                          }`;
        var queryUrl5 = url_to_endpoint + "?query=" + encodeURIComponent(base_query5) + "&format=json";
        $.ajax({
            url: queryUrl5,
            data: "",
            success: function(data) {
                      displayResults(data);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                $("#resultsContainer").html("<b>ERROR :</b> No results found!")
            }
        });
    }
});




$('#searchSubmit').on('click', function() {
    userQuery7 = $('#searchField').val();
    if (userQuery7.match("^Was sind Funknamen der  Leiter")) {
        var base_query7 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
						
                        SELECT DISTINCT  ?obj3 
                          WHERE
                          {   ?ID  so:hatLeiter ?obj1.
							  ?obj1 rdfs:label ?obj2.
                               ?obj1 so:funkbos ?obj3
							  FILTER ( contains(str(\"` + userQuery7 + `\"\),?obj2))
                          }`;
        var queryUrl7 = url_to_endpoint + "?query=" + encodeURIComponent(base_query7) + "&format=json";
        $.ajax({
            url: queryUrl7,
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
                $("#resultsContainer").html("<b>ERROR :</b> No results found!")
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
    $("#tableResults").html(html);
}
