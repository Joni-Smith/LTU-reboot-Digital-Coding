const listItems = document.querySelectorAll("button.selection");

const allImages = document.querySelectorAll(".main .image-selections .images");

function toggleActiveClass( active ) {

listItems.forEach( function( item ) {
    item.classList.remove("active");

})

    active.classList.add("active");

}