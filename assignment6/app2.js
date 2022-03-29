const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];



function getPosts() {
    setTimeout(function() {
        let output = '';
        posts.map((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}

let promiss = new Promise(function getPosts(resolve, reject){

    if(true) {
        resolve();
    }else{
        reject(Error("that have error"));
    }
});

function creatPost(post) {
    setTimeout(function() {
        posts.push(post);
        promiss.then(getPosts()).catch(function(reject){console.log(reject);});
    }, 1500);
}
promiss.then(getPosts()).catch(function(reject){console.log(reject);});
creatPost({ title: 'Post Three', body: 'this is post three' });