//var url_to_endpoint = "http://localhost:3030/LAB_DATA/sparql";
var url_to_endpoint = "http://localhost:3030/solide_25_test/sparql";


$('#searchSubmit').on('click', function() {
    userQuery_17 = $('#searchField').val();
    if (userQuery_17.match("^Welche Aufträge haben den Einheit")) {
        var base_query_17 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 						
                           SELECT ?a
							WHERE {
								 ?ID rdfs:label ?obj.
								 ?ID so:hatAuftrag ?a.
							  FILTER ( contains(str(\"` + userQuery_17 + `\"\) , ?obj))
                          }`;
        var queryUrl_17 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_17) + "&format=json";
        $.ajax({
            url: queryUrl_17,
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
    userQuery_18 = $('#searchField').val();
    if (userQuery_18.match("^Welche Einheit hat den Auftrag")) {
        var base_query_18 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
                          SELECT DISTINCT
                            ?Answer2 
                          WHERE
                          {   
						      ?ID  so:hatAuftrag ?label.
							  ?ID  rdfs:label  ?Answer2.
							  FILTER ( contains(str(\"` + userQuery_18 + `\"\) , ?label))
                          }
						  LIMIT 50`;
        var queryUrl_18 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_18) + "&format=json";
        $.ajax({
            url: queryUrl_18,
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
    userQuery = $('#searchField').val();
    if (userQuery.match("^Wie viele Einheiten haben den  Auftrag")) {
        var base_query_1 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
                         SELECT (count(DISTINCT ?auf5) as ?count)
							WHERE {
								  ?ID rdfs:label ?auf5.
								  ?ID  so:hatAuftrag ?obj.
								FILTER ( contains(str(\"` + userQuery + `\"\) , ?obj))
							}`;
        var queryUrl = url_to_endpoint + "?query=" + encodeURIComponent(base_query_1) + "&format=json";
        $.ajax({
            url: queryUrl,
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
    userQuery_25 = $('#searchField').val();
	var sub_string = userQuery_25.substring (36,);
    if (userQuery_25.match("^Was ist der Inhalt mit dem  Betreff")) {
        var base_query_25 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
						
                        SELECT DISTINCT ?meldung
								WHERE {
								  ?s so:meldung ?meldung.
								  ?s so:zeitGesendet ?time.
								  ?s so:betreff ?betreff.
								
								 FILTER ( contains((\"` + sub_string + `\"\),?betreff) )
								}
								ORDER BY DESC(?time)
						  LIMIT 10`;
						  

        var queryUrl_25 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_25) + "&format=json";
        $.ajax({
            url: queryUrl_25,
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
    userQuery_22 = $('#searchField').val();
	var sub_string = userQuery_22.substring (39,);
    if (userQuery_22.match("^Wer ist der Empfänger mit dem  Betreff")) {
        var base_query_22 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
						
                          SELECT DISTINCT
                            ?d 
                          WHERE
                          {   ?ID  so:betreff   ?betreff. 
								?ID  so:nachrichtEmpfangen ?d.
							  FILTER ( regex(str(\"` + sub_string + `\"\) , ?betreff))
                          }
						  LIMIT 50`;

        var queryUrl_22 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_22) + "&format=json";
        $.ajax({
            url: queryUrl_22,
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
    userQuery_23 = $('#searchField').val();
	var sub_string = userQuery_23.substring (38,);
    if (userQuery_23.match("^Wer ist der Absender mit dem  Betreff")) {
        var base_query_23 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
						
                          SELECT DISTINCT
                            ?d 
                          WHERE
                          {   ?ID  so:betreff   ?betreff. 
								?ID  so:nachrichtVersenden ?d.
							  FILTER ( contains(str(\"` + sub_string + `\"\) , ?betreff))
                          }
						  LIMIT 50`;

        var queryUrl_23 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_23) + "&format=json";
        $.ajax({
            url: queryUrl_23,
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
    userQuery_24 = $('#searchField').val();
	var sub_string = userQuery_24.substring (38,);
    if (userQuery_24.match("^Wie viele Nachrichten hat den  Status")) {
        var base_query_24 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
						
						SELECT  DISTINCT  (COUNT(distinct ?d) as ?rows)
                          WHERE
                          {     ?ID rdf:type so:Nachricht.
						        ?ID  so:status  ?obj4.
								?ID  so:meldung ?d.
							  FILTER (regex (str(\"` + sub_string + `\"\),?obj4))
                          } `;

        var queryUrl_24 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_24) + "&format=json";
        $.ajax({
            url: queryUrl_24,
            data: "",
            success: function(data) {
                  
					displayResults(data);
				
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                $("#resultsContainer").html("<b>ERROR :</b> Input could not be resolved to a query!")
            }
        });
    }
});


$('#searchSubmit').on('click', function() {
    userQuery_26 = $('#searchField').val();
	var sub_string = userQuery_26.substring (32,);
    if (userQuery_26.match("^Wie ist der Status der  Betreff")) {
        var base_query_26 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
						
                        SELECT DISTINCT ?obj3
								WHERE {													 
								  ?s so:betreff ?betreff.
								  ?s so:status ?obj3.
								 FILTER ( regex((\"` + sub_string + `\"\),?betreff) )
								}								
						  `;

        var queryUrl_26 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_26) + "&format=json";
        $.ajax({
            url: queryUrl_26,
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
    userQuery_27 = $('#searchField').val();
	var sub_string = userQuery_27.substring (41,);
    if (userQuery_27.match("^Wie ist der lagevortrag mit dem  Betreff")) {
        var base_query_27 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
						
                          SELECT DISTINCT
                            ?obj3 
                          WHERE
                          {   ?s so:betreff ?b .
							?s so:lagevortrag ?obj3.
							  FILTER ( regex(str(\"` + sub_string + `\"\) , ?b))
                          }
						  `;
        var queryUrl_27 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_27) + "&format=json";
        $.ajax({
            url: queryUrl_27,
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
    userQuery_27 = $('#searchField').val();
	var sub_string = userQuery_27.substring (34,);
    if (userQuery_27.match("^Welche Nachrichten haben  Absender")) {
        var base_query_27 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
						
                          SELECT DISTINCT
                          ?b  WHERE
                          { 
						       ?ID so:meldung ?b.
								 ?ID so:nachrichtVersenden ?obj.   
                          
							  FILTER ( regex(str(\"` + sub_string + `\"\) , ?obj))
                          }ORDER BY  DESC(?b) LIMIT 50
						  `;
        var queryUrl_27 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_27) + "&format=json";
        $.ajax({
            url: queryUrl_27,
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
    userQuery_27 = $('#searchField').val();
	var sub_string = userQuery_27.substring (35,);
    if (userQuery_27.match("^Welche Nachrichten haben  Emfänger")) {
        var base_query_27 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
						
                          SELECT DISTINCT
                          ?b  WHERE
                          { 
						       ?ID so:meldung ?b.
								 ?ID so:nachrichtEmpfangen ?obj.   
                          
							  FILTER ( regex(str(\"` + sub_string + `\"\) , ?obj))
                          }ORDER BY DESC(?b) LIMIT 50
						  `;
        var queryUrl_27 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_27) + "&format=json";
        $.ajax({
            url: queryUrl_27,
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
