// Returns to grey
var bar = document.querySelector('.wp-menu-name')
if(bar != null){
var bars = document.querySelectorAll('.wp-menu-name');

bars.forEach((bar) => {
bar.onmouseenter = () => { 
        
    
    var color = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
    bar.style.backgroundColor = `${color}`
    setTimeout(() => {
        bar.style.backgroundColor = '#363b3f'
    }, 1000);
    
}

})};