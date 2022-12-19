// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "money-convert" is now active!');
	let disposable=vscode.commands.registerCommand('money-convert.helloWorld', () => {
		// Create and show a new webview
		const panel = vscode.window.createWebviewPanel(
		  "catCoding", // Identifies the type of the webview. Used internally
		  "Cat Coding", // Title of the panel displayed to the user
		  vscode.ViewColumn.One, // Editor column to show the new webview panel in.
		  {
			// Enable scripts in the webview
			enableScripts: true
		  }// Webview options. More on these later.
		);
		// And set its HTML content
		panel.webview.html = getWebviewContent();
	  })
	
	// let disposable = vscode.commands.registerCommand('money-convert.helloWorld', function () {
	// 	// The code you place here will be executed every time your command is executed

	// 	// Display a message box to the user
	// 	vscode.window.showInformationMessage('Hello World from money convert!');
	// });

	context.subscriptions.push(disposable);
}

// xml code write......

function getWebviewContent() {

	
// console.log(data.map())

	return `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Cat Coding</title>
	</head>
	<body>
    <h1>This is a static template, involved!</h1>
    <h3 id="counter">0</h3>
    <input
      id="inputOne"
      type="number"
      onchange="handleOnChangeOne(this.value)"
    />
    <select
      name="currency"
      id="selectOne"
      <!--
      onchange="handleSelectOne(this.value)"
      --
    >
      >
    </select>
    <br />
    <input
      id="inputTwo"
      type="number"
      onchange="handleOnChangeTwo(this.value)"
    />
    <select
      name="currency"
      id="selectTwo"
      <!--
      onchange="handleSelectTwo(this.value)"
      --
    >
      >
    </select>
  </body>
		<script>
	
		
		const data=[
			{
			  "code": "USD",
			  "alphaCode": "USD",
			  "numericCode": "840",
			  "name": "US Dollar",
			  "rate": 1,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 1
			},
			{
			  "code": "EUR",
			  "alphaCode": "EUR",
			  "numericCode": "978",
			  "name": "Euro",
			  "rate": 0.9492971024093,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 1.0534109895227
			},
			{
			  "code": "GBP",
			  "alphaCode": "GBP",
			  "numericCode": "826",
			  "name": "U.K. Pound Sterling",
			  "rate": 0.81864094665507,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 1.2215367482972
			},
			{
			  "code": "CAD",
			  "alphaCode": "CAD",
			  "numericCode": "124",
			  "name": "Canadian Dollar",
			  "rate": 1.3593142683337,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.73566505060367
			},
			{
			  "code": "JPY",
			  "alphaCode": "JPY",
			  "numericCode": "392",
			  "name": "Japanese Yen",
			  "rate": 136.6877985387,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.0073159419545181
			},
			{
			  "code": "AUD",
			  "alphaCode": "AUD",
			  "numericCode": "036",
			  "name": "Australian Dollar",
			  "rate": 1.4797586518428,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.6757858781597
			},
			{
			  "code": "CHF",
			  "alphaCode": "CHF",
			  "numericCode": "756",
			  "name": "Swiss Franc",
			  "rate": 0.93818388750279,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 1.0658891218669
			},
			{
			  "code": "SGD",
			  "alphaCode": "SGD",
			  "numericCode": "702",
			  "name": "Singapore Dollar",
			  "rate": 1.3540541024376,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.73852292770265
			},
			{
			  "code": "HUF",
			  "alphaCode": "HUF",
			  "numericCode": "348",
			  "name": "Hungarian Forint",
			  "rate": 396.91502386519,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.0025194309609697
			},
			{
			  "code": "BYN",
			  "alphaCode": "BYN",
			  "numericCode": "933",
			  "name": "Belarussian Ruble",
			  "rate": 2.7909244452475,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.35830421769491
			},
			{
			  "code": "TJS",
			  "alphaCode": "TJS",
			  "numericCode": "972",
			  "name": "Tajikistan Ruble",
			  "rate": 10.197572973737,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.098062549057057
			},
			{
			  "code": "GMD",
			  "alphaCode": "GMD",
			  "numericCode": "270",
			  "name": "Gambian dalasi",
			  "rate": 63.309759547382,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.015795352993745
			},
			{
			  "code": "CVE",
			  "alphaCode": "CVE",
			  "numericCode": "132",
			  "name": "Cape Verde escudo",
			  "rate": 105.56603773585,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.0094727435210008
			},
			{
			  "code": "ZMW",
			  "alphaCode": "ZMW",
			  "numericCode": "967",
			  "name": "Zambian kwacha",
			  "rate": 17.261858850752,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.057931188561215
			},
			{
			  "code": "KHR",
			  "alphaCode": "KHR",
			  "numericCode": "116",
			  "name": "Cambodian riel",
			  "rate": 4113.9705882352,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.00024307417336909
			},
			{
			  "code": "SEK",
			  "alphaCode": "SEK",
			  "numericCode": "752",
			  "name": "Swedish Krona",
			  "rate": 10.349865459395,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.096619613455193
			},
			{
			  "code": "CNY",
			  "alphaCode": "CNY",
			  "numericCode": "156",
			  "name": "Chinese Yuan",
			  "rate": 6.9695960827387,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.1434803377597
			},
			{
			  "code": "ISK",
			  "alphaCode": "ISK",
			  "numericCode": "352",
			  "name": "Icelandic Krona",
			  "rate": 142.12599681925,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.0070360104581835
			},
			{
			  "code": "LYD",
			  "alphaCode": "LYD",
			  "numericCode": "434",
			  "name": "Libyan Dinar",
			  "rate": 4.8942927149795,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.2043196143417
			},
			{
			  "code": "CLP",
			  "alphaCode": "CLP",
			  "numericCode": "152",
			  "name": "Chilean Peso",
			  "rate": 865.45883785565,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.0011554564541483
			},
			{
			  "code": "BSD",
			  "alphaCode": "BSD",
			  "numericCode": "044",
			  "name": "Bahamian Dollar",
			  "rate": 0.99834946692243,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 1.0016532618409
			},
			{
			  "code": "XPF",
			  "alphaCode": "XPF",
			  "numericCode": "953",
			  "name": "CFP Franc",
			  "rate": 113.72529091925,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.0087931188561218
			},
			{
			  "code": "ALL",
			  "alphaCode": "ALL",
			  "numericCode": "008",
			  "name": "Albanian lek",
			  "rate": 110.81950977965,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.0090236818588024
			},
			{
			  "code": "SCR",
			  "alphaCode": "SCR",
			  "numericCode": "690",
			  "name": "Seychelles rupee",
			  "rate": 13.049562682215,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.076630920464705
			},
			{
			  "code": "DOP",
			  "alphaCode": "DOP",
			  "numericCode": "214",
			  "name": "Dominican Peso",
			  "rate": 54.574989219931,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.018323411773296
			},
			{
			  "code": "LBP",
			  "alphaCode": "LBP",
			  "numericCode": "422",
			  "name": "Lebanese Pound",
			  "rate": 1508.9445931459,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.00066271485682265
			},
			{
			  "code": "MXN",
			  "alphaCode": "MXN",
			  "numericCode": "484",
			  "name": "Mexican Peso",
			  "rate": 19.668665197884,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.050842291021741
			},
			{
			  "code": "KZT",
			  "alphaCode": "KZT",
			  "numericCode": "398",
			  "name": "Kazakhstani Tenge",
			  "rate": 471.21256022483,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.0021221845180079
			},
			{
			  "code": "HTG",
			  "alphaCode": "HTG",
			  "numericCode": "332",
			  "name": "Haitian gourde",
			  "rate": 140.88399503722,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.007098038352304
			},
			{
			  "code": "BND",
			  "alphaCode": "BND",
			  "numericCode": "096",
			  "name": "Brunei Dollar",
			  "rate": 1.357145022892,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.73684092940123
			},
			{
			  "code": "KMF",
			  "alphaCode": "KMF",
			  "numericCode": "174",
			  "name": "\tComoro franc",
			  "rate": 470.21745981718,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.0021266756032173
			},
			{
			  "code": "LSL",
			  "alphaCode": "LSL",
			  "numericCode": "426",
			  "name": "Lesotho loti",
			  "rate": 17.281853281853,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.05786416443253
			},
			{
			  "code": "TZS",
			  "alphaCode": "TZS",
			  "numericCode": "834",
			  "name": "Tanzanian shilling",
			  "rate": 2330.0364393545,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.00042917783735478
			},
			{
			  "code": "ANG",
			  "alphaCode": "ANG",
			  "numericCode": "532",
			  "name": "Neth. Antillean Guilder",
			  "rate": 1.7948436906245,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.55715158106724
			},
			{
			  "code": "JOD",
			  "alphaCode": "JOD",
			  "numericCode": "400",
			  "name": "Jordanian Dinar",
			  "rate": 0.70908826543977,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 1.4102616680306
			},
			{
			  "code": "PHP",
			  "alphaCode": "PHP",
			  "numericCode": "608",
			  "name": "Philippine Peso",
			  "rate": 55.374934697815,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.018058712041054
			},
			{
			  "code": "XAF",
			  "alphaCode": "XAF",
			  "numericCode": "950",
			  "name": "Central African CFA Franc",
			  "rate": 624.57297453873,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.0016010939326002
			},
			{
			  "code": "AMD",
			  "alphaCode": "AMD",
			  "numericCode": "051",
			  "name": "Armenia Dram",
			  "rate": 394.91006247869,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.0025322221310934
			},
			{
			  "code": "UYU",
			  "alphaCode": "UYU",
			  "numericCode": "858",
			  "name": "Uruguayan Peso",
			  "rate": 39.145716741076,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.025545579012242
			},
			{
			  "code": "JMD",
			  "alphaCode": "JMD",
			  "numericCode": "388",
			  "name": "Jamaican Dollar",
			  "rate": 153.28767123288,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.0065236818588024
			},
			{
			  "code": "SSP",
			  "alphaCode": "SSP",
			  "numericCode": "728",
			  "name": "South Sudanese pound",
			  "rate": 659.10764246795,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.0015172028596962
			},
			{
			  "code": "MRU",
			  "alphaCode": "MRU",
			  "numericCode": "929",
			  "name": "Mauritanian ouguiya",
			  "rate": 37.836010143702,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.026429848078642
			},
			{
			  "code": "MNT",
			  "alphaCode": "MNT",
			  "numericCode": "496",
			  "name": "Mongolian togrog",
			  "rate": 3416.7938931297,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.00029267202859697
			},
			{
			  "code": "NZD",
			  "alphaCode": "NZD",
			  "numericCode": "554",
			  "name": "New Zealand Dollar",
			  "rate": 1.5702881184835,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.63682580809804
			},
			{
			  "code": "TRY",
			  "alphaCode": "TRY",
			  "numericCode": "949",
			  "name": "Turkish Lira",
			  "rate": 18.633570747529,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.053666579183843
			},
			{
			  "code": "VND",
			  "alphaCode": "VND",
			  "numericCode": "704",
			  "name": "Vietnamese Dong",
			  "rate": 24199.057579154,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.000041323923327553
			},
			{
			  "code": "KGS",
			  "alphaCode": "KGS",
			  "numericCode": "417",
			  "name": "Kyrgyzstan Som",
			  "rate": 84.477693985279,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.011837444333817
			},
			{
			  "code": "MGA",
			  "alphaCode": "MGA",
			  "numericCode": "969",
			  "name": "Malagasy ariary",
			  "rate": 4371.0937499999,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.00022877569258267
			},
			{
			  "code": "SRD",
			  "alphaCode": "SRD",
			  "numericCode": "968",
			  "name": "Surinamese dollar",
			  "rate": 31.610169491525,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.031635388739947
			},
			{
			  "code": "GHS",
			  "alphaCode": "GHS",
			  "numericCode": "936",
			  "name": "Ghanaian Cedi",
			  "rate": 13.030567685589,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.076742627345848
			},
			{
			  "code": "CUP",
			  "alphaCode": "CUP",
			  "numericCode": "192",
			  "name": "Cuban peso",
			  "rate": 0.99834946692243,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 1.0016532618409
			},
			{
			  "code": "QAR",
			  "alphaCode": "QAR",
			  "numericCode": "634",
			  "name": "Qatari Rial",
			  "rate": 3.6596038971647,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.27325361653887
			},
			{
			  "code": "CZK",
			  "alphaCode": "CZK",
			  "numericCode": "203",
			  "name": "Czech Koruna",
			  "rate": 23.124658904362,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.04324388109402
			},
			{
			  "code": "RUB",
			  "alphaCode": "RUB",
			  "numericCode": "643",
			  "name": "Russian Rouble",
			  "rate": 63.367050319811,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.01578107226
			},
			{
			  "code": "RSD",
			  "alphaCode": "RSD",
			  "numericCode": "941",
			  "name": "Serbian Dinar",
			  "rate": 112.89729877485,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.0088576078511346
			},
			{
			  "code": "NIO",
			  "alphaCode": "NIO",
			  "numericCode": "558",
			  "name": "Nicaraguan Córdoba",
			  "rate": 36.449511400651,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.027435210008937
			},
			{
			  "code": "SBD",
			  "alphaCode": "SBD",
			  "numericCode": "090",
			  "name": "Solomon Islands dollar",
			  "rate": 8.2476506357104,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.12124664879356
			},
			{
			  "code": "MWK",
			  "alphaCode": "MWK",
			  "numericCode": "454",
			  "name": "Malawian kwacha",
			  "rate": 1024.9599267231,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.00097564789991068
			},
			{
			  "code": "YER",
			  "alphaCode": "YER",
			  "numericCode": "886",
			  "name": "Yemeni rial",
			  "rate": 249.83255190891,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.0040026809651474
			},
			{
			  "code": "NOK",
			  "alphaCode": "NOK",
			  "numericCode": "578",
			  "name": "Norwegian Krone",
			  "rate": 9.9741539407266,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.10025913034255
			},
			{
			  "code": "BDT",
			  "alphaCode": "BDT",
			  "numericCode": "050",
			  "name": "Bangladeshi taka",
			  "rate": 102.6117024882,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.0097454771312755
			},
			{
			  "code": "RON",
			  "alphaCode": "RON",
			  "numericCode": "946",
			  "name": "Romanian New Leu",
			  "rate": 4.6715252479594,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.21406284819649
			},
			{
			  "code": "DZD",
			  "alphaCode": "DZD",
			  "numericCode": "012",
			  "name": "Algerian Dinar",
			  "rate": 138.49635750851,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.0072204065001389
			},
			{
			  "code": "ARS",
			  "alphaCode": "ARS",
			  "numericCode": "032",
			  "name": "Argentine Peso",
			  "rate": 169.71576838218,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.0058922044164342
			},
			{
			  "code": "STN",
			  "alphaCode": "STN",
			  "numericCode": "930",
			  "name": "São Tomé and Príncipe Dobra",
			  "rate": 23.595150237216,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.042381590705989
			},
			{
			  "code": "BIF",
			  "alphaCode": "BIF",
			  "numericCode": "108",
			  "name": "Burundian franc",
			  "rate": 2067.4364896074,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.00048369079535299
			},
			{
			  "code": "MMK",
			  "alphaCode": "MMK",
			  "numericCode": "104",
			  "name": "Myanma Kyat",
			  "rate": 2096.4871194379,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.00047698838248437
			},
			{
			  "code": "MUR",
			  "alphaCode": "MUR",
			  "numericCode": "480",
			  "name": "Mauritian Rupee",
			  "rate": 43.583252190847,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.022944593386953
			},
			{
			  "code": "VES",
			  "alphaCode": "VES",
			  "numericCode": "928",
			  "name": "Venezuelan Bolivar",
			  "rate": 11.875961117988,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.084203711183034
			},
			{
			  "code": "IDR",
			  "alphaCode": "IDR",
			  "numericCode": "360",
			  "name": "Indonesian Rupiah",
			  "rate": 15613.475305109,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.00006404723999357
			},
			{
			  "code": "KRW",
			  "alphaCode": "KRW",
			  "numericCode": "410",
			  "name": "South Korean Won",
			  "rate": 1317.7611972845,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.00075886283649928
			},
			{
			  "code": "UAH",
			  "alphaCode": "UAH",
			  "numericCode": "980",
			  "name": "Ukrainian Hryvnia",
			  "rate": 36.515557994999,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.027385587264939
			},
			{
			  "code": "CRC",
			  "alphaCode": "CRC",
			  "numericCode": "188",
			  "name": "Costa Rican Colón",
			  "rate": 595.99264593345,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.0016778730523324
			},
			{
			  "code": "BZD",
			  "alphaCode": "BZD",
			  "numericCode": "084",
			  "name": "Belize dollar",
			  "rate": 2.0128614471376,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.4968051831993
			},
			{
			  "code": "GNF",
			  "alphaCode": "GNF",
			  "numericCode": "324",
			  "name": "Guinean franc",
			  "rate": 8607.6923076921,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.00011617515638964
			},
			{
			  "code": "SZL",
			  "alphaCode": "SZL",
			  "numericCode": "748",
			  "name": "Swazi lilangeni",
			  "rate": 17.281853281853,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.05786416443253
			},
			{
			  "code": "SOS",
			  "alphaCode": "SOS",
			  "numericCode": "706",
			  "name": "Somali shilling",
			  "rate": 567.73211567732,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.0017613941018767
			},
			{
			  "code": "AED",
			  "alphaCode": "AED",
			  "numericCode": "784",
			  "name": "U.A.E Dirham",
			  "rate": 3.6726500763786,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.27228295078578
			},
			{
			  "code": "INR",
			  "alphaCode": "INR",
			  "numericCode": "356",
			  "name": "Indian Rupee",
			  "rate": 82.333693333804,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.012145695881098
			},
			{
			  "code": "NPR",
			  "alphaCode": "NPR",
			  "numericCode": "524",
			  "name": "Nepalese Rupee",
			  "rate": 131.88794598996,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.0075821940549148
			},
			{
			  "code": "ZAR",
			  "alphaCode": "ZAR",
			  "numericCode": "710",
			  "name": "South African Rand",
			  "rate": 17.158935079641,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.058278674950318
			},
			{
			  "code": "AZN",
			  "alphaCode": "AZN",
			  "numericCode": "944",
			  "name": "Azerbaijan Manat",
			  "rate": 1.6968712166701,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.58931991430816
			},
			{
			  "code": "PYG",
			  "alphaCode": "PYG",
			  "numericCode": "600",
			  "name": "Paraguayan Guaraní",
			  "rate": 7136.6109341826,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.00014012253284122
			},
			{
			  "code": "GYD",
			  "alphaCode": "GYD",
			  "numericCode": "328",
			  "name": "Guyanese dollar",
			  "rate": 208.91481913652,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.0047866398570153
			},
			{
			  "code": "RWF",
			  "alphaCode": "RWF",
			  "numericCode": "646",
			  "name": "Rwandan franc",
			  "rate": 1084.5650593651,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.00092202859696162
			},
			{
			  "code": "ERN",
			  "alphaCode": "ERN",
			  "numericCode": "232",
			  "name": "Eritrean nakfa",
			  "rate": 15.050437121721,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.066443252904382
			},
			{
			  "code": "WST",
			  "alphaCode": "WST",
			  "numericCode": "882",
			  "name": "Samoan tala",
			  "rate": 2.7112484099582,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.36883378016086
			},
			{
			  "code": "BRL",
			  "alphaCode": "BRL",
			  "numericCode": "986",
			  "name": "Brazilian Real",
			  "rate": 5.2158953997408,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.1917216361451
			},
			{
			  "code": "LKR",
			  "alphaCode": "LKR",
			  "numericCode": "144",
			  "name": "Sri Lanka Rupee",
			  "rate": 367.30054836169,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.0027225660415167
			},
			{
			  "code": "TND",
			  "alphaCode": "TND",
			  "numericCode": "788",
			  "name": "Tunisian Dinar",
			  "rate": 3.2124638277749,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.31128755173958
			},
			{
			  "code": "TWD",
			  "alphaCode": "TWD",
			  "numericCode": "901",
			  "name": "New Taiwan Dollar ",
			  "rate": 30.638472748657,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.032638702594725
			},
			{
			  "code": "IQD",
			  "alphaCode": "IQD",
			  "numericCode": "368",
			  "name": "Iraqi dinar",
			  "rate": 1459.7725194074,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.00068503824171588
			},
			{
			  "code": "AFN",
			  "alphaCode": "AFN",
			  "numericCode": "971",
			  "name": "Afghan afghani",
			  "rate": 87.522731272362,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.011425603217159
			},
			{
			  "code": "NAD",
			  "alphaCode": "NAD",
			  "numericCode": "516",
			  "name": "Namibian dollar",
			  "rate": 17.2751833269,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.057886505808761
			},
			{
			  "code": "SYP",
			  "alphaCode": "SYP",
			  "numericCode": "760",
			  "name": "Syrian pound",
			  "rate": 2486.6666666667,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.00040214477211796
			},
			{
			  "code": "MOP",
			  "alphaCode": "MOP",
			  "numericCode": "446",
			  "name": "Macanese pataca",
			  "rate": 8.022943179781,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.12464253798034
			},
			{
			  "code": "BAM",
			  "alphaCode": "BAM",
			  "numericCode": "977",
			  "name": "Bosnia and Herzegovina convertible mark",
			  "rate": 1.8682694715752,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.53525469168902
			},
			{
			  "code": "DKK",
			  "alphaCode": "DKK",
			  "numericCode": "208",
			  "name": "Danish Krone",
			  "rate": 7.0721557069023,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.14139960168355
			},
			{
			  "code": "PKR",
			  "alphaCode": "PKR",
			  "numericCode": "586",
			  "name": "Pakistani Rupee",
			  "rate": 224.58511077687,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.0044526549268599
			},
			{
			  "code": "BGN",
			  "alphaCode": "BGN",
			  "numericCode": "975",
			  "name": "Bulgarian Lev",
			  "rate": 1.8595918803797,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.53775240177743
			},
			{
			  "code": "PEN",
			  "alphaCode": "PEN",
			  "numericCode": "604",
			  "name": "Peruvian Nuevo Sol",
			  "rate": 3.875362888224,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.25804035101814
			},
			{
			  "code": "TMT",
			  "alphaCode": "TMT",
			  "numericCode": "934",
			  "name": "New Turkmenistan Manat",
			  "rate": 3.4993351078135,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.28576857294037
			},
			{
			  "code": "SVC",
			  "alphaCode": "SVC",
			  "numericCode": "222",
			  "name": "Salvadoran colon",
			  "rate": 8.7421874999999,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.11438784629133
			},
			{
			  "code": "XCD",
			  "alphaCode": "XCD",
			  "numericCode": "951",
			  "name": "East Caribbean Dollar",
			  "rate": 2.70649413472,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.3694816800715
			},
			{
			  "code": "LAK",
			  "alphaCode": "LAK",
			  "numericCode": "418",
			  "name": "Lao kip",
			  "rate": 17281.853281853,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.00005786416443253
			},
			{
			  "code": "GTQ",
			  "alphaCode": "GTQ",
			  "numericCode": "320",
			  "name": "Guatemalan Quetzal",
			  "rate": 7.8788945608166,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.12692135835568
			},
			{
			  "code": "SAR",
			  "alphaCode": "SAR",
			  "numericCode": "682",
			  "name": "Saudi Riyal",
			  "rate": 3.7601107976349,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.26594960995006
			},
			{
			  "code": "PLN",
			  "alphaCode": "PLN",
			  "numericCode": "985",
			  "name": "Polish Zloty",
			  "rate": 4.4547449806989,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.22447974111486
			},
			{
			  "code": "GIP",
			  "alphaCode": "GIP",
			  "numericCode": "292",
			  "name": "Gibraltar pound",
			  "rate": 0.8212941589203,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 1.2175905418768
			},
			{
			  "code": "GEL",
			  "alphaCode": "GEL",
			  "numericCode": "981",
			  "name": "Georgian lari",
			  "rate": 2.7105508247651,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.36892870292763
			},
			{
			  "code": "MKD",
			  "alphaCode": "MKD",
			  "numericCode": "807",
			  "name": "Macedonian denar",
			  "rate": 58.723203274643,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.017029043789098
			},
			{
			  "code": "AWG",
			  "alphaCode": "AWG",
			  "numericCode": "533",
			  "name": "Aruban florin",
			  "rate": 1.8073164822741,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.55330652368185
			},
			{
			  "code": "AOA",
			  "alphaCode": "AOA",
			  "numericCode": "973",
			  "name": "Angolan kwanza",
			  "rate": 508.63636363634,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.0019660411081324
			},
			{
			  "code": "MVR",
			  "alphaCode": "MVR",
			  "numericCode": "462",
			  "name": "Maldivian rufiyaa",
			  "rate": 15.439806829941,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.064767649687222
			},
			{
			  "code": "EGP",
			  "alphaCode": "EGP",
			  "numericCode": "818",
			  "name": "Egyptian Pound",
			  "rate": 24.605592942826,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.040641166515419
			},
			{
			  "code": "HRK",
			  "alphaCode": "HRK",
			  "numericCode": "191",
			  "name": "Croatian Kuna",
			  "rate": 7.18286217131,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.13922026848771
			},
			{
			  "code": "MRO",
			  "alphaCode": "MRO",
			  "numericCode": "478",
			  "name": "Mauritanian Ouguiya",
			  "rate": 38.035611510792,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.026291150852571
			},
			{
			  "code": "COP",
			  "alphaCode": "COP",
			  "numericCode": "170",
			  "name": "Colombian Peso",
			  "rate": 4829.7324399471,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.00020705080714802
			},
			{
			  "code": "BBD",
			  "alphaCode": "BBD",
			  "numericCode": "052",
			  "name": "Barbadian Dollar",
			  "rate": 2.0162162162162,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.49597855227882
			},
			{
			  "code": "DJF",
			  "alphaCode": "DJF",
			  "numericCode": "262",
			  "name": "Djiboutian franc",
			  "rate": 177.7742473588,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.0056251117068813
			},
			{
			  "code": "HNL",
			  "alphaCode": "HNL",
			  "numericCode": "340",
			  "name": "Honduran Lempira",
			  "rate": 24.647577092511,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.040571939231457
			},
			{
			  "code": "KES",
			  "alphaCode": "KES",
			  "numericCode": "404",
			  "name": "Kenyan shilling",
			  "rate": 122.6301369863,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.0081546023235032
			},
			{
			  "code": "BHD",
			  "alphaCode": "BHD",
			  "numericCode": "048",
			  "name": "Bahrain Dinar",
			  "rate": 0.37652224987172,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 2.6558855428615
			},
			{
			  "code": "MAD",
			  "alphaCode": "MAD",
			  "numericCode": "504",
			  "name": "Moroccan Dirham",
			  "rate": 10.667038069218,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.093746735833419
			},
			{
			  "code": "MYR",
			  "alphaCode": "MYR",
			  "numericCode": "458",
			  "name": "Malaysian Ringgit",
			  "rate": 4.409962543373,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.2267592956096
			},
			{
			  "code": "MDL",
			  "alphaCode": "MDL",
			  "numericCode": "498",
			  "name": "Moldova Lei",
			  "rate": 19.434998257864,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.051453567771501
			},
			{
			  "code": "PAB",
			  "alphaCode": "PAB",
			  "numericCode": "590",
			  "name": "Panamanian Balboa",
			  "rate": 0.99917473346122,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 1.0008259481662
			},
			{
			  "code": "FJD",
			  "alphaCode": "FJD",
			  "numericCode": "242",
			  "name": "Fiji Dollar",
			  "rate": 2.2089522775502,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.45270330652368
			},
			{
			  "code": "CDF",
			  "alphaCode": "CDF",
			  "numericCode": "976",
			  "name": "Congolese franc",
			  "rate": 2052.2696011004,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.0004872654155496
			},
			{
			  "code": "MZN",
			  "alphaCode": "MZN",
			  "numericCode": "943",
			  "name": "Mozambican metical",
			  "rate": 64.034334763946,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.015616621983915
			},
			{
			  "code": "UGX",
			  "alphaCode": "UGX",
			  "numericCode": "800",
			  "name": "Ugandan shilling",
			  "rate": 3683.9506172839,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.00027144772117963
			},
			{
			  "code": "HKD",
			  "alphaCode": "HKD",
			  "numericCode": "344",
			  "name": "Hong Kong Dollar",
			  "rate": 7.7840731135571,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.12846744697944
			},
			{
			  "code": "KWD",
			  "alphaCode": "KWD",
			  "numericCode": "414",
			  "name": "Kuwaiti Dinar",
			  "rate": 0.30685813188212,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 3.2588349341322
			},
			{
			  "code": "THB",
			  "alphaCode": "THB",
			  "numericCode": "764",
			  "name": "Thai Baht",
			  "rate": 34.876896458588,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.028672275963183
			},
			{
			  "code": "XOF",
			  "alphaCode": "XOF",
			  "numericCode": "952",
			  "name": "West African CFA Franc",
			  "rate": 624.35909910366,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.0016016423904699
			},
			{
			  "code": "IRR",
			  "alphaCode": "IRR",
			  "numericCode": "364",
			  "name": "Iranian rial",
			  "rate": 41984.748646544,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.000023818172842207
			},
			{
			  "code": "BOB",
			  "alphaCode": "BOB",
			  "numericCode": "068",
			  "name": "Bolivian Boliviano",
			  "rate": 6.8922524752474,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.14509044809246
			},
			{
			  "code": "LRD",
			  "alphaCode": "LRD",
			  "numericCode": "430",
			  "name": "Liberian dollar",
			  "rate": 153.81443298969,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.0065013404825738
			},
			{
			  "code": "SDG",
			  "alphaCode": "SDG",
			  "numericCode": "938",
			  "name": "Sudanese pound",
			  "rate": 566.58227848099,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.0017649687220734
			},
			{
			  "code": "TOP",
			  "alphaCode": "TOP",
			  "numericCode": "776",
			  "name": "Tongan paʻanga",
			  "rate": 2.3824985362218,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.41972743521002
			},
			{
			  "code": "VUV",
			  "alphaCode": "VUV",
			  "numericCode": "548",
			  "name": "Vanuatu vatu",
			  "rate": 119.80086719126,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.0083471849865954
			},
			{
			  "code": "OMR",
			  "alphaCode": "OMR",
			  "numericCode": "512",
			  "name": "Omani Rial",
			  "rate": 0.38464794780538,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 2.599779891471
			},
			{
			  "code": "ILS",
			  "alphaCode": "ILS",
			  "numericCode": "376",
			  "name": "Israeli New Sheqel",
			  "rate": 3.4410732309383,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.29060700917641
			},
			{
			  "code": "NGN",
			  "alphaCode": "NGN",
			  "numericCode": "566",
			  "name": "Nigerian Naira",
			  "rate": 444.57490771062,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.0022493397235341
			},
			{
			  "code": "UZS",
			  "alphaCode": "UZS",
			  "numericCode": "860",
			  "name": "Uzbekistan Sum",
			  "rate": 11209.752616341,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.000089208034666372
			},
			{
			  "code": "ETB",
			  "alphaCode": "ETB",
			  "numericCode": "230",
			  "name": "Ethiopian birr",
			  "rate": 53.412887828163,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.018722073279714
			},
			{
			  "code": "TTD",
			  "alphaCode": "TTD",
			  "numericCode": "780",
			  "name": "Trinidad Tobago Dollar",
			  "rate": 6.7766843300528,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.14756478999107
			},
			{
			  "code": "PGK",
			  "alphaCode": "PGK",
			  "numericCode": "598",
			  "name": "Papua New Guinean kina",
			  "rate": 3.5183147303883,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.28422698838248
			},
			{
			  "code": "BWP",
			  "alphaCode": "BWP",
			  "numericCode": "072",
			  "name": "Botswana Pula",
			  "rate": 12.902853848371,
			  "date": "Thu, 8 Dec 2022 23:55:01 GMT",
			  "inverseRate": 0.077502234137625
			}
		  ]
		  
		
		const count = 10;
		const header = document.getElementById("counter");
		const selectOne = document.getElementById("selectOne");
		const selectTwo = document.getElementById("selectTwo");
		const inputOne = document.getElementById("inputOne");
		const inputTwo = document.getElementById("inputTwo");
	
		data.forEach(function (item) {
		  const optionOne = document.createElement("option");
		  selectOne.appendChild(optionOne);
		  optionOne.innerHTML = item.code;
		  optionOne.value = item.code;
		  const optionTwo = document.createElement("option");
		  selectTwo.appendChild(optionTwo);
		  optionTwo.innerHTML = item.code;
		  optionTwo.value = item.code;
		});
	
		// input one
		handleOnChangeOne = (value) => {
		  if (selectOne.value != selectTwo.value) {
			inputTwo.value = getConvertedCurrency(
			  value,
			  selectOne.value,
			  selectTwo.value
			);
			console.log("helloOne");
		  }
		  handleSelectOne = (selectedItem) => {
			if (selectedItem != selectTwo.value) {
			  inputOne.value = getConvertedCurrency(
				value,
				selectedItem,
				selectTwo.value
			  );
			  console.log("select change helloOne");
			}
		  };
		};
	
		// input two
		handleOnChangeTwo = (value) => {
		  if (selectOne.value != selectTwo.value) {
			inputOne.value = getConvertedCurrency(
			  value,
			  selectTwo.value,
			  selectOne.value
			);
		  }
		  handleSelectTwo = (selectedItem) => {
			if (selectOne.value != selectedItem) {
			  inputTwo.value = getConvertedCurrency(
				value,
				selectOne.value,
				selectedItem
			  );
			}
		  };
		};
	
		function getConvertedCurrency(currency, from, to) {
		  let fromRate = data.find((item) => item.code === from).rate;
		  let toRate = data.find((item) => item.code === to).rate;
	
		  const result = ((toRate / fromRate) * currency).toFixed(2);
		  console.log(result, "result");
		  return result;
		}
	
	  </script>
        
    </script>
	
	</html>`;
  }

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
