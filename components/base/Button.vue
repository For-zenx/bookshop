<script setup lang="ts">
	const router = useRouter()
	const props = defineProps({
		tooltipPreview: String,
	})
</script>

<template>
	<button :data-tip="tooltipPreview || 'undefined'" class="button tooltip">
		<span class="text-sm font-medium dark:text-primary line-clamp-1">
			<slot></slot>
		</span>
	</button>
</template>
