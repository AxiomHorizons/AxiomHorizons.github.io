if (
    "IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "intersectionRatio" in window.IntersectionObserverEntry.prototype
) {
    let observer = new IntersectionObserver(entries => {
        if (entries[0].boundingClientRect.y < 0) {
            document.body.classList.add("nav-not-at-top");
        } else {
            document.body.classList.remove("nav-not-at-top");
        }
    });
    observer.observe(document.querySelector("#top-of-site-pixel-anchor"));
}