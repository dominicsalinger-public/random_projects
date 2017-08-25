<!DOCTYPE html>
<html>
  <head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Dominic Pearson</title>
  <script src="js/react/react.js"></script>
  <script src="js/react/react-dom.js"></script>
  <script src="js/browser.min.js"></script>

  </head>
  <body>

    <div id="example"></div>
    <script type="text/babel">

    var Movie = React.createClass({
      render: function () {
        return (
          <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.genre}</h2>
          </div>
        );
      }
    });

    ReactDOM.render(<Movie title="Lord of the Rings" genre="Adventure Fantasy"/>, document.getElementById('example'));
    </script>
  </body>
</html>
