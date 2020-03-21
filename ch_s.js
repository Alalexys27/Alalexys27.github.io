let toffsetx = 0;
let toffsety = 0;
let list1 = [];
let bx = [];
let by = [];

var dragobject={
	z: 0, x: 0, y: 0, offsetx : null, offsety : null, targetobj : null, dragapproved : 0,
	initialize:function()
		{
		document.onmousedown=this.drag;
		document.onmouseup=function(){this.dragapproved=0;
		window.toffsetx = [];
        	window.toffsety = [];
		window.list1 = [];
		window.bx = [];
		window.by = [];
		}
	},

drag:function(e){
	var evtobj=window.event? window.event : e
	this.targetobj=window.event? event.srcElement : e.target

		if (this.targetobj.className=="dragt" || this.targetobj.className=="dragb")
		{
			this.dragapproved=1
			if (isNaN(parseInt(this.targetobj.style.left)))
				{this.targetobj.style.left=0}
			if (isNaN(parseInt(this.targetobj.style.top)))
				{this.targetobj.style.top=0}
			this.offsetx=parseInt(this.targetobj.style.left)
			this.offsety=parseInt(this.targetobj.style.top)
			this.x=evtobj.clientX
			this.y=evtobj.clientY
			
				if (this.targetobj.className=="dragt")
				{
					window.toffsetx = this.offsetx;
					window.toffsety = this.offsety;
				}

                    	window.list1 = document.querySelectorAll(".dragb");

			for (let i = 0; i < window.list1.length; i++) 
			{
				window.bx[i] = parseInt(window.list1.item(i).style.left);
				window.by[i] = parseInt(window.list1.item(i).style.top);
			}
			
			if (evtobj.preventDefault)
				evtobj.preventDefault()
		
			document.onmousemove=dragobject.moveit
		}
	},
moveit:function(e)
{
	var evtobj=window.event? window.event : e
	
	if (this.dragapproved==1)
	{
		this.targetobj.style.left=this.offsetx+evtobj.clientX-this.x+"px";
		this.targetobj.style.top=this.offsety+evtobj.clientY-this.y+"px"; 	

		if (this.targetobj.className=="dragt")
		{	
		 	for (let i = 0; i < window.list1.length; i++) 
			{
				let l1=parseInt(window.list1.item(i).style.left);
				let l2=parseInt(this.targetobj.style.left);
				let t1=parseInt(window.list1.item(i).style.top);
				let t2=parseInt(this.targetobj.style.top);
				
				if((l1-20)>l2 && t1>(t2+20) && (l2+315) > (l1 + 50) && (t1+10)<(t2+410)){
				window.list1.item(i).style.left = (window.bx[i] + parseInt(this.targetobj.style.left) - window.toffsetx) + 'px';
                		window.list1.item(i).style.top =  (window.by[i] + parseInt(this.targetobj.style.top)   - window.toffsety) + 'px';
				}
			}
		}				
	return false
	}
}	
}
dragobject.initialize()

