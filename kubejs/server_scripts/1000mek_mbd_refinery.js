onEvent('recipes', event => {
    // additional item & fluids

    // ldpe
    event.custom({"type":"mekanism:reaction",
        "itemInput":{"item":`mekanism:substrate`},
        "fluidInput":{"amount":10,"fluid":"mekanism:oxygen"},
        "gasInput":{"amount":50,"gas":"mekanism:ethene"},
        "energyRequired":100,"duration":100,
        "itemOutput":{"item":`mek1000:ldpe`,"amount":4}
    })

    // antimatter condencing/decondencing
    event.custom({"type":"mekanism:rotary",
        "gasInput":{"amount":1,"gas":"mekanism:antimatter"},
        "fluidOutput":{"amount":1,"fluid":"mek1000:liquid_antimatter"}
    })
    event.custom({"type":"mekanism:rotary",
        "gasOutput":{"amount":1,"gas":"mekanism:antimatter"},
        "fluidInput":{"amount":1,"fluid":"mek1000:liquid_antimatter"}
    })

    // ore refinering
    event.recipes.multiblocked.multiblock("large_ore_refinery")
        .inputItem("minecraft:iron_ore")
        //.inputGas({type:"mekanism:sulfuric_acid",amount:20000000000})
        .inputFluid(Fluid.of("mekanism:sulfuric_acid",40))
        .outputItem("8x mek1000:iron_shard_20")
        .setPerTick(true)
        .inputFE(1000000)
        .duration(10)
    event.recipes.multiblocked.multiblock("large_ore_refinery")
        .inputItem("minecraft:iron_ore")
        .inputFluid(Fluid.of("mek1000:liquid_antimatter",120))
        .outputItem("12x mek1000:compressed_purified_iron_rawore")
        .setPerTick(true)
        .inputFE(2000000)
        .duration(200)
})