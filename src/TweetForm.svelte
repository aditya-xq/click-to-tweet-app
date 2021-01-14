<script>
	import Help from './shared/Help.svelte';
	import CustomButton from './shared/CustomButton.svelte';
	import CustomInput from './shared/CustomInput.svelte';
	import {copyToClipboard, encodeTweet} from './utils';
	import strings from './strings';
	let text = '';
	let url = '';
	let hashtags = '';
	let username = '';
	let tweet = '';
	
	function clearAll(){
		text = '';
		url = '';
		hashtags = '';
		username = '';
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
</style>

<div class="form-container">
	<div class="row">
		<span class="form-field col-one">Content</span>
		<CustomInput bind:value={text} placeholder={strings.placeholders.content}/>
		<span class="tooltip"><Help tooltip={strings.contentToolTip}>?</Help></span>
	</div>
	<div class="row">
		<span class="form-field col-one">URL</span>
		<CustomInput bind:value={url} placeholder={strings.placeholders.url}/>
		<span class="tooltip"><Help tooltip={strings.urlToolTip}>?</Help></span>
	</div>
	<div class="row">
		<span class="form-field col-one">Hashtags</span>
		<CustomInput bind:value={hashtags} placeholder={strings.placeholders.hashtags}/>
		<span class="tooltip"><Help tooltip={strings.hashtagsToolTip}>?</Help></span>
	</div>
	<div class="row">
		<span class="form-field col-one">Username</span>
		<CustomInput bind:value={username} placeholder={strings.placeholders.name}/>
		<span class="tooltip"><Help tooltip={strings.usernameToolTip}>?</Help></span>
	</div>
	<div class="click-container">
		<CustomButton onClick={() => tweet = encodeTweet(text, url, hashtags, username)} buttonText="Generate"/>
		<CustomButton onClick={clearAll} buttonText="Clear all"/>
	</div>
	<div>
		<CustomInput class="final-string" type="text" value={tweet} id="myTweet"/>
		<CustomButton onClick={() => copyToClipboard("myTweet")} buttonText="Copy String"/>
	</div>
</div>