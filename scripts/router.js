// create document click that watches the nav links only
document.addEventListener("click", (e) => {
    const { target } = e;
    if (!target.matches("div.route-item")) {
        return;
    }
    e.preventDefault();
    
    const newPath = target.parentNode.href;
    const { template } = Object.keys(routes).find(key => {
        return routes[key].template.includes(newPath);
    });
    window.location.replace(template);
});

const routes = {
    404: {
        template: "/templates/404.html",
        title: "404",
        description: "Page not found",
    },
    "/": {
        template: "/index.html",
        title: "Home",
        description: "This is the home page",
    },
    "/dog-training": {
        template: "/dog-training.html",
        title: "Dog Training",
        description: "Dog Training Documentation Page",
    },
    "/contact": {
        template: "/templates/contact.html",
        title: "Contact Us",
        description: "This is the contact page",
    },
};