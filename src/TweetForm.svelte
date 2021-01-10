<script>
	import Help from './Help.svelte';
	export let text = '';
	export let url = '';
	export let hashtags = '';
	export let username = '';
	let tweet = '';
	
	function clearAll(){
		text = '';
		url = '';
		hashtags = '';
		username = '';
	}

	function encodeQuery(){
		let data = {
			baseUrl : 'https://twitter.com/intent/tweet?',
    		params : { 
        		'text':`${text}`,
        		'url':`${url}`,
				'hashtags':`${hashtags}`,
				'via':`${username}`,
    			}
			}
		let query = data.baseUrl 
    	for (let d in data.params) {
			if (data.params[d] !== '')
        		query += encodeURIComponent(d) + '=' + encodeURIComponent(data.params[d]) + '&';
		}
    	tweet = query.slice(0, -1)
	}

	function copyToClipboard() {
  		/* Get the text field */
  		var copyText = document.getElementById("myTweet");

  		/* Select the text field */
  		copyText.select();
  		copyText.setSelectionRange(0, 99999); /* For mobile devices */

  		/* Copy the text inside the text field */
  		document.execCommand("copy");

  		/* Alert the copied text */
  		alert("Copied the string: " + copyText.value);
	}
</script>

<style>
	*{
		box-sizing: border-box;
	}
	.form-container {
		padding-top:40px;
		width:80%;
		padding-bottom: 40px;
	}
	
	/* Create three equal columns that floats next to each other */
	.col-one {
		float: left;
		width: 150px;
		padding-right:10px;
	}
	.col-two {
		float: left;
		width: 50%;
		max-width: 600px;
		padding-right:10px;
		padding-left:10px;
	}
	.row {
		padding-bottom:20px;
	}
	/* Clear floats after the columns */
	.row:after {
		content: "";
		display: table;
		clear: both;
	}
	/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
	@media screen and (max-width: 600px) {
		.col-one {
			width: 100%;
		}
		.col-two {
			width: 100%;
		}
	}
	.form-field{
		text-align:left;
		color:#1DA1F2;
		vertical-align:middle;
		font-size:20px;
		font-weight:500;
	}
	.tooltip {
		padding-left:5px;
	}
	.click-container{
		padding-top: 30px;
		padding-bottom: 30px;
	}
	.final-string {
		padding-left:10px;
	}
	button {
		background:	#1DA1F2;
		border: none;
		color: black;
		padding: 10px 20px;
		font-weight:600;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		margin: 4px 2px;
		cursor: pointer;
		border-radius: 16px;
	}
	button:active {
		color: white;
		background: #141d26;
	}
	input {
		width:60%;
		background-color:#141d26;
		color: #ffffff;
		border: none;
		text-decoration: none;
		display: inline-block;
		border-radius: 16px;
	}
</style>

<div class="form-container">
	<div class="row">
		<span class="form-field col-one">Content</span>
		<input class="col-two" bind:value={text} placeholder="Enter your text">
		<span class="tooltip"><Help tooltip="Type the body of the tweet">?</Help></span>
	</div>
	<div class="row">
		<span class="form-field col-one">URL</span>
		<input class="col-two" bind:value={url} placeholder="Enter url (if any)">
		<span class="tooltip"><Help tooltip="Type the url you wish to share with the tweet">?</Help></span>
	</div>
	<div class="row">
		<span class="form-field col-one">Hashtags</span>
		<input class="col-two" bind:value={hashtags} placeholder="Enter hashtags as csv">
		<span class="tooltip"><Help tooltip="Type the hashtags as comma separated values">?</Help></span>
	</div>
	<div class="row">
		<span class="form-field col-one">Username</span>
		<input class="col-two" bind:value={username} placeholder="Enter username (if any)">
		<span class="tooltip"><Help tooltip="Type the username you wish to tag in the tweet">?</Help></span>
	</div>
	<div class="click-container">
		<button on:click={encodeQuery}>Generate</button>
		<button on:click={clearAll}>Clear all</button>
	</div>
	<div>
		<input class="final-string" type="text" value={tweet} id="myTweet">
		<!-- The button used to copy the text -->
		<button on:click={copyToClipboard}>Copy string</button>
	</div>
</div>