	</div>

	<footer role="complementary" itemscope itemtype="http://schema.org/CreativeWork" id="site-foot">
		<div class="follow">
		<div>
			<a class="rss" title="Follow RSS" href="<?=show('rss')?>"><i></i></a>
			<?=snippet('follow')?>
		</div>
	</div>
<div>

			<?=show('copyright')?> by <?=show('artist_name')?>&emsp;⸫&emsp;Updates every Friday!&emsp;⸫&emsp;Powered by <a href="http://getgrawlix.com">Grawlix</a>
		</div>
	<?=show_ad('slot-1') ?>

	</footer>
	<script src="//code.jquery.com/jquery-2.1.3.min.js"></script>
	<script src="/themes/comictheme/script.min.js"></script>
	<?=show('support_foot')?>
	<?=snippet('googleanalytics')?>
<!---<style>
body  {
    background-image: url("http://stompwebcomic.com/themes/comictheme/PICTUREHERE.png");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: left; 
}
</style> (uncomment and edit during the finale)--->
</body>
<script>
function leftArrowPressed() {
    window.location.href = '<?=show('comic_url_prev')?>'
}
function rightArrowPressed() {
    window.location.href = '<?=show('comic_url_next')?>'
}
document.onkeydown = function(evt) {
evt = evt || window.event;
switch (evt.keyCode) {
case 37:
leftArrowPressed();
break;
case 39:
rightArrowPressed();
break;
}
};
</script>
</html>
