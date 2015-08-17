var exports = module.exports;
var MovieRow = require("./MovieRowComponent").MovieRow;
require("./MovieListComponent.css");


var MovieTable = React.createClass({
	render : function(){
		var rows = [];
		this.props.moviesList.forEach(function(movie){
			rows.push(<MovieRow movie = {movie}/>);
		})
		return(
			<ul className = "collection no-border">
				{rows}
			</ul>
		)
	}
})
exports.MovieTable = MovieTable; 