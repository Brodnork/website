
(function(){
    var sidebarHTML = `

	<div class="sidebarMenuButton" id="menuBars" onclick="sidebarMenuButton()"><i class="fa-solid fa-ellipsis"></i></div>

    <div class="sidebar" id="sidebar">
		<div class="sidebarMenuButton2" id="menuBars2" onclick="sidebarMenuButton2()"><i class="fa-solid fa-square-caret-left"></i></div>
		<span class="head">Main Stuff</span>
		<a href="index.html" class="sidebarButton1">
			<span><img src="iconHome.png"> Home</span>
		</a>
		<a href="about.html" class="sidebarButton2">
			<span><img src="iconAbout.png"> About Me</span>
		</a>
		<a href="games.html" class="sidebarButton1">
			<span><img src="projectsicon.png"> Games</span>
		</a>
		<a href="projects.html" class="sidebarButton2">
			<span><img src="projectsicon.png"> Projects</span>
		</a>
		<a href="art.html" class="sidebarButton1">
			<span><img src="iconArt.png"> Art</span>
		</a>
		<a href="blog" class="sidebarButton2">
			<span><img src="iconStories.png"> Blog</span>
		</a>
		<span class="head">Fun Things</span>
		<a href="frogs.html" class="sidebarButton1">
			<span><img src="iconStories.png"> My Frogs</span>
		</a>
		<a href="recipes.html" class="sidebarButton2">
			<span><img src="iconStories.png"> Recipes</span>
		</a>
		<a href="links.html" class="sidebarButton1">
			<span><img src="iconLinks.png"> Links</span>
		</a>
        <!---<a href="links.html" class="sidebarButton2">
			<span><img src="iconLinks.png">Favourites</span>
		</a>--->
		<div class="sidebarPadding"></div>
		
	</div>

	</details>

    `;
    document.write(sidebarHTML);
})();