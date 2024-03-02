		<nav role="navigation">
			<ul class="text-center">
<?php if ( !$this->isFirst ) : ?>
				<li>
					<a class="<?=show('comic_css_first')?>" href="<?=show('comic_url_first')?>" title="First comic">
						<i class="fa fa-angle-double-left" style="font-size:45px"></i>
					</a>
				</li>

				<li>
					<a class="<?=show('comic_css_prev')?>" href="<?=show('comic_url_prev')?>" title="Previous comic" rel="prev">
						<i class="fa fa-angle-left" style="font-size:45px"></i>
					</a>
				</li>
<?php endif; ?>
<?php if ( !$this->isLatest ) : ?>
				<li>
					<a class="<?=show('comic_css_next')?>" href="<?=show('comic_url_next')?>"title="Next comic" rel="next">
						<i class="fa fa-angle-right" style="font-size:45px"></i>
					</a>
				</li>
				<li>
					<a class="<?=show('comic_css_latest')?>" href="<?=show('comic_url_latest')?>" title="Latest comic">
						<i class="fa fa-angle-double-right" style="font-size:45px"></i>
					</a>
				</li>
<?php endif; ?>
			</ul>
		</nav>


