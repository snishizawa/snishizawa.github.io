function navi(){

	var html="";
	html += '<div id="masthead">';
	html += '<div id="masthead_text">';
	html += '<a href="../index.html">DAシンポジウム 2016</a>';
	html += '</div>';
	html += '</div>';
	
	document.write(html);
	
	document.write("data");
		

	$.ajax({
		url: "navi.html",
		datatype: "html",
		async: false,
/*		success: function(data){
			document.write(data);*/
	    success: function(xhr, status, err) {
		   alert('HTML読み出しで問題がありました:' + url);

		}
	    error: function(xhr, status, err) {
   		   alert('HTML読み出しで問題がありました:' + url);
    	}
	});
/*	

	var html="";
	html += '<div id="masthead">';
	html += '<div id="masthead_text">';
	html += '<a href="../index.html">DAシンポジウム 2016</a>';
	html += '</div>';
	html += '</div>';
	
	document.write(html);

*/	
}
