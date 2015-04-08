
document.addEventListener('polymer-ready', function() {


function stringFixedSize(string, maxLength)
{
	// Nothing to do
   if (string.length <= maxLength)
   {
      return string;
   }
   
   //Trim imput string
   var trimmedString = string.replace(' *',' ');
   
   var leftLength = maxLength / 2;
   var rightLength = leftLength - 3;
   var rightBound = trimmedString.length - rightLength;
   return trimmedString.substring(0, leftLength) + '...' +
   trimmedString.substring(rightBound);
}

function parseSearchResult(inputData)
{
   var data = [];
   for (var i = 0; i < inputData.length; i++)
   {
      data.push({
         title: stringFixedSize(inputData[i].title, 28),
         thumbnail: 'http://dhus.gael.fr/dhus/odata/v1/Products(\'' + inputData[i].id + '\')/Products(\'Thumbnail\')/$value'
      });
   }
   return data;
}

var searchAjax = document.querySelector('#searchResults');

searchAjax.addEventListener('core-response',function(e) {
    var useE = e;
    var app = document.querySelector('#app');
    app.data = parseSearchResult(this.response.feed.entry);
    
    
});


// Listen for template bound event to know when bindings
// have resolved and content has been stamped to the page
app.addEventListener('template-bound', function() {
  console.log('DHuS - NeoUI app is ready to rock!');
});



});


// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
//})(wrap(document));