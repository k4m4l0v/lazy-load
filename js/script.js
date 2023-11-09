let images = document.querySelectorAll('.async-image')
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

const callback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            observer.unobserve(entry.target);
        }
    })
}

const options = {
    rootMargin: '0px',
    threshold: 0
}

const observer = new IntersectionObserver(callback, options);

images.forEach((image) => observer.observe(image));

let i = 0;

next.addEventListener('click', function() {
    if (i === images.length - 1) {
        i = 0;
        images[images.length - 1].classList.add('hidden');
        images[i].classList.remove('hidden');
    } else {
        i += 1;
        images[i - 1].classList.add('hidden');
        images[i].classList.remove('hidden');
    }
})

prev.addEventListener('click', function() {
    if (i === 0) {
        i = images.length - 1;
        images[0].classList.add('hidden');
        images[i].classList.remove('hidden');
    } else {
        i -= 1;
        images[i + 1].classList.add('hidden');
        images[i].classList.remove('hidden');
    }
})
