var request = require('request');
var cheerio = require('cheerio');

var todate="2013-01-01";
var fromdate="2008-01-01";
var exchange="B";
var sc_id="TCS";
var format = "daily";
var page = "1";

var url="http://www.moneycontrol.com/stocks/hist_stock_result.php?";


url += "sc_id=" + sc_id + "&";
url += "pno=" + page + "&";
url += "hdn=" + format + "&";
url += "fdt=" + fromdate + "&";
url += "todt=" + todate + "&";
url += "ex=" + exchange;

console.log(url);

request(url, function (error, response, body) {
	if (error) {
		console.log(error);
	} else {
		var $ = cheerio.load(body);
		$('.tblchart tr td').each(function(i,element){
			// open, close, high, low, date, etc			
			console.log($(element).text());
		});
	}
});
