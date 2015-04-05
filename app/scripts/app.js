(function (document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');
  app.appName = 'Data Hub Service - DHuS';

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('template-bound', function() {
    console.log('Our app is ready to rock!');
  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));


var app = document.querySelector('#app');
var input_data = {"feed": {
	   "xmlns:opensearch": "http://a9.com/-/spec/opensearch/1.1/",
	   "link": [
	      {
	         "rel": "self",
	         "type": "application/atom+xml",
	         "href": "http://dhus.gael.fr/dhus/api/search?q=*&start=0&rows=10"
	      },
	      {
	         "rel": "first",
	         "type": "application/atom+xml",
	         "href": "http://dhus.gael.fr/dhus/api/search?q=*&start=0&rows=10"
	      },
	      {
	         "rel": "next",
	         "type": "application/atom+xml",
	         "href": "http://dhus.gael.fr/dhus/api/search?q=*&start=10&rows=10"
	      },
	      {
	         "rel": "last",
	         "type": "application/atom+xml",
	         "href": "http://dhus.gael.fr/dhus/api/search?q=*&start=2784&rows=10"
	      },
	      {
	         "rel": "search",
	         "type": "application/opensearchdescription+xml",
	         "href": "opensearch_description.xml"
	      }
	   ],
	   "xmlns": "http://www.w3.org/2005/Atom",
	   "opensearch:itemsPerPage": "10",
	   "id": "http://dhus.gael.fr/dhus/api/search?q=*",
	   "author": {"name": "Testing Data Hub"},
	   "title": "Testing Data Hub search results for: *",
	   "updated": "2015-04-05T16:10:22.658Z",
	   "opensearch:totalResults": "2785",
	   "entry": [
	      {
	         "summary": "Date: 2015-01-12T20:41:18.695Z, Instrument: SAR-C SAR, Mode: VV, Satellite: Sentinel-1, Size: 4 GB",
	         "id": "1a16b03f-260a-4cd4-b6f2-3453fa2ad362",
	         "title": "S1A_IW_SLC__1SSV_20150112T204118_20150112T204146_004143_00505A_C78A",
	         "str": [
	            {
	               "content": "IW",
	               "name": "sensoroperationalmode"
	            },
	            {
	               "content": "IW1 IW2 IW3",
	               "name": "swathidentifier"
	            },
	            {
	               "content": "DESCENDING",
	               "name": "orbitdirection"
	            },
	            {
	               "content": "SLC",
	               "name": "producttype"
	            },
	            {
	               "content": "Sentinel-1",
	               "name": "platformname"
	            },
	            {
	               "content": "0000-000A",
	               "name": "platformidentifier"
	            },
	            {
	               "content": "Synthetic Aperture Radar (C-band)",
	               "name": "instrumentname"
	            },
	            {
	               "content": "SAR-C SAR",
	               "name": "instrumentshortname"
	            },
	            {
	               "content": "S1A_IW_SLC__1SSV_20150112T204118_20150112T204146_004143_00505A_C78A.SAFE",
	               "name": "filename"
	            },
	            {
	               "content": "SAFE",
	               "name": "format"
	            },
	            {
	               "content": "S",
	               "name": "productclass"
	            },
	            {
	               "content": "VV",
	               "name": "polarisationmode"
	            },
	            {
	               "content": "NOMINAL",
	               "name": "acquisitiontype"
	            },
	            {
	               "content": "ARCHIVED",
	               "name": "status"
	            },
	            {
	               "content": "4 GB",
	               "name": "size"
	            },
	            {
	               "content": "<gml:Polygon srsName=\"http://www.opengis.net/gml/srs/epsg.xml#4326\" xmlns:gml=\"http://www.opengis.net/gml\">\n   <gml:outerBoundaryIs>\n      <gml:LinearRing>\n         <gml:coordinates>40.177982,142.267975 40.575623,139.296249 42.274044,139.654526 41.877094,142.707260 40.177982,142.267975<\/gml:coordinates>\n      <\/gml:LinearRing>\n   <\/gml:outerBoundaryIs>\n<\/gml:Polygon>",
	               "name": "gmlfootprint"
	            },
	            {
	               "content": "POLYGON ((142.267975 40.177982,139.296249 40.575623,139.654526 42.274044,142.707260 41.877094,142.267975 40.177982))",
	               "name": "footprint"
	            },
	            {
	               "content": "S1A_IW_SLC__1SSV_20150112T204118_20150112T204146_004143_00505A_C78A",
	               "name": "identifier"
	            }
	         ],
	         "int": [
	            {
	               "content": "20570",
	               "name": "missiondatatakeid"
	            },
	            {
	               "content": "9",
	               "name": "slicenumber"
	            },
	            {
	               "content": "4143",
	               "name": "orbitnumber"
	            },
	            {
	               "content": "4143",
	               "name": "lastorbitnumber"
	            },
	            {
	               "content": "118",
	               "name": "relativeorbitnumber"
	            },
	            {
	               "content": "118",
	               "name": "lastrelativeorbitnumber"
	            }
	         ],
	         "link": [
	            {"href": "http://dhus.gael.fr/dhus/odata/v1/Products('1a16b03f-260a-4cd4-b6f2-3453fa2ad362')/$value"},
	            {
	               "rel": "alternative",
	               "href": "http://dhus.gael.fr/dhus/odata/v1/Products('1a16b03f-260a-4cd4-b6f2-3453fa2ad362')/"
	            },
	            {
	               "rel": "icon",
	               "href": "http://dhus.gael.fr/dhus/odata/v1/Products('1a16b03f-260a-4cd4-b6f2-3453fa2ad362')/Products('Quicklook')/$value"
	            }
	         ],
	         "bool": {
	            "content": "true",
	            "name": "processed"
	         },
	         "date": [
	            {
	               "content": "2015-01-12T20:41:18.695Z",
	               "name": "beginposition"
	            },
	            {
	               "content": "2015-01-12T20:41:46.99Z",
	               "name": "endposition"
	            },
	            {
	               "content": "2015-03-11T09:34:32.994Z",
	               "name": "ingestiondate"
	            }
	         ]
	      },
	      {
	         "summary": "Date: 2015-02-11T06:39:41.899Z, Instrument: SAR-C SAR, Mode: VV VH, Satellite: Sentinel-1, Size: 1 GB",
	         "id": "469c1238-0309-4c99-9626-00378901ff5c",
	         "title": "S1A_IW_GRDH_1SDV_20150211T063941_20150211T064001_004572_0059FE_7DB3",
	         "str": [
	            {
	               "content": "IW",
	               "name": "sensoroperationalmode"
	            },
	            {
	               "content": "IW",
	               "name": "swathidentifier"
	            },
	            {
	               "content": "DESCENDING",
	               "name": "orbitdirection"
	            },
	            {
	               "content": "GRD",
	               "name": "producttype"
	            },
	            {
	               "content": "Sentinel-1",
	               "name": "platformname"
	            },
	            {
	               "content": "0000-000A",
	               "name": "platformidentifier"
	            },
	            {
	               "content": "Synthetic Aperture Radar (C-band)",
	               "name": "instrumentname"
	            },
	            {
	               "content": "SAR-C SAR",
	               "name": "instrumentshortname"
	            },
	            {
	               "content": "S1A_IW_GRDH_1SDV_20150211T063941_20150211T064001_004572_0059FE_7DB3.SAFE",
	               "name": "filename"
	            },
	            {
	               "content": "SAFE",
	               "name": "format"
	            },
	            {
	               "content": "S",
	               "name": "productclass"
	            },
	            {
	               "content": "VV VH",
	               "name": "polarisationmode"
	            },
	            {
	               "content": "NOMINAL",
	               "name": "acquisitiontype"
	            },
	            {
	               "content": "ARCHIVED",
	               "name": "status"
	            },
	            {
	               "content": "1 GB",
	               "name": "size"
	            },
	            {
	               "content": "<gml:Polygon srsName=\"http://www.opengis.net/gml/srs/epsg.xml#4326\" xmlns:gml=\"http://www.opengis.net/gml\">\n   <gml:outerBoundaryIs>\n      <gml:LinearRing>\n         <gml:coordinates>48.942291,-5.526664 49.332020,-8.924911 50.475788,-8.650783 50.084972,-5.172111 48.942291,-5.526664<\/gml:coordinates>\n      <\/gml:LinearRing>\n   <\/gml:outerBoundaryIs>\n<\/gml:Polygon>",
	               "name": "gmlfootprint"
	            },
	            {
	               "content": "POLYGON ((-5.526664 48.942291,-8.924911 49.332020,-8.650783 50.475788,-5.172111 50.084972,-5.526664 48.942291))",
	               "name": "footprint"
	            },
	            {
	               "content": "S1A_IW_GRDH_1SDV_20150211T063941_20150211T064001_004572_0059FE_7DB3",
	               "name": "identifier"
	            }
	         ],
	         "int": [
	            {
	               "content": "23038",
	               "name": "missiondatatakeid"
	            },
	            {
	               "content": "0",
	               "name": "slicenumber"
	            },
	            {
	               "content": "4572",
	               "name": "orbitnumber"
	            },
	            {
	               "content": "4572",
	               "name": "lastorbitnumber"
	            },
	            {
	               "content": "125",
	               "name": "relativeorbitnumber"
	            },
	            {
	               "content": "125",
	               "name": "lastrelativeorbitnumber"
	            }
	         ],
	         "link": [
	            {"href": "http://dhus.gael.fr/dhus/odata/v1/Products('469c1238-0309-4c99-9626-00378901ff5c')/$value"},
	            {
	               "rel": "alternative",
	               "href": "http://dhus.gael.fr/dhus/odata/v1/Products('469c1238-0309-4c99-9626-00378901ff5c')/"
	            },
	            {
	               "rel": "icon",
	               "href": "http://dhus.gael.fr/dhus/odata/v1/Products('469c1238-0309-4c99-9626-00378901ff5c')/Products('Quicklook')/$value"
	            }
	         ],
	         "bool": {
	            "content": "true",
	            "name": "processed"
	         },
	         "date": [
	            {
	               "content": "2015-02-11T06:39:41.899Z",
	               "name": "beginposition"
	            },
	            {
	               "content": "2015-02-11T06:40:01.008Z",
	               "name": "endposition"
	            },
	            {
	               "content": "2015-03-11T09:34:32.9Z",
	               "name": "ingestiondate"
	            }
	         ]
	      },
	      {
	         "summary": "Date: 2015-01-24T14:08:23.862Z, Instrument: SAR-C SAR, Mode: HH HV, Satellite: Sentinel-1, Size: 519 MB",
	         "id": "2334eada-b5b9-4a7a-a786-95c4c851870e",
	         "title": "S1A_S6_GRDH_1SDH_20150124T140823_20150124T140848_004314_00541B_DDB4",
	         "str": [
	            {
	               "content": "SM",
	               "name": "sensoroperationalmode"
	            },
	            {
	               "content": "S6",
	               "name": "swathidentifier"
	            },
	            {
	               "content": "DESCENDING",
	               "name": "orbitdirection"
	            },
	            {
	               "content": "GRD",
	               "name": "producttype"
	            },
	            {
	               "content": "Sentinel-1",
	               "name": "platformname"
	            },
	            {
	               "content": "0000-000A",
	               "name": "platformidentifier"
	            },
	            {
	               "content": "Synthetic Aperture Radar (C-band)",
	               "name": "instrumentname"
	            },
	            {
	               "content": "SAR-C SAR",
	               "name": "instrumentshortname"
	            },
	            {
	               "content": "S1A_S6_GRDH_1SDH_20150124T140823_20150124T140848_004314_00541B_DDB4.SAFE",
	               "name": "filename"
	            },
	            {
	               "content": "SAFE",
	               "name": "format"
	            },
	            {
	               "content": "S",
	               "name": "productclass"
	            },
	            {
	               "content": "HH HV",
	               "name": "polarisationmode"
	            },
	            {
	               "content": "NOMINAL",
	               "name": "acquisitiontype"
	            },
	            {
	               "content": "ARCHIVED",
	               "name": "status"
	            },
	            {
	               "content": "519 MB",
	               "name": "size"
	            },
	            {
	               "content": "<gml:Polygon srsName=\"http://www.opengis.net/gml/srs/epsg.xml#4326\" xmlns:gml=\"http://www.opengis.net/gml\">\n   <gml:outerBoundaryIs>\n      <gml:LinearRing>\n         <gml:coordinates>33.248993,-122.697762 33.370438,-123.557846 34.873466,-123.259987 34.753117,-122.384354 33.248993,-122.697762<\/gml:coordinates>\n      <\/gml:LinearRing>\n   <\/gml:outerBoundaryIs>\n<\/gml:Polygon>",
	               "name": "gmlfootprint"
	            },
	            {
	               "content": "POLYGON ((-122.697762 33.248993,-123.557846 33.370438,-123.259987 34.873466,-122.384354 34.753117,-122.697762 33.248993))",
	               "name": "footprint"
	            },
	            {
	               "content": "S1A_S6_GRDH_1SDH_20150124T140823_20150124T140848_004314_00541B_DDB4",
	               "name": "identifier"
	            }
	         ],
	         "arr": {
	            "str": "fred-test",
	            "name": "collection"
	         },
	         "int": [
	            {
	               "content": "21531",
	               "name": "missiondatatakeid"
	            },
	            {
	               "content": "3",
	               "name": "slicenumber"
	            },
	            {
	               "content": "4314",
	               "name": "orbitnumber"
	            },
	            {
	               "content": "4314",
	               "name": "lastorbitnumber"
	            },
	            {
	               "content": "42",
	               "name": "relativeorbitnumber"
	            },
	            {
	               "content": "42",
	               "name": "lastrelativeorbitnumber"
	            }
	         ],
	         "link": [
	            {"href": "http://dhus.gael.fr/dhus/odata/v1/Products('2334eada-b5b9-4a7a-a786-95c4c851870e')/$value"},
	            {
	               "rel": "alternative",
	               "href": "http://dhus.gael.fr/dhus/odata/v1/Products('2334eada-b5b9-4a7a-a786-95c4c851870e')/"
	            },
	            {
	               "rel": "icon",
	               "href": "http://dhus.gael.fr/dhus/odata/v1/Products('2334eada-b5b9-4a7a-a786-95c4c851870e')/Products('Quicklook')/$value"
	            }
	         ],
	         "date": [
	            {
	               "content": "2015-01-24T14:08:23.862Z",
	               "name": "beginposition"
	            },
	            {
	               "content": "2015-01-24T14:08:48.86Z",
	               "name": "endposition"
	            },
	            {
	               "content": "2015-02-19T16:01:03.493Z",
	               "name": "ingestiondate"
	            }
	         ]
	      },
	      {
	         "summary": "Date: 2015-01-14T10:32:10.674Z, Instrument: SAR-C SAR, Mode: VV VH, Satellite: Sentinel-1, Size: 518 MB",
	         "id": "8578e9cf-ec1e-49ad-bcc2-ad1b6503d96c",
	         "title": "S1A_S6_GRDH_1SDV_20150114T103210_20150114T103235_004166_0050D9_E7B4",
	         "str": [
	            {
	               "content": "SM",
	               "name": "sensoroperationalmode"
	            },
	            {
	               "content": "S6",
	               "name": "swathidentifier"
	            },
	            {
	               "content": "DESCENDING",
	               "name": "orbitdirection"
	            },
	            {
	               "content": "GRD",
	               "name": "producttype"
	            },
	            {
	               "content": "Sentinel-1",
	               "name": "platformname"
	            },
	            {
	               "content": "0000-000A",
	               "name": "platformidentifier"
	            },
	            {
	               "content": "Synthetic Aperture Radar (C-band)",
	               "name": "instrumentname"
	            },
	            {
	               "content": "SAR-C SAR",
	               "name": "instrumentshortname"
	            },
	            {
	               "content": "S1A_S6_GRDH_1SDV_20150114T103210_20150114T103235_004166_0050D9_E7B4.SAFE",
	               "name": "filename"
	            },
	            {
	               "content": "SAFE",
	               "name": "format"
	            },
	            {
	               "content": "S",
	               "name": "productclass"
	            },
	            {
	               "content": "VV VH",
	               "name": "polarisationmode"
	            },
	            {
	               "content": "NOMINAL",
	               "name": "acquisitiontype"
	            },
	            {
	               "content": "ARCHIVED",
	               "name": "status"
	            },
	            {
	               "content": "518 MB",
	               "name": "size"
	            },
	            {
	               "content": "<gml:Polygon srsName=\"http://www.opengis.net/gml/srs/epsg.xml#4326\" xmlns:gml=\"http://www.opengis.net/gml\">\n   <gml:outerBoundaryIs>\n      <gml:LinearRing>\n         <gml:coordinates>41.451984,-67.461258 41.567791,-68.420189 43.067738,-68.104095 42.952702,-67.122002 41.451984,-67.461258<\/gml:coordinates>\n      <\/gml:LinearRing>\n   <\/gml:outerBoundaryIs>\n<\/gml:Polygon>",
	               "name": "gmlfootprint"
	            },
	            {
	               "content": "POLYGON ((-67.461258 41.451984,-68.420189 41.567791,-68.104095 43.067738,-67.122002 42.952702,-67.461258 41.451984))",
	               "name": "footprint"
	            },
	            {
	               "content": "S1A_S6_GRDH_1SDV_20150114T103210_20150114T103235_004166_0050D9_E7B4",
	               "name": "identifier"
	            }
	         ],
	         "arr": {
	            "str": "fred-test",
	            "name": "collection"
	         },
	         "int": [
	            {
	               "content": "20697",
	               "name": "missiondatatakeid"
	            },
	            {
	               "content": "2",
	               "name": "slicenumber"
	            },
	            {
	               "content": "4166",
	               "name": "orbitnumber"
	            },
	            {
	               "content": "4166",
	               "name": "lastorbitnumber"
	            },
	            {
	               "content": "141",
	               "name": "relativeorbitnumber"
	            },
	            {
	               "content": "141",
	               "name": "lastrelativeorbitnumber"
	            }
	         ],
	         "link": [
	            {"href": "http://dhus.gael.fr/dhus/odata/v1/Products('8578e9cf-ec1e-49ad-bcc2-ad1b6503d96c')/$value"},
	            {
	               "rel": "alternative",
	               "href": "http://dhus.gael.fr/dhus/odata/v1/Products('8578e9cf-ec1e-49ad-bcc2-ad1b6503d96c')/"
	            },
	            {
	               "rel": "icon",
	               "href": "http://dhus.gael.fr/dhus/odata/v1/Products('8578e9cf-ec1e-49ad-bcc2-ad1b6503d96c')/Products('Quicklook')/$value"
	            }
	         ],
	         "date": [
	            {
	               "content": "2015-01-14T10:32:10.674Z",
	               "name": "beginposition"
	            },
	            {
	               "content": "2015-01-14T10:32:35.673Z",
	               "name": "endposition"
	            },
	            {
	               "content": "2015-02-19T16:00:48.451Z",
	               "name": "ingestiondate"
	            }
	         ]
	      },
	      {
	         "summary": "Date: 2015-01-24T14:08:19.959Z, Instrument: SAR-C SAR, Mode: HH HV, Satellite: Sentinel-1, Size: 1 GB",
	         "id": "a61a7089-c0a4-49e3-974a-c4982719b46a",
	         "title": "S1A_S6_RAW__0SDH_20150124T140819_20150124T140852_004314_00541B_BB6B",
	         "str": [
	            {
	               "content": "RAW",
	               "name": "producttype"
	            },
	            {
	               "content": "SM",
	               "name": "sensoroperationalmode"
	            },
	            {
	               "content": "DESCENDING",
	               "name": "orbitdirection"
	            },
	            {
	               "content": "SLICE",
	               "name": "productconsolidation"
	            },
	            {
	               "content": "Sentinel-1",
	               "name": "platformname"
	            },
	            {
	               "content": "0000-000A",
	               "name": "platformidentifier"
	            },
	            {
	               "content": "Synthetic Aperture Radar (C-band)",
	               "name": "instrumentname"
	            },
	            {
	               "content": "SAR-C SAR",
	               "name": "instrumentshortname"
	            },
	            {
	               "content": "S1A_S6_RAW__0SDH_20150124T140819_20150124T140852_004314_00541B_BB6B.SAFE",
	               "name": "filename"
	            },
	            {
	               "content": "SAFE",
	               "name": "format"
	            },
	            {
	               "content": "S",
	               "name": "productclass"
	            },
	            {
	               "content": "HH HV",
	               "name": "polarisationmode"
	            },
	            {
	               "content": "NOMINAL",
	               "name": "acquisitiontype"
	            },
	            {
	               "content": "ARCHIVED",
	               "name": "status"
	            },
	            {
	               "content": "1 GB",
	               "name": "size"
	            },
	            {
	               "content": "<gml:Polygon srsName=\"http://www.opengis.net/gml/srs/epsg.xml#4326\" xmlns:gml=\"http://www.opengis.net/gml\">\n   <gml:outerBoundaryIs>\n      <gml:LinearRing>\n         <gml:coordinates>34.7814,-123.0758 32.8069,-123.4627 32.7282,-122.6314 34.7031,-122.2247 34.7814,-123.0758 34.7814,-123.0758<\/gml:coordinates>\n      <\/gml:LinearRing>\n   <\/gml:outerBoundaryIs>\n<\/gml:Polygon>",
	               "name": "gmlfootprint"
	            },
	            {
	               "content": "POLYGON ((-123.0758 34.7814,-123.4627 32.8069,-122.6314 32.7282,-122.2247 34.7031,-123.0758 34.7814,-123.0758 34.7814))",
	               "name": "footprint"
	            },
	            {
	               "content": "S1A_S6_RAW__0SDH_20150124T140819_20150124T140852_004314_00541B_BB6B",
	               "name": "identifier"
	            }
	         ],
	         "arr": {
	            "str": "fred-test",
	            "name": "collection"
	         },
	         "int": [
	            {
	               "content": "21531",
	               "name": "missiondatatakeid"
	            },
	            {
	               "content": "3",
	               "name": "slicenumber"
	            },
	            {
	               "content": "4314",
	               "name": "orbitnumber"
	            },
	            {
	               "content": "4314",
	               "name": "lastorbitnumber"
	            },
	            {
	               "content": "42",
	               "name": "relativeorbitnumber"
	            },
	            {
	               "content": "42",
	               "name": "lastrelativeorbitnumber"
	            }
	         ],
	         "link": [
	            {"href": "http://dhus.gael.fr/dhus/odata/v1/Products('a61a7089-c0a4-49e3-974a-c4982719b46a')/$value"},
	            {
	               "rel": "alternative",
	               "href": "http://dhus.gael.fr/dhus/odata/v1/Products('a61a7089-c0a4-49e3-974a-c4982719b46a')/"
	            },
	            {
	               "rel": "icon",
	               "href": "http://dhus.gael.fr/dhus/odata/v1/Products('a61a7089-c0a4-49e3-974a-c4982719b46a')/Products('Quicklook')/$value"
	            }
	         ],
	         "date": [
	            {
	               "content": "2015-01-24T14:08:19.959Z",
	               "name": "beginposition"
	            },
	            {
	               "content": "2015-01-24T14:08:52.659Z",
	               "name": "endposition"
	            },
	            {
	               "content": "2015-02-19T16:00:34.141Z",
	               "name": "ingestiondate"
	            }
	         ]
	      },
	      {
	         "summary": "Date: 2015-01-26T18:20:59.508Z, Instrument: SAR-C SAR, Mode: HH HV, Satellite: Sentinel-1, Size: 486 MB",
	         "id": "ec5ea2b0-172a-4ab3-b9dd-c582d3f7c5f5",
	         "title": "S1A_S6_GRDH_1SDH_20150126T182059_20150126T182123_004346_0054CE_B9C1",
	         "str": [
	            {
	               "content": "SM",
	               "name": "sensoroperationalmode"
	            },
	            {
	               "content": "S6",
	               "name": "swathidentifier"
	            },
	            {
	               "content": "ASCENDING",
	               "name": "orbitdirection"
	            },
	            {
	               "content": "GRD",
	               "name": "producttype"
	            },
	            {
	               "content": "Sentinel-1",
	               "name": "platformname"
	            },
	            {
	               "content": "0000-000A",
	               "name": "platformidentifier"
	            },
	            {
	               "content": "Synthetic Aperture Radar (C-band)",
	               "name": "instrumentname"
	            },
	            {
	               "content": "SAR-C SAR",
	               "name": "instrumentshortname"
	            },
	            {
	               "content": "S1A_S6_GRDH_1SDH_20150126T182059_20150126T182123_004346_0054CE_B9C1.SAFE",
	               "name": "filename"
	            },
	            {
	               "content": "SAFE",
	               "name": "format"
	            },
	            {
	               "content": "S",
	               "name": "productclass"
	            },
	            {
	               "content": "HH HV",
	               "name": "polarisationmode"
	            },
	            {
	               "content": "NOMINAL",
	               "name": "acquisitiontype"
	            },
	            {
	               "content": "ARCHIVED",
	               "name": "status"
	            },
	            {
	               "content": "486 MB",
	               "name": "size"
	            },
	            {
	               "content": "<gml:Polygon srsName=\"http://www.opengis.net/gml/srs/epsg.xml#4326\" xmlns:gml=\"http://www.opengis.net/gml\">\n   <gml:outerBoundaryIs>\n      <gml:LinearRing>\n         <gml:coordinates>48.754364,-6.966002 48.866570,-5.881457 47.450760,-5.559950 47.338177,-6.615037 48.754364,-6.966002<\/gml:coordinates>\n      <\/gml:LinearRing>\n   <\/gml:outerBoundaryIs>\n<\/gml:Polygon>",
	               "name": "gmlfootprint"
	            },
	            {
	               "content": "POLYGON ((-6.966002 48.754364,-5.881457 48.866570,-5.559950 47.450760,-6.615037 47.338177,-6.966002 48.754364))",
	               "name": "footprint"
	            },
	            {
	               "content": "S1A_S6_GRDH_1SDH_20150126T182059_20150126T182123_004346_0054CE_B9C1",
	               "name": "identifier"
	            }
	         ],
	         "arr": {
	            "str": "fred-test",
	            "name": "collection"
	         },
	         "int": [
	            {
	               "content": "21710",
	               "name": "missiondatatakeid"
	            },
	            {
	               "content": "0",
	               "name": "slicenumber"
	            },
	            {
	               "content": "4346",
	               "name": "orbitnumber"
	            },
	            {
	               "content": "4346",
	               "name": "lastorbitnumber"
	            },
	            {
	               "content": "74",
	               "name": "relativeorbitnumber"
	            },
	            {
	               "content": "74",
	               "name": "lastrelativeorbitnumber"
	            }
	         ],
	         "link": [
	            {"href": "http://dhus.gael.fr/dhus/odata/v1/Products('ec5ea2b0-172a-4ab3-b9dd-c582d3f7c5f5')/$value"},
	            {
	               "rel": "alternative",
	               "href": "http://dhus.gael.fr/dhus/odata/v1/Products('ec5ea2b0-172a-4ab3-b9dd-c582d3f7c5f5')/"
	            },
	            {
	               "rel": "icon",
	               "href": "http://dhus.gael.fr/dhus/odata/v1/Products('ec5ea2b0-172a-4ab3-b9dd-c582d3f7c5f5')/Products('Quicklook')/$value"
	            }
	         ],
	         "date": [
	            {
	               "content": "2015-01-26T18:20:59.508Z",
	               "name": "beginposition"
	            },
	            {
	               "content": "2015-01-26T18:21:23.146Z",
	               "name": "endposition"
	            },
	            {
	               "content": "2015-02-19T16:00:25.196Z",
	               "name": "ingestiondate"
	            }
	         ]
	      },
	      {
	         "summary": "Date: 2015-01-10T18:58:28.117Z, Instrument: SAR-C SAR, Mode: VV VH, Satellite: Sentinel-1, Size: 224 MB",
	         "id": "8f87f352-62b7-4cc1-a754-8516398b654f",
	         "title": "S1A_S6_GRDH_1SDV_20150110T185828_20150110T185839_004113_004FB2_BF42",
	         "str": [
	            {
	               "content": "SM",
	               "name": "sensoroperationalmode"
	            },
	            {
	               "content": "S6",
	               "name": "swathidentifier"
	            },
	            {
	               "content": "ASCENDING",
	               "name": "orbitdirection"
	            },
	            {
	               "content": "GRD",
	               "name": "producttype"
	            },
	            {
	               "content": "Sentinel-1",
	               "name": "platformname"
	            },
	            {
	               "content": "0000-000A",
	               "name": "platformidentifier"
	            },
	            {
	               "content": "Synthetic Aperture Radar (C-band)",
	               "name": "instrumentname"
	            },
	            {
	               "content": "SAR-C SAR",
	               "name": "instrumentshortname"
	            },
	            {
	               "content": "S1A_S6_GRDH_1SDV_20150110T185828_20150110T185839_004113_004FB2_BF42.SAFE",
	               "name": "filename"
	            },
	            {
	               "content": "SAFE",
	               "name": "format"
	            },
	            {
	               "content": "S",
	               "name": "productclass"
	            },
	            {
	               "content": "VV VH",
	               "name": "polarisationmode"
	            },
	            {
	               "content": "NOMINAL",
	               "name": "acquisitiontype"
	            },
	            {
	               "content": "ARCHIVED",
	               "name": "status"
	            },
	            {
	               "content": "224 MB",
	               "name": "size"
	            },
	            {
	               "content": "<gml:Polygon srsName=\"http://www.opengis.net/gml/srs/epsg.xml#4326\" xmlns:gml=\"http://www.opengis.net/gml\">\n   <gml:outerBoundaryIs>\n      <gml:LinearRing>\n         <gml:coordinates>64.312675,-20.046108 64.431877,-18.396236 63.783401,-18.169796 63.665157,-19.782187 64.312675,-20.046108<\/gml:coordinates>\n      <\/gml:LinearRing>\n   <\/gml:outerBoundaryIs>\n<\/gml:Polygon>",
	               "name": "gmlfootprint"
	            },
	            {
	               "content": "POLYGON ((-20.046108 64.312675,-18.396236 64.431877,-18.169796 63.783401,-19.782187 63.665157,-20.046108 64.312675))",
	               "name": "footprint"
	            },
	            {
	               "content": "S1A_S6_GRDH_1SDV_20150110T185828_20150110T185839_004113_004FB2_BF42",
	               "name": "identifier"
	            }
	         ],
	         "arr": {
	            "str": "fred-test",
	            "name": "collection"
	         },
	         "int": [
	            {
	               "content": "20402",
	               "name": "missiondatatakeid"
	            },
	            {
	               "content": "3",
	               "name": "slicenumber"
	            },
	            {
	               "content": "4113",
	               "name": "orbitnumber"
	            },
	            {
	               "content": "4113",
	               "name": "lastorbitnumber"
	            },
	            {
	               "content": "16",
	               "name": "relativeorbitnumber"
	            },
	            {
	               "content": "16",
	               "name": "lastrelativeorbitnumber"
	            }
	         ],
	         "link": [
	            {"href": "http://dhus.gael.fr/dhus/odata/v1/Products('8f87f352-62b7-4cc1-a754-8516398b654f')/$value"},
	            {
	               "rel": "alternative",
	               "href": "http://dhus.gael.fr/dhus/odata/v1/Products('8f87f352-62b7-4cc1-a754-8516398b654f')/"
	            },
	            {
	               "rel": "icon",
	               "href": "http://dhus.gael.fr/dhus/odata/v1/Products('8f87f352-62b7-4cc1-a754-8516398b654f')/Products('Quicklook')/$value"
	            }
	         ],
	         "date": [
	            {
	               "content": "2015-01-10T18:58:28.117Z",
	               "name": "beginposition"
	            },
	            {
	               "content": "2015-01-10T18:58:39.008Z",
	               "name": "endposition"
	            },
	            {
	               "content": "2015-02-19T16:00:16.999Z",
	               "name": "ingestiondate"
	            }
	         ]
	      },
	      {
	         "summary": "Date: 2015-01-15T02:35:40.824Z, Instrument: SAR-C SAR, Mode: VH VV, Satellite: Sentinel-1, Size: 1 GB",
	         "id": "c8f2dbfe-c9ff-47f8-b322-868567b4bbf7",
	         "title": "S1A_S6_RAW__0SDV_20150115T023540_20150115T023613_004176_005112_1169",
	         "str": [
	            {
	               "content": "RAW",
	               "name": "producttype"
	            },
	            {
	               "content": "SM",
	               "name": "sensoroperationalmode"
	            },
	            {
	               "content": "ASCENDING",
	               "name": "orbitdirection"
	            },
	            {
	               "content": "SLICE",
	               "name": "productconsolidation"
	            },
	            {
	               "content": "Sentinel-1",
	               "name": "platformname"
	            },
	            {
	               "content": "0000-000A",
	               "name": "platformidentifier"
	            },
	            {
	               "content": "Synthetic Aperture Radar (C-band)",
	               "name": "instrumentname"
	            },
	            {
	               "content": "SAR-C SAR",
	               "name": "instrumentshortname"
	            },
	            {
	               "content": "S1A_S6_RAW__0SDV_20150115T023540_20150115T023613_004176_005112_1169.SAFE",
	               "name": "filename"
	            },
	            {
	               "content": "SAFE",
	               "name": "format"
	            },
	            {
	               "content": "S",
	               "name": "productclass"
	            },
	            {
	               "content": "VH VV",
	               "name": "polarisationmode"
	            },
	            {
	               "content": "NOMINAL",
	               "name": "acquisitiontype"
	            },
	            {
	               "content": "ARCHIVED",
	               "name": "status"
	            },
	            {
	               "content": "1 GB",
	               "name": "size"
	            },
	            {
	               "content": "<gml:Polygon srsName=\"http://www.opengis.net/gml/srs/epsg.xml#4326\" xmlns:gml=\"http://www.opengis.net/gml\">\n   <gml:outerBoundaryIs>\n      <gml:LinearRing>\n         <gml:coordinates>50.7042,-129.9224 52.6715,-130.3917 52.5898,-131.5493 50.6237,-131.0304 50.7042,-129.9224 50.7042,-129.9224<\/gml:coordinates>\n      <\/gml:LinearRing>\n   <\/gml:outerBoundaryIs>\n<\/gml:Polygon>",
	               "name": "gmlfootprint"
	            },
	            {
	               "content": "POLYGON ((-129.9224 50.7042,-130.3917 52.6715,-131.5493 52.5898,-131.0304 50.6237,-129.9224 50.7042,-129.9224 50.7042))",
	               "name": "footprint"
	            },
	            {
	               "content": "S1A_S6_RAW__0SDV_20150115T023540_20150115T023613_004176_005112_1169",
	               "name": "identifier"
	            }
	         ],
	         "arr": {
	            "str": "fred-test",
	            "name": "collection"
	         },
	         "int": [
	            {
	               "content": "20754",
	               "name": "missiondatatakeid"
	            },
	            {
	               "content": "4",
	               "name": "slicenumber"
	            },
	            {
	               "content": "4176",
	               "name": "orbitnumber"
	            },
	            {
	               "content": "4176",
	               "name": "lastorbitnumber"
	            },
	            {
	               "content": "79",
	               "name": "relativeorbitnumber"
	            },
	            {
	               "content": "79",
	               "name": "lastrelativeorbitnumber"
	            }
	         ],
	         "link": [
	            {"href": "http://dhus.gael.fr/dhus/odata/v1/Products('c8f2dbfe-c9ff-47f8-b322-868567b4bbf7')/$value"},
	            {
	               "rel": "alternative",
	               "href": "http://dhus.gael.fr/dhus/odata/v1/Products('c8f2dbfe-c9ff-47f8-b322-868567b4bbf7')/"
	            },
	            {
	               "rel": "icon",
	               "href": "http://dhus.gael.fr/dhus/odata/v1/Products('c8f2dbfe-c9ff-47f8-b322-868567b4bbf7')/Products('Quicklook')/$value"
	            }
	         ],
	         "date": [
	            {
	               "content": "2015-01-15T02:35:40.824Z",
	               "name": "beginposition"
	            },
	            {
	               "content": "2015-01-15T02:36:13.523Z",
	               "name": "endposition"
	            },
	            {
	               "content": "2015-02-19T16:00:07.23Z",
	               "name": "ingestiondate"
	            }
	         ]
	      },
	      {
	         "summary": "Date: 2015-02-09T11:54:38.161Z, Instrument: SAR-C SAR, Mode: VH VV, Satellite: Sentinel-1, Size: 1 GB",
	         "id": "89c8295b-b915-47d4-9fce-76139860ed48",
	         "title": "S1A_S6_RAW__0SDV_20150209T115438_20150209T115508_004546_00595D_98F3",
	         "str": [
	            {
	               "content": "RAW",
	               "name": "producttype"
	            },
	            {
	               "content": "SM",
	               "name": "sensoroperationalmode"
	            },
	            {
	               "content": "DESCENDING",
	               "name": "orbitdirection"
	            },
	            {
	               "content": "SLICE",
	               "name": "productconsolidation"
	            },
	            {
	               "content": "Sentinel-1",
	               "name": "platformname"
	            },
	            {
	               "content": "0000-000A",
	               "name": "platformidentifier"
	            },
	            {
	               "content": "Synthetic Aperture Radar (C-band)",
	               "name": "instrumentname"
	            },
	            {
	               "content": "SAR-C SAR",
	               "name": "instrumentshortname"
	            },
	            {
	               "content": "S1A_S6_RAW__0SDV_20150209T115438_20150209T115508_004546_00595D_98F3.SAFE",
	               "name": "filename"
	            },
	            {
	               "content": "SAFE",
	               "name": "format"
	            },
	            {
	               "content": "S",
	               "name": "productclass"
	            },
	            {
	               "content": "VH VV",
	               "name": "polarisationmode"
	            },
	            {
	               "content": "NOMINAL",
	               "name": "acquisitiontype"
	            },
	            {
	               "content": "ARCHIVED",
	               "name": "status"
	            },
	            {
	               "content": "1 GB",
	               "name": "size"
	            },
	            {
	               "content": "<gml:Polygon srsName=\"http://www.opengis.net/gml/srs/epsg.xml#4326\" xmlns:gml=\"http://www.opengis.net/gml\">\n   <gml:outerBoundaryIs>\n      <gml:LinearRing>\n         <gml:coordinates>42.1192,-88.6802 40.2715,-89.0606 40.1937,-88.1429 42.0413,-87.7358 42.1192,-88.6802 42.1192,-88.6802<\/gml:coordinates>\n      <\/gml:LinearRing>\n   <\/gml:outerBoundaryIs>\n<\/gml:Polygon>",
	               "name": "gmlfootprint"
	            },
	            {
	               "content": "POLYGON ((-88.6802 42.1192,-89.0606 40.2715,-88.1429 40.1937,-87.7358 42.0413,-88.6802 42.1192,-88.6802 42.1192))",
	               "name": "footprint"
	            },
	            {
	               "content": "S1A_S6_RAW__0SDV_20150209T115438_20150209T115508_004546_00595D_98F3",
	               "name": "identifier"
	            }
	         ],
	         "arr": {
	            "str": "fred-test",
	            "name": "collection"
	         },
	         "int": [
	            {
	               "content": "22877",
	               "name": "missiondatatakeid"
	            },
	            {
	               "content": "1",
	               "name": "slicenumber"
	            },
	            {
	               "content": "4546",
	               "name": "orbitnumber"
	            },
	            {
	               "content": "4546",
	               "name": "lastorbitnumber"
	            },
	            {
	               "content": "99",
	               "name": "relativeorbitnumber"
	            },
	            {
	               "content": "99",
	               "name": "lastrelativeorbitnumber"
	            }
	         ],
	         "link": [
	            {"href": "http://dhus.gael.fr/dhus/odata/v1/Products('89c8295b-b915-47d4-9fce-76139860ed48')/$value"},
	            {
	               "rel": "alternative",
	               "href": "http://dhus.gael.fr/dhus/odata/v1/Products('89c8295b-b915-47d4-9fce-76139860ed48')/"
	            },
	            {
	               "rel": "icon",
	               "href": "http://dhus.gael.fr/dhus/odata/v1/Products('89c8295b-b915-47d4-9fce-76139860ed48')/Products('Quicklook')/$value"
	            }
	         ],
	         "date": [
	            {
	               "content": "2015-02-09T11:54:38.161Z",
	               "name": "beginposition"
	            },
	            {
	               "content": "2015-02-09T11:55:08.799Z",
	               "name": "endposition"
	            },
	            {
	               "content": "2015-02-19T16:00:02.451Z",
	               "name": "ingestiondate"
	            }
	         ]
	      },
	      {
	         "summary": "Date: 2015-01-21T10:23:42.612Z, Instrument: SAR-C SAR, Mode: VV VH, Satellite: Sentinel-1, Size: 518 MB",
	         "id": "d349334f-4888-421e-b5e3-283ddb6103d4",
	         "title": "S1A_S6_GRDH_1SDV_20150121T102342_20150121T102407_004268_005310_C2DF",
	         "str": [
	            {
	               "content": "SM",
	               "name": "sensoroperationalmode"
	            },
	            {
	               "content": "S6",
	               "name": "swathidentifier"
	            },
	            {
	               "content": "DESCENDING",
	               "name": "orbitdirection"
	            },
	            {
	               "content": "GRD",
	               "name": "producttype"
	            },
	            {
	               "content": "Sentinel-1",
	               "name": "platformname"
	            },
	            {
	               "content": "0000-000A",
	               "name": "platformidentifier"
	            },
	            {
	               "content": "Synthetic Aperture Radar (C-band)",
	               "name": "instrumentname"
	            },
	            {
	               "content": "SAR-C SAR",
	               "name": "instrumentshortname"
	            },
	            {
	               "content": "S1A_S6_GRDH_1SDV_20150121T102342_20150121T102407_004268_005310_C2DF.SAFE",
	               "name": "filename"
	            },
	            {
	               "content": "SAFE",
	               "name": "format"
	            },
	            {
	               "content": "S",
	               "name": "productclass"
	            },
	            {
	               "content": "VV VH",
	               "name": "polarisationmode"
	            },
	            {
	               "content": "NOMINAL",
	               "name": "acquisitiontype"
	            },
	            {
	               "content": "ARCHIVED",
	               "name": "status"
	            },
	            {
	               "content": "518 MB",
	               "name": "size"
	            },
	            {
	               "content": "<gml:Polygon srsName=\"http://www.opengis.net/gml/srs/epsg.xml#4326\" xmlns:gml=\"http://www.opengis.net/gml\">\n   <gml:outerBoundaryIs>\n      <gml:LinearRing>\n         <gml:coordinates>42.310013,-65.215981 42.425323,-66.187950 43.924923,-65.869743 43.810349,-64.873604 42.310013,-65.215981<\/gml:coordinates>\n      <\/gml:LinearRing>\n   <\/gml:outerBoundaryIs>\n<\/gml:Polygon>",
	               "name": "gmlfootprint"
	            },
	            {
	               "content": "POLYGON ((-65.215981 42.310013,-66.187950 42.425323,-65.869743 43.924923,-64.873604 43.810349,-65.215981 42.310013))",
	               "name": "footprint"
	            },
	            {
	               "content": "S1A_S6_GRDH_1SDV_20150121T102342_20150121T102407_004268_005310_C2DF",
	               "name": "identifier"
	            }
	         ],
	         "arr": {
	            "str": "fred-test",
	            "name": "collection"
	         },
	         "int": [
	            {
	               "content": "21264",
	               "name": "missiondatatakeid"
	            },
	            {
	               "content": "2",
	               "name": "slicenumber"
	            },
	            {
	               "content": "4268",
	               "name": "orbitnumber"
	            },
	            {
	               "content": "4268",
	               "name": "lastorbitnumber"
	            },
	            {
	               "content": "171",
	               "name": "relativeorbitnumber"
	            },
	            {
	               "content": "171",
	               "name": "lastrelativeorbitnumber"
	            }
	         ],
	         "link": [
	            {"href": "http://dhus.gael.fr/dhus/odata/v1/Products('d349334f-4888-421e-b5e3-283ddb6103d4')/$value"},
	            {
	               "rel": "alternative",
	               "href": "http://dhus.gael.fr/dhus/odata/v1/Products('d349334f-4888-421e-b5e3-283ddb6103d4')/"
	            },
	            {
	               "rel": "icon",
	               "href": "http://dhus.gael.fr/dhus/odata/v1/Products('d349334f-4888-421e-b5e3-283ddb6103d4')/Products('Quicklook')/$value"
	            }
	         ],
	         "date": [
	            {
	               "content": "2015-01-21T10:23:42.612Z",
	               "name": "beginposition"
	            },
	            {
	               "content": "2015-01-21T10:24:07.61Z",
	               "name": "endposition"
	            },
	            {
	               "content": "2015-02-19T16:00:01.259Z",
	               "name": "ingestiondate"
	            }
	         ]
	      }
	   ],
	   "subtitle": "Displaying 0 to 9 of 2785 total results. Request done in 0 seconds.",
	   "opensearch:startIndex": "0",
	   "opensearch:Query": {
	      "searchTerms": "*",
	      "role": "request",
	      "startPage": "1"
	   }
	}};

app.data = parseSearchResult(input_data.feed.entry);

function parseSearchResult(input_data)
{
   var data = [];
   for (var i = 0; i < input_data.length; i++)
   {
      data.push({
         title: stringFixedSize(input_data[i].title, 28),
         thumbnail: "http://dhus.gael.fr/dhus/odata/v1/Products('" + input_data[i].id + "')/Products('Thumbnail')/$value"
      });
   }
   return data;
};

function stringFixedSize(string, max_length)
{
	// Nothing to do
   if (string.length <= max_length)
   {
      return string;
   }
   
   //Trim imput string
   var trimmed_string = string.replace(' *',' ');
   
   var left_length = max_length / 2;
   var right_length = left_length - 3;
   var right_bound = trimmed_string.length - right_length;
   return trimmed_string.substring(0, left_length) + '...' +
      trimmed_string.substring(right_bound);
};
