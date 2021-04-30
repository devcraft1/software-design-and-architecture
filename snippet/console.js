// Types of console use cases
console.log(console.log())
console.error(console.error())
console.warn(console.warn())
console.info(console.info())
console.debug(console.debug())




// using console.table 

function Name (first, last){
 this.first =first
 this.last=last
}

const john = new Name('john', 'smith')
const jonah= new Name('jonah', 'samuel')
const joseph = new Name('joseph', 'seth')

console.table([john,jonah,joseph])