<script>
	import NavItem from './NavItem.svelte';

	import ThemeSwitch from './ThemeSwitch.svelte';
</script>

<!-- <ThemeSwitch /> -->

<header class="w-full top-0 z-10 px-6 md:px-8">
	<div class="max-w-3xl w-full h-20 md:h-24  flex justify-between items-center mx-auto">
		<div class="flex items-center justify-between w-full">
			<button
				type="button"
				class="p-0 border-0 m-0 flex items-center justify-center rounded-full sm:hidden hover:bg-transparent"
				on:click={() => console.log('holi')}
			>
				menutoggle
				<!-- <MenuToggle isOpen={mobileMenuOpen} size={20} /> -->
			</button>
			<ul class="hidden sm:flex items-center mr-5 ml-[-0.60rem]">
				<NavItem href="/">Home</NavItem>
				<NavItem href="/blog">Blog</NavItem>
				<NavItem href="/work">Work</NavItem>
				<NavItem href="/about">About</NavItem>
				<NavItem href="/contact">Contact</NavItem>
			</ul>
			<div class="flex items-center">
				<span>Locale</span>
				<!-- <LocaleSwitcher /> -->
				<!-- <ThemeButton /> -->
				<span>themebutton</span>
			</div>
		</div>
	</div>
</header>
