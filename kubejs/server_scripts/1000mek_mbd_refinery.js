onEvent('recipes', event => {

    
    // ore refinerys
    event.recipes.multiblocked.multiblock("large_ore_refinery")
        .inputItem("minecraft:iron_ore")
        .inputGas({type:"mekanism:sulfuric_acid",amount:20000000000})
        .inputFluid(Fluid.of("minecraft:water",200))
        .outputItem("8x mek1000:iron_shard_20")
        .setPerTick(true)
        .inputFE(1000)
        //.duration(20)
    event.recipes.multiblocked.multiblock("large_ore_refinery")
        .inputItem("minecraft:iron_ore")
        .inputGas({type:"mek1000:active_aqua_regia",amount:20000000000})
        .inputFluid(Fluid.of("minecraft:water",200))
        .outputItem("12x mek1000:compressed_purified_iron_rawore")
        .setPerTick(true)
        .inputFE(20000)
        //.duration(50)
})