onEvent('recipes', event => {

    // ore refinerys
    let hyper_refinery = (req)=>{
        event.recipes.multiblocked.multiblock("hyper_refinery")
        .inputItem(req.itemInput)
        .inputGas({type:req.gasInput.type, amount:req.gasInput.amount})
        .inputFluid(Fluid.of(req.fluidInput.type, req.fluidInput.amount))
        .outputItem(`${req.itemOutput}`)
        .setPerTick(true)
        .inputFE(req.consume)
        //.duration(1)
    }
    hyper_refinery({
        itemInput: "minecraft:iron_ore",
        gasInput: {type:"mekanism:sulfuric_acid",amount:2},
        fluidInput: {type:"minecraft:water", amount:200},
        itemOuput: "8x mek1000:iron_shard_20",
        consume: 1000, duration: 20,
    }) //test
    hyper_refinery({
        itemInput: "minecraft:iron_ore",
        gasInput: {type:"mek1000:active_aqua_regia",amount:2000},
        fluidInput: {type:"minecraft:water", amount:200},
        itemOuput: "12x mek1000:compressed_purified_${type}_rawore",
        consume: 20000, duration: 50,
    }) //test





})