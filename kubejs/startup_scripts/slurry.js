onEvent('mekanism.slurry.registry', event => {
    event.create('dirty_iridium').texture("kubejs:slurry/dirty").color(0xf0f8ff)
    event.create('clean_iridium').texture("kubejs:slurry/clean").color(0xf0f8ff)
})


onEvent('item.registry', event => {
    event.create('crystal_iridium').tag('mekanism:crystals').tag('mekanism:crystals/iridium')
    event.create('shard_iridium').tag('mekanism:shards').tag('mekanism:shards/iridium')
    event.create('clump_iridium').tag('mekanism:clumps').tag('mekanism:clumps/iridium')
    event.create('dirty_dust_iridium').tag('mekanism:dirty_dusts').tag('mekanism:dirty_dusts/iridium')
    event.create('dust_iridium').tag('forge:dusts').tag('forge:dusts/iridium')
})