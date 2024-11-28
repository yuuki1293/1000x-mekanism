onEvent('mekanism.gas.registry', event => {
    event.create('mek1000:dvt').fuel(10,2147483647).color(0xdda0dd).displayName('DVT fuel')
})
onEvent('block.registry', event => {
event.create('mek1000:electricity_resistant_reinforced_casing').displayName('耐電力強化筐体')
})