var moviesJson = require("../../output.js").moviesJson;
var MovieTable = require("./MovieTableComponent").MovieTable;

var MovieListComponent = React.createClass({
	render : function(){
		return (
			<div className = "row">
				<div className = "col s12">
					<h2>Movie Lists</h2>
					<MovieTable moviesList = {moviesJson.movies}/>
				</div>
			</div>
		)
	}
});

React.render(<MovieListComponent/>, 
	document.getElementById('content'));