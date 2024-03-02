		<?=snippet('header')?>
		<!-- template: page.comic -->
		<main>
			<?=snippet('comic-nav')?>
			<article itemscope itemtype="http://schema.org/CreativeWork" id="comic">
				<header>
					
				</header>
				<figure>
					<a href="<?=show('comic_url_next')?>" rel="next"><?=show('comic_image')?></a>
				</figure>
			</article>
			<?=snippet('comic-nav')?>
			
			<article role="article" itemscope itemtype="https://schema.org/BlogPosting" id="blog_post">
				<h3 itemprop="headline"><?=show('blog_title')?></h3>
				<div itemprop="articleBody">
					<?=show('blog_post')?>
					<p role="complementary" class="meta">Published on <?=show('date_publish')?> by <?=show('artist_name')?>.</p>
				</div>
<div><?=snippet('share')?></div>
			</article>
			<?=snippet('transcript')?>
			<?=snippet('comments')?>
		</main>
		<?=snippet('footer')?>
