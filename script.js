var pic = document.getElementById('p');
var img = document.querySelectorAll('.pic');
var body = document.getElementById('bdy');
var img_div = document.getElementById('popup_image');


var data = 0;


// var big_img = document.getElementById('main_pic');

var nature = ["nature-1.jpeg", "nature-2.jpeg", "nature-3.jpeg"];
var city = ["city-1.jpeg", "city-2.jpeg", "city-3.jpeg", "city-4.jpeg"];




img_div.style.display = 'none';
let img1 = document.querySelectorAll('.pic')

let im_div = document.getElementById('narute_div')

img1.forEach(
     function (i) {
          i.addEventListener('click', function () { changes(this) })

     }


)


let category;
function changes(p) {
     let image;
     img_div.style.display = 'none';


     
     let screen = document.querySelector('.screen_img')
     screen.src = p.src
     var s = p.src.slice(22)
     //    console.log(s);


     if (p.parentElement.parentElement.className == 'nature') {
          category = "nature";
          for (i in nature) {
               image = document.createElement('img');
               image.src = nature[i]
               image.setAttribute('class', 'pic1 black');
               if (s == nature[i]) image.className = 'pic1'; data = i
               im_div.appendChild(image);

          }

     } else {
          category = "city";
          for (i in city) {
               image = document.createElement('img');
               image.addEventListener('click', function () { next(i) })
               image.src = city[i]
               image.setAttribute('class', 'pic1');
               im_div.appendChild(image);


          }

     }
     let listed_img = document.querySelectorAll(".pic1")
     listed_img.forEach((listed_element) => {
          // listed_img.classList.add("black")
          listed_element.addEventListener("click", function () {
               adding(this)

               function adding(j) {

                    main_img.src = listed_element.src;

                    // listed_element.classList.remove('black'
               }

          });

     });


     body.classList.add('lots');
     img_div.classList.add('popup_image');
     img_div.style.display = 'block';
}



var into = document.getElementById('clo');



into.addEventListener('click', () => {
     body.classList.remove('lots');

     img_div.style.display = 'none';
     for (i in im_div) {
          im_div.lastElementChild.remove();
     }
})




let arrow = document.querySelectorAll('a');

let main_img = document.querySelector(".screen_img")


let pics = document.getElementsByClassName('pic1')


arrow.forEach((x, index) => {

     x.addEventListener('click', () => {

          // console.log("category : "+category);


          if (index == 0) {



               if (category == "nature") {
                    if (data == 0) {
                         data = [nature.length];
                    }
                    data--;
                    main_img.src = nature[data];



               } else {
                    if (data == 0) {
                         data = [city.length];
                    }
                    data--;
                    main_img.src = city[data];

               }

          }
          else {
               data++;

               if (category == "nature") {
                   

                    if (data > nature.length - 1) {
                         data = 0
                         main_img.src = nature[data]
                         pics[nature.length-1].classList.add('black')
                         pics[data].classList.remove('black')
                    }
                    // main_img.src = nature[data]
                    pics[data-1].classList.add('black')
                    main_img.src = nature[data]

                    console.log(data,pics[data],pics[data-1]);
                    pics[data].classList.remove('black')
                    pics[data-1].classList.add('black')
                        
                   



               } else {

                    if (data > city.length - 1) {
                         data = 0;
                    }
                    main_img.src = city[data]

                    // data++;
               }

          }



     })
});














// function change(index) {
//      console.log(index)
// }




// arrow.forEach((x,index)=>{
//    x.addEventListener('click',change())
// })


// function next(i) {
//      console.log(i);
// }



