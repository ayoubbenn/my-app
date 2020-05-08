const countryData = {
    
    country: [
        {
            id: 1,
            name: 'USA',
            capital: 'Washington',
            cost: 1250,
            details: 'United States are among the most visited country in the world.',
            img: 'washington.jpg'
        },
        {
            id: 2,
            name: 'Netherlands',
            capital: 'Amsterdam',
            cost: 795,
            details: 'The capital of the Netherlands, Amsterdam, is over 1000 years old.',
            img: 'amsterdam.jpg'
        },
        {
            id: 3,
            name: 'Belgium',
            capital: 'Brussels',
            cost: 645,
            details: 'In Belgium they actually speak three different official languages: Flemmish, French and German.',
            img: 'brussels.jpg'
        },
    ],
    all: function() { return this.country}
};

export default countryData;
