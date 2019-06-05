function getData() {

	let people = JSON.parse(document.getElementsByTagName('textarea')[0].value);

	for (const person of people) {

		if (person.action === 'peopleIn') {
			let strPerson = JSON.stringify(person);
			let paragraphElement = document.createElement('p');
			

		} else if (person.action === 'peopleOut') {

		} else if (person.action === 'blacklist') {
			
		}
	}
}

// let p = document.getElementById('peopleIn').children[1];
// console.log(p);