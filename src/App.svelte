<script>
	import TweetForm from './TweetForm.svelte';
</script>

<style>
	.title{
		text-align:left;
		padding-left:30px;
		padding-bottom:3px;
		color:#1DA1F2;
		display:block;
		font-size:40px;
		font-weight:600;
	}
	.sub-title{
		text-align:left;
		color:#1DA1F2;
		font-weight:600;
		padding-left:30px;
		text-decoration: underline;
	}
	.main{
		padding:50px;
		background:#243447;
	}
</style>

<div class="main">
	<div class="title">Click to tweet generator (v1.0)</div>
	<a class="sub-title" href='https://xq-is-here.medium.com/'>By XQ</a>
	<TweetForm />
</div>
