<script>
	import GithubIcon from '$lib/assets/img/social/github.svg?component';
	import DiscordIcon from '$lib/assets/img/social/discord.svg?component';
	import linkedinIcon from '$lib/assets/img/social/linkedin.png';
</script>

<div class="flex justify-center gap-6 bg-glass shadow-glass rounded-xl px-4 py-4 mx-auto w-fit xl:landscape:fixed xl:landscape:right-6 xl:landscape:top-1/2 xl:landscape:translate-y-8 xl:landscape:flex-col xl:landscape:gap-4 xl:landscape:pt-6 xl:landscape:pl-4">
	<a href="https://linkedin.com/in/jesushdezhere" class="social-link group" aria-label="LinkedIn Profile" rel="noopener noreferrer" target="_blank">
		<img src={linkedinIcon} alt="LinkedIn" width="840" height="779" class="md:landscape:w-10 md:landscape:h-auto w-auto h-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
	</a>
	<a href="https://github.com/jhg" class="social-link group" aria-label="GitHub Profile" rel="noopener noreferrer" target="_blank">
		<GithubIcon class="w-10 h-10 fill-white opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
	</a>
	<a href="https://discord.gg/9xW8CDx87d" class="social-link group" aria-label="Discord Server" rel="nofollow noopener noreferrer" target="_blank">
		<DiscordIcon class="w-10 h-10 fill-white opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
	</a>
</div>