// Super Ores 互換性
onEvent('recipes', event => {
    const enrich_only_12 = ["lapis_lazuli"]
    const enrich_only_6 = ["quartz"]
    const enrich_only_2 = ["diamond","emerald","coal"]


    let appendix_extreme = (input_item, ore_type, multiplier) => {
        if (ore_type=="redstone"){
            event.recipes.mekanism.enriching(`${Math.floor(multiplier*12)}x minecraft:redstone`,input_item) //2
            event.recipes.mekanism.purifying(`${Math.floor(multiplier*3)}x mek1000:softore_redstone`,input_item,'1x mekanism:oxygen') //3
            event.recipes.mekanism.injecting(`${Math.floor(multiplier*6)}x mek1000:extructed_redstone`,input_item,'1x mekanism:hydrogen_chloride') //4
            event.custom({ //5-0
                type:"mekanism:dissolution",itemInput:{"ingredient":{"item":input_item}},gasInput:{"amount":Math.max(1,Math.floor(multiplier*0.5)),"gas":"mekanism:sulfuric_acid"},output:{"slurry": "mek1000:dirty_redstone","amount":Math.floor(multiplier*125)*20,"chemicalType":"slurry"}
            })
        } else if (ore_type=="certus_quartz"){
            event.recipes.mekanism.enriching(`${Math.floor(multiplier*6)}x minecraft:redstone`,input_item) //2
            event.recipes.mekanism.purifying(`${Math.floor(multiplier*4)}x mek1000:softore_redstone`,input_item,'1x mekanism:oxygen') //3
            event.recipes.mekanism.injecting(`${Math.floor(multiplier*8)}x mek1000:extructed_redstone`,input_item,'1x mekanism:hydrogen_chloride') //4
            event.custom({ //5-0
                type:"mekanism:dissolution",itemInput:{"ingredient":{"item":input_item}},gasInput:{"amount":Math.max(1,Math.floor(multiplier*0.5)),"gas":"mekanism:sulfuric_acid"},output:{"slurry": "mek1000:dirty_redstone","amount":Math.floor(multiplier*125)*20,"chemicalType":"slurry"}
            })
        } else if (ore_type=="diamond"||ore_type=="emerald"||ore_type=="coal"){
            event.recipes.mekanism.enriching(`${Math.floor(multiplier*2)}x minecraft:${ore_type}`,input_item,'1x mekanism:oxygen')
            event.custom({"type":"mekanism:reaction",
                "itemInput":{"item":input_item},
                "fluidInput":{"amount":multiplier*8,"tag":"minecraft:water"},
                "gasInput":{"amount":multiplier*8,"gas":"mekanism:antimatter"},
                "energyRequired":multiplier*160,"duration":20,
                "gasOutput":{"gas":"mek1000:active_"+ore_type,"amount":multiplier*40}
            })
            event.custom({"type":"mekanism:reaction",
                "itemInput":{"item":input_item},
                "fluidInput":{"amount":multiplier*75,"tag":"minecraft:water"},
                "gasInput":{"amount":multiplier*600,"gas":"mek1000:active_aqua_regia"},
                "energyRequired":1,"duration":multiplier*6,
                "itemOutput":{"item":`mek1000:purified_${ore_type}_rawore`,"amount":multiplier*6}
            })
        } else if (ore_type=="quartz"){
            event.recipes.mekanism.enriching(`${Math.floor(multiplier*6)}x minecraft:quartz`,input_item) //2.5
            event.recipes.mekanism.purifying(`${Math.floor(multiplier*4)}x mek1000:softore_quartz`,input_item,'1x mekanism:oxygen') //3
            event.recipes.mekanism.injecting(`${Math.floor(multiplier*8)}x mek1000:extructed_quartz`,input_item,'1x mekanism:hydrogen_chloride') //4
            event.custom({ //5-0
                type:"mekanism:dissolution",itemInput:{"ingredient":{"item":input_item}},gasInput:{"amount":1,"gas":"mekanism:sulfuric_acid"},output:{"slurry": "mek1000:dirty_quartz","amount":2500,"chemicalType":"slurry"}
            })
        } else if (ore_type=="lapis_lazuli"){
            event.recipes.mekanism.enriching(`${Math.floor(multiplier*12)}x minecraft:${ore_type}`,input_item,'1x mekanism:oxygen')
            event.custom({"type":"mekanism:reaction",
                "itemInput":{"item":input_item},
                "fluidInput":{"amount":multiplier*8,"tag":"minecraft:water"},
                "gasInput":{"amount":multiplier*8,"gas":"mekanism:antimatter"},
                "energyRequired":multiplier*160,"duration":20,
                "gasOutput":{"gas":"mek1000:active_lapis","amount":multiplier*40}
            })
            event.custom({"type":"mekanism:reaction",
                "itemInput":{"item":input_item},
                "fluidInput":{"amount":multiplier*75,"tag":"minecraft:water"},
                "gasInput":{"amount":multiplier*600,"gas":"mek1000:active_aqua_regia"},
                "energyRequired":1,"duration":multiplier*6,
                "itemOutput":{"item":`mek1000:purified_lapis_rawore`,"amount":multiplier*6}
            })
        } else if (ore_type=="fluorite"){
            event.recipes.mekanism.enriching(`${Math.floor(multiplier*6)}x mekanism:fluorite_gem`,input_item) //2.5
            event.recipes.mekanism.purifying(`${Math.floor(multiplier*4)}x mek1000:softore_fluorite`,input_item,'1x mekanism:oxygen') //3
            event.recipes.mekanism.injecting(`${Math.floor(multiplier*8)}x mek1000:extructed_fluorite`,input_item,'1x mekanism:hydrogen_chloride') //4
            event.custom({ //5-0
                type:"mekanism:dissolution",itemInput:{"ingredient":{"item":input_item}},gasInput:{"amount":1,"gas":"mekanism:sulfuric_acid"},output:{"slurry": "mek1000:dirty_fluorite","amount":2500,"chemicalType":"slurry"}
            })
        } else if (ore_type=="iridium") {
            event.recipes.mekanism.enriching(`${Math.floor(multiplier*9)}x kubejs:dust_iridium`,input_item)
            event.recipes.mekanism.purifying(`${Math.floor(multiplier*4)}x mek1000:compressed_${ore_type}_clump`,input_item,'1x mekanism:oxygen')
            event.recipes.mekanism.injecting(`${Math.floor(multiplier*8)}x mek1000:compressed_${ore_type}_shard`,input_item,'1x mekanism:hydrogen_chloride')
            event.custom({
                type:"mekanism:dissolution",itemInput:{"ingredient":{"item":input_item}},gasInput:{"amount":Math.max(1,Math.floor(multiplier*0.5)),"gas":"mekanism:sulfuric_acid"},output:{"slurry":"mek1000:dirty_compressed_"+ ore_type,"amount":Math.floor(multiplier*67.5)*20,"chemicalType":"slurry"}
            })
            event.custom({"type":"mekanism:reaction",
                "itemInput":{"item":input_item},
                "fluidInput":{"amount":multiplier*8,"tag":"minecraft:water"},
                "gasInput":{"amount":multiplier*8,"gas":"mekanism:antimatter"},
                "energyRequired":multiplier*160,"duration":20,
                "gasOutput":{"gas":"mek1000:active_"+ore_type,"amount":multiplier*40}
            })
            event.custom({"type":"mekanism:reaction",
                "itemInput":{"item":input_item},
                "fluidInput":{"amount":multiplier*75,"tag":"minecraft:water"},
                "gasInput":{"amount":multiplier*600,"gas":"mek1000:active_aqua_regia"},
                "energyRequired":1,"duration":multiplier*6,
                "itemOutput":{"item":`mek1000:purified_${ore_type}_rawore`,"amount":multiplier*6}
            })
        } else {
            event.recipes.mekanism.enriching(`${Math.floor(multiplier*9)}x mekanism:dust_${ore_type}`,input_item)
            event.recipes.mekanism.purifying(`${Math.floor(multiplier*4)}x mek1000:compressed_${ore_type}_clump`,input_item,'1x mekanism:oxygen')
            event.recipes.mekanism.injecting(`${Math.floor(multiplier*8)}x mek1000:compressed_${ore_type}_shard`,input_item,'1x mekanism:hydrogen_chloride')
            event.custom({
                type:"mekanism:dissolution",itemInput:{"ingredient":{"item":input_item}},gasInput:{"amount":Math.max(1,Math.floor(multiplier*0.5)),"gas":"mekanism:sulfuric_acid"},output:{"slurry":"mek1000:dirty_compressed_"+ ore_type,"amount":Math.floor(multiplier*67.5)*20,"chemicalType":"slurry"}
            })
            event.custom({"type":"mekanism:reaction",
                "itemInput":{"item":input_item},
                "fluidInput":{"amount":multiplier*8,"tag":"minecraft:water"},
                "gasInput":{"amount":multiplier*8,"gas":"mekanism:antimatter"},
                "energyRequired":multiplier*160,"duration":20,
                "gasOutput":{"gas":"mek1000:active_"+ore_type,"amount":multiplier*40}
            })
            event.custom({"type":"mekanism:reaction",
                "itemInput":{"item":input_item},
                "fluidInput":{"amount":multiplier*75,"tag":"minecraft:water"},
                "gasInput":{"amount":multiplier*600,"gas":"mek1000:active_aqua_regia"},
                "energyRequired":1,"duration":multiplier*6,
                "itemOutput":{"item":`mek1000:purified_${ore_type}_rawore`,"amount":multiplier*6}
            })
        }
    }
    // 最低倍率は1まで、1刻みで設定 (1で 製錬鉱石は通常の[9/8]倍、濃縮やレッドストーンは通常の1倍）
    // Super Oresの倍率に依存させる
    appendix_extreme("superores:super_coal_ore","coal",3)
    appendix_extreme("superores:super_deepslate_coal_ore","coal",3)
    appendix_extreme("superores:super_copper_ore","copper",3)
    appendix_extreme("superores:super_deepslate_copper_ore","copper",3)
    appendix_extreme("superores:super_diamond_ore","diamond",3)
    appendix_extreme("superores:super_deepslate_diamond_ore","diamond",3)
    appendix_extreme("superores:super_emerald_ore","emerald",3)
    appendix_extreme("superores:super_deepslate_emerald_ore","emerald",3)
    appendix_extreme("superores:super_gold_ore","gold",3)
    appendix_extreme("superores:super_deepslate_gold_ore","gold",3)
    appendix_extreme("superores:super_nether_gold_ore","gold",3)
    appendix_extreme("superores:super_iron_ore","iron",3)
    appendix_extreme("superores:super_deepslate_iron_ore","iron",3)
    appendix_extreme("superores:super_lapis_lazuli_ore","lapis_lazuli",3)
    appendix_extreme("superores:super_deepslate_lapis_lazuli_ore","lapis_lazuli",3)
    appendix_extreme("superores:super_redstone_ore","redstone",4)
    appendix_extreme("superores:super_deepslate_redstone_ore","redstone",4)
    appendix_extreme("superores:super_nether_quartz_ore","quartz",4)
    appendix_extreme("superores:super_osmium_ore","osmium",3)
    appendix_extreme("superores:super_deepslate_osmium_ore","osmium",3)

    appendix_extreme("superores:super_tin_ore","tin",3)
    appendix_extreme("superores:super_deepslate_tin_ore","tin",3)
    appendix_extreme("superores:super_uranium_ore","uranium",3)
    appendix_extreme("superores:super_deepslate_uranium_ore","uranium",3)
    appendix_extreme("superores:super_fluorite_ore","fluorite",3)
    appendix_extreme("superores:super_deepslate_fluorite_ore","fluorite",3)
    appendix_extreme("superores:super_iridium_ore","iridium",3)

})