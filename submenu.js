var clicked = false;

$('#uxui').click(function(e) {
    if (!clicked){
        var submenu = $(this).next('.submenu'); // store the current submenu to be toggled  
        e.preventDefault();// select all visible sub menus excluding the current one that was clicked on and close them 
        submenu.show(300);
        clicked = true;
    }
    else{
        var submenu = $(this).next('.submenu'); // store the current submenu to be toggled  
        e.preventDefault();// select all visible sub menus excluding the current one that was clicked on and close them 
        submenu.hide(300);
        clicked = false;
    }
});

$(document).ready (
	function() {
    }
);
