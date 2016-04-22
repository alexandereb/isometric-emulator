var world, planes, forest, num, getRandomNumber;

function init () {

  /*Create world*/
  createWorld = function(size, forest, lakes) {
    planes = [];
    world = document.getElementsByClassName("box-world")[0];

    getRandomNumber = function (world_size) {
      return parseInt(Math.random() * world_size);
    }

    if (size == "S") {
      world.style.width = "18em";
      world.style.height = "18em";
      // for(i = 0 ;i < 36; i++) {
      //   plane = document.createElement("div");
      //   plane.className = "cube";
      //   world.appendChild(plane);
      // }
    } else if (size == "M") {
      world.style.width = "60em";
      world.style.height = "60em";
      // for(i = 0 ;i < 400; i++) {
      //   plane = document.createElement("div");
      //   plane.className = "cube";
      //   world.appendChild(plane);
      // }
      for (i = 0; i <= 3; i++) {
        world_size = world.style.width
        world_size = world_size.slice(0, world_size.length - 2) * 10
        num_top = getRandomNumber(world_size);
        num_left = getRandomNumber(world_size);
        forest = document.createElement("div")
        forest.className = "box forest";
        forest.style.top = num_top+"px";
        forest.style.left = num_left+"px";
        world.appendChild(forest);
      }
    }

  }

  //Create world 2.0
  createWorld2 = function() {
    planes = [];
    world = document.getElementsByClassName("box-world")[0];
    world.style.width = "2500px";
    world.style.height = "2500px";

    planes = (world.style.width.slice(0,-2)) / 50;
    planes = planes * planes;
    for (i = 0; i < planes + 1; i++) {
      ground = document.createElement("div");
      ground.style.float = "left";
      ground.style.width = "50px";
      ground.style.height = "50px";
      ground.className = "box ground";
      ground.setAttribute("id","id_"+i+"");
      world.appendChild(ground);
      console.log(ground)
    }
  }


}



window.onload = init;
