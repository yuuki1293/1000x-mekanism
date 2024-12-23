onEvent('recipes', event => {
    // additional item & fluids

    // tin casing craft
    event.shaped(`mek1000:tin_casing_incomplete`,[
        'tgt',
        'obo',
        'tst'
    ],{
        t:`mekanism:block_tin`,
        b:`mekanism:block_bronze`,
        s:`mekaevolution:supreme_control_circuit`,
        g:`minecraft:glass`,
        o:`mekanism:ingot_refined_obsidian`
        
    }).id(`mek1000:tincasing_1`)

    // tin casing wrapping
    event.recipes.mekanism.combining(`mek1000:tin_casing`, 'mek1000:tin_casing_incomplete', "16x mek1000:ldpe").id(`mek1000:tincasing_2`)
    
    // tiny antimatter
    event.recipes.mekanism.combining(`50x mek1000:tiny_antimatter`, `mekanism:pellet_antimatter`, '5x mek1000:ldpe')
    
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

    // ore refinering -> moved to json recipe
    // here is the test script, not working.
    /*
    event.recipes.multiblocked.multiblock("large_ore_refinery")
        .inputItem("minecraft:iron_ore")
        //.inputGas({type:"mekanism:sulfuric_acid",amount:20000000000})
        .inputFluid(Fluid.of("mekanism:sulfuric_acid",40))
        .outputItem("8x mek1000:iron_crystal_20")
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
    */

    // crystal disassembly
    let crystal_disassemble_20 = (type,item_1,item_9) => {
        event.shaped(`20x ${item_1}`,[
                'c'
            ],{
                c:`mek1000:${type}_crystal_20`
            }).id(`mek1000:${type}_disassembling_20to1`)
        event.shaped(`20x ${item_9}`,[
                'ccc',
                'ccc',
                'ccc'
            ],{
                c:`mek1000:${type}_crystal_20`
            }).id(`mek1000:${type}_disassembling_20to9`)
    }
    
    crystal_disassemble_20("iron","mekanism:crystal_iron","mek1000:compressed_iron_crystal")
    crystal_disassemble_20("copper","mekanism:crystal_copper","mek1000:compressed_copper_crystal")
    crystal_disassemble_20("gold","mekanism:crystal_gold","mek1000:compressed_gold_crystal")
    crystal_disassemble_20("tin","mekanism:crystal_tin","mek1000:compressed_tin_crystal")
    crystal_disassemble_20("osmium","mekanism:crystal_osmium","mek1000:compressed_osmium_crystal")
    crystal_disassemble_20("uranium","mekanism:crystal_uranium","mek1000:compressed_uranium_crystal")
    crystal_disassemble_20("lead","mekanism:crystal_lead","mek1000:compressed_lead_crystal")
    crystal_disassemble_20("iridium","kubejs:crystal_iridium","mek1000:compressed_iridium_crystal")
    /*
    crystal_disassemble_20("redstone",2500,"gem",true,true,false)
    crystal_disassemble_20("quartz",2500,"gem",false,false,true)
    crystal_disassemble_20("certus_quartz",2500,"gem",false,false,false)
    crystal_disassemble_20("fluorite",2500,"gem",true,true,false)

    crystal_disassemble_20("coal",200,"",true,true,false)
    crystal_disassemble_20("diamond",200,"",true,true,false)
    crystal_disassemble_20("emerald",200,"",true,true,false)
    crystal_disassemble_20("lapis",200,"",false,false,false)
    */

    // hidden recipe
    event.recipes.mekanism.combining(`20x mek1000:stray_cat`, `mek1000:tiny_antimatter`, 'minecraft:amethyst_shard').id("mek1000:packcat")
    event.custom({
        "type": "mekanism:oxidizing",
        "input": {
          "ingredient": {
            "item": `mek1000:stray_cat`
          }
        },
        "output": {
          "gas": 'mek1000:vaporized_amethyst',
          "amount": 10000
        },
    }).id("mek1000:oxcat")
})