(function () {
   var App =React.createClass({
       render:function () {
           return(
               <div>
                   <h1>Hello  testinorld</h1>
                   <h2>sds</h2>
                   <Test/>
               </div>
           );
       }
   });

    var Test = React.createClass({
        render:function () {
            return (
                <h2>Testing React Page 2s</h2>
            )
        }
    })

    ReactDOM.render(
        <App/>,
        document.getElementById("container"));
})();
