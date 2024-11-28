onEvent('item.registry', event => {
    event.create('mek1000:illuminate_alloy')
    event.create('mek1000:superheated_alloy')
    event.create('mek1000:antinomic_alloy')
    event.create('mek1000:cosmic_alloy').texture(`mek1000:item/cosmic_alloy`)
})
onEvent('mekanism.infuse_type.registry', event => {
    event.create('mek1000:sunnalium').color(0xffff00)
    event.create('mek1000:iridium').color(0xe6e6fa)
    event.create('mek1000:resonant').color(0x00fa9a)
    event.create('mek1000:quantum').color(0x66cdaa)
})