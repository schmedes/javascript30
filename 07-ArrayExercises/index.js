// ## Array Cardio Day 2
    const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];
    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];
    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    const atleastOneNineteen = arr =>{
        return arr.some(x => 18 < 2017 - x.year);
    }
    console.log(atleastOneNineteen(people));
    // Array.prototype.every() // is everyone 19 or older?
    const everyOneNineteen = arr =>{
        return arr.every(x => 18 < 2017 - x.year);
    }
    console.log(everyOneNineteen(people));
    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    const findComment = (comments, id) => {
        return comments.find(x => x.id === id);
    }
    console.log(findComment(comments, 823423));
    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423
    const deleteComment = (comments, id) => {
        const ind = comments.findIndex(x => x.id === id);
        return comments.slice(0, ind).concat(comments.slice(ind+1, comments.length));
    }
    console.log(deleteComment(comments, 823423));