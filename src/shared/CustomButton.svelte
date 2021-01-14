<script>
    export let buttonText = '';
    export let onClick;
</script>

<style>
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
</style>

<button on:click={onClick}>{buttonText}</button>