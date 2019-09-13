function runAtStart {
	var a = document.getElementById("About");
	a.onclick = function() {
		ReactDOM.render(<About />, document.getElementById("middle"));
	}
	
}