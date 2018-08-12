var cheight = document.body.clientHeight;
var cwidth = document.body.clientWidth;
function id(name)
{
	return document.getElementById(name);
}
function idinner(name,data)
{
	id(name).innerHTML=data;
}
function styleid(name,property,val1,val2)
{
	if(property=="height")
	id(name).style.height = val1+"px";
    if(property=="width")
    id(name).style.width = val1+"px";
    if(property=="margin-left")
	id(name).style.marginLeft = val1+"px";
    if(property=="margin-right")
	id(name).style.marginRight = val1+"px";
    if(property=="margin-top")
	id(name).style.marginTop = val1+"px";
    if(property=="margin-bottom")
	id(name).style.marginBottom = val1+"px";
    if(property=="center")
	{    
     var width=id(name).clientWidth;
	 var height=id(name).clientHeight;
	 //alert(width+","+height);
	 var w=(cwidth/2)-(width/2)+val1;
	 var h=(cheight/2)-(height/2)+val2;
	 styleid(name,"margin-left",w);
	 styleid(name,"margin-top",h);
	}
}