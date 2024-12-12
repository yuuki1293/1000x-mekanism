// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
})

onEvent("item.tooltip", tooltip => {
	tooltip.addAdvanced('mek1000:hyper_refinery', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
		  text.add(1, [Text.of('Hold ').gray(), Text.of('Shift ').white(), Text.of('to see more info.').gray()])
		  text.add(2, Text.of('硫酸・王水を利用した鉱石倍加の最適化ができる。ついでに倍率も上がる。').yellow())
		  text.add(3, Text.of('Useful machine for ore refining using sulfuric-acid or aqua-regia.').yellow())
		}
	  })
})