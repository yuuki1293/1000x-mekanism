onEvent('recipes', event => {
    let circuit = [
        'mekanism:basic_control_circuit',
        'mekanism:advanced_control_circuit',
        'mekanism:elite_control_circuit',
        'mekanism:ultimate_control_circuit',
        'mekaevolution:absolute_control_circuit',
        'mekaevolution:supreme_control_circuit',
        'mekaevolution:cosmic_control_circuit',
        'mekaevolution:infinite_control_circuit'
        ]
        circuit.forEach((name) => {
        event.remove({output: name})
        })
        let craftCircuit = (output,E,T,N) => {
            event.shaped(output,[
              'et ',
              'tnt',
              ' te'
          ],{
            e:E,
            t:T,
            n:N
        })}

        craftCircuit('mekanism:basic_control_circuit','ae2:logic_processor','minecraft:redstone_block','#forge:storage_blocks/osmium')
        craftCircuit('mekanism:advanced_control_circuit','ae2:engineering_processor','mekanism:alloy_infused','mekanism:basic_control_circuit')
        craftCircuit('mekanism:elite_control_circuit','ae2:calculation_processor','mekanism:alloy_reinforced','mekanism:advanced_control_circuit')
        craftCircuit('mekanism:ultimate_control_circuit','lazierae2:parallel_processor','mekanism:alloy_atomic','mekanism:elite_control_circuit')
        craftCircuit('mekaevolution:absolute_control_circuit','fluxnetworks:flux_core','mekanism:qio_drive_base','mekanism:ultimate_control_circuit')
        craftCircuit('mekaevolution:supreme_control_circuit','lazierae2:logic_unit','mekanism:qio_drive_hyper_dense','mekaevolution:absolute_control_circuit')
        craftCircuit('mekaevolution:cosmic_control_circuit','megacells:bulk_cell_component','mekanism:qio_drive_time_dilating','mekaevolution:supreme_control_circuit')
        craftCircuit('mekaevolution:infinite_control_circuit','megacells:cell_component_256m','mekanism:qio_drive_supermassive','mekaevolution:cosmic_control_circuit')
    
        craftCircuit('8x mekaevolution:absolute_control_circuit','mek1000:illuminate_alloy','mekanism:qio_drive_base','mekanism:ultimate_control_circuit')
        craftCircuit('8x mekaevolution:supreme_control_circuit','mek1000:superheated_alloy','mekanism:qio_drive_hyper_dense','mekaevolution:absolute_control_circuit')
        craftCircuit('8x mekaevolution:cosmic_control_circuit','mek1000:antinomic_alloy','mekanism:qio_drive_time_dilating','mekaevolution:supreme_control_circuit')
        craftCircuit('8x mekaevolution:infinite_control_circuit','mek1000:cosmic_alloy','mekanism:qio_drive_supermassive','mekaevolution:cosmic_control_circuit')

        event.recipes.mekanismMetallurgicInfusing('32x mekanism:basic_control_circuit', 'mekanism:pellet_polonium', '100x mekanism:gold')
        event.recipes.mekanismMetallurgicInfusing('16x mekanism:advanced_control_circuit', 'mekanism:pellet_polonium', '100x mekanism:redstone')
        event.recipes.mekanismMetallurgicInfusing('16x mekanism:elite_control_circuit', 'mekanism:pellet_polonium', '100x mekanism:diamond')
        event.recipes.mekanismMetallurgicInfusing('8x mekanism:ultimate_control_circuit', 'mekanism:pellet_polonium', '100x mekanism:refined_obsidian')
    })
