<script>	
	export let tooltip = false // prevent blank tooltips
</script>

<style>
	/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 130px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px;
  border-radius: 16px;
  bottom: 100%;
  left: 50%;
  margin-left: -60px;
 
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}
button {
	background:	#141d26;
	border: none;
	color: white;
	text-align: center;
	display: inline-block;
	border-radius: 50%;
}
</style>

<button class="tooltip" data-tooltip={tooltip}>
	<span class="tooltiptext">{tooltip}</span>
	<slot></slot>
</button>