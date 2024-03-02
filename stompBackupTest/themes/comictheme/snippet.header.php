<!doctype html>
<html class="no-js" lang="en">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<?=show('meta_head')?>
	<title><?=show('site_name')?> | <?=show('page_title')?></title>
	<?=show('support_head')?>
	<?=show('favicons')?>
</head>
<body role="document">
	<?=snippet('adminbar')?>
	
	</div>
	<div class="wrap">
		<div>
				<a href="<?=show('home_url')?>"><img role="banner" src="/themes/comictheme/heads.png" alt="Stomp!" align="center"/></a>


		<nav id="menu-widget">
			<header>
				
				<a id="menu-tap" href="#"><i></i></a>
			</header>
			<ul id="menu-list">
				<?=show('menu')?>
			</ul>
		</nav>
		<header role="contentinfo" id="site-head">
			<h1><?=show('site_name')?></h1>
			<div>
				
			</div>
			<nav id="menu">
				<ul class="text-center">
					<?=show('menu')?>
				</ul>
			</nav>
		</header>
</div>
</body>