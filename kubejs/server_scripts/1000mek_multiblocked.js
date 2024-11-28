onEvent('recipes', event => {
    event.shaped('mek1000:electricity_resistant_reinforced_casing',[
        'ete',
        'tnt',
        'ete'
    ],{
      e:'mekanism:sps_casing',
      t:'mekaevolution:supreme_control_circuit',
      n:'mekanism:teleportation_core'
  })
  event.custom({
    "type": "mekanism:chemical_infusing",
    "leftInput": {
      "amount": 10,
      "gas": "mekanismgenerators:fusion_fuel"
    },
    "rightInput": {
      "amount": 50,
      "gas": "mek1000:valine3g"
    },
    "output": {
      "gas": "mek1000:dvt",
      "amount": 1
    }
  }).id('mek1000:dvt_fuel')
  event.shapeless('mek1000:energy_out',['mek1000:electricity_resistant_reinforced_casing','mekanism:induction_port']).id('mek1000:energy_out')
  event.shaped('mek1000:combustion_gas_generator',[
    'ete',
    'tnt',
    'ese'
],{
  e:'ultimatesolarpanels:quantum_solar_array',
  t:'mekaevolution:cosmic_control_circuit',
  n:'mek1000:electricity_resistant_reinforced_casing',
  s:'mekanismgenerators:gas_burning_generator'
}).id('mek1000:combustion_gas_generator')
})
