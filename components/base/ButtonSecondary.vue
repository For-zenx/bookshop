<script setup lang="ts">
	const router = useRouter()

	const props = defineProps({
		icon: String,
		hoverOpacity: Boolean,
	})
</script>

<template>
	<button
		class="items-center cursor-pointer text-sm mx-2 font-medium"
		:class="{
			'hover:opacity-80 duration-100': hoverOpacity,
		}"
	>
		<span class="flex items-center">
			<slot></slot>
			<nuxt-img
				v-if="icon"
				:src="icon"
				width="15"
				height="15"
				alt="Icon"
				class="mx-1 w-4 h-4 object-contain"
			/>
		</span>
	</button>
</template>
