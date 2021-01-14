<script>
    export let placeholder = '';
    export let value = '';
    export let id = '';
</script>

<style>
    input {
        width: 40%;
        max-width: 600px;
        padding-right:10px;
		padding-left:10px;
		background-color:#141d26;
		color: #ffffff;
		border: none;
		text-decoration: none;
		display: inline-block;
		border-radius: 16px;
	}
</style>

<input
    bind:value
    placeholder={placeholder}
    id={id}
>