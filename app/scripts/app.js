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

   if (inputData == null)
   return data;

   for (var i = 0; i < inputData.length; i++)
   {
      data.push({
         title: stringFixedSize(inputData[i].title, 28),
         thumbnail: '/dhus/odata/v1/Products(\'' + inputData[i].id + '\')/Products(\'Thumbnail\')/$value'
      });
   }
   return data;
}


var app = document.querySelector('#app');


var searchAjax = document.querySelector('#searchResults');

searchAjax.addEventListener('core-response',function(e) {
    var useE = e;
    app.data = parseSearchResult(this.response.feed.entry);
});

function processSearch(value)
{
	   console.log(value);
}

app.collections = [
                  'All Collections',
                  'Sentinel 1',
                  'Sentinel 2',
                  'Sentinel 3 - OLCI',
                  'Sentinel 3 - SLSTR'
                ];


app.bulkActions = [
                   'Select All',
                   'Download Now',
                   'Add to Cart',
                   'Transform...',
                   'Delete'
                 ];

//Polymer('searchResults',
//{
//   handleResponse: function(e)
//   {
//      console.log(e);
//      this.$.app.data = parseSearchResult(this.response.feed.entry);
//  }
//}); 
//
//Polymer('search-input',
//{
//   onKeyUp: function(e)
//   {
//      console.log('Search rocks: ' + this.value);
//      if (e.keyCode === 13) // Enter
//      {
//         this.$.searchResults.params = this.value;
//      }
//   },
//   onClick: function(e)
//   {
//      console.log(e);
//      console.log('Search click rocks: ' + this.value); }
//   }
//);

// Listen for template bound event to know when bindings
// have resolved and content has been stamped to the page

app.addEventListener('template-bound', function() {
  console.log('DHuS - NeoUI app is ready to rock!');
});

});
