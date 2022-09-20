// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// console.log(reviews)

// get the html snipates of the id
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

// console.log(img, author, job, info);
// get the html snipates of the btn
const prevbtn = document.querySelector(".prev-btn");
const nextbtn = document.querySelector(".next-btn");
const randombtn = document.querySelector(".random-btn");
// console.log(prevbtn, nextbtn, randombtn);

// set the start profile to display
let current = 0;
// initital the page load item

window.addEventListener("DOMContentLoaded", () => {
  // by changing the html tag img's src value to append the value into it

  showPerson(current);
});

function showPerson(person) {
  const item = reviews[person];
  // console.log(item)
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextbtn.addEventListener("click", () => {
  current++;
  // console.log(current);
  if (current >= reviews.length - 1) {
    current = 0;
  }
  showPerson(current);
});
prevbtn.addEventListener("click", () => {
  current--;
  // console.log(current);
  if (current < 0) {
    current = reviews.length - 1;
  }
  showPerson(current);
});

randombtn.addEventListener("click", () => {
  // JavaScript Random
  // https://www.w3schools.com/js/js_random.asp

  current = Math.floor(Math.random() * reviews.length);
  console.log(current)
  showPerson(current);
});
