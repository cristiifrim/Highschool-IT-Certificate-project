const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)


document.querySelector('#jsAge').innerHTML = `Age: 19 years old then, now ${getAge('2002-02-25')}.`