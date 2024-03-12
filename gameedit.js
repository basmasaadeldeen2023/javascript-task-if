let q = prompt("do you fly?yes or no");
   q = q.toLocaleLowerCase();
if (q == "yes") {
    let y = prompt("Are you whild?yes or no");
    y = y.toLocaleLowerCase();
    if (y == "yes") {
        alert("Eagle");


    }
    else if (y == "no") {

        alert("Parrot");


    }


}
else if (q == "no") {
    let n = prompt("do you live under sea?yes or no");
    n = n.toLocaleLowerCase();

    if (n == "yes") {

        let s = prompt("Are you wild ? yes or no");
        s = s.toLocaleLowerCase();
        if (s == "yes") {
            alert("Shark");

        }
        else if (s == "no") {
            alert("Dolphin");

        }

    }
    else if (n.toLocaleLowerCase() === "no") {
        let d = prompt("Are you wild ? yes or no");
        d = d.toLocaleLowerCase();
        if (d == "yes") {
            alert("Lion");

        }
        else if (d== "no") {
            alert("Cat");

        }

    }

}







