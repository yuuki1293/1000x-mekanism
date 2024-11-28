onEvent('recipes', event => {
    let lategame = [
        'mekaevolution:absolute_energy_cube',
        'mekaevolution:supreme_energy_cube',
        'mekaevolution:cosmic_energy_cube',
        'mekaevolution:infinite_energy_cube'
    ]
    lategame.forEach((name) => {
        event.remove({output: name})
        })
    let cube = (output,E,T,N) => {
            event.shaped(output,[
              'tet',
              'ene',
              'tet'
          ],{
            e:E,
            t:T,
            n:N
        })}
    cube('mekaevolution:absolute_energy_cube','mekaddelement:dust_calcium_oxide','mekaevolution:absolute_control_circuit','mekanism:ultimate_energy_cube')
    cube('mekaevolution:supreme_energy_cube','mekaevolution:absolute_energy_cube','mekaevolution:supreme_control_circuit','mekanism:teleportation_core')
    cube('mekaevolution:cosmic_energy_cube','mekaevolution:supreme_energy_cube','mekaevolution:cosmic_control_circuit','mekanism:pellet_antimatter')
    cube('mekaevolution:infinite_energy_cube','mekaevolution:cosmic_energy_cube','mekaevolution:infinite_control_circuit','megacells:cell_component_256m')
    let creative = (output,E,A,B,N) => {
        event.shaped(output,[
          'aeb',
          'ene',
          'bea'
      ],{
        e:E,
        a:A,
        b:B,
        n:N
    })}
    creative('mekanism:creative_fluid_tank','mekaevolution:qio_drive_infinite','megacells:fluid_storage_cell_256m','mekanism:ultimate_fluid_tank','fluxnetworks:gargantuan_flux_storage')
    creative('mekanism:creative_chemical_tank','mekaevolution:qio_drive_infinite','megacells:bulk_item_cell','mekanism:ultimate_chemical_tank','fluxnetworks:gargantuan_flux_storage')
    creative('mekanism:creative_energy_cube','ultimatesolarpanels:photonic_solar_panel','mekaevolution:qio_drive_infinite','mekaevolution:qio_drive_infinite','mekaevolution:infinite_energy_cube')
    creative('ae2:creative_energy_cell','compactmekanismmachines:compressed_wind_generator_x532480','mekaevolution:qio_drive_infinite','mekaevolution:qio_drive_infinite','megacells:mega_energy_cell')
    event.shaped('mekanism:creative_bin',[
        'aeb',
        'ene',
        'ced'
    ],{
      e:'mekaevolution:qio_drive_infinite',
      a:'mekanism:creative_fluid_tank',
      b:'mekanism:creative_chemical_tank',
      c:'mekanism:creative_energy_cube',
      d:'ae2:creative_energy_cell',
      n:'mekanism:ultimate_bin'
    })
    event.custom({
        "type": "mekanism:nucleosynthesizing",
        "itemInput": {
          "ingredient": {
            "item": "mekanism:creative_bin"
          }
        },
        "gasInput": {
          "amount": 10000,
          "gas": "mekanism:antimatter"
        },
        "output": {
          "item": "ae2:creative_item_cell"
        },
        "duration": 5000000
      })
    })