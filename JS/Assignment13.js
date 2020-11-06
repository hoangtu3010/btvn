var data = {
     categories: [
        {
            name: " Green Life (24)"
        },
        {
            name: "Fresh Fruits (12)"
        },
        {
            name: "Fresh Meat (12)"
        },
        {
            name: "Milk & Cream (9)"
        },
        {
            name: "Uncategorized (7)"
        },
        {
            name: "Organic Fruits (6)"
        },
        {
            name: "Special Salads (3)"
        },
        {
            name: "Suppelements (0)"
        }
    ],
    brands:[
        {
            name: "Green Life (24)"
        },
        {
            name: "Organic Life (22)"
        },
        {
            name: "Whole Foods (21)"
        },
        {
            name: "Orwell Company (14)"
        },
        {
            name: "Organica (6)"
        },
        {
            name: "Other (3)"
        }
    ],
    products: [
        {
            name:"Special Fruit & Fresh Produce",
            image:"imgs/a13-1.jpg",
            price: 27.00,
            star:4
        },
        {
            name:"Special Fruit & Fresh Produce",
            image:"imgs/a13-1.jpg",
            price: 27.00,
            star:2
        },
        {
            name:"Special Fruit & Fresh Produce",
            image:"imgs/a13-1.jpg",
            price: 27.00,
            star:3.5
        },
        {
            name:"Special Fruit & Fresh Produce",
            image:"imgs/a13-1.jpg",
            price: 27.00,
            star:4
        },
        {
            name:"Special Fruit & Fresh Produce",
            image:"imgs/a13-1.jpg",
            price: 27.00,
            star:4
        },
        {
            name:"Special Fruit & Fresh Produce",
            image:"imgs/a13-1.jpg",
            price: 27.00,
            star:4
        },
        {
            name:"Special Fruit & Fresh Produce",
            image:"imgs/a13-1.jpg",
            price: 27.00,
            star:4
        },
        {
            name:"Special Fruit & Fresh Produce",
            image:"imgs/a13-1.jpg",
            price: 27.00,
            star:3
        },
        {
            name:"Special Fruit & Fresh Produce",
            image:"imgs/a13-1.jpg",
            price: 27.00,
            star:4
        }
    ]
}
function Categories() {
    var c_html = "";
    for (var i=0;i<data.categories.length;i++){
        c_html += "<p><a href=\"#\">"+data.categories[i].name+"</a></p>"
    }

    return c_html;
}
var cate = document.getElementById("Cats");
cate.innerHTML = Categories();

function Brands() {
    var b_html = "";
    for (var i=0;i<data.brands.length;i++){
        b_html += "<p><a href=\"#\"><i class=\"fas fa-square-full\"></i>"+data.brands[i].name+"</a></p>"
    }

    return b_html;
}
var br= document.getElementById("Brd");
br.innerHTML = Brands();

function gridProduct() {
    var g_html = "";
    for (var i=0;i<data.products.length;i++){
        g_html += "<div class=\"col-md-4\">\n" +
            "                                <div class=\"item-1\">\n" +
            "                                    <a href=\"#\"><img class=\"item-1-1\" src=\""+data.products[i].image+"\"></a>\n" +
            "                                    <p class=\"name\"><a href=\"#\"><b>"+data.products[i].name+"</b></a></p>\n" +
            "                                    <p class=\"price\">$"+data.products[i].price+"</p>\n" +
            "                                    <div class=\"star\">\n" +
            "                                        <div class=\"star-box\">\n" +
            "                                            <div class=\"star-rate\" style=\"width: "+(data.products[i].star/5*100)+"%\"></div>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                    <div class=\"col-md-9\"><div class=\"add text-center\"><a href=\"#\">Add</a></div></div>\n" +
            "                                    <div class=\"col-md-3\"><div class=\"add text-center\"><a href=\"#\">+</a></div></div>\n" +
            "                                </div>\n" +
            "                                <div class=\"item-2\"><a href=\"#\"><i class=\"far fa-heart\"></i></a></div>\n" +
            "                                <div class=\"item-3\"><a href=\"#\"><i class=\"fas fa-random\"></i></a></div>\n" +
            "                            </div>";
    }

    return g_html;
}
var grid = document.getElementById("grid-products");
grid.innerHTML = gridProduct();