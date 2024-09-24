(function(){
    var footerHTML = `
    <footer>
	<a href="https://twitter.com/brodnork" class="footerIcon"><i class="fa-brands fa-twitter"></i></a> <a href="https://bsky.app/profile/brodnork.bsky.social" class="footerIcon"><i class="fa-brands fa-bluesky"></i></a> <a href="https://store.steampowered.com/search/?developer=Bee%20Braun" class="footerIcon"><i class="fa-brands fa-steam"></i></a> <a href="https://brodnork.itch.io" class="footerIcon"><i class="fa-brands fa-itch-io"></i></a> <a href="mailto:brandonbraun1999@gmail.com" class="footerIcon"><i class="fa-solid fa-envelope"></i></a> <a href="https://en.wikipedia.org/wiki/Shrimp" class="footerIcon"><i class="fa-solid fa-shrimp"></i></a> <a href="rss.xml" class="footerIcon"><i class="fa-solid fa-rss"></i></a>
    <br>
	<footer-text>
		<b> 
			<a onclick="toggleDarkMode()" id="dark-mode-toggle">Dark mode: off</a>   
		</b>
	</footer-text>
	<footer-text>
		<b>
			<a onclick="toggleFont()" id="font-toggle">Font: default</a>
		</b>
	</footer-text>
</footer>
    `;
    document.write(footerHTML);
})();