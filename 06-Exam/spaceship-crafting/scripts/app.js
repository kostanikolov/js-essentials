function spaceshipCrafting() {

	const barsPrices = {
		titaniumBar: 25,
		aluminiumBar: 50,
		magnesiumBar: 75,
		carbonBar: 100,
	}

	let titaniumCores = Number(document.getElementById('titaniumCoreFound').value);
	let aluminiumCores = Number(document.getElementById('aluminiumCoreFound').value);
	let magnesiumCores = Number(document.getElementById('magnesiumCoreFound').value);
	let carbonCores = Number(document.getElementById('carbonCoreFound').value);

	let lossesPercentage = Number(document.getElementById('lossesPercent').value);
	let lossesPercentByCores = lossesPercentage / 4;

	titaniumCores -= (titaniumCores * lossesPercentByCores / 100);
	aluminiumCores -= (aluminiumCores * lossesPercentByCores / 100);
	magnesiumCores -= (magnesiumCores * lossesPercentByCores / 100);
	carbonCores -= (carbonCores * lossesPercentByCores / 100);

	titaniumCores = Math.round(titaniumCores);
	aluminiumCores = Math.round(aluminiumCores);
	magnesiumCores = Math.round(magnesiumCores);
	carbonCores = Math.round(carbonCores);

	let titaniumBarsCount = Math.round(titaniumCores / barsPrices.titaniumBar);
	let aluminiumBarsCount = Math.round(aluminiumCores / barsPrices.aluminiumBar);
	let magnesiumBarsCount = Math.round(magnesiumCores / barsPrices.magnesiumBar);
	let carbonBarsCount = Math.round(carbonCores / barsPrices.carbonBar);

	let theUndifinedShipsCount = 0;
	let nullMasterShipsCount = 0;
	let jsonCrewShipsCount = 0;
	let falseFleetShipsCount = 0;

	while (titaniumBarsCount >= 2 &&
		aluminiumBarsCount >= 2 &&
		magnesiumBarsCount >= 3 &&
		carbonBarsCount >= 1) {

		if (titaniumBarsCount >= 7 &&
			aluminiumBarsCount >= 9 &&
			magnesiumBarsCount >= 7 &&
			carbonBarsCount >= 7) {

			titaniumBarsCount -= 7;
			aluminiumBarsCount -= 9;
			magnesiumBarsCount -= 7;
			carbonBarsCount -= 7;

			theUndifinedShipsCount++;
		}

		if (titaniumBarsCount >= 5 &&
			aluminiumBarsCount >= 7 &&
			magnesiumBarsCount >= 7 &&
			carbonBarsCount >= 5) {

			titaniumBarsCount -= 5;
			aluminiumBarsCount -= 7;
			magnesiumBarsCount -= 7;
			carbonBarsCount -= 5;

			nullMasterShipsCount++;
		}

		if (titaniumBarsCount >= 3 &&
			aluminiumBarsCount >= 5 &&
			magnesiumBarsCount >= 5 &&
			carbonBarsCount >= 2) {

			titaniumBarsCount -= 3;
			aluminiumBarsCount -= 5;
			magnesiumBarsCount -= 5;
			carbonBarsCount -= 2;

			jsonCrewShipsCount++;
		}

		if (titaniumBarsCount >= 2 &&
			aluminiumBarsCount >= 2 &&
			magnesiumBarsCount >= 3 &&
			carbonBarsCount >= 1) {

			titaniumBarsCount -= 2;
			aluminiumBarsCount -= 2;
			magnesiumBarsCount -= 3;
			carbonBarsCount -= 1;

			falseFleetShipsCount++;
		}
	}

	let availableBarsParagraph = document.querySelector('#availableBars p');
	let buildSpaceshipsParagraph = document.querySelector('#builtSpaceships p');

	availableBarsParagraph.textContent = `${titaniumBarsCount} titanium bars, ${aluminiumBarsCount} aluminum bars, ${magnesiumBarsCount} magnesium bars, ${carbonBarsCount} carbon bars`;

	let buildedShipsArr = [];

	if (theUndifinedShipsCount > 0) {
		buildedShipsArr.push(`${theUndifinedShipsCount} THE-UNDEFINED-SHIP`);
	}

	if (nullMasterShipsCount > 0) {
		buildedShipsArr.push(`${nullMasterShipsCount} NULL-MASTER`);
	}

	if (jsonCrewShipsCount > 0) {
		buildedShipsArr.push(`${jsonCrewShipsCount} JSON-CREW`);
	}

	if (falseFleetShipsCount > 0) {
		buildedShipsArr.push(`${falseFleetShipsCount} FALSE-FLEET`);
	}

	buildSpaceshipsParagraph.textContent = buildedShipsArr.join(', ');
}
