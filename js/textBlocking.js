function transpose(lines) {
	return lines[0].split('').map(
		function (element, index) { 
			return lines.map(function (block) { 
				return block[index]; 
			}).join(''); 
		}
	);
}