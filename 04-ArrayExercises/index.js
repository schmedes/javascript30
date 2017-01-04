const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];
    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    const bornBefore1500 = arr => {
        return arr.filter(el=> el.year > 1499 && el.year < 1600);
    }
    console.log(bornBefore1500(inventors));
    // Array.prototype.map()
    // 2. Give us an array of the inventors' first and last names
    const firstAndLastNames = arr => {
        return arr.map(el => `${el.first} ${el.last}`);
    }
    console.log(firstAndLastNames(inventors));

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    const sortAge = arr => {
        return arr.sort( (a,b) => a.year-b.year);
    }
    console.log(sortAge(inventors));
    // Array.prototype.reduce()
    // 4. How many years did all the inventors live? || oh you mean combined
    /*const inventorsLived = arr => {
        return arr.reduce( (prev, next)=>{
            prev.push({first: next.first, last: next.last, lived: next.passed - next.year});
            return prev;
        },[])
    }*/
    const inventorsLivedCombined = arr => {
        return arr.reduce((p, n) => {
            return p + (n.passed - n.year);
        }, 0)
    }
    console.log(inventorsLivedCombined(inventors));
    // 5. Sort the inventors by years lived
    sortLived = arr =>{
        return arr.sort((a, b)=> (a.passed - a.year) - (b.passed - b.year));
    }
    console.log(sortLived(inventors));
    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    // const category = document.querySelector('.mw-category');
    // const boulevards = Array.from(category.querySelectorAll('a'));
    const includesDe = arr => {
        arr.map( dom => dom.textContent)
           .filter( name => name.includes('de'))
    }
    // console.log(includesDe(boulevards));
    
    // 7. sort Exercise
    // Sort the people alphabetically by last name
    console.log(people.sort());
    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
    const sumUp = arr => {
        return arr.reduce((prev, next)=>{
            if(Object.keys(prev).includes(next)) {
                prev[next] += 1;
            } else {
                prev[next] = 1;
            }
            return prev;
        },{})
    }
    console.log(sumUp(data));
