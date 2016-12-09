window.onload = main;

function main()
{
    var name = getParameterByName("name");
    
    console.log(name);
    var data = {name:name};
    
    $.ajax({
		url: 'http://localhost:3000/company',
		data:{data:JSON.stringify(data)},							
		success: function(data) {
			console.log('success');
			console.log(data);
			//g_data = data;
			//setupPage(data);

		},
		error: function(data) {
			console.log('error');
			console.log(data);
			
			// two arguments: the id of the Timeline container (no '#')
			// and the JSON object or an instance of TL.TimelineConfig created from
			// a suitable JSON object
			//window.timeline = new TL.Timeline('timeline-embed', 'marktwain_test.json');
		}
    });
}

function getParameterByName(name) {
    url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}