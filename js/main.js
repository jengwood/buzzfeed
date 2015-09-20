$(function() {
	//$('#lines').val('["AAA","BBB","CCC"]');
	//$('#lines').val('["AAAAAAAAAAAAA"]');
	$('#lines').val('["A","A","A","A","A"]');

	$("#textBlocking").click(function() {
		var lines = JSON.parse($('#lines').val());
		$('#linesOutput').html(JSON.stringify(transpose(lines)));
	});

	//$('#times').val('["12:00 PM, DAY 1","12:01 PM, DAY 1"]');
	//$('#times').val('["12:00 AM, DAY 2"]');
	$('#times').val('["02:00 PM, DAY 19","02:00 PM, DAY 20","01:58 PM, DAY 20"]');

	$("#raceAverage").click(function() {
		var RaceAvg = new RaceAverage(JSON.parse($('#times').val()));
		$('#raceAverageoutput').html(RaceAvg.avgMinutes());
	}); 
});