


async function foo() {

    url1 = "https://pokeapi.co/api/v2/pokemon/?limit=151"

    try {
        let data = await f1();
        let res = await data.json();
        console.log(res);



        for (var i = 0; i < 50; i++) {
            
            let div = document.createElement("div");
            div.style.color="purple";
            div.innerHTML = res.results[i].name;
            document.body.append( div);


            url2 = res.results[i].url;
            let data1 = await f2()
            let res1 = await data1.json();

            let di = document.createElement("di");
            di.style.color = "blue";
            di.innerHTML = res1.abilities[0].ability.name;
            document.body.append("Ability: ",di);

            let dii = document.createElement("dii");
            dii.style.color = "green";
            dii.innerHTML = res1.moves[0].move.name;
            document.body.append("Moves:Name:  ",dii);

            let a = document.createElement("a");
            a.style.color = "green";
            a.innerHTML = res1.moves[0].move.url;
            document.body.append("Moves:url: ",a);

           
            let c = document.createElement("c");
            c.style.color = "orange";
            c.innerHTML = res1.moves[0].version_group_details[0].level_learned_at;
            document.body.append("Moves:version_group_details.level_learned_at: ",c);
            
            let d = document.createElement("d");
            d.style.color = "Pink";
            d.innerHTML = res1.moves[0].version_group_details[0].move_learn_method.name;
            document.body.append("Moves:version_group_details.move_learned_at.name: ",d);

            let e = document.createElement("e");
            e.style.color = "green";
            e.innerHTML = res1.moves[0].version_group_details[0].move_learn_method.url;
            document.body.append("Moves:version_group_details.move_learned_at.url: ",e);

            let f = document.createElement("f");
            f.style.color = "brown";
            f.innerHTML = res1.moves[0].version_group_details[0].version_group.name;
            document.body.append("Moves:version_group_details.version_group.name:   ",f);

            let g = document.createElement("g");
            g.style.color = "green";
            g.innerHTML = res1.moves[0].version_group_details[0].version_group.url;
            document.body.append("Moves:version_group_details.version_group.url   ",g);

            
            


            let diii = document.createElement("diii");
            diii.style.color = "red";
            diii.innerHTML = res1.weight;
            document.body.append("Weight:  ",diii);

        }
    }


    catch (error) {
        console.log(error);
    }
    function f1() {
        return fetch(url1);

    }
    function f2() {
        return fetch(url2);
    }
}
foo();

// let button=document.getElementById("main");
// document .innerHTML="Click Me";
//  document.body.append(button);
//  button.addEventListener("Click Me",fooo());
