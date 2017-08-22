const people = [
    {
        name: 'Ansel Adams',
        id: 1,
        image: 'http://anseladams.com/wp-content/uploads/2016/07/Jeffrey-Pine-1549x1260.jpg',
        description: 'Black and white nature to the rescue. Aone syetem anyone?'
    },
    {
        name: 'Sally Mann',
        id: 2,
        image: 'http://assets.vogue.com/photos/589168ad4fe1526113021f59/master/pass/5-sally-mann-damaged-child.jpg',
        description: 'Proving that moms can be ballin photographers'
    },
    {
        name: 'Richard Avedon',
        id: 3,
        image: 'http://www.pbs.org/wnet/americanmasters/files/2005/09/RichardAvedon16x9.jpg',
        description: 'White background with famous people and sometimes bees'
    }
]

export function getPeople() {
    return people;
}

export function getPerson(id) {
    let person = people.filter(e => {
        if(e.id === +id) {
            return e
        }
    }) 
    return person[0]
}