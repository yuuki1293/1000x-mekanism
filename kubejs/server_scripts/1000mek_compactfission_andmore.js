onEvent('recipes', event => {
    event.remove({ id: `quarryplus:adv_quarry`})

    event.shaped('quarryplus:adv_quarry', [
        'EAE',
        'CDC',
        'PCP'
    ],{
        D: 'mekanism:digital_miner',
        C: 'quarryplus:quarry',
        P: `quarryplus:pump_plus`,
        A: `mekaevolution:infinite_control_circuit`,
        E: `minecraft:ender_eye`
    })

    event.shaped('compactmekanismmachines:compact_fission_reactor', [
        'CSC',
        'WFW',
        'CPC'
    ],{
        C: 'mekanismgenerators:fission_reactor_casing',
        F: 'mekanismgenerators:fission_fuel_assembly',
        S: `ae2:spatial_cell_component_128`,
        P: `mekaevolution:supreme_control_circuit`,
        W: `compactmekanismmachines:compressed_wind_generator_x8192`
    })
})