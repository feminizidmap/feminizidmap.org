// JS only used on the start page

function is_touch_device() {
    var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
    var mq = function (query) {
        return window.matchMedia(query).matches;
    };
    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
        return true;
    }
    // include the 'heartz' as a way to have a non matching MQ to help terminate the join
    // https://git.io/vznFH
    var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
    return mq(query);
}

document.addEventListener('DOMContentLoaded', () => {
    // murder is murder SVG animations
    let murderSection = document.querySelector(".murder");
    let svg = document.querySelectorAll('.strike-through');
    if (murderSection) {
        document.querySelector('body').addEventListener("scroll", function (ev) {
            let rect = murderSection.getBoundingClientRect();
            if (rect.top < 270) {
                svg[0].classList.add("is-active");
            }
            if (rect.top < 150) {
                svg[1].classList.add("is-active");
            }
            if (rect.top < 50) {
                svg[2].classList.add("is-active");
            }
        });
    }

    // header fadeout animation
    let splitLetters = (elem, split, klass) => {
        let arr = elem.textContent.split(split);
        let out = '';
        if (arr.length) {
            arr.forEach((v, i) => {
                out += `<span class="letter letter-${i} ${klass}">${v}</span>`;
            });
            elem.textContent = '';
            elem.innerHTML = out;
        }
    };

    let name = document.querySelector('.name');
    let desc = document.querySelector('.desc');
    if (name && desc) {
        splitLetters(name, "", "l-name");
        splitLetters(desc, "", "l-desc");
    }

    // cases interaction
    let cases = document.querySelectorAll('.c-case');
    let container = document.querySelector('.c-case-info');
    if (cases && container) {
        // shuffle button
        if (is_touch_device()) {
            let btn = document.createElement('button');
            btn.type = "button";
            btn.classList.add("c-shuffle");
            btn.innerText = "Shuffle";
            btn.addEventListener('click', (ev) => {
                if (document.querySelector(".c-case.is-hover")) {
                    document.querySelector(".c-case.is-hover").classList.remove('is-hover');
                }
                let c = document.querySelectorAll(".c-case");
                let index = Math.floor(Math.random() * c.length);
                c[index].classList.add('is-hover');
                let inner  = c[index].querySelector(".c-case-inner").innerHTML;
                container.innerHTML = inner;
            });
            container.parentNode.insertBefore(btn, container.nextSibling);
        // mouse over
        } else {
            cases.forEach((v, i) => {
                v.addEventListener('mouseover', (ev) => {
                    let content = ev.target.querySelector(".c-case-inner").innerHTML;
                    let caseRect = document.querySelector('.c-case').getBoundingClientRect();
                    container.innerHTML = content;
                    // we need dimensions after content is in
                    let containerRect = container.getBoundingClientRect();
                    container.style.top = Math.floor(ev.clientY - (caseRect.height + containerRect.height)) + "px";
                    container.style.left = Math.floor(ev.screenX - (containerRect.width / 2)) + "px";
                    container.classList.remove('is-away');
                });
                v.addEventListener('mouseleave', (ev) => {
                    container.innerHTML = "";
                    container.style.top = "";
                    container.style.left = "";
                    container.classList.add('is-away');
                });
            });
        }
    }
});
