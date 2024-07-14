const menu = [
    {
        id: 1,
        title:"Buttermilk pancakes",
        category:"Breakfast",
        price: `$20.99`,
        img:"images/All img/pancakes-2291908_1280.jpg",
        desc:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi eligendi eaque aut libero natus
            aperiam doloremque aliquam rem ut veritatis.`
    },
    {
        id: 2,
        title:"Cheese Burger",
        category:"Lunch",
        price:`$14.99`,
        img:"images/Lunch img/burgers-7221445_1280.jpg",
        desc:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi eligendi eaque aut libero natus
            aperiam doloremque aliquam rem ut veritatis.`
    },
    {
        id: 3,
        title:"Chocalate Shake",
        category:"Shakes",
        price: `$6.99`,
        img:"images/All img/ai-generated-8510155_1280.png",
        desc:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi eligendi eaque aut libero natus
            aperiam doloremque aliquam rem ut veritatis.`
    },
    {
        id: 4,
        title:"Chery Waffles",
        category:"Breakfast",
        price: `$12.99`,
        img:"images/Breakfast img/waffles-5192625_1280.jpg",
        desc:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi eligendi eaque aut libero natus
            aperiam doloremque aliquam rem ut veritatis.`
    },
    {
        id: 5,
        title:"Vegetable Rice",
        category:"Dinner",
        price: `$16.99`,
        img:"images/Dinner img/ai-generated-8714521_1280.jpg",
        desc:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi eligendi eaque aut libero natus
            aperiam doloremque aliquam rem ut veritatis.`
    },
    {
        id: 6,
        title:"Beaf Stuff",
        category:"Dinner",
        price:`$25.99`,
        img:"images/Lunch img/dinner-3262455_1280.jpg",
        desc:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi eligendi eaque aut libero natus
            aperiam doloremque aliquam rem ut veritatis.`
    },
    {
        id: 7,
        title:"Egg And Meat",
        category:"Breakfast",
        price: `$18.99`,
        img:"images/All img/breakfast-4824364_1280.jpg",
        desc:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi eligendi eaque aut libero natus
            aperiam doloremque aliquam rem ut veritatis.`
    },
    {
        id: 8,
        title:"Strawbery Shake",
        category:"Shakes",
        price: `$5.99`,
        img:"images/Drink img/smoothie-8031132_1280.jpg",
        desc:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi eligendi eaque aut libero natus
            aperiam doloremque aliquam rem ut veritatis.`
    },
    {
        id: 9,
        title:"Lunch Special",
        category:"Lunch",
        price: `$22.99`,
        img:"images/All img/burger-4369973_1280.jpg",
        desc:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi eligendi eaque aut libero natus
            aperiam doloremque aliquam rem ut veritatis.`
    },
    {
        id: 10,
        title:"Salmon Seeded Chicken",
        category:"Dinner",
        price: `$20.99`,
        img:"images/Dinner img/food-712666_1280.jpg",
        desc:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi eligendi eaque aut libero natus
            aperiam doloremque aliquam rem ut veritatis.`
    }
]

const sectionCenter = document.querySelector(".section-center")
const filterBtn = document.querySelectorAll(".filter-btn")

window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menu)
})

filterBtn.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem){
            if(menuItem.category === category){
                return menuItem;
            }
        });
        if(category === "all"){
            displayMenuItems(menu);
        }
        else{
            displayMenuItems(menuCategory);
        }
    });
});


function displayMenuItems(menuItem){
    let displayMenu = menuItem.map(function(item){
        // console.log("item")

       return `<article class="flex flex-row">
                <img class="h-[130px] w-[170px] border-2 border-[#db9f46] rounded-xl" src="${item.img}" alt="">
                <div class="item-info w-[260px] ml-1 relative" style="font-family: Montserrat Alternates, sans-serif;">
                    <header class="flex flex-row">
                        <h4 class="font-medium">${item.title}</h4>
                        <h4 class="item-price font-medium text-[#db9f46] absolute right-0">${item.price}</h4>
                    </header>
                <div class="underline w-full h-[1px] bg-gray-400"></div>
                    <p class="item-text text-sm pt-2">
                      ${item.desc}               
                    </p>
                </div>
            </article>`
    })
     displayMenu = displayMenu.join("")
     sectionCenter.innerHTML = displayMenu
}