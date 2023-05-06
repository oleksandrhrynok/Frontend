let currentIndex = 0;
const images = [
    'https://static.vecteezy.com/ti/fotos-gratis/p3/6671766-fantastica-lua-magica-luz-e-agua-barco-com-arvore-papel-de-parede-gratis-foto.jpg',
    'https://us.123rf.com/450wm/virtosmedia/virtosmedia2301/virtosmedia230118463/197249183-planeta-alien%C3%ADgena-de-fantas%C3%ADa-monta%C3%B1a-y-lago-ilustraci%C3%B3n-3d.jpg?ver=6',
    'https://img.freepik.com/fotos-premium/nuevo-planeta_176100-157.jpg',
    'https://img.freepik.com/fotos-premium/paisaje-nocturno-fantasia-planetas-rio_104785-1058.jpg'
];

function slide(step) {
    currentIndex = currentIndex + step;

    if (currentIndex === -1) {
        currentIndex = images.length - 1;
    }

    if (currentIndex === images.length) {
        currentIndex = 0;
    }
    frame.classList.add('animated');
    setTimeout(function () {
        frame.classList.remove('animated');
    }, 2000);

    frame.style.backgroundImage = `url(${images[currentIndex]})`;

    
}

function goTo(index) {
    currentIndex = index;
    frame.classList.add('animated');
    setTimeout(function () {
        frame.classList.remove('animated');
    }, 2000);
    frame.style.backgroundImage = `url(${images[currentIndex]})`;
}

const feedbacks = [
    {
        name: "Екатерина Иванова",
        position: "Директор ООО 'Раз-два'", 
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, maxime! Vero quae, qui tempore error repudiandae temporibus quaerat magni veniam dolore ipsum ex, saepe nihil quisquam. Nam pariatur ratione quo?"
    },
    {
        name: "Иван Петров",
        position: "Главный инженер ООО 'Три-четыре'", 
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed ac tellus convallis, vehicula purus eu, mattis sem. Fusce hendrerit velit quis tellus consequat, eu faucibus nibh tincidunt."
    }, 
    {
        name: "Анна Сидорова",
        position: "HR-менеджер ООО 'Пять-шесть'", 
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, maxime! Vero quae, qui tempore error repudiandae temporibus quaerat magni veniam dolore ipsum ex, saepe nihil quisquam. Nam pariatur ratione quo?"
    }, 
    {
        name: "Виктор Иванов",
        position: "PR-менджер ООО 'Пять-шесть'", 
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus luctus neque, vel posuere nisi pellentesque in. Fusce ultrices eros et nunc maximus ultrices. Aliquam vel ex pharetra, eleifend velit sed, vehicula metus. Nullam semper, metus sed elementum malesuada, libero diam euismod nisl, vel tincidunt arcu mi eu lectus."
    }

];
let currentFeedbackIndex = 0 ;

function updateFeedback() {
    const currentFeedback = feedbacks[currentFeedbackIndex];
    const nameElement = document.querySelector(".text-and-author .name h5");
    const positionElement = document.querySelector(".text-and-author .name h6");
    const textElement = document.querySelector(".text-and-author p");
    nameElement.textContent = currentFeedback.name;
    positionElement.textContent = currentFeedback.position;
    textElement.textContent = currentFeedback.text;
}

function feedback(direction) {
    currentFeedbackIndex += direction;
    if (currentFeedbackIndex < 0) {
        currentFeedbackIndex = feedbacks.length - 1;
    } else if (currentFeedbackIndex >= feedbacks.length) { 
        currentFeedbackIndex = 0;
    }
    updateFeedback();
}

function goToFeed(index) {
    currentFeedbackIndex = index;
    updateFeedback();    
}
