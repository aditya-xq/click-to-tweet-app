<script>
	import TweetForm from './TweetForm.svelte';
</script>

<style>
	.title{
		color:#1DA1F2;
		font-size:36px;
		font-weight:600;
	}
	.sub-title{
		color:#1DA1F2;
		font-weight:600;
		text-decoration: underline;
	}
	.main{
		height: 92%;
		padding:50px;
		background:#243447;
	}
</style>

<div class="main">
	<div class="title">Click to tweet generator (v1.1)</div>
	<TweetForm />
	<a class="sub-title" href='https://xq-is-here.medium.com/' target="_blank" rel="noopener noreferrer">Made with <span style="color: #e25555;">&#9829;</span> by XQ</a>
</div>
