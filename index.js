function guessNote(frequency, kamertone){
	var octave  = getOctave(kamertone);

	return getClosestNote(frequency, octave);
}

function getOctave(note){
	//Setting lowest "A" note
	var octave = [note];

	//Setting difference between two neighbour tones
	var toneQuotient = Math.pow(2, 1/12);

	//Constructing octave from A0 to G#
	for(var i = 0; i < 11; i++){
		nextNote = octave[i] * toneQuotient;
		octave.push(nextNote);
	}

	return octave;
}

function getClosestNote(frequency, octave){
	var closest, distQuotient, last = frequency;

	octave.forEach(function(note, i, octave){

		//Calculating distance quotient
		distQuotient = Math.abs( (frequency / note) - 1 );

		//Snettig last closest frequency and closest note
		if(distQuotient < last){
			last = distQuotient;
			closest = i;
		}
	});
	
	return closest;
}

module.exports.guessNote = guessNote;