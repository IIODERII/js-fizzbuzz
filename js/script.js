const containerEl = document.getElementById('containerEl') ;
const fizz = 'fizz' ;
const buzz = 'buzz' ;
const fizzBuzz = 'fizzBuzz' ;

for(let i = 1 ; i <= 100 ; i++){

    let boxEl = document.createElement('div') ;

    if(i % 3 === 0 && i % 5 === 0){
        boxEl.className = 'box bg-danger m-2';
        boxEl.innerHTML = fizzBuzz;
    }
    else if(i % 3 === 0){
        boxEl.className = 'box bg-success m-2';
        boxEl.innerHTML = fizz;
    }
    else if(i % 5 === 0){
        boxEl.className ='box bg-warning m-2';
        boxEl.innerHTML = buzz;
    }
    else{
        boxEl.className = 'box bg-primary m-2';
        boxEl.innerHTML = i;
    }

    containerEl.append(boxEl);
}