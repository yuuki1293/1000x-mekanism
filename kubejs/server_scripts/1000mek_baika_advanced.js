//追加パック4: 6倍(嘘)
/* 
    レシピ：
    　精製原石は5倍化の原石に相当する
    　精製原石は王水に各鉱石を反応させることで一定数生成可能
    　　原石は精製原石2つ、鉱石は精製原石6つ。レッドストーンなどは実装予定なし
    　ただし、王水は精製原石1つあたり100mB必要。
    　王水は液化塩化水素＋硫酸の加圧反応で生成する
    　王水は保管できない。この性質をもとに、気化レッドストーンと混ぜることで反応させるという方式に加え、
    　核物質としての取り扱いを強いる。
*/
onEvent('recipes', event => {
    event.custom({
        type:"mekanism:chemical_infusing","chemicalType":"gas",leftInput:{"gas":"mek1000:aqua_regia","amount":100},rightInput:{"gas":"mek1000:activated_redstone","amount":1},output:{"gas":"mek1000:active_aqua_regia","amount":100}
    })
    event.custom({"type":"mekanism:reaction",
        "itemInput":{"item":"minecraft:redstone","amount":1},
        "gasInput":{"amount":1,"gas":"mekanism:steam"},
        "fluidInput":{"amount":1,"tag": "minecraft:water"},
        "energyRequired":1,"duration":1,
        "gasOutput":{"gas":"mek1000:activated_redstone","amount":1}
    })
    event.custom({"type":"mekanism:reaction",
        "itemInput":{"item":"minecraft:redstone_block","amount":1},
        "gasInput":{"amount":9,"gas":"mekanism:steam"},
        "fluidInput":{"amount":9,"tag": "minecraft:water"},
        "energyRequired":1,"duration":8,
        "gasOutput":{"gas":"mek1000:activated_redstone","amount":1}
    })
    event.custom({"type":"mekanism:reaction",
        "itemInput":{"item":"mekanism:shard_iron"},
        "fluidInput":{"amount":75,"fluid":"mekanism:hydrogen_chloride"},
        "gasInput":{"amount":25,"gas":"mekanism:sulfuric_acid"},
        "energyRequired":1,"duration":1,
        "itemOutput":{"item":"mekanism:shard_iron"},
        "gasOutput":{"gas":"mek1000:aqua_regia","amount":100}
    })
    let advanced_processing = (type) => {

        event.custom({"type":"mekanism:reaction",
            "itemInput":{"tag":`forge:raw_materials/${type}`},
            "fluidInput":{"amount":6,"tag":"minecraft:water"},
            "gasInput":{"amount":6,"gas":"mekanism:antimatter"},
            "energyRequired":120,"duration":20,
            "gasOutput":{"gas":"mek1000:active_"+type,"amount":30}
        })
        event.custom({"type":"mekanism:reaction",
            "itemInput":{"tag":`forge:ores/${type}`},
            "fluidInput":{"amount":8,"tag":"minecraft:water"},
            "gasInput":{"amount":8,"gas":"mekanism:antimatter"},
            "energyRequired":160,"duration":20,
            "gasOutput":{"gas":"mek1000:active_"+type,"amount":40}
        })
        event.custom({"type":"mekanism:reaction",
            "itemInput":{"tag":`forge:storage_blocks/raw_${type}`},
            "fluidInput":{"amount":54,"tag":"minecraft:water"},
            "gasInput":{"amount":54,"gas":"mekanism:antimatter"},
            "energyRequired":1080,"duration":20,
            "gasOutput":{"gas":"mek1000:active_"+type,"amount":270}
        })
        event.custom({
            type:"mekanism:chemical_infusing","chemicalType":"gas",leftInput:{"gas":"mek1000:aqua_regia","amount":100},rightInput:{"gas":"mek1000:active_"+type,"amount":10},output:{"gas":"mek1000:purified_"+type,"amount":10}
        })
        event.custom({
            "type": "mekanism:crystallizing",
            "chemicalType": "gas",
            "input": {
              "amount": 10,
              "gas":"mek1000:purified_"+type
            },
            "output": {
              "item":`mek1000:crystalized_${type}_rawore`
            }
        })
        event.custom({"type":"mekanism:reaction",
            "itemInput":{"tag":`forge:raw_materials/${type}`},
            "fluidInput":{"amount":25,"tag":"minecraft:water"},
            "gasInput":{"amount":200,"gas":"mek1000:active_aqua_regia"},
            "energyRequired":1,"duration":2,
            "itemOutput":{"item":`mek1000:purified_${type}_rawore`,"amount":2}
        })
        event.custom({"type":"mekanism:reaction",
            "itemInput":{"tag":`forge:ores/${type}`},
            "fluidInput":{"amount":75,"tag":"minecraft:water"},
            "gasInput":{"amount":600,"gas":"mek1000:active_aqua_regia"},
            "energyRequired":1,"duration":6,
            "itemOutput":{"item":`mek1000:purified_${type}_rawore`,"amount":6}
        })
        event.custom({"type":"mekanism:reaction",
            "itemInput":{"tag":`forge:storage_blocks/raw_${type}`},
            "fluidInput":{"amount":225,"tag":"minecraft:water"},
            "gasInput":{"amount":1800,"gas":"mek1000:active_aqua_regia"},
            "energyRequired":1,"duration":18,
            "itemOutput":{"item":`mek1000:compressed_purified_${type}_rawore`,"amount":2}
        })
        event.custom({"type":"mekanism:reaction",
            "itemInput":{"item":`mek1000:crystalized_${type}_rawore`},
            "fluidInput":{"amount":75,"tag":"minecraft:water"},
            "gasInput":{"amount":600,"gas":"mek1000:active_aqua_regia"},
            "energyRequired":1,"duration":3,
            "itemOutput":{"item":`mek1000:compressed_purified_${type}_rawore`,"amount":2}
        })
        
        if (type=="iridium") {
            event.custom({
                type:"mekanism:dissolution",itemInput:{"ingredient":{"item":`mek1000:compressed_purified_${type}_rawore`}},gasInput:{"amount":9,"gas":"mekanism:sulfuric_acid"},output:{"slurry":"mek1000:dirty_compressed_"+ type,"amount":7500,"chemicalType":"slurry"}
            })
        } else if (type=="redstone"||type=="quartz"||type=="certus_quartz"||type=="fluorite") {
            event.custom({
                type:"mekanism:dissolution",itemInput:{"ingredient":{"item":`mek1000:compressed_purified_${type}_rawore`}},gasInput:{"amount":4,"gas":"mekanism:sulfuric_acid"},output:{"slurry":"mek1000:dirty_"+ type,"amount":10000,"chemicalType":"slurry"}
            })
            event.custom({
                type:"mekanism:dissolution",itemInput:{"ingredient":{"item":`mek1000:purified_${type}_rawore`}},gasInput:{"amount":1,"gas":"mekanism:sulfuric_acid"},output:{"slurry":"mek1000:dirty_"+ type,"amount":2500,"chemicalType":"slurry"}
            })
        } else if (type=="coal"||type=="diamond"||type=="emerald"||type=="lapis") {
            event.custom({
                type:"mekanism:dissolution",itemInput:{"ingredient":{"item":`mek1000:compressed_purified_${type}_rawore`}},gasInput:{"amount":20,"gas":"mekanism:sulfuric_acid"},output:{"slurry":"mek1000:dirty_"+ type,"amount":200,"chemicalType":"slurry"}
            })
            event.custom({
                type:"mekanism:dissolution",itemInput:{"ingredient":{"item":`mek1000:purified_${type}_rawore`}},gasInput:{"amount":1,"gas":"mekanism:sulfuric_acid"},output:{"slurry":"mek1000:dirty_"+ type,"amount":10,"chemicalType":"slurry"}
            })

            event.custom( //5-1
                {type:'mekanism:washing',fluidInput:{'amount':5,'tag':'minecraft:water'},slurryInput:{'amount':1,'slurry':`mek1000:dirty_${type}`},output:{"slurry":`mek1000:clean_${type}`,'amount':10}},
            )
            


        } else {
            event.custom({
                type:"mekanism:dissolution",itemInput:{"ingredient":{"item":`mek1000:compressed_purified_${type}_rawore`}},gasInput:{"amount":9,"gas":"mekanism:sulfuric_acid"},output:{"slurry":"mek1000:dirty_compressed_"+ type,"amount":7500,"chemicalType":"slurry"}
            })
            event.custom({
                type:"mekanism:dissolution",itemInput:{"ingredient":{"item":`mek1000:purified_${type}_rawore`}},gasInput:{"amount":1,"gas":"mekanism:sulfuric_acid"},output:{"slurry":"mekanism:dirty_"+ type,"amount":7500,"chemicalType":"slurry"}
            })
        }
    }
    advanced_processing("iron")
    advanced_processing("copper")
    advanced_processing("gold")
    advanced_processing("tin")
    advanced_processing("osmium")
    advanced_processing("uranium")
    advanced_processing("lead")
    advanced_processing("iridium")
    
    advanced_processing("redstone")
    advanced_processing("quartz")
    advanced_processing("certus_quartz")
    advanced_processing("fluorite")

    advanced_processing("coal")
    advanced_processing("diamond")
    advanced_processing("emerald")
    advanced_processing("lapis")

    let iridium_multiplifer = 3
    let type = "iridium"
    event.custom({"type":"mekanism:reaction",
        "itemInput":{"item":'ultimatesolarpanels:iridium_ore'},
        "fluidInput":{"amount":8,"tag":"minecraft:water"},
        "gasInput":{"amount":8,"gas":"mekanism:antimatter"},
        "energyRequired":160,"duration":20,
        "gasOutput":{"gas":"mek1000:active_"+type,"amount":40}
    })
    event.custom({"type":"mekanism:reaction",
        "itemInput":{"item":"superores:super_iridium_ore"},
        "fluidInput":{"amount":8*iridium_multiplifer,"tag":"minecraft:water"},
        "gasInput":{"amount":8*iridium_multiplifer,"gas":"mekanism:antimatter"},
        "energyRequired":160*iridium_multiplifer,"duration":20,
        "gasOutput":{"gas":"mek1000:active_"+type,"amount":40*iridium_multiplifer}
    })

    event.custom({"type":"mekanism:reaction",
        "itemInput":{"item":'ultimatesolarpanels:iridium_ore'},
        "fluidInput":{"amount":75,"tag":"minecraft:water"},
        "gasInput":{"amount":600,"gas":"mek1000:active_aqua_regia"},
        "energyRequired":1,"duration":6,
        "itemOutput":{"item":`mek1000:purified_${type}_rawore`,"amount":6}
    })
    event.custom({"type":"mekanism:reaction",
        "itemInput":{"item":"superores:super_iridium_ore"},
        "fluidInput":{"amount":75*iridium_multiplifer,"tag":"minecraft:water"},
        "gasInput":{"amount":600*iridium_multiplifer,"gas":"mek1000:active_aqua_regia"},
        "energyRequired":1,"duration":6*iridium_multiplifer,
        "itemOutput":{"item":`mek1000:purified_${type}_rawore`,"amount":6*iridium_multiplifer}
    })

    type="lapis"
    event.custom({
        "type": "mekanism:crystallizing",
        "chemicalType": "slurry",
        "input": {
        "amount": 10,
        "slurry": "mek1000:clean_"+type
        },
        "output": {
        "item": "mek1000:crystal_"+type
        }
    })
    event.custom({
        "type": "mekanism:injecting",
        "itemInput": {
            "ingredient": {
            "tag": "forge:ores/"+type
            }
        },
        "chemicalInput": {
            "amount": 48,
            "gas": "mekanism:hydrogen_chloride"
        },
        "output": {
            "item": "mek1000:shard_"+type
        }
        })
    event.custom({
        "type": "mekanism:injecting",
        "itemInput": {
            "ingredient": {
            "tag": "mekanism:crystals/"+type
            }
        },
        "chemicalInput": {
            "amount": 1,
            "gas": "mekanism:hydrogen_chloride"
        },
        "output": {
            "item": "mek1000:shard_"+type
        }
        })
    event.recipes.mekanism.purifying(`2x mek1000:clump_`+type,`mek1000:shard_`+type,'1x mekanism:oxygen')
    event.custom({
        "type": "mekanism:crushing",
        "input": {
            "count": 1,
            "tag": "mekanism:clumps/"+type
        },
        "output": {
            "count": 1,
            "item": "mek1000:dirty_dust_"+type
        }
        })
    event.custom({
        "type": "mekanism:crushing",
        "input": {
        "count": 6,
        "tag": "forge:ores/"+type
        },
        "output": {
        "count": 1,
        "item": "mek1000:dirty_dust_"+type
        }
    })
    event.recipes.mekanism.enriching("12x minecraft:lapis_lazuli","mek1000:dirty_dust_lapis",'1x mekanism:oxygen')

    type="coal"
    event.custom({
        "type": "mekanism:crystallizing",
        "chemicalType": "slurry",
        "input": {
        "amount": 10,
        "slurry": "mek1000:clean_"+type
        },
        "output": {
        "item": "mek1000:crystal_"+type
        }
    })
    event.custom({
        "type": "mekanism:injecting",
        "itemInput": {
            "ingredient": {
            "tag": "mekanism:crystals/"+type
            }
        },
        "chemicalInput": {
            "amount": 1,
            "gas": "mekanism:hydrogen_chloride"
        },
        "output": {
            "item": "mek1000:shard_"+type
        }
        })
    event.custom({
        "type": "mekanism:injecting",
        "itemInput": {
            "ingredient": {
            "tag": "forge:ores/"+type
            }
        },
        "chemicalInput": {
              "amount": 48,
              "gas": "mekanism:hydrogen_chloride"
            },
            "output": {
              "item": "mek1000:shard_"+type
            }
          })
    event.recipes.mekanism.purifying(`2x mek1000:clump_`+type,`mek1000:shard_`+type,'1x mekanism:oxygen')
    event.custom({
        "type": "mekanism:crushing",
        "input": {
            "count": 1,
            "tag": "mekanism:clumps/"+type
        },
        "output": {
            "count": 1,
            "item": "mek1000:dirty_dust_"+type
        }
        })
    event.custom({
        "type": "mekanism:crushing",
        "input": {
            "count": 6,
            "tag": "forge:ores/"+type
        },
        "output": {
            "count": 1,
            "item": "mek1000:dirty_dust_"+type
        }
        })
    event.custom({
        "type": "mekanism:enriching",
        "input": {
            "count": 1,
            "tag": "mekanism:dirty_dusts/"+type
        },
        "output": {
            "count": 4,
            "item": 'minecraft:coal'
        }
        })
    
    
    event.custom({
        "type": "mekanism:crystallizing",
        "chemicalType": "slurry",
        "input": {
            "amount": 10,
            "slurry": "mek1000:clean_diamond"
        },
        "output": {
            "amount": 1,
            "item": 'minecraft:diamond'
        }
    })
    
    event.custom({
        "type": "mekanism:crystallizing",
        "chemicalType": "slurry",
        "input": {
            "amount": 10,
            "slurry": "mek1000:clean_emerald"
        },
        "output": {
            "amount": 1,
            "item": 'minecraft:emerald'
        }
    })

})