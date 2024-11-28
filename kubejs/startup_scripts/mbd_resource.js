onEvent('mekanism.gas.registry', event => {
    event.create('mek1000:dvt').fuel(10,2147483647).color(0xdda0dd).displayName('DVT fuel')
})
onEvent('block.registry', event => {
event.create('mek1000:electricity_resistant_reinforced_casing').displayName('耐電力強化筐体')
event.create('mek1000:wtf_casing').displayName('薄気味悪い筐体')
event.create('mek1000:uranite_flux_casing').displayName('ウラン-フラックス筐体')
event.create('mek1000:laser_glass').displayName('レーザー誘導ガラス').renderType('translucent').defaultTranslucent()
event.create('mek1000:black_casing').textureAll('mek1000:block/metallugic_form').displayName('常闇の筐体').color(0, 0x696969).item(itemForm => {itemForm.color(0, 0x696969)})
event.create('mek1000:reinforced_steel_casing').textureAll('mek1000:block/metallugic_form').displayName('強化鋼鉄筐体')
})
onEvent('item.registry', event => {
    event.create('mek1000:energy_cataryst').texture(`mek1000:item/wip`)
    event.create('mek1000:item_cataryst').texture(`mek1000:item/wip`)
    event.create('mek1000:fluid_cataryst').texture(`mek1000:item/wip`)
    event.create('mek1000:gas_cataryst').texture(`mek1000:item/wip`)
    event.create('mek1000:emc').displayName('Energy Matter Cluster')
    event.create('mek1000:the_null').displayName('Null').tooltip('※仕様です')
})
onEvent('fluid.registry', event => {
    event.create('mek1000:condenced_lux').bucketColor(0xdeb887).thinTexture(0xdeb887)
})