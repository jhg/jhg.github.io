<script>
	let formData = $state({
		name: '',
		email: '',
		message: ''
	});

	const isValid = $derived(formData.email.length > 0 && formData.email.includes('@') && formData.message.length > 0);
</script>

<form method="post" action="https://simpleforms.lenorix.com/api/01k51n9dtx4habbcv6aq9r72bq"
	class="max-w-md mx-auto mt-8 p-2 min-h-[380px]"
>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
            <label for="name" class="block text-white mb-1 text-sm font-medium">
                Full Name <span class="text-gray-400 font-normal text-xs">(optional)</span>
            </label>
            <input id="name" name="name" type="text" autocomplete="name"
                   bind:value={formData.name}
                   class="w-full h-[42px] px-2 py-1 bg-glass rounded border border-gray-400 transition duration-300 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
            />
        </div>
		<div>
			<label for="email" class="block text-white mb-1 text-sm font-medium">Email</label>
			<input id="email" name="email" type="email" required autocomplete="email"
				bind:value={formData.email}
				class="w-full h-[42px] px-2 py-1 bg-glass rounded border border-gray-400 transition duration-300 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 invalid:border-red-300"
			/>
		</div>
	</div>

	<div class="mb-4">
		<label for="message" class="block text-white mb-1 text-sm font-medium">Message</label>
		<textarea id="message" name="message" required placeholder="Tell me about your project or question..."
			bind:value={formData.message}
			class="w-full min-h-[150px] max-h-[300px] px-2 py-1 bg-glass rounded border border-gray-400 transition duration-300 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 invalid:border-red-300 resize-y"
		></textarea>
	</div>

	<button type="submit" disabled={!isValid}
		class="w-full h-[48px] px-4 py-2 bg-glass rounded bg-gray-400/60 text-white font-medium hover:bg-gray-500/60 disabled:bg-gray-600/40 disabled:text-white/50 disabled:cursor-not-allowed transition-colors duration-700"
	>
		Let's Connect!
	</button>
</form>