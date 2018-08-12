function search()
{
	var pre=["https://www.google.com/search?q=","https://in.search.yahoo.com/search?p=","https://www.ask.com/web?q=","https://www.bing.com/search?q="];
	var data=id("search-bar").value;
	window.open(pre[id("engineid").value]+data,'_blank');
}
id("search-bar")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
		id("search-bar").value="";
        search();
    }
});
time();
function time()
{
	var d=Date();
	idinner("time","<font size='5'>"+d+"</font");
}
setInterval(time,1000);