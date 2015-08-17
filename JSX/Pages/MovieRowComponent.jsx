var exports = module.exports;

require("./MovieListComponent.css");

var MovieRow = React.createClass({
	render: function(){
		return(
			<li className = "collection-item avatar custom_li">
				<img className = "custom_img" src = {this.props.movie.url}></img>
				<span className = "title custom_title custom_truncate">{this.props.movie.title}</span>
				<span className = "custom_rating">{this.props.movie.rating}</span>
			</li>
			)
	}
});
exports.MovieRow = MovieRow;
