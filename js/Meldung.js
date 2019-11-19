     var url_to_endpoint = "http://localhost:3030/LAB_DATA/sparql";
	 var ul, li;
     $( "#Meldung1" ).click(function() {
      $("#searchField").val("Was sind die Betreffzeilen der Nachrichten?");
    
       $('#searchSubmit').one('click', function() {
	    
        userQueryMeldung1 = $("#searchField").val("Was sind die Betreffzeilen der Nachrichten?");
        var base_queryMeldung1 =`prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?mel1
                          WHERE
                          {   
							  ?ID so:betreff ?mel1.
                          }ORDER BY ASC(?mel1) LIMIT 50`;
						                            
        var queryUrlMeldung1 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryMeldung1) + "&format=json";
			
        $.ajax({
          url: queryUrlMeldung1,
          data: "",
          success: function(data) {
            displayResults(data);
          },
          error: function(XMLHttpRequest, textStatus, errorThrown) {
            $("#resultsContainer").html("<b>ERROR :</b> No results found!")
          }
        });
      });
	});
	
	$( "#Meldung2" ).click(function() {
      $("#searchField").val("Was ist der Inhalt mit dem Betreff Einsatztagebuch?");
    
       $('#searchSubmit').one('click', function() {
	    
        userQueryMeldung2 = $("#searchField").val("Was ist der Inhalt mit dem Betreff Einsatztagebuch?");
        var base_queryMeldung2 =`prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?mel2
                          WHERE
                          {   
                             ?ID  so:betreff  "Einsatztagebuch". 
							 ?ID  so:meldung ?mel2.  
                          }LIMIT 50`;
						                            
        var queryUrlMeldung2 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryMeldung2) + "&format=json";
		
        $.ajax({
          url: queryUrlMeldung2,
          data: "",
          success: function(data) {
            displayResults(data);
          },
          error: function(XMLHttpRequest, textStatus, errorThrown) {
            $("#resultsContainer").html("<b>ERROR :</b> No results found!")
          }
        });
      });
	});
		
	$( "#Meldung3" ).click(function() {
      $("#searchField").val("Wer ist der Empfänger mit dem Betreff Auftrag?");
    
       $('#searchSubmit').one('click', function() {
	    
        userQueryMeldung3 = $("#searchField").val("Wer ist der Empfänger mit dem Betreff Auftrag?");
        var base_queryMeldung3 =`prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?mel3
                          WHERE
                          {   
                              ?ID so:betreff "Auftrag".
                              ?ID so:nachrichtEmpfangen ?mel3.
                          }ORDER BY (?mel3) LIMIT 50`;
						                            
        var queryUrlMeldung3 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryMeldung3) + "&format=json";
		
        $.ajax({
          url: queryUrlMeldung3,
          data: "",
          success: function(data) {
            displayResults(data);
          },
          error: function(XMLHttpRequest, textStatus, errorThrown) {
            $("#resultsContainer").html("<b>ERROR :</b> No results found!")
          }
        });
      });
	});
	$( "#Meldung4" ).click(function() {
      $("#searchField").val("Wer ist der Absender mit dem Betreff Auftrag?");
    
       $('#searchSubmit').one('click', function() {
	    
        userQueryMeldung4 = $("#searchField").val("Wer ist der Absender mit dem Betreff Auftrag?");
        var base_queryMeldung4 =`prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?mel4
                          WHERE
                          {   
                                 ?ID so:betreff "Auftrag".
								 ?ID so:nachrichtVersenden ?mel4.   
                          }ORDER BY (?mel4) LIMIT 50`;
						                            
        var queryUrlMeldung4 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryMeldung4) + "&format=json";
		
        $.ajax({
          url: queryUrlMeldung4,
          data: "",
          success: function(data) {
            displayResults(data);
          },
          error: function(XMLHttpRequest, textStatus, errorThrown) {
            $("#resultsContainer").html("<b>ERROR :</b> No results found!")
          }
        });
      });
	});
	
	$( "#Meldung5" ).click(function() {
      $("#searchField").val("Wie viele Nachrichten hat den Status Erledigt?");
    
       $('#searchSubmit').one('click', function() {
	    
        userQueryMeldung5 = $("#searchField").val("Wie viele Nachrichten hat den Status Erledigt?");
        var base_queryMeldung5 =`prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT  (COUNT(distinct ?mel5) as ?rows)
                          WHERE
                          {     ?ID rdf:type so:Nachricht.
						        ?ID  so:status  ?obj4.
								?ID  so:meldung ?mel5.
                         }LIMIT 50`;
			                            
        var queryUrlMeldung5 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryMeldung5) + "&format=json";
		
        $.ajax({
          url: queryUrlMeldung5,
          data: "",
          success: function(data) {
            displayResults(data);
          },
          error: function(XMLHttpRequest, textStatus, errorThrown) {
            $("#resultsContainer").html("<b>ERROR :</b> No results found!")
          }
        });
      });
	});
	
	
	
	$( "#Meldung6" ).click(function() {
      $("#searchField").val("Wie ist der Status der Betreff Einsatzbefehl?");
    
       $('#searchSubmit').one('click', function() {
	    
        userQueryMeldung6 = $("#searchField").val("Wie ist der Status der Betreff Einsatzbefehl?");
        var base_queryMeldung6 =`prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?mel6
                          WHERE
                          {     
						     ?s so:betreff "Einsatzbefehl".
							 ?s so:status ?mel6. 
						  
                          }LIMIT 50`;
						                            
        var queryUrlMeldung6 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryMeldung6) + "&format=json";
		
        $.ajax({
          url: queryUrlMeldung6,
          data: "",
          success: function(data) {
            displayResults(data);
          },
          error: function(XMLHttpRequest, textStatus, errorThrown) {
            $("#resultsContainer").html("<b>ERROR :</b> No results found!")
          }
        });
      });
	});
	
	
	
	$( "#Meldung7" ).click(function() {
      $("#searchField").val("Wie ist der lagevortrag mit dem Betreff Kräftedisposition?");
    
       $('#searchSubmit').one('click', function() {
	    
        userQueryMeldung7 = $("#searchField").val("Wie ist der lagevortrag mit dem Betreff Kräftedisposition?");
        var base_queryMeldung7 =`prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?mel7
                          WHERE
                          { 
     						?s so:betreff "Kräftedisposition".
							?s so:lagevortrag ?mel7.
         						
                          }LIMIT 50`;
						                            
        var queryUrlMeldung7 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryMeldung7) + "&format=json";
		
        $.ajax({
          url: queryUrlMeldung7,
          data: "",
          success: function(data) {
            displayResults(data);
          },
          error: function(XMLHttpRequest, textStatus, errorThrown) {
            $("#resultsContainer").html("<b>ERROR :</b> No results found!")
          }
        });
      });
	});
		
	$( "#Meldung8" ).click(function() {
      $("#searchField").val("Welches sind die Status von Nachrichten?");
    
       $('#searchSubmit').one('click', function() {
	    
        userQueryMeldung8 = $("#searchField").val("Welches sind die Status von Nachrichten?");
        var base_queryMeldung8 =`prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT  ?mel8
                          WHERE
                          {     ?ID rdf:type so:Nachricht.
						        ?ID  so:status  ?mel8.
								?ID  so:meldung ?m.
                         }LIMIT 5`;
			                            
        var queryUrlMeldung8 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryMeldung8) + "&format=json";
		
        $.ajax({
          url: queryUrlMeldung8,
          data: "",
          success: function(data) {
            displayResults(data);
          },
          error: function(XMLHttpRequest, textStatus, errorThrown) {
            $("#resultsContainer").html("<b>ERROR :</b> No results found!")
          }
        });
      });
	});		
	
	$( "#Meldung9" ).click(function() {
      $("#searchField").val("Welche Nachrichten haben Absender Alle Einsatzkräfte?");
    
       $('#searchSubmit').one('click', function() {
	    
        userQueryMeldung9 = $("#searchField").val("Welche Nachrichten haben Absender Alle Einsatzkräfte?");
        var base_queryMeldung9 =`prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						  SELECT DISTINCT ?b
                          WHERE
                          {   
                                 ?ID so:meldung ?b.
								 ?ID so:nachrichtVersenden "Alle Einsatzkräfte".   
                          }ORDER BY DESC(?b) LIMIT 50`;
			                            
        var queryUrlMeldung9 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryMeldung9) + "&format=json";
		
        $.ajax({
          url: queryUrlMeldung9,
          data: "",
          success: function(data) {
            displayResults(data);
          },
          error: function(XMLHttpRequest, textStatus, errorThrown) {
            $("#resultsContainer").html("<b>ERROR :</b> No results found!")
          }
        });
      });
	});		
	
	
	$( "#Meldung10" ).click(function() {
      $("#searchField").val("Welche Nachrichten haben Emfänger Alle Einsatzkräfte?");
    
       $('#searchSubmit').one('click', function() {
	    
        userQueryMeldung10 = $("#searchField").val("Welche Nachrichten haben Emfänger Alle Einsatzkräfte?");
        var base_queryMeldung10 =`prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						  SELECT DISTINCT ?b
                          WHERE
                          {   
                                 ?ID so:meldung ?b.
								 ?ID so:nachrichtEmpfangen "Alle Einsatzkräfte".   
                          }ORDER BY DESC(?b) LIMIT 50`;
			                            
        var queryUrlMeldung10 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryMeldung10) + "&format=json";
		
        $.ajax({
          url: queryUrlMeldung10,
          data: "",
          success: function(data) {
            displayResults(data);
          },
          error: function(XMLHttpRequest, textStatus, errorThrown) {
            $("#resultsContainer").html("<b>ERROR :</b> No results found!")
          }
        });
      });
	});		
	
	$( "#Meldung12" ).click(function() {
      $("#searchField").val("Wer sind alle Absender?");
    
       $('#searchSubmit').one('click', function() {
	    
        userQueryMeldung12 = $("#searchField").val("Wer sind alle Absender?");
        var base_queryMeldung12 =`prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						  SELECT DISTINCT ?b
                          WHERE
                          {   
                                
								 ?ID so:nachrichtVersenden ?b.   
                          }ORDER BY ASC(?b) LIMIT 80`;
			                            
        var queryUrlMeldung12 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryMeldung12) + "&format=json";
		
        $.ajax({
          url: queryUrlMeldung12,
          data: "",
          success: function(data) {
            displayResults(data);
          },
          error: function(XMLHttpRequest, textStatus, errorThrown) {
            $("#resultsContainer").html("<b>ERROR :</b> No results found!")
          }
        });
      });
	});		
	
	
	$( "#Meldung14" ).click(function() {
      $("#searchField").val("Wer sind alle Emfänger?");
    
       $('#searchSubmit').one('click', function() {
	    
        userQueryMeldung14 = $("#searchField").val("Wer sind alle Emfänger?");
        var base_queryMeldung14 =`prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						  SELECT DISTINCT ?b
                          WHERE
                          {   
                                
								 ?ID so:nachrichtEmpfangen ?b.   
                          }ORDER BY ASC(?b) LIMIT 80`;
			                            
        var queryUrlMeldung14 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryMeldung14) + "&format=json";
		
        $.ajax({
          url: queryUrlMeldung14,
          data: "",
          success: function(data) {
            displayResults(data);
          },
          error: function(XMLHttpRequest, textStatus, errorThrown) {
            $("#resultsContainer").html("<b>ERROR :</b> No results found!")
          }
        });
      });
	});		
	
      function displayResults(data) {
        var html = "";
        $.each(data["results"]["bindings"], function(i,l) {
          $.each(l, function(k, v) {
            if(i%2 == 0) {
              html += "<tr class=\"unevenRow\">";
            } else {
              html += "<tr class=\"evenRow\">";
            }
            html += "<td> "+ v["value"] + "</td></tr>";
          });
        });
        console.log(data);
        $("#tableResults").html(html);
      }